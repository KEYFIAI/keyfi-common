// import erc20Abi from './erc20.abi.json';
// export * from './balance';
// export { erc20Addresses } from './constants';
// export * from './ens';
// export * from './helpers';
// export * from './math';
// export * from './web3';
// export * from './web3Events';
// export {
//   erc20Abi,
// };

const erc20Abi = require("./erc20.abi.json")
const balance = require("./balance")
const erc20Addresses = require("./constants")
const ens = require("./ens")
const helpers = require("./helpers")
// const math = require("./math")
// const web3 = require("./web3")
// const web3Events = require("./web3Events")

module.exports={
  erc20Abi,
  balance,
  erc20Addresses,
  ens,
  helpers,
  // math,
  // web3,
  // web3Events
}

