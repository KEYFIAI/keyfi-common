import { getWeb3, getNetwork } from "./web3";

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

export const makeBatchRequest = async (calls) => {
  const web3 = await getWeb3();
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
