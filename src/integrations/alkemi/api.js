const axios = require("axios");
const getCurrentAccountAddress = require("../common").getCurrentAccountAddress;
const getWeb3 = require("../common").getWeb3;

const ALKEMI_URL = "https://api.alkemi.network";

 const getAccount = async (accountAddress, options = {}) => {
  if (!accountAddress) {
    const web3 = options.web3 ? options.web3 : await getWeb3();
    accountAddress = getCurrentAccountAddress(web3);
  }

  const res = await axios.get(`${ALKEMI_URL}/accounts/${accountAddress}`, {
    validateStatus: false,
  });

  if (res.status === 404) {
    return {};
  }

  return res.data;
};

 const getBorrowed = async (accountAddress, options = {}) => {
  if (!accountAddress) {
    const web3 = options.web3 ? options.web3 : await getWeb3();
    accountAddress = getCurrentAccountAddress(web3);
  }
  const account = await getAccount(accountAddress);

  return account.borrow;
};

 const getSupply = async (accountAddress, options = {}) => {
  if (!accountAddress) {
    const web3 = options.web3 ? options.web3 : await getWeb3();
    accountAddress = getCurrentAccountAddress(web3);
  }
  const supplyBalance = {};
  const { supply } = await getAccount(accountAddress);

  if (supply) {
    for (const asset of supply) {
      supplyBalance[asset.symbol] = asset.amountToken;
    }
  }

  return supplyBalance;
};

module.exports={
  getAccount,
  getBorrowed,
  getSupply
}