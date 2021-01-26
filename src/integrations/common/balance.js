import axios from 'axios';

import {
  getCurrentAccountAddress,
  getNetwork,
  getWeb3,
  promisifyBatchRequest,
} from './web3';
import { denormalizeAmount } from './math';
import { coingeckoAssetsIds, erc20Addresses } from './constants';
import erc20Abi from './erc20.abi.json';

const getBalanceErc20 = async (assetOrAssets, holderAddress = null) => {
  let assetsOrAddresses = assetOrAssets;
  if (typeof assetsOrAddresses === 'string') {
    assetsOrAddresses = [assetsOrAddresses];
  }

  const web3 = await getWeb3();

  if (!holderAddress) {
    holderAddress = getCurrentAccountAddress(web3);
  }

  const net = await getNetwork(web3);
  const addresses = erc20Addresses[net.name];
  if (!addresses) {
    throw new Error(
      `Network chainId=${net.chainId}, name=${net.name} is not supported!`,
    );
  }

  const assetsInfo = [];
  for (const assetOrAddress of assetsOrAddresses) {
    if (web3.utils.isAddress(assetOrAddress)) {
      assetsInfo.push({
        contractAddress: assetOrAddress,
        symbol: null,
      });
    } else {
      const address = addresses[assetOrAddress];
      if (!address) {
        throw new Error(
          `Cannot find token '${assetOrAddress}' on '${net.name}' network!`,
        );
      }

      assetsInfo.push({
        contractAddress: address,
        symbol: assetOrAddress
      });
    }
  }

  const batch = new web3.BatchRequest();
  const promises = [];

  for (const { contractAddress, symbol } of assetsInfo) {
    const contract = new web3.eth.Contract(erc20Abi, contractAddress);
    const promise = promisifyBatchRequest(
      batch,
      contract.methods.balanceOf(holderAddress).call.request,
    );
    promises.push(
      symbol ? promise.then((b) => denormalizeAmount(symbol, b)) : promise,
    );
  }

  batch.execute();

  const results = await Promise.all(promises);
  if (typeof assetOrAssets === 'string') {
    return results[0];
  }
  return results;
};

const getBalanceEth = async (holderAddress) => {
  const web3 = await getWeb3();

  if (!holderAddress) {
    holderAddress = getCurrentAccountAddress(web3);
  }

  const balance = await web3.eth.getBalance(holderAddress);
  return denormalizeAmount('ETH', balance);
};

const ZERO_USD_PRICE_TOKENS = ['KEYFI', 'KEYFIUSDCLP'];

const getUsdPrice = async (assetOrAssets) => {
  let assets = assetOrAssets;
  if (typeof assetOrAssets === 'string') {
    assets = [assets];
  }

  assets = assets.map((symbol) => {
    const coingeckoId = coingeckoAssetsIds[symbol] || null;

    if (!coingeckoId && !ZERO_USD_PRICE_TOKENS.includes(symbol)) {
      throw new Error(`Asset is not supported: '${symbol}'`);
    }

    return {
      symbol,
      coingeckoId,
    }
  });

  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${
      assets.map((x) => x.coingeckoId).filter((x) => x).join(',')
    }&vs_currencies=usd`,
  );

  assets.forEach((asset) => {
    const { coingeckoId } = asset;
    if (coingeckoId) {
      asset.usdPrice = response.data[coingeckoId].usd;
    } else {
      asset.usdPrice = 0;
    }
  });

  if (typeof assetOrAssets === 'string') {
    return assets[0].usdPrice;
  }

  return assets.reduce((acc, asset) => {
    acc[asset.symbol] = asset.usdPrice;
    return acc;
  }, {});
};

export {
  getBalanceErc20,
  getBalanceEth,
  getUsdPrice,
};
