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