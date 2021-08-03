import {
  approveErc20IfNeeded,
  denormalizeAmount,
  getCurrentAccountAddress,
  getNetwork,
  getPendingTrxCallback,
  getWeb3,
  normalizeAmount,
  promisifyBatchRequest,
} from "../common";
import {
  fetchContractDynamicAddress,
  getContractAddress,
  getReserveAddress,
  getReserves,
  isSupportedNetwork,
} from "./constants/constantsv2";

import LendingPoolABI from "./abi/LendingPoolv2.abi.json";
import ProtocolDataABI from "./abi/ProtocolDataProviderv2.abi.json";
import WETHGatewayABI from "./abi/WETHGatewayv2.abi.json";

const GAS_LIMIT = 750000;
const PENDING_CALLBACK_PLATFORM = "aave";

export const getLendingPoolContract = async (web3) => {
  const lpAddress = await fetchContractDynamicAddress(web3, "LendingPool");
  return new web3.eth.Contract(LendingPoolABI, lpAddress);
};

export const getProtocolDataContract = async (web3) => {
  const lpAddress = await getContractAddress("ProtocolData");
  return new web3.eth.Contract(ProtocolDataABI, lpAddress);
};

export const getWETHGatewayContract = async (web3) => {
  const WETHGatewayAddress = await getContractAddress("WETHGateway");
  return new web3.eth.Contract(WETHGatewayABI, WETHGatewayAddress);
};

const getTrxOverrides = async (options) => {
  return {
    gasPrice: options.gasPrice,
    nonce: options.nonce,
  };
};

export const getAddress = (asset) => {
  return getReserveAddress(asset);
};

export const getSupportedAssets = async () => {
  const web3 = await getWeb3();
  return Object.keys(await getReserves(web3));
};

export async function deposit(asset, amount, options = {}) {
  const referralCode = "0";
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const nAmount = normalizeAmount(network, asset, amount);

  const assetAddress = await getAddress(asset);
  if (!assetAddress) {
    throw new Error(`Asset is not supported: '${asset}'`);
  }

  const lp = await getLendingPoolContract(web3);
  const trxOverrides = getTrxOverrides(options);
  const userAddress = getCurrentAccountAddress(web3);
  const lpAddress = await getContractAddress("LendingPool", web3);

  if (asset === "ETH") {
    // Gas cost on Ropsten: 230000+
    const gateway = await getWETHGatewayContract(web3);

    return gateway.methods
      .depositETH(lpAddress, userAddress, referralCode)
      .send(
        {
          from: userAddress,
          sender: userAddress,
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
    await approveErc20IfNeeded(
      web3,
      assetAddress,
      lpAddress,
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

    return lp.methods
      .deposit(assetAddress, nAmount, userAddress, referralCode)
      .send(
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

export const getBorrowAssets = async () => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const reserves = await getReserves(web3);

  if (!(await isSupportedNetwork(network))) {
    return [];
  }

  const lp = await getLendingPoolContract(web3);

  const borrowAssets = [];
  const batch = new web3.BatchRequest();

  const promises = Object.entries(reserves).map(
    ([reserveSymbol, { address }]) => {
      const p = promisifyBatchRequest(
        batch,
        lp.methods.getReserveData(address).call.request
      );
      return p.then((result) => {
        borrowAssets.push({
          symbol: reserveSymbol,
          variableAPY: denormalizeAmount(
            network,
            reserveSymbol,
            result.currentVariableBorrowRate,
            27
          ),
          stableAPY: denormalizeAmount(
            network,
            reserveSymbol,
            result.currentStableBorrowRate,
            27
          ),
        });
      });
    }
  );

  batch.execute();
  await Promise.all(promises);

  return borrowAssets;
};

export const getBorrowedBalance = async (address = null) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const reserves = await getReserves(web3);

  if (!(await isSupportedNetwork(network))) {
    return {};
  }

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const protocolData = await getProtocolDataContract(web3);

  const borrowBalance = {};
  const batch = new web3.BatchRequest();

  const promises = Object.entries(reserves).map(
    ([reserveSymbol, { address: reserveAddress }]) => {
      const p = promisifyBatchRequest(
        batch,
        protocolData.methods.getUserReserveData(reserveAddress, address).call
          .request
      );
      return p.then((result) => {
        borrowBalance[reserveSymbol] = denormalizeAmount(
          network,
          reserveSymbol,
          result.currentStableDebt,
          reserves[reserveSymbol].decimals
        );
      });
    }
  );
  batch.execute();
  await Promise.all(promises);

  return borrowBalance;
};

export const getBalance = async (address = null) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const reserves = await getReserves(web3);

  if (!(await isSupportedNetwork(network))) {
    return {};
  }

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const protocolData = await getProtocolDataContract(web3);

  const borrowBalance = {};
  const batch = new web3.BatchRequest();

  const promises = Object.entries(reserves).map(
    ([reserveSymbol, { address: reserveAddress }]) => {
      const p = promisifyBatchRequest(
        batch,
        protocolData.methods.getUserReserveData(reserveAddress, address).call
          .request
      );
      return p.then((result) => {
        borrowBalance[reserveSymbol] = denormalizeAmount(
          network,
          reserveSymbol,
          result.currentATokenBalance,
          reserves[reserveSymbol].decimals
        );
      });
    }
  );
  batch.execute();
  await Promise.all(promises);

  return borrowBalance;
};

export const getUserAccountData = async (address = null) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  if (!address) {
    address = await getCurrentAccountAddress(web3);
  }

  const lp = await getLendingPoolContract(web3);
  const user = await lp.methods.getUserAccountData(address).call();

  console.log(user);

  return {
    availableBorrowsETH: denormalizeAmount(
      network,
      "ETH",
      user.availableBorrowsETH
    ),
    currentLiquidationThreshold: user.currentLiquidationThreshold,
    healthFactor: user.healthFactor,
    ltv: user.ltv,
    totalCollateralETH: denormalizeAmount(
      network,
      "ETH",
      user.totalCollateralETH
    ),
    totalDebtETH: denormalizeAmount(network, "ETH", user.totalDebtETH),
  };
};

export const getAllReservesTokens = async (address = null) => {
  const web3 = await getWeb3();
  const network = await getNetwork(web3);
  const reserves = await getReserves(web3);

  if (!(await isSupportedNetwork(network))) {
    return {};
  }

  if (!address) {
    address = getCurrentAccountAddress(web3);
  }

  const protocolData = await getProtocolDataContract(web3);

  const data = await protocolData.methods.getAllReservesTokens().call();

  return data;
};
