import LendingPoolAbi from "./abi/LendingPool.abi.json";
import ATokenAbi from "./abi/AToken.abi.json";
import { getContractAddress, getReserves, isSupportedNetwork } from "./address";
import {
  approveErc20IfNeeded,
  denormalizeAmount,
  getCurrentAccountAddress,
  getPendingTrxCallback,
  getNetwork,
  getWeb3,
  normalizeAmount,
  promisifyBatchRequest,
} from "../common";

const GAS_LIMIT = 750000;
const PENDING_CALLBACK_PLATFORM = "aave";

export const getLendingPoolContract = async (web3) => {
  const lpAddress = await getContractAddress(web3, "LendingPool");
  return new web3.eth.Contract(LendingPoolAbi, lpAddress);
};

const getTrxOverrides = async (options) => {
  return {
    gasPrice: options.gasPrice,
    nonce: options.nonce,
  };
};

export async function getAddress(contractName) {
  return getContractAddress(await getWeb3(), contractName);
}

export const getSupportedAssets = async () => {
  const web3 = await getWeb3();
  return Object.keys(await getReserves(web3));
};

export async function deposit(asset, amount, options = {}) {
  const referralCode = options.referralCode || "0";
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const assetAddress = await this.getAddress(asset);
  if (!assetAddress) {
    throw new Error(`Asset is not supported: '${asset}'`);
  }

  const lp = await getLendingPoolContract(web3);
  const trxOverrides = getTrxOverrides(options);

  if (asset === "ETH") {
    // Gas cost on Ropsten: 230000+
    return lp.methods.deposit(assetAddress, nAmount, referralCode).send(
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
    const lpCoreAddress = await this.getAddress("LendingPoolCore");

    await approveErc20IfNeeded(
      web3,
      assetAddress,
      lpCoreAddress,
      nAmount,
      {
        from: getCurrentAccountAddress(web3),
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

    return lp.methods.deposit(assetAddress, nAmount, referralCode).send(
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
            amount: amount,
          },
        ],
      })
    );
  }
}

export async function withdraw(asset, amount, options = {}) {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const aTokenAddress = await this.getAddress("a" + asset);
  if (!aTokenAddress) {
    throw new Error(`Failed to get 'a${asset}' contract address`);
  }

  const aTokenContract = new web3.eth.Contract(ATokenAbi, aTokenAddress);

  // Gas cost on Ropsten: 530000+
  return aTokenContract.methods.redeem(nAmount).send(
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
}

export async function borrow(asset, amount, options = {}) {
  const interestRateMode = options.interestRateMode || "2";
  const referralCode = options.referralCode || "0";
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const assetAddress = await this.getAddress(asset);
  if (!assetAddress) {
    throw new Error(`Asset is not supported: '${asset}'`);
  }

  const lp = await getLendingPoolContract(web3);
  const trxOverrides = await getTrxOverrides(options);

  return lp.methods
    .borrow(assetAddress, nAmount, interestRateMode, referralCode)
    .send(
      {
        from: getCurrentAccountAddress(web3),
        gas: GAS_LIMIT,
        ...trxOverrides,
        nonce: trxOverrides.nonce ? trxOverrides.nonce + 1 : undefined,
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
}

export async function getBalance(address = null) {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);

  if (!(await isSupportedNetwork(network))) {
    return {};
  }

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const lp = await getLendingPoolContract(web3);
  const reserves = await getReserves(web3);

  const balance = {};
  const batch = new web3.BatchRequest();

  const promises = Object.entries(reserves).map(
    ([reserveSymbol, reserveAddress]) => {
      const p = promisifyBatchRequest(
        batch,
        lp.methods.getUserReserveData(reserveAddress, address).call.request
      );
      return p.then((result) => {
        balance[reserveSymbol] = denormalizeAmount(
          network,
          reserveSymbol,
          result.currentATokenBalance
        );
      });
    }
  );

  batch.execute();
  await Promise.all(promises);

  return balance;
}

export async function getUserAccountData(address = null) {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);

  if (!(await isSupportedNetwork(network))) {
    return {};
  }

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const lp = await getLendingPoolContract(web3);
  const user = await lp.methods.getUserAccountData(address).call();

  return user;
}
