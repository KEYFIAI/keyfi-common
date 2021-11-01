const approveErc20IfNeeded = require("../common").approveErc20IfNeeded;
const getCurrentAccountAddress = require("../common").getCurrentAccountAddress;
const getNetwork = require("../common").getNetwork;
const getPendingTrxCallback = require("../common").getPendingTrxCallback;
const getTrxOverrides = require("../common").getTrxOverrides;
const getWeb3 = require("../common").getWeb3;
const normalizeAmount = require("../common").normalizeAmount;
const denormalizeAmount = require("../common").denormalizeAmount;
const processWeb3OrNetworkArgument = require("../common").processWeb3OrNetworkArgument;
const BigNumber = require("bignumber.js");
const rewardPoolAbi = require("./reward-pool.abi.json");
const contractAddresses = require("./constants").contractAddresses;
const getAccountLiquidity = require("../uniswap").getAccountLiquidity;
const getAccountLiquidityBSC = require("../pancakeswap").getAccountLiquidity;
const v2 = require("../pancakeswap").v2;
const GAS_LIMIT = 250000;
const PENDING_CALLBACK_PLATFORM = "keyfi rewardpool";

 const isSupportedNetwork = async (web3OrNetwork) => {
  const network = await processWeb3OrNetworkArgument(web3OrNetwork);
  return Boolean(contractAddresses[network.name]);
};

 const getContractAddress = async (web3, contractName) => {
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

 const getSupportedAssets = async (web3) => {
  if (!web3) {
    web3 = await getWeb3();
  }

  const network = await getNetwork(web3);

  const addresses = contractAddresses[network.name];
  if (!addresses) {
    throw new Error(
      `Network with chainId=${network.chainId} is not supported!`
    );
  }

  return Object.keys(addresses).filter((asset) => asset !== "RewardPool");
};

 const getBalance = async (accountAddress = null, options = {}) => {
  const web3 = options.web3 ? options.web3 : await getWeb3();
  const network = await getNetwork(web3);

  if (!(await isSupportedNetwork(network))) {
    return {};
  }

  if (!accountAddress) {
    accountAddress = getCurrentAccountAddress(web3);
  }

  const poolAddress = await getContractAddress(web3, "RewardPool");
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);

  const balances = {};
  for (const asset of await getSupportedAssets(web3)) {
    const assetAddress = await getContractAddress(web3, asset);

    const assetBalance = await poolContract.methods
      .getBalance(assetAddress)
      .call();

    balances[asset] = denormalizeAmount(network, asset, assetBalance);
  }

  return balances;
};

/**
 * Returns balance with KEYFIUSDCLP amount replaced by KEYFI and USDC staked amount
 * Example:
 *  getBalance() -> { KEY: 100, KEYFIUSDCLP: 0.001 }
 *  getStaked()  -> { KEY: 100, KEYFI: 200, USDC: 20 }
 */
 const getStaked = async (accountAddress, onlyForLP = false) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  let balance = await getBalance(accountAddress, { web3 });

  if (network.chainId === 56) {
    if (onlyForLP) {
      balance = {
        KEYFIBUSD_LP: balance["KEYFIBUSD_LP"],
        KEYFIBUSDLPv2: balance["KEYFIBUSDLPv2"],
      };
    }
    if (BigNumber(balance.KEYFIBUSD_LP).gt(0)) {
      const pairBalance = balance.KEYFIBUSD_LP;
      delete balance["KEYFIBUSD_LP"];

      const pair = await getAccountLiquidityBSC("BUSD", "KEYFI", null, {
        balance: normalizeAmount(network, "KEYFIBUSD_LP", pairBalance),
      });

      balance.KEYFI = BigNumber(balance.KEYFI ? balance.KEYFI : 0)
        .plus(pair.KEYFI)
        .toFixed();
      balance.BUSD = BigNumber(balance.BUSD ? balance.BUSD : 0)
        .plus(pair.BUSD)
        .toFixed();
    }
    if (BigNumber(balance.KEYFIBUSDLPv2).gt(0)) {
      const pairBalance = balance.KEYFIBUSDLPv2;
      delete balance["KEYFIBUSDLPv2"];

      const pair = await v2.getAccountLiquidity("BUSD", "KEYFI", null, {
        balance: normalizeAmount(network, "KEYFIBUSDLPv2", pairBalance),
      });

      balance.KEYFI = BigNumber(balance.KEYFI ? balance.KEYFI : 0)
        .plus(pair.KEYFI)
        .toFixed();
      balance.BUSD = BigNumber(balance.BUSD ? balance.BUSD : 0)
        .plus(pair.BUSD)
        .toFixed();
    }
  } else {
    if (onlyForLP) {
      balance = {
        KEYFIUSDCLP: balance["KEYFIUSDCLP"],
      };
    }

    if (BigNumber(balance.KEYFIUSDCLP).gt(0)) {
      const pairBalance = balance.KEYFIUSDCLP;
      delete balance["KEYFIUSDCLP"];

      const pair = await getAccountLiquidity("USDC", "KEYFI", null, {
        balance: normalizeAmount(network, "KEYFIUSDCLP", pairBalance),
      });

      balance.KEYFI = BigNumber(balance.KEYFI ? balance.KEYFI : 0)
        .plus(pair.KEYFI)
        .toFixed();
      balance.USDC = BigNumber(balance.USDC ? balance.USDC : 0)
        .plus(pair.USDC)
        .toFixed();
    }
  }
  return balance;
};

 const deposit = async (asset, amount, options = {}) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const assetAddress = await getContractAddress(web3, asset);
  const poolAddress = await getContractAddress(web3, "RewardPool");
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
        assets: [
          {
            symbol: asset,
            amount,
          },
        ],
      },
    }
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
      type: "deposit",
      assets: [
        {
          symbol: asset,
          amount,
        },
      ],
    })
  );
};

 const withdraw = async (asset, amount, options = {}) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const assetAddress = await getContractAddress(web3, asset);
  const poolAddress = await getContractAddress(web3, "RewardPool");
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
      type: "withdraw",
      assets: [
        {
          symbol: asset,
          amount,
        },
      ],
    })
  );
};

 const withdrawReward = async (asset, options = {}) => {
  const web3 = await getWeb3();

  const assetAddress = await getContractAddress(web3, asset);
  const poolAddress = await getContractAddress(web3, "RewardPool");
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
        assets: [
          {
            symbol: asset,
          },
        ],
      },
    }
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
      type: "withdraw_rewards",
      assets: [
        {
          symbol: asset,
        },
      ],
    })
  );
};

 const getRewards = async (accountAddress = null) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);

  if (!accountAddress) {
    accountAddress = getCurrentAccountAddress(web3);
  }

  const poolAddress = await getContractAddress(web3, "RewardPool");
  const poolContract = new web3.eth.Contract(rewardPoolAbi.abi, poolAddress);

  const rewards = {};
  for (const asset of await getSupportedAssets(web3)) {
    const assetAddress = await getContractAddress(web3, asset);

    const assetReward = await poolContract.methods
      .pendingReward(assetAddress, accountAddress)
      .call();

    rewards[asset] = denormalizeAmount(network, asset, assetReward);
  }

  return rewards;
};


module.exports={
  isSupportedNetwork,
  getContractAddress,
  getSupportedAssets,
  getBalance,
  getStaked,
  deposit,
  withdraw,
  withdrawReward,
  getRewards
}