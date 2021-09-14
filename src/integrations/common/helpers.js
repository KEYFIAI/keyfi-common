import { getWeb3, getNetwork } from "./web3";

// Platform constants
import { contractAddresses } from "../1inch/constants";
import {
  contractAddresses as apeswap,
  supportedPairs as apeswapPairs,
} from "../apeswap/constants";
import { contractAddresses as comp } from "../compound/constants";
import { contractAddresses as dYdX } from "../dydx/constants";
import { contractAddresses as keyfi } from "../keyfipool/constants";
import { contractAddressesv2 as keyfiv2 } from "../keyfipool/constants";
import {
  contractAddresses as pancakeswap,
  supportedPairs as pancakeswapPairs,
  supportedPairsv2 as pancakeswapPairsv2,
} from "../pancakeswap/constants";
import {
  contractAddresses as uniswap,
  availablePairs as uniswapPairs,
} from "../uniswap/constants/constants";
import { addresses as aave } from "../aave/constants/address";
import { addresses as aavev2 } from "../aave/constants/constantsv2";
import { addresses as curve } from "../curve/api";

export const processWeb3OrNetworkArgument = async (web3OrNetwork) => {
  if (!web3OrNetwork) {
    const web3 = await getWeb3();
    return getNetwork(web3);
  }

  if (web3OrNetwork.chainId && web3OrNetwork.name) {
    return web3OrNetwork;
  }

  return getNetwork(web3OrNetwork);
};

export const makeBatchRequest = async (calls, web3) => {
  if (!web3) {
    web3 = await getWeb3();
  }
  let batch = new web3.BatchRequest();

  let promises = calls.map((call) => {
    return new Promise((res, rej) => {
      let req = call.request((err, data) => {
        if (err) rej(err);
        else res(data);
      });
      batch.add(req);
    });
  });
  batch.execute();

  return Promise.all(promises);
};

/**
 * Creates an array with numbers from start to end. Example - [0,1,2]
 * @param {number} start Start number.
 * @param {number} end End number.
 */
export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

/**
 * Checks if the address is a contract
 * @param {string} address Contract address
 * @return {boolean}
 */
export const isContract = async (address) => {
  const web3 = await getWeb3();
  const data = await web3.eth.getCode(address);
  return data !== "0x";
};

/**
 * Returns a contract platform name if the platform is integrated in the KeyFi app
 * @param {string} address Contract address
 * @return {string} if contract is used in KeyFi app - returns platform name
 */
export const getContractPlatform = (address) => {
  address = address.toLowerCase();
  if (contractAddresses.mainnet["1inch-exchange"].toLowerCase() === address) {
    return "1inch";
  }
  if (
    Object.values(aave[1]).some(
      (item) => typeof item === "string" && item.toLowerCase() === address
    ) ||
    Object.values(aavev2.mainnet).some(
      (item) => typeof item === "string" && item.toLowerCase() === address
    )
  ) {
    return "Aave";
  }

  if (
    apeswap["bsc-mainnet"].Factory.toLowerCase() === address ||
    apeswap["bsc-mainnet"].Router.toLowerCase() === address ||
    apeswapPairs.some(({ id }) => id.toLowerCase() === address)
  ) {
    return "ApeSwap";
  }

  if (
    Object.values(comp.mainnet)
      .slice(0, 8)
      .some((item) => item.toLowerCase() === address)
  ) {
    return "Compound";
  }

  if (
    Object.values(curve.contracts).some(
      (item) => item.toLowerCase() === address
    )
  ) {
    return "Curve";
  }

  if (
    Object.values(dYdX.mainnet)
      .slice(0, 3)
      .some((item) => item.toLowerCase() === address)
  ) {
    return "dYdX";
  }

  if (
    keyfi.mainnet.RewardPool.toLowerCase() === address ||
    keyfi["bsc-mainnet"].RewardPool.toLowerCase() === address ||
    keyfiv2.mainnet.RewardPool.toLowerCase() === address
  ) {
    return "KeyFi";
  }

  if (
    Object.values(pancakeswap["bsc-mainnet"])
      .slice(0, 5)
      .some((item) => item.toLowerCase() === address) ||
    pancakeswapPairs.some(({ id }) => id.toLowerCase() === address) ||
    pancakeswapPairsv2.some(({ id }) => id.toLowerCase() === address)
  ) {
    return "PancakeSwap";
  }

  if (
    Object.values(uniswap.mainnet).some(
      (item) => item.toLowerCase() === address
    ) ||
    uniswapPairs.mainnet.some(
      ({ address }) => address.toLowerCase() === address
    )
  ) {
    return "Uniswap";
  }

  return undefined;
};
