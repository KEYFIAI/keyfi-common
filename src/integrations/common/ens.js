const ENS = require('ethereum-ens');
const getWeb3 = require("./web3").getWeb3;

let ensProvider = null;
const getEnsProvider = async () => {
  if (!ensProvider) {
    const web3 = await getWeb3();
    ensProvider = new ENS(web3.currentProvider);
  }

  return ensProvider;
};

const resolveEns = async (ensAddress) => {
  const ens = await getEnsProvider();
  return ens.resolver(ensAddress).addr();
};

module.exports={
  resolveEns
}