import axios from "axios";
import BigNumber from "bignumber.js";
import routerAbi from "./abi/routerv2.abi.json";
import factoryAbi from "./abi/factoryAbi.abi.json";
import pairAbi from "./abi/pair.abi.json";
import {
  denormalizeAmount,
  normalizeAmount,
  getNetwork,
  getWeb3,
  processWeb3OrNetworkArgument,
  getCurrentAccountAddress,
  approveErc20IfNeeded,
  getPendingTrxCallback,
  getTrxOverrides,
} from "../common";
import { contractAddresses, supportedPairs } from "./constants";
import { erc20Addresses } from "../common/constants";
import { NULL_ADDRESS, PAIR_NOT_EXISTS } from "./constants";

const DEFAULT_MAX_SLIPPAGE = 0.005;
const GAS_LIMIT = 300000;
const PENDING_CALLBACK_PLATFORM = "pancakeswap";

const UNSUPPORTED_ASSETS = ["Routerv2", "Factory"];

const calculateMinAmount = (amount, slippage) =>
  new BigNumber(amount).multipliedBy(1 - slippage).toFixed(0);

const getDefaultDeadline = () => Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes

export const isSupportedNetwork = async (web3OrNetwork) => {
  const network = await processWeb3OrNetworkArgument(web3OrNetwork);
  return Boolean(contractAddresses[network.name]);
};

export const getContractAddress = async (web3, contractName) => {
  const network = await getNetwork(web3);

  if (!(await isSupportedNetwork(network))) {
    throw new Error(`Network with chainId=${network.chainId} is not supported`);
  }

  const address = contractAddresses[network.name][contractName];
  if (address) {
    return address;
  }

  if (erc20Addresses[network.name]) {
    const erc20Address = erc20Addresses[network.name][contractName];
    if (erc20Address) {
      return erc20Address;
    }
  }

  throw new Error(
    `Unknown contract: '${contractName}' on '${network.name}' network`
  );
};

const getAssetAddress = async (web3, asset) => {
  if (asset === "BNB" || asset === "WBNB") {
    return getContractAddress(web3, "wBNB");
  }

  return getContractAddress(web3, asset);
};

export const getPairAddress = async (web3, assetAAddress, assetBAddress) => {
  const factoryAddress = await getContractAddress(web3, "Factory");
  const factoryContract = new web3.eth.Contract(factoryAbi, factoryAddress);
  const pairAddress = await factoryContract.methods
    .getPair(assetAAddress, assetBAddress)
    .call();

  if (pairAddress === NULL_ADDRESS) {
    const error = new Error("Pair does not exist");
    error.code = PAIR_NOT_EXISTS;
    throw error;
  }

  return pairAddress;
};

export const isPairAvailable = async (assetA, assetB) => {
  assetA = assetA === "BNB" ? "wBNB" : assetA;
  assetB = assetB === "BNB" ? "wBNB" : assetB;

  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  if (!(await isSupportedNetwork(network))) {
    throw new Error(
      `Network with chainId=${network.chainId} is not supported!`
    );
  }

  let assetAAddress = await getAssetAddress(web3, assetA);
  let assetBAddress = await getAssetAddress(web3, assetB);

  const tokenPairName = `${assetAAddress.toLowerCase()}_${assetBAddress.toLowerCase()}`;

  const { data } = await axios.get(`https://api.pancakeswap.info/api/v2/pairs`);

  const { data: tokenPairs } = data;

  const tokenPairKey = Object.keys(tokenPairs).find(
    (key) => key.toLowerCase() === tokenPairName
  );

  const tokenPairKey2 = supportedPairs.some(
    (x) => x.key === `${assetA}:${assetB}`
  );

  if (tokenPairKey || tokenPairKey2) {
    return true;
  }
};

export const getAvailablePairedAssets = async (mainAsset, tokenPairs) => {
  mainAsset = mainAsset === "BNB" ? "WBNB" : mainAsset;

  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  if (!(await isSupportedNetwork(network))) {
    throw new Error(
      `Network with chainId=${network.chainId} is not supported!`
    );
  }

  tokenPairs = [...tokenPairs, ...supportedPairs];

  const paired = tokenPairs.reduce((listOfPairedAssets, pair) => {
    const asset1 = pair.base_symbol.toUpperCase();
    const asset2 = pair.quote_symbol.toUpperCase();
    if (asset1 === mainAsset) {
      listOfPairedAssets.push(asset2);
    } else if (asset2 === mainAsset) {
      listOfPairedAssets.push(asset1);
    }

    return listOfPairedAssets;
  }, []);

  if (paired.includes("WBNB")) {
    paired.push("BNB");
  }

  return Array.from(new Set(paired));
};

const MAXIMUM_ROUTE_LENGTH = 4;

export const findRoute = async (fromAssetSymbol, toAssetSymbol) => {
  if (fromAssetSymbol === toAssetSymbol) {
    throw new Error(`${fromAssetSymbol} and ${toAssetSymbol} are the same`);
  }

  if (await isPairAvailable(fromAssetSymbol, toAssetSymbol)) {
    return [fromAssetSymbol, toAssetSymbol];
  }

  let neededRoute = null;
  let routes = [[fromAssetSymbol]];

  const { data } = await axios.get(`https://api.pancakeswap.info/api/v2/pairs`);

  let { data: tokenPairs } = data;

  tokenPairs = Object.values(tokenPairs);

  while (
    !neededRoute &&
    routes.length > 0 &&
    routes[0].length < MAXIMUM_ROUTE_LENGTH
  ) {
    let newRoutes = [];
    for (const route of routes) {
      const pairedAssets = await getAvailablePairedAssets(
        route[route.length - 1],
        tokenPairs
      );

      newRoutes = newRoutes.concat(
        pairedAssets.map((asset) => [...route, asset])
      );
    }

    routes = newRoutes;
    neededRoute = routes.find(
      (route) => route[route.length - 1] === toAssetSymbol
    );
  }

  if (!neededRoute) {
    throw new Error(
      `Cannot find route from ${fromAssetSymbol} to ${toAssetSymbol} ` +
        `in ${MAXIMUM_ROUTE_LENGTH} hops`
    );
  }

  return neededRoute;
};

export const estimateSwap = async (
  fromAssetSymbol,
  fromAmount,
  toAssetSymbol
) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  fromAmount = normalizeAmount(network, fromAssetSymbol, fromAmount);

  const routerAddress = await getContractAddress(web3, "Routerv2");
  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);

  const route = await findRoute(fromAssetSymbol, toAssetSymbol);
  const routeAddresses = await Promise.all(
    route.map((symbol) => getAssetAddress(web3, symbol))
  );

  const result = await routerContract.methods
    .getAmountsOut(fromAmount, routeAddresses)
    .call();

  const resultLast = result[result.length - 1];

  return {
    returnAmount: resultLast,
    returnAmountHuman: denormalizeAmount(network, toAssetSymbol, resultLast),
    route,
  };
};

export const swap = async (
  fromAssetSymbol,
  fromAmount,
  toAssetSymbol,
  estimation,
  options = {}
) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const fromAmountDecimalized = normalizeAmount(
    network,
    fromAssetSymbol,
    fromAmount
  );

  if (!estimation || !estimation.returnAmount) {
    throw new Error("No estimation have passed as arg!");
  }

  const accountAddress = getCurrentAccountAddress(web3);
  const trxOverrides = getTrxOverrides(options);
  const routeAddresses = await Promise.all(
    estimation.route.map((symbol) => getAssetAddress(web3, symbol))
  );
  const routerAddress = await getContractAddress(web3, "Routerv2");

  if (fromAssetSymbol !== "BNB") {
    await approveErc20IfNeeded(
      web3,
      routeAddresses[0],
      routerAddress,
      fromAmountDecimalized,
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
              symbol: fromAssetSymbol,
              amount: fromAmount,
            },
          ],
        },
      }
    );
  }

  const slippage = options.slippage || DEFAULT_MAX_SLIPPAGE;
  const minReturn = new BigNumber(estimation.returnAmount)
    .multipliedBy(1 - slippage)
    .toFixed(0);

  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);
  const deadline = options.deadline || getDefaultDeadline();

  if (fromAssetSymbol === "BNB") {
    return routerContract.methods
      .swapExactETHForTokens(
        minReturn,
        routeAddresses,
        accountAddress,
        deadline
      )
      .send(
        {
          from: accountAddress,
          value: fromAmountDecimalized,
          gas: GAS_LIMIT,
          ...trxOverrides,
        },
        getPendingTrxCallback(options.pendingCallback, {
          platform: PENDING_CALLBACK_PLATFORM,
          type: "swap",
          assets: [
            {
              symbol: fromAssetSymbol,
              amount: fromAmount,
            },
          ],
        })
      );
  }

  const method =
    toAssetSymbol === "BNB"
      ? routerContract.methods.swapExactTokensForETH
      : routerContract.methods.swapExactTokensForTokens;

  return method(
    fromAmountDecimalized,
    minReturn,
    routeAddresses,
    accountAddress,
    deadline
  ).send(
    {
      from: accountAddress,
      gas: GAS_LIMIT,
      ...trxOverrides,
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: "swap",
      assets: [
        {
          symbol: fromAssetSymbol,
          amount: fromAmount,
        },
      ],
    })
  );
};

export const getLiquidity = async (assetA, assetB, options = {}) => {
  const web3 = await getWeb3();

  let assetAAddress = await getAssetAddress(web3, assetA);
  let assetBAddress = await getAssetAddress(web3, assetB);

  if (assetAAddress.toLowerCase() > assetBAddress.toLowerCase()) {
    [assetA, assetB] = [assetB, assetA];
    [assetAAddress, assetBAddress] = [assetBAddress, assetAAddress];
  }

  const pairAddress = await getPairAddress(web3, assetAAddress, assetBAddress);
  const pairContract = new web3.eth.Contract(pairAbi, pairAddress);
  const result = await pairContract.methods.getReserves().call();

  if (options.raw) {
    return {
      [assetA]: result._reserve0,
      [assetB]: result._reserve1,
      blockTimestampLast: result._blockTimestampLast,
    };
  }

  const network = await getNetwork(web3);

  return {
    [assetA]: denormalizeAmount(network, assetA, result._reserve0),
    [assetB]: denormalizeAmount(network, assetB, result._reserve1),
    blockTimestampLast: result._blockTimestampLast,
  };
};

export const getPrice = async (assetWhat, assetTo, options = {}) => {
  const liquidity = await getLiquidity(assetWhat, assetTo, options);
  return BigNumber(liquidity[assetTo])
    .dividedBy(liquidity[assetWhat])
    .toFixed();
};

export const getAccountLiquidity = async (
  assetA,
  assetB,
  address = null,
  options = {}
) => {
  const web3 = await getWeb3();
  const assetAAddress = await getAssetAddress(web3, assetA);
  const assetBAddress = await getAssetAddress(web3, assetB);

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const pairAddress = await getPairAddress(web3, assetAAddress, assetBAddress);
  const pairContract = new web3.eth.Contract(pairAbi, pairAddress);

  // If we already know the balance, we can pass it as option
  const balance = options.balance
    ? options.balance
    : await pairContract.methods.balanceOf(address).call();
  const totalSupply = await pairContract.methods.totalSupply().call();
  const pairLiquidity = await getLiquidity(assetA, assetB, { raw: true });

  const liquidityPercent = new BigNumber(balance).dividedBy(totalSupply);

  if (options.raw) {
    return {
      assetA,
      assetB,
      [assetA]: liquidityPercent
        .multipliedBy(pairLiquidity[assetA])
        .dividedToIntegerBy(1)
        .toFixed(0),
      [assetA]: liquidityPercent
        .multipliedBy(pairLiquidity[assetB])
        .dividedToIntegerBy(1)
        .toFixed(0),
      liquidity: balance,
      totalLiquidity: totalSupply,
      liquidityPercent: liquidityPercent.toFixed(),
    };
  }

  const network = await getNetwork(web3);

  return {
    assetA,
    assetB,
    [assetA]: liquidityPercent
      .multipliedBy(denormalizeAmount(network, assetA, pairLiquidity[assetA]))
      .toFixed(),
    [assetB]: liquidityPercent
      .multipliedBy(denormalizeAmount(network, assetB, pairLiquidity[assetB]))
      .toFixed(),
    liquidity: denormalizeAmount(network, "CAKE-V2", balance),
    totalLiquidity: totalSupply,
    liquidityPercent: liquidityPercent.toFixed(),
  };
};

// export const getAccountLiquidityAll = async (address = null) => {
//   const web3 = await getWeb3();

//   if (!(await isSupportedNetwork(web3))) {
//     return []
//   }

//   if (!address) {
//     address = getCurrentAccountAddress(web3)
//   }

//   const res = await
// }

export const addLiquidity = async (
  assetA,
  assetAAmount,
  assetB,
  assetBAmount,
  options = {}
) => {
  if (assetA === assetB) {
    throw Error(`Both assets are equal`);
  }

  if (assetB === "BNB") {
    [assetA, assetB] = [assetB, assetA];
  }

  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const assetAAmountNorm = normalizeAmount(network, assetA, assetAAmount);
  const assetBAmountNorm = normalizeAmount(network, assetB, assetBAmount);

  const account = getCurrentAccountAddress(web3);
  const routerAddress = await getContractAddress(web3, "Routerv2");
  const assetAAddress = await getAssetAddress(web3, assetA);
  const assetBAddress = await getAssetAddress(web3, assetB);
  const trxOverrides = getTrxOverrides(options);

  if (assetA !== "BNB") {
    await approveErc20IfNeeded(
      web3,
      assetAAddress,
      routerAddress,
      assetAAmountNorm,
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
              symbol: assetA,
              amount: assetAAmount,
            },
          ],
        },
      }
    );
  }

  await approveErc20IfNeeded(
    web3,
    assetBAddress,
    routerAddress,
    assetBAmountNorm,
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
            symbol: assetB,
            amount: assetBAmount,
          },
        ],
      },
    }
  );

  const deadline = options.deadline || getDefaultDeadline();
  const slippage = options.slippage || DEFAULT_MAX_SLIPPAGE;
  const minAmountAssetA = calculateMinAmount(assetAAmountNorm, slippage);
  const minAmountAssetB = calculateMinAmount(assetBAmountNorm, slippage);

  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);

  if (assetA === "BNB") {
    return routerContract.methods
      .addLiquidityETH(
        assetBAddress,
        assetBAmountNorm,
        minAmountAssetB,
        minAmountAssetA,
        account,
        deadline
      )
      .send(
        {
          from: account,
          value: assetAAmountNorm,
          gas: GAS_LIMIT,
          ...trxOverrides,
        },
        getPendingTrxCallback(options.pendingCallback, {
          platform: PENDING_CALLBACK_PLATFORM,
          type: "add liquidity",
          assets: [
            {
              symbol: assetA,
              amount: assetAAmount,
            },
            {
              symbol: assetB,
              amount: assetBAmount,
            },
          ],
        })
      );
  }

  return routerContract.methods
    .addLiquidity(
      assetAAddress,
      assetBAddress,
      assetAAmountNorm,
      assetBAmountNorm,
      minAmountAssetA,
      minAmountAssetB,
      account,
      deadline
    )
    .send(
      {
        from: account,
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      getPendingTrxCallback(options.pendingCallback, {
        platform: PENDING_CALLBACK_PLATFORM,
        type: "add liquidity",
        assets: [
          {
            symbol: assetA,
            amount: assetAAmount,
          },
          {
            symbol: assetB,
            amount: assetBAmount,
          },
        ],
      })
    );
};

// Percent is a float number in range of 0-1
export const removeLiquidity = async (
  assetA,
  assetB,
  percent,
  options = {}
) => {
  if (assetA === assetB) {
    throw Error(`Both assets are identical`);
  }

  if (assetB === "BNB") {
    [assetA, assetB] = [assetB, assetA];
  }

  const web3 = await getWeb3();
  const accountAddress = getCurrentAccountAddress(web3);

  const accountLiquidity = await getAccountLiquidity(
    assetA,
    assetB,
    accountAddress,
    { raw: true }
  );

  const liquidityToBurn = new BigNumber(accountLiquidity.liquidity)
    .multipliedBy(percent)
    .dividedToIntegerBy(1)
    .toFixed();

  const routerAddress = await getContractAddress(web3, "Routerv2");
  const assetAAddress = await getAssetAddress(web3, assetA);
  const assetBAddress = await getAssetAddress(web3, assetB);
  const pairAddress = await getPairAddress(web3, assetAAddress, assetBAddress);
  const trxOverrides = getTrxOverrides(options);

  const network = await getNetwork(web3);

  await approveErc20IfNeeded(
    web3,
    pairAddress,
    routerAddress,
    liquidityToBurn,
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
            symbol: "CAKE-V2",
            amount: denormalizeAmount(network, "CAKE-V2", liquidityToBurn),
          },
        ],
      },
    }
  );

  const deadline = options.deadline || getDefaultDeadline();
  const slippage = options.slippage || DEFAULT_MAX_SLIPPAGE;

  const reserves = await getLiquidity(assetA, assetB, { raw: true });
  const liquidityPercent = new BigNumber(
    accountLiquidity.liquidityPercent
  ).multipliedBy(percent);

  const minReturnA = calculateMinAmount(
    liquidityPercent.multipliedBy(reserves[assetA]),
    slippage
  );

  const minReturnB = calculateMinAmount(
    liquidityPercent.multipliedBy(reserves[assetB]),
    slippage
  );

  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);

  if (assetA === "BNB") {
    return routerContract.methods
      .removeLiquidityETH(
        assetBAddress,
        liquidityToBurn,
        minReturnB,
        minReturnA,
        accountAddress,
        deadline
      )
      .send(
        {
          from: accountAddress,
          gas: GAS_LIMIT,
          ...trxOverrides,
        },
        getPendingTrxCallback(options.pendingCallback, {
          platform: PENDING_CALLBACK_PLATFORM,
          type: "remove liquidity",
          assets: [
            {
              symbol: assetA,
              amount: denormalizeAmount(network, assetA, minReturnA),
            },
            {
              symbol: assetB,
              amount: denormalizeAmount(network, assetB, minReturnB),
            },
          ],
        })
      );
  }

  return routerContract.methods
    .removeLiquidity(
      assetAAddress,
      assetBAddress,
      liquidityToBurn,
      minReturnA,
      minReturnB,
      accountAddress,
      deadline
    )
    .send(
      {
        from: accountAddress,
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      getPendingTrxCallback(options.pendingCallback, {
        platform: PENDING_CALLBACK_PLATFORM,
        type: "remove liquidity",
        assets: [
          {
            symbol: assetA,
            amount: denormalizeAmount(network, assetA, minReturnA),
          },
          {
            symbol: assetB,
            amount: denormalizeAmount(network, assetB, minReturnB),
          },
        ],
      })
    );
};

const getSupportedAssetsMapUnfiltered = async () => {
  const web3 = await getWeb3();
  const { name } = await getNetwork(web3);
  if (name === "bsc-mainnet") {
    return contractAddresses["bsc-mainnet"];
  }

  throw new Error("Pancakeswap only support BSC");
};

export const getSupportedAssets = async () => {
  return Object.keys(await getSupportedAssetsMapUnfiltered())
    .filter((asset) => !UNSUPPORTED_ASSETS.includes(asset))
    .concat("BNB");
};
