import BigNumber from "bignumber.js";
import cErc20Abi from "./abi/cErc20.abi.json";
import cEther from "./abi/cEther.abi.json";
import comptrollerAbi from "./abi/comptroller.abi.json";
import erc20Abi from "./abi/erc20.abi.json";
import { contractAddresses, cTokens, supportedAssets } from "./constants";
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

  if (!(await isSupportedNetwork(network))) {
    throw new Error(
      `Network with chainId=${network.chainId} is not supported!`
    );
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

  if (!(await isSupportedNetwork(web3))) {
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
      cTokenAddress
    );

    const result = await cTokenContract.methods
      .balanceOf(accountAddress)
      .call();

    const network = await getNetwork(web3);
    const originalToken = cTokenSymbol.slice(1);
    const cTokenBalance = denormalizeAmount(network, originalToken, result);

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
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const balance =
    asset === "ETH" ? await getBalanceEth() : await getBalanceErc20(asset);

  if (BigNumber(balance).lt(amount)) {
    throw new Error("Not enough funds!");
  }

  const cTokenSymbol = "c" + asset;
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress
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
        assets: [
          {
            symbol: asset,
            amount: amount,
          },
        ],
      })
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
          assets: [
            {
              symbol: asset,
              amount: amount,
            },
          ],
        },
      }
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
        assets: [
          {
            symbol: asset,
            amount: amount,
          },
        ],
      })
    );
  }
};

export const withdraw = async (asset, amount, options = {}) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const assetBalance = await getBalance(null, { cTokens: [`c${asset}`] });
  if (BigNumber(assetBalance[asset]).lt(amount)) {
    throw new Error("Not enough funds!");
  }

  const cTokenSymbol = "c" + asset;
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress
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
      assets: [
        {
          symbol: asset,
          amount: amount,
        },
      ],
    })
  );
};

export const getAccountLiquidity = async (address = null) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);

  if (!address) {
    address = await getCurrentAccountAddress(web3);
  }

  const comptrollerAddress = await getContractAddress(web3, "Comptroller");
  const comptroller = new web3.eth.Contract(comptrollerAbi, comptrollerAddress);

  const cEthAddress = await getContractAddress(web3, "cETH");

  const { 1: liquidity } = await comptroller.methods
    .getAccountLiquidity(address)
    .call();

  const { 1: collateralFactor } = await comptroller.methods
    .markets(cEthAddress)
    .call();

  return {
    liquidity: denormalizeAmount(network, "ETH", liquidity),
    collateralFactor: `${
      denormalizeAmount(network, "ETH", collateralFactor) * 100
    } %`,
  };
};

export const borrow = async (asset, amount, options = {}) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const cTokenSymbol = `c${asset}`;
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress
  );

  const comptrollerAddress = await getContractAddress(web3, "Comptroller");
  const comptroller = new web3.eth.Contract(comptrollerAbi, comptrollerAddress);
  const cEthAddress = await getContractAddress(web3, "cETH");

  let markets = [cEthAddress]; // This is the cToken contract(s) for your collateral
  await comptroller.methods.enterMarkets(markets).send({
    from: getCurrentAccountAddress(web3),
    gas: GAS_LIMIT,
  });

  await cTokenContract.methods.borrow(nAmount.toString()).send(
    {
      from: getCurrentAccountAddress(web3),
      gasLimit: web3.utils.toHex(500000),
      gasPrice: web3.utils.toHex(20000000000),
      ...getTrxOverrides(options),
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: "borrow",
      assets: [
        {
          symbol: asset,
          amount: amount,
        },
      ],
    })
  );

  const balance = await cTokenContract.methods
    .borrowBalanceCurrent(getCurrentAccountAddress(web3))
    .call();

  return balance;
};

export const getBorrowBalance = async (address = null, options = {}) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);

  if (!(await isSupportedNetwork(web3))) {
    return {};
  }

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  // Fetch cToken borrow balances
  const borrowBalance = {};
  const cTokensSymbols = options.cTokens || cTokens;

  for (const cToken of cTokensSymbols) {
    const cTokenAddress = await getContractAddress(web3, cToken);
    const cTokenContract = new web3.eth.Contract(
      cToken === "ETH" ? cEther : cErc20Abi,
      cTokenAddress
    );

    const result = await cTokenContract.methods
      .borrowBalanceCurrent(address)
      .call();

    const originalToken = cToken.slice(1);
    const cTokenBorrowBalance = denormalizeAmount(
      network,
      originalToken,
      result
    );

    borrowBalance[originalToken] = cTokenBorrowBalance;
  }

  return borrowBalance;
};

export const borrowBalance = async (asset, address = null) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const cTokenSymbol = `c${asset}`;
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);
  const cTokenContract = new web3.eth.Contract(cErc20Abi, cTokenAddress);

  const balance = await cTokenContract.methods
    .borrowBalanceCurrent(address)
    .call();

  return {
    [asset]: denormalizeAmount(network, asset, balance),
  };
};

export const repay = async (asset, amount, address, options = {}) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  if (!(await isSupportedNetwork(web3))) {
    return {};
  }

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const cTokenSymbol = `c${asset}`;
  const tokenAddress = await getContractAddress(web3, asset);
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);
  const tokenContract = new web3.eth.Contract(erc20Abi, tokenAddress);

  await tokenContract.methods.approve(cTokenAddress, nAmount).send({
    from: address,
    gasLimit: web3.utils.toHex(500000),
    gasPrice: web3.utils.toHex(20000000000),
    ...getTrxOverrides(options),
  });

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress
  );

  return await cTokenContract.methods.repayBorrow(nAmount).send({
    from: address,
    gasLimit: web3.utils.toHex(500000),
    gasPrice: web3.utils.toHex(20000000000),
    ...getTrxOverrides(options),
  });
};

export const getExchangeRate = async (cTokenSymbol) => {
  if (!cTokenSymbol.startsWith("c")) {
    throw new Error(`'${cTokenSymbol}' is not cToken`);
  }

  const web3 = await getWeb3();
  const cTokenAddress = await getContractAddress(web3, cTokenSymbol);

  const cTokenContract = new web3.eth.Contract(
    cTokenSymbol === "cETH" ? cEther : cErc20Abi,
    cTokenAddress
  );

  return cTokenContract.methods.exchangeRateCurrent().call();
};
