import axios from "axios";
import { getCurrentAccountAddress, getWeb3 } from "../common";

const ALKEMI_URL = "https://api.alkemi.network";

export const getAccount = async (
  accountAddress = "0xca3e3ff71782cda9fb5a7f2234287061f141e881",
  options = {}
) => {
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

export const getBorrowed = async (
  accountAddress = "0xca3e3ff71782cda9fb5a7f2234287061f141e881",
  options = {}
) => {
  const web3 = options.web3 ? options.web3 : await getWeb3();
  if (!accountAddress) {
    accountAddress = getCurrentAccountAddress(web3);
  }
  const account = await getAccount(accountAddress, { web3 });

  return account.borrow;
};

export const getSupply = async (
  accountAddress = "0xca3e3ff71782cda9fb5a7f2234287061f141e881",
  options = {}
) => {
  const web3 = options.web3 ? options.web3 : await getWeb3();
  if (!accountAddress) {
    accountAddress = getCurrentAccountAddress(web3);
  }
  const supplyBalance = {};
  const { supply } = await getAccount(accountAddress, { web3 });

  if (supply) {
    for (const asset of supply) {
      supplyBalance[asset.symbol] = asset.amountToken;
    }
  }
  

  return supplyBalance;
};
