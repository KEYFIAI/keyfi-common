const approveErc20IfNeeded = require("../common").approveErc20IfNeeded;
const getCurrentAccountAddress = require("../common").getCurrentAccountAddress;
const getTrxOverrides = require("../common").getTrxOverrides;
const getNetwork = require("../common").getNetwork;
const getWeb3 = require("../common").getWeb3;
const normalizeAmount = require("../common").normalizeAmount;
const denormalizeAmount = require("../common").denormalizeAmount;
const processWeb3OrNetworkArgument = require("../common").processWeb3OrNetworkArgument;
const axios = require("axios");
const contractAddresses = require("./constants").contractAddresses;

const DEFAULT_MAX_SLIPPAGE = 0.02;
const GAS_LIMIT = 1000000;
const PENDING_CALLBACK_PLATFORM = "1inch";

const inchRestApi = axios.create({
  baseURL: "https://api.1inch.exchange/v2.0",
});

 const isSupportedNetwork = async (web3OrNetwork) => {
  const network = await processWeb3OrNetworkArgument(web3OrNetwork);
  return Boolean(contractAddresses[network.name]);
};

const getContractAddress = async (web3, contractName) => {
  const network = await getNetwork(web3);

  if (!await isSupportedNetwork(network)) {
    throw new Error(`Network with chainId=${network.chainId} is not supported!`);
  }

  const address = contractAddresses[network.name][contractName];
  if (!address) {
    throw new Error(
      `Unknown contract: '${contractName}' on '${network.name}' network`
    );
  }

  return address;
};

 const estimateSwap = async (fromAssetSymbol, fromAmount, toAssetSymbol) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  fromAmount = normalizeAmount(network, fromAssetSymbol, fromAmount);

  const fromAssetAddress = await getContractAddress(web3, fromAssetSymbol);
  const toAssetAddress = await getContractAddress(web3, toAssetSymbol);

  let res = null;
  try {
    res = await inchRestApi.get("quote", {
      params: {
        fromTokenAddress: fromAssetAddress,
        toTokenAddress: toAssetAddress,
        amount: fromAmount,
      }
    });
  } catch (error) {
    const response = error.response;

    if (response) {
      throw new Error(
        `Bad response HTTP code from 1inch API: ${response.status}. `
        + `Body: ${JSON.stringify(response.data, null, 2)}`
      );
    }

    throw error;
  }

  const { toTokenAmount } = res.data;
  return {
    returnAmount: toTokenAmount,
    returnAmountHuman: denormalizeAmount(network, toAssetSymbol,toTokenAmount),
  };
};

 const swap = async (fromAssetSymbol, fromAmount, toAssetSymbol, options = {}) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const fromAmountDecimalized = normalizeAmount(
    network,
    fromAssetSymbol,
    fromAmount,
  );

  const trxOverrides = getTrxOverrides(options);
  const fromAssetAddress = await getContractAddress(web3, fromAssetSymbol);
  const toAssetAddress = await getContractAddress(web3, toAssetSymbol);
  const exchangeAddress = await getContractAddress(web3, "1inch-exchange");

  if (fromAssetSymbol !== "ETH") {
    await approveErc20IfNeeded(
      web3,
      fromAssetAddress,
      exchangeAddress,
      fromAmountDecimalized,
      {
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      {
        pendingCallbackParams: {
          callback: options.pendingCallback,
          platform: PENDING_CALLBACK_PLATFORM,
          assets: [{
            symbol: fromAssetSymbol,
            amount: fromAmount,
          }],
        }
      },
    );
  }

  let { slippage } = options;
  if (!slippage) {
    slippage = DEFAULT_MAX_SLIPPAGE;
  }

  let res = null;
  try {
    res = await inchRestApi.get("swap", {
      params: {
        fromTokenAddress: fromAssetAddress,
        toTokenAddress: toAssetAddress,
        amount: fromAmountDecimalized,
        fromAddress: getCurrentAccountAddress(web3),
        slippage: slippage * 100,
        disableEstimate: options.disableEstimate || false,
      }
    });
  } catch (error) {
    const response = error.response;

    if (response) {
      throw new Error(
        `Bad response HTTP code from 1inch API: ${response.status}. `
        + `Body: ${JSON.stringify(response.data, null, 2)}`
      );
    }

    throw error;
  }

  const trxParams = res.data.tx;

  return new Promise((resolve, reject) => {
    web3.eth.sendTransaction({
      from: trxParams.from,
      to: exchangeAddress,
      data: trxParams.data,
      value: trxParams.value,
      gas: GAS_LIMIT,
      ...trxOverrides,
    })
    .once("transactionHash", (hash) => {
      if (options.pendingCallback) {
        options.pendingCallback({
          platform: PENDING_CALLBACK_PLATFORM,
          type: "swap",
          assets: [{
            symbol: fromAssetSymbol,
            amount: fromAmount,
          }],
          hash,
        });
      }
    })
    .once("receipt", resolve)
    .once("error", reject);
  });
};

module.exports={
  isSupportedNetwork,
  estimateSwap,
  swap
}