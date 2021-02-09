import rewardPoolAbi from "./reward-pool.abi.json"
import {
  contractAddresses,
  supportedAssets,
  supportedNetworks
} from './constants';
import {
  approveErc20IfNeeded,
  getCurrentAccountAddress,
  getNetwork,
  getPendingTrxCallback,
  getTrxOverrides,
  getWeb3,
  normalizeAmount,
} from '../common';

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

export const getBalance = async (accountAddress = null) => {

  const web3 = await getWeb3();

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

}


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
          amount: amount,
        }],
      }
    },
  );

  console.log("DEPOSIT", asset, assetAddress, nAmount);
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
        amount: amount,
      }],
    }),
  );
}

export const withdraw = async (asset, amount, options = {}) => {
   const nAmount = normalizeAmount(asset, amount);

  const web3 = await getWeb3();

  const assetAddress = await getContractAddress(web3, asset);
  const poolAddress = await getContractAddress(web3, 'RewardPool');
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);
  const trxOverrides = getTrxOverrides(options);

  console.log("WITHDRAW", asset, assetAddress, nAmount);
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
        amount: amount,
      }],
    }),
  );
}

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
          symbol: asset
        }],
      }
    },
  );

  console.log("WITHDRAW_REWARDS", asset, assetAddress);
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

}

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
}
