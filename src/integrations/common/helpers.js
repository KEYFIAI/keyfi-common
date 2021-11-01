const Web3 = require("web3");
const getWeb3 = require("./web3").getWeb3;
const getNetwork = require("./web3").getNetwork;

// Platform constants
const apeswap = require("../apeswap/constants").contractAddresses;
const apeswapPairs = require("../apeswap/constants").supportedPairs;
const pancakeswap = require("../pancakeswap/constants").contractAddresses ;
const pancakeswapPairs = require("../pancakeswap/constants").supportedPairs ;
const pancakeswapPairsv2 = require("../pancakeswap/constants").supportedPairsv2 ;
const uniswap = require("../uniswap/constants/constants").contractAddresses ;
const uniswapPairs = require("../uniswap/constants/constants").availablePairs ;
const contractAddresses = require("../1inch/constants").contractAddresses;
const comp = require("../compound/constants").contractAddresses ;
const dYdX = require("../dydx/constants").contractAddresses ;
const keyfi = require("../keyfipool/constants").contractAddresses ;
const keyfiv2 = require("../keyfipool/constants").contractAddressesv2 ;
const aave = require("../aave/constants/address").addresses ;
const aavev2 = require("../aave/constants/constantsv2").addresses ;
const curve= require("../curve/api").addresses;

// Token list
const ERC20List = require("../../tokenLists/tokensListETH1.json");
const ERC20List2 = require("../../tokenLists/tokensListETH2.json");
const ERC20List3 = require("../../tokenLists/tokensListETH3.json");

 const processWeb3OrNetworkArgument = async (web3OrNetwork) => {
  if (!web3OrNetwork) {
    const web3 = await getWeb3();
    return getNetwork(web3);
  }

  if (web3OrNetwork.chainId && web3OrNetwork.name) {
    return web3OrNetwork;
  }

  return getNetwork(web3OrNetwork);
};

 const makeBatchRequest = async (calls, web3) => {
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
 const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

/**
 * Returns address with correct capitalization
 * @param {string} address Address
 * @return {string} Address with correct capitalization
 */
 const getAddressSum = (address) => {
  const web3 = new Web3();
  return web3.utils.toChecksumAddress(address);
};

/**
 * Checks if the address is a contract
 * @param {string} address Contract address
 * @return {boolean}
 */
 const isContract = async (address) => {
  const web3 = await getWeb3();
  const data = await web3.eth.getCode(address);
  return data !== "0x";
};

/**
 * Returns a contract platform name if the platform is integrated in the KeyFi app
 * @param {string} address Contract address
 * @return {string} if contract is used in KeyFi app - returns platform name
 */
 const getContractPlatform = (address) => {
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
    uniswapPairs.mainnet.some((pair) => pair.address.toLowerCase() === address)
  ) {
    return "Uniswap";
  }

  return undefined;
};

 const getAddress = (symbol) => {
  symbol = symbol === "ETH" ? "WETH" : symbol;

  const tokenList = [
    ...ERC20List.tokens,
    ...ERC20List2.tokens,
    ...ERC20List3.tokens,
  ];

  const tokenObject = tokenList.find(
    (item) => item.symbol === symbol.toUpperCase()
  );
  if (tokenObject) {
    return getAddressSum(tokenObject.id);
  }
  return undefined;
};

module.exports={
  processWeb3OrNetworkArgument,
  makeBatchRequest,
  range,
  getAddressSum,
  isContract,
  getContractPlatform,
  getAddress
}