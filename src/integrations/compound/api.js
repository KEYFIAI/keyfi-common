import BigNumber from "bignumber.js";
import cErc20Abi from"./abi/cErc20.abi.json";
import cEther from"./abi/cEther.abi.json";
import {
  contractAddresses,
  cTokens,
  supportedAssets,
} from "./constants";
import {
  approveErc20IfNeeded,
  getBalanceEth,
  getBalanceErc20,
  getCurrentAccountAddress,
  getNetwork,
  getPendingTrxCallback,
  getTrxOverrides,
  getWeb3,
  normalizeAmount,
  denormalizeAmount,
  processWeb3OrNetworkArgument,
} from "../common";

const GAS_LIMIT = 250000;
// Deposit of DAI can took 320000+ of gas
const GAS_LIMIT_DEPOSIT = 400000;
const PENDING_CALLBACK_PLATFORM = "compound";

export const EXCHANGE_RATE_DECIMALS = 18;

export { cErc20Abi };

export const isSupportedNetwork = async (web3OrNetwork) => {
  const network = await processWeb3OrNetworkArgument(web3OrNetwork);
  return Boolean(contractAddresses[network.name]);
};

export const getContractAddress = async (web3, contractName) => {
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

export const getSupportedAssets = () => supportedAssets;

export const getBalance = async (accountAddress = null, options = {}) => {
  const web3 = await getWeb3();

  if (!await isSupportedNetwork(web3)) {
    return {};
  }

  if (!accountAddress) {
    accountAddress = getCurrentAccountAddress(web3);
  }

  // Fetch cToken balances
  const balance = {};
  const cTokensSymbols = options.cTokens || cTokens;

  for (const cTokenSymbol of cTokensSymbols) {
    const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

    const cTokenContract = new web3.eth.Contract(
      cTokenSymbol === "cETH" ? cEther : cErc20Abi,
      cTokenAddress,
    );

    const result = await cTokenContract.methods.balanceOf(accountAddress).call();

    const originalToken = cTokenSymbol.slice(1);
    const cTokenBalance = denormalizeAmount(originalToken, result);

    if (cTokenBalance > 0) {
      const rate = await cTokenContract.methods.exchangeRateCurrent().call();
      const rateBN = new BigNumber(rate);
      balance[originalToken] = rateBN
        .shiftedBy(-EXCHANGE_RATE_DECIMALS)
        .multipliedBy(cTokenBalance)
        .toFixed();
    } else {
      balance[originalToken] = 0;
    }
  }

  return balance;
};

export const deposit = async (asset, amount, options = {}) => {
  const nAmount = normalizeAmount(asset, amount);

  const web3 = await getWeb3();

  const balance = asset === "ETH"
    ? await getBalanceEth()
    : await getBalanceErc20(asset);

  if (BigNumber(balance).lt(amount)) {
    throw new Error("Not enough funds!");
  }

  const cTokenSymbol = "c" + asset;
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress,
  );
  const trxOverrides = getTrxOverrides(options);

  if (asset === "ETH") {
    return cTokenContract.methods.mint().send(
      {
        from: getCurrentAccountAddress(web3),
        value: nAmount,
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      getPendingTrxCallback(options.pendingCallback, {
        platform: PENDING_CALLBACK_PLATFORM,
        type: "deposit",
        assets: [{
          symbol: asset,
          amount: amount,
        }],
      }),
    );
  } else {
    const assetAddress = await getContractAddress(web3, asset);

    await approveErc20IfNeeded(
      web3,
      assetAddress,
      cTokenAddress,
      nAmount,
      {
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      {
        pendingCallbackParams: {
          callback: options.pendingCallback,
          platform: PENDING_CALLBACK_PLATFORM,
          assets: [{
            symbol: asset,
            amount: amount,
          }],
        }
      },
    );

    return cTokenContract.methods.mint(nAmount).send(
      {
        from: getCurrentAccountAddress(web3),
        gas: GAS_LIMIT_DEPOSIT,
        ...trxOverrides,
        nonce: trxOverrides.nonce ? trxOverrides.nonce + 1 : undefined,
      },
      getPendingTrxCallback(options.pendingCallback, {
        platform: PENDING_CALLBACK_PLATFORM,
        type: "deposit",
        assets: [{
          symbol: asset,
          amount: amount,
        }],
      }),
    );
  }
};

export const withdraw = async (asset, amount, options = {}) => {
  const nAmount = normalizeAmount(asset, amount);

  const web3 = await getWeb3();

  const assetBalance = await getBalance(null, { cTokens: [`c${asset}`] });
  if (BigNumber(assetBalance[asset]).lt(amount)) {
    throw new Error("Not enough funds!");
  }

  const cTokenSymbol = "c" + asset;
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress,
  );

  return cTokenContract.methods.redeemUnderlying(nAmount).send(
    {
      from: getCurrentAccountAddress(web3),
      gas: GAS_LIMIT,
      ...getTrxOverrides(options),
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: "withdraw",
      assets: [{
        symbol: asset,
        amount: amount,
      }],
    }),
  );
};

export const getExchangeRate = async (cTokenSymbol) => {
  if (!cTokenSymbol.startsWith("c")) {
    throw new Error(`'${cTokenSymbol}' is not cToken`);
  }

  const web3 = await getWeb3();
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress,
  );

  return cTokenContract.methods.exchangeRateCurrent().call();
};
