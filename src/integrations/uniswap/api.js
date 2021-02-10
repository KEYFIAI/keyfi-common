import BigNumber from 'bignumber.js';

import {
  availablePairs,
  contractAddresses,
  supportedNetworks,
  uniswapContracts,
  PAIR_NOT_EXISTS,
  NULL_ADDRESS,
} from './constants';
import factoryAbi from './abi/factory.abi.json';
import routerAbi from './abi/router02.abi.json';
import pairAbi from './abi/pair.abi.json';
import {
  approveErc20IfNeeded,
  getCurrentAccountAddress,
  getNetwork,
  getPendingTrxCallback,
  getTrxOverrides,
  getWeb3,
  normalizeAmount,
  denormalizeAmount,
  promisifyBatchRequest,
  web3BatchRequest,
  REQUEST_TYPE_CALL,
} from '../common';

const DEFAULT_MAX_SLIPPAGE = 0.005;
const GAS_LIMIT = 300000;
const PENDING_CALLBACK_PLATFORM = 'uniswap';

const calculateMinAmount = (amount, slippage) => (new BigNumber(amount))
  .multipliedBy(1 - slippage)
  .toFixed(0);

const getDefaultDeadline = () => Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes later

const getContractAddress = async (web3, contractName) => {
  const { chainId } = await getNetwork(web3);

  const name = supportedNetworks[chainId];
  if (!name) {
    throw new Error(`Network with chainId=${chainId} is not supported!`);
  }

  const address = contractAddresses[name][contractName];
  if (!address) {
    throw new Error(`Unknown contract: '${contractName}' on '${name}' network`);
  }

  return address;
};

const getAssetAddress = async (web3, asset) => {
  if (asset === 'ETH') {
    return getContractAddress(web3, 'WETH');
  }

  return getContractAddress(web3, asset);
};

const getPairAddress = async (web3, assetAAddress, assetBAddress) => {
  const factoryAddress = await getContractAddress(web3, 'Factory');
  const factoryContract = new web3.eth.Contract(factoryAbi, factoryAddress);
  const pairAddress = await factoryContract.methods.getPair(
    assetAAddress,
    assetBAddress,
  ).call();

  if (pairAddress === NULL_ADDRESS) {
    const error = new Error('Pair is not exists!');
    error.code = PAIR_NOT_EXISTS;
    throw error;
  }

  return pairAddress;
};

export const isPairAvailable = async (assetA, assetB) => {
  const web3 = await getWeb3();
  const { chainId } = await getNetwork(web3);

  const name = supportedNetworks[chainId];
  if (!name) {
    throw new Error(`Network with chainId=${chainId} is not supported!`);
  }

  const pairs = availablePairs[name].map((x) => x.join(':'));
  const pairKey = [assetA, assetB].sort().join(':');
  return pairs.some(x => x === pairKey);
};

export const getAvailablePairedAssets = async (assetA) => {
  const web3 = await getWeb3();
  const { chainId } = await getNetwork(web3);

  const name = supportedNetworks[chainId];
  if (!name) {
    throw new Error(`Network with chainId=${chainId} is not supported!`);
  }

  const paired = availablePairs[name]
    .filter(x => x[0] === assetA || x[1] === assetA)
    .map(pair => pair.filter(x => x !== assetA)[0]);

  return Array.from(new Set(paired));
};

export const estimateSwap = async (
  fromAssetSymbol,
  fromAmount,
  toAssetSymbol,
) => {
  fromAmount = normalizeAmount(fromAssetSymbol, fromAmount);

  const web3 = await getWeb3();
  const fromAssetAddress = await getAssetAddress(web3, fromAssetSymbol);
  const toAssetAddress = await getAssetAddress(web3, toAssetSymbol);

  const routerAddress = await getContractAddress(web3, 'Router02');
  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);

  const result = await routerContract.methods.getAmountsOut(
    fromAmount,
    [fromAssetAddress, toAssetAddress],
  ).call();

  return {
    returnAmount: result[1],
    returnAmountHuman: denormalizeAmount(toAssetSymbol, result[1]),
  };
};

export const swap = async (
  fromAssetSymbol,
  fromAmount,
  toAssetSymbol,
  options = {}
) => {
  const fromAmountDecimalized = normalizeAmount(fromAssetSymbol, fromAmount);

  let { estimation } = options;
  if (!estimation) {
    estimation = await estimateSwap(
      fromAssetSymbol,
      fromAmount,
      toAssetSymbol,
    );
  }

  const web3 = await getWeb3();
  const accountAddress = getCurrentAccountAddress(web3);
  const trxOverrides = getTrxOverrides(options);
  const fromAssetAddress = await getAssetAddress(web3, fromAssetSymbol);
  const toAssetAddress = await getAssetAddress(web3, toAssetSymbol);
  const routerAddress = await getContractAddress(web3, 'Router02');

  if (fromAssetSymbol !== 'ETH') {
    await approveErc20IfNeeded(
      web3,
      fromAssetAddress,
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
          assets: [{
            symbol: fromAssetSymbol,
            amount: fromAmount,
          }],
        }
      },
    );
  }

  const slippage = options.slippage || DEFAULT_MAX_SLIPPAGE;
  const minReturn = (new BigNumber(estimation.returnAmount)).multipliedBy(
    1 - slippage,
  ).toFixed(0);

  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);
  const deadline = options.deadline || getDefaultDeadline();

  if (fromAssetSymbol === 'ETH') {
    return routerContract.methods.swapExactETHForTokens(
      minReturn,
      [fromAssetAddress, toAssetAddress],
      accountAddress,
      deadline,
    ).send(
      {
        from: accountAddress,
        value: fromAmountDecimalized,
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      getPendingTrxCallback(options.pendingCallback, {
        platform: PENDING_CALLBACK_PLATFORM,
        type: 'swap',
        assets: [{
          symbol: fromAssetSymbol,
          amount: fromAmount,
        }],
      }),
    );
  }

  const method = toAssetSymbol === 'ETH'
    ? routerContract.methods.swapExactTokensForETH
    : routerContract.methods.swapExactTokensForTokens;

  return method(
    fromAmountDecimalized,
    minReturn,
    [fromAssetAddress, toAssetAddress],
    accountAddress,
    deadline,
  ).send(
    {
      from: accountAddress,
      gas: GAS_LIMIT,
      ...trxOverrides,
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: 'swap',
      assets: [{
        symbol: fromAssetSymbol,
        amount: fromAmount,
      }],
    }),
  );
};

export const getLiquidity = async (assetA, assetB, options = {}) => {
  const web3 = await getWeb3();

  let assetAAddress = await getAssetAddress(web3, assetA);
  let assetBAddress = await getAssetAddress(web3, assetB);
  if (assetAAddress > assetBAddress) {
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

  return {
    [assetA]: denormalizeAmount(assetA, result._reserve0),
    [assetB]: denormalizeAmount(assetB, result._reserve1),
    blockTimestampLast: result._blockTimestampLast,
  };
};

export const getPrice = async (assetWhat, assetTo, options = {}) => {
  const liquidity = await getLiquidity(assetWhat, assetTo, options);
  return BigNumber(liquidity[assetTo]).dividedBy(liquidity[assetWhat]).toFixed();
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
  const balance = await pairContract.methods.balanceOf(address).call();
  const totalSupply = await pairContract.methods.totalSupply().call();
  const pairLiquidity = await getLiquidity(assetA, assetB, { raw: true });

  const liquidityPercent = new BigNumber(balance).dividedBy(totalSupply);

  if (options.raw) {
    return {
      [assetA]: liquidityPercent.multipliedBy(pairLiquidity[assetA])
        .dividedToIntegerBy(1).toFixed(0),
      [assetB]: liquidityPercent.multipliedBy(pairLiquidity[assetB])
        .dividedToIntegerBy(1).toFixed(0),
      liquidity: balance,
      totalLiquidity: totalSupply,
      liquidityPercent: liquidityPercent.toFixed(),
    };
  }

  return {
    [assetA]: liquidityPercent.multipliedBy(
      denormalizeAmount(assetA, pairLiquidity[assetA]),
    ).toFixed(),
    [assetB]: liquidityPercent.multipliedBy(
      denormalizeAmount(assetB, pairLiquidity[assetB]),
    ).toFixed(),
    liquidity: denormalizeAmount('UNI-V2', balance),
    totalLiquidity: totalSupply,
    liquidityPercent: liquidityPercent.toFixed(),
  };
};

export const getAccountLiquidityAll = async (address = null) => {
  const web3 = await getWeb3();

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const assets = await getSupportedAssetsMap();
  const assetsPairs = [];
  for (const asset of Object.keys(assets)) {
    if (asset !== 'ETH' && asset !== 'WETH') {
      assetsPairs.push(['ETH', asset]);
    }
  }

  // 1st step - fetch all available pairs addresses
  const factoryAddress = await getContractAddress(web3, 'Factory');
  const factoryContract = new web3.eth.Contract(factoryAbi, factoryAddress);

  const pairsAddresses = await web3BatchRequest(
    web3,
    factoryContract.methods.getPair,
    REQUEST_TYPE_CALL,
    assetsPairs.map(([assetA, assetB]) => [
      assets[assetA === 'ETH' ? 'WETH' : assetA],
      assets[assetB === 'ETH' ? 'WETH' : assetB],
    ]),
    null,
    (error) => {
      if (error.code === PAIR_NOT_EXISTS) {
        return null;
      }

      throw error;
    },
  );

  // 2nd step - fetch accounts liquidity on all available pairs
  const availablePairs = assetsPairs.map(([assetA, assetB], index) => {
    const pairAddress = pairsAddresses[index];

    return {
      assetA,
      assetB,
      pairAddress,
      contract: new web3.eth.Contract(pairAbi, pairAddress),
    };
  }).filter(({ pairAddress }) => pairAddress !== NULL_ADDRESS);

  const batch1 = new web3.BatchRequest();
  const promises1 = availablePairs.map(async (pair) => {
    const balance = await promisifyBatchRequest(
      batch1,
      pair.contract.methods.balanceOf(address).call.request,
    );

    pair.balance = new BigNumber(balance);
  });
  batch1.execute();
  await Promise.all(promises1);

  // Fetch and calculate info for pairs with account liquidity
  const pairsWithLiquidity = availablePairs.filter(
    (pair) => pair.balance.gt(0),
  );

  const batch2 = new web3.BatchRequest();
  const promises2 = pairsWithLiquidity.map(async (pair) => {
    const totalSupplyPromise = promisifyBatchRequest(
      batch2,
      pair.contract.methods.totalSupply().call.request,
    );

    const reservesPromise = promisifyBatchRequest(
      batch2,
      pair.contract.methods.getReserves().call.request,
    );

    pair.totalSupply = await totalSupplyPromise;

    const reserves = await reservesPromise;
    if (assets[pair.assetA] < assets[pair.assetB]) {
      pair[pair.assetA] = reserves._reserve0;
      pair[pair.assetB] = reserves._reserve1;
    } else {
      pair[pair.assetA] = reserves._reserve1;
      pair[pair.assetB] = reserves._reserve0;
    }
  });
  batch2.execute();
  await Promise.all(promises2);

  return pairsWithLiquidity.map((pair) => {
    const liquidityPercent = pair.balance.dividedBy(pair.totalSupply);
    const { assetA, assetB } = pair;

    return {
      assetA,
      assetB,
      [assetA]: liquidityPercent.multipliedBy(
        denormalizeAmount(assetA, pair[assetA]),
      ).toFixed(),
      [assetB]: liquidityPercent.multipliedBy(
        denormalizeAmount(assetB, pair[assetB]),
      ).toFixed(),
      liquidity: denormalizeAmount('UNI-V2', pair.balance.toFixed()),
      totalLiquidity: pair.totalSupply,
      liquidityPercent: liquidityPercent.toFixed(),
    };
  });
};

export const addLiquidity = async (
  assetA,
  assetAAmount,
  assetB,
  assetBAmount,
  options = {},
) => {
  if (assetA === assetB) {
    throw Error(`assetA (${assetA}) === assetB (${assetB})`);
  }

  if (assetB === 'ETH') {
    [assetA, assetB] = [assetB, assetA];
  }

  const assetAAmountNorm = normalizeAmount(assetA, assetAAmount);
  const assetBAmountNorm = normalizeAmount(assetB, assetBAmount);

  const web3 = await getWeb3();
  const account = getCurrentAccountAddress(web3);
  const routerAddress = await getContractAddress(web3, 'Router02');
  const assetAAddress = await getAssetAddress(web3, assetA);
  const assetBAddress = await getAssetAddress(web3, assetB);
  const trxOverrides = getTrxOverrides(options);

  if (assetA !== 'ETH') {
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
          assets: [{
            symbol: assetA,
            amount: assetAAmount,
          }],
        }
      },
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
        assets: [{
          symbol: assetB,
          amount: assetBAmount,
        }],
      }
    },
  );

  const deadline = options.deadline || getDefaultDeadline();
  const slippage = options.slippage || DEFAULT_MAX_SLIPPAGE;
  const minAmountAssetA = calculateMinAmount(assetAAmountNorm, slippage);
  const minAmountAssetB = calculateMinAmount(assetBAmountNorm, slippage);

  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);

  if (assetA === 'ETH') {
    return routerContract.methods.addLiquidityETH(
      assetBAddress,
      assetBAmountNorm,
      minAmountAssetB,
      minAmountAssetA,
      account,
      deadline,
    ).send(
      {
        from: account,
        value: assetAAmountNorm,
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      getPendingTrxCallback(options.pendingCallback, {
        platform: PENDING_CALLBACK_PLATFORM,
        type: 'add liquidity',
        assets: [{
          symbol: assetA,
          amount: assetAAmount,
        }, {
          symbol: assetB,
          amount: assetBAmount,
        }],
      }),
    );
  }

  return routerContract.methods.addLiquidity(
    assetAAddress,
    assetBAddress,
    assetAAmountNorm,
    assetBAmountNorm,
    minAmountAssetA,
    minAmountAssetB,
    account,
    deadline,
  ).send(
    {
      from: account,
      gas: GAS_LIMIT,
      ...trxOverrides,
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: 'add liquidity',
      assets: [{
        symbol: assetA,
        amount: assetAAmount,
      }, {
        symbol: assetB,
        amount: assetBAmount,
      }],
    }),
  );
};

// Percent is float in range 0-1
export const removeLiquidity = async (assetA, assetB, percent, options = {}) => {
  if (assetA === assetB) {
    throw Error(`assetA (${assetA}) === assetB (${assetB})`);
  }

  if (assetB === 'ETH') {
    [assetA, assetB] = [assetB, assetA];
  }

  const web3 = await getWeb3();
  const accountAddress = getCurrentAccountAddress(web3);

  const accountLiquidity = await getAccountLiquidity(
    assetA,
    assetB,
    accountAddress,
    { raw: true },
  );

  const liquidityToBurn = new BigNumber(accountLiquidity.liquidity)
    .multipliedBy(percent)
    .dividedToIntegerBy(1)
    .toFixed();

  const routerAddress = await getContractAddress(web3, 'Router02');
  const assetAAddress = await getAssetAddress(web3, assetA);
  const assetBAddress = await getAssetAddress(web3, assetB);
  const pairAddress = await getPairAddress(web3, assetAAddress, assetBAddress);
  const trxOverrides = getTrxOverrides(options);

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
        assets: [{
          symbol: 'UNI-V2',
          amount: denormalizeAmount('UNI-V2', liquidityToBurn),
        }],
      }
    },
  );

  const deadline = options.deadline || getDefaultDeadline();
  const slippage = options.slippage || DEFAULT_MAX_SLIPPAGE;

  const reserves = await getLiquidity(assetA, assetB, { raw: true });
  const liquidityPercent = new BigNumber(accountLiquidity.liquidityPercent)
    .multipliedBy(percent);

  const minReturnA = calculateMinAmount(
    liquidityPercent.multipliedBy(reserves[assetA]),
    slippage,
  );
  const minReturnB = calculateMinAmount(
    liquidityPercent.multipliedBy(reserves[assetB]),
    slippage,
  );

  const routerContract = new web3.eth.Contract(routerAbi, routerAddress);

  if (assetA === 'ETH') {
    return routerContract.methods.removeLiquidityETH(
      assetBAddress,
      liquidityToBurn,
      minReturnB,
      minReturnA,
      accountAddress,
      deadline,
    ).send(
      {
        from: accountAddress,
        gas: GAS_LIMIT,
        ...trxOverrides,
      },
      getPendingTrxCallback(options.pendingCallback, {
        platform: PENDING_CALLBACK_PLATFORM,
        type: 'remove liquidity',
        assets: [{
          symbol: assetA,
          amount: denormalizeAmount(assetA, minReturnA),
        }, {
          symbol: assetB,
          amount: denormalizeAmount(assetB, minReturnB),
        }],
      }),
    );
  }

  return routerContract.methods.removeLiquidity(
    assetAAddress,
    assetBAddress,
    liquidityToBurn,
    minReturnA,
    minReturnB,
    accountAddress,
    deadline,
  ).send(
    {
      from: accountAddress,
      gas: GAS_LIMIT,
      ...trxOverrides,
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: 'remove liquidity',
      assets: [{
        symbol: assetA,
        amount: denormalizeAmount(assetA, minReturnA),
      }, {
        symbol: assetB,
        amount: denormalizeAmount(assetB, minReturnB),
      }],
    }),
  );
};

export const getSupportedAssetsMap = async () => {
  const web3 = await getWeb3();
  const { name } = await getNetwork(web3);

  return Object.entries(contractAddresses[name]).reduce(
    (acc, [assetSymbol, assetAddress]) => {
      if (!uniswapContracts.includes(assetSymbol)) {
        acc[assetSymbol] = assetAddress;
      }

      return acc;
    },
    {},
  );
};

export const getSupportedAssets = async () => {
  return Object.keys(await getSupportedAssetsMap()).concat('ETH');
};
