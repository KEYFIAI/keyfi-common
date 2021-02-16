import BigNumber from 'bignumber.js';
import rewardPoolAbi from './reward-pool.abi.json';
import {
  contractAddresses,
  supportedAssets,
  supportedNetworks,
} from './constants';
import {
  approveErc20IfNeeded,
  getCurrentAccountAddress,
  getNetwork,
  getPendingTrxCallback,
  getTrxOverrides,
  getWeb3,
  normalizeAmount,
  denormalizeAmount,
} from '../common';
import { getAccountLiquidity } from '../uniswap';

const GAS_LIMIT = 250000;
const PENDING_CALLBACK_PLATFORM = 'keyfi rewardpool';

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

export const getBalance = async (accountAddress = null, options = {}) => {
  const web3 = options.web3 ? options.web3 : await getWeb3();

  if (!accountAddress) {
    accountAddress = getCurrentAccountAddress(web3);
  }

  const poolAddress = await getContractAddress(web3, 'RewardPool');
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);

  const balances = {};
  for (const asset of supportedAssets) {
    const assetAddress = await getContractAddress(web3, asset);

    const assetBalance = await poolContract.methods.getBalance(
      assetAddress,
    ).call();

    balances[asset] = denormalizeAmount(asset, assetBalance);
  }

  return balances;
};

/**
 * Returns balance with KEYFIUSDCLP amount replaced by KEYFI and USDC staked amount
 * Example:
 *  getBalance() -> { KEY: 100, KEYFIUSDCLP: 0.001 }
 *  getStaked()  -> { KEY: 100, KEYFI: 200, USDC: 20 }
 */
export const getStaked = async (accountAddress) => {
  const web3 = await getWeb3();
  const balance = await getBalance(accountAddress, { web3 });

  if (BigNumber(balance.KEYFIUSDCLP).gt(0)) {
    const pairBalance = balance.KEYFIUSDCLP;
    delete balance['KEYFIUSDCLP'];

    const pair = await getAccountLiquidity(
      'USDC',
      'KEYFI',
      null,
      { balance: normalizeAmount('KEYFIUSDCLP', pairBalance) }
    );

    balance.KEYFI =
      BigNumber(balance.KEYFI ? balance.KEYFI : 0).plus(pair.KEYFI).toFixed();
    balance.USDC =
      BigNumber(balance.USDC ? balance.USDC : 0).plus(pair.USDC).toFixed();
  }

  return balance;
};

export const deposit = async (asset, amount, options = {}) => {
  const nAmount = normalizeAmount(asset, amount);

  const web3 = await getWeb3();

  const assetAddress = await getContractAddress(web3, asset);
  const poolAddress = await getContractAddress(web3, 'RewardPool');
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);
  const trxOverrides = getTrxOverrides(options);

  await approveErc20IfNeeded(
    web3,
    assetAddress,
    poolAddress,
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
          amount,
        }],
      },
    },
  );

  return poolContract.methods.deposit(assetAddress, nAmount).send(
    {
      from: getCurrentAccountAddress(web3),
      gas: GAS_LIMIT,
      ...trxOverrides,
      nonce: trxOverrides.nonce ? trxOverrides.nonce + 1 : undefined,
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: 'deposit',
      assets: [{
        symbol: asset,
        amount,
      }],
    }),
  );
};

export const withdraw = async (asset, amount, options = {}) => {
  const nAmount = normalizeAmount(asset, amount);

  const web3 = await getWeb3();

  const assetAddress = await getContractAddress(web3, asset);
  const poolAddress = await getContractAddress(web3, 'RewardPool');
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);
  const trxOverrides = getTrxOverrides(options);

  return poolContract.methods.withdraw(assetAddress, nAmount).send(
    {
      from: getCurrentAccountAddress(web3),
      gas: GAS_LIMIT,
      ...trxOverrides,
      nonce: trxOverrides.nonce ? trxOverrides.nonce + 1 : undefined,
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: 'withdraw',
      assets: [{
        symbol: asset,
        amount,
      }],
    }),
  );
};

export const withdrawReward = async (asset, options = {}) => {
  const web3 = await getWeb3();

  const assetAddress = await getContractAddress(web3, asset);
  const poolAddress = await getContractAddress(web3, 'RewardPool');
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);
  const trxOverrides = getTrxOverrides(options);

  await approveErc20IfNeeded(
    web3,
    assetAddress,
    poolAddress,
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
        }],
      },
    },
  );

  return poolContract.methods.withdrawRewards(assetAddress).send(
    {
      from: getCurrentAccountAddress(web3),
      gas: GAS_LIMIT,
      ...trxOverrides,
      nonce: trxOverrides.nonce ? trxOverrides.nonce + 1 : undefined,
    },
    getPendingTrxCallback(options.pendingCallback, {
      platform: PENDING_CALLBACK_PLATFORM,
      type: 'withdraw_rewards',
      assets: [{
        symbol: asset,
      }],
    }),
  );
};

export const getRewards = async (accountAddress = null) => {
  const web3 = await getWeb3();

  if (!accountAddress) {
    accountAddress = getCurrentAccountAddress(web3);
  }

  const poolAddress = await getContractAddress(web3, 'RewardPool');
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);

  const rewards = {};
  for (const asset of supportedAssets) {
    const assetAddress = await getContractAddress(web3, asset);

    const assetReward = await poolContract.methods.pendingReward(
      assetAddress,
      accountAddress,
    ).call();

    rewards[asset] = denormalizeAmount(asset, assetReward);
  }

  return rewards;
};
