const WalletConnectProvider = require("@walletconnect/web3-provider");
const BigNumber = require("bignumber.js");
const Web3 = require("web3");
const networkNames = require("./constants").networkNames;
const Erc20Abi = require("./erc20.abi.json");
const WalletProviderId = require("../../constants").WalletProviderId;
const loadMetamaskEvents = require("./web3Events").loadMetamaskEvents;
const loadWalletConnectEvents = require("./web3Events").loadWalletConnectEvents;
const isMobile = require("../../utils").isMobile;

const createWeb3InNodeJS = () => {
  const ethereumNodeUrl = process.env.ETHEREUM_HTTP_PROVIDER;
  if (!ethereumNodeUrl) {
    throw new Error("ETHEREUM_HTTP_PROVIDER is not specified!");
  }

  const privateKey = process.env.ETHEREUM_PRIVATE_KEY;
  if (!privateKey) {
    throw new Error("ETHEREUM_PRIVATE_KEY is not specified!");
  }

  const web3 = new Web3(ethereumNodeUrl);
  const account = web3.eth.accounts.wallet.add(privateKey);
  web3.eth.defaultAccount = account.address;

  return web3;
};

async function createInfuraWeb3() {
  const infuraKey = process.env.REACT_APP_INFURA_KEY;
  if (!infuraKey) {
    throw new Error("REACT_APP_INFURA_KEY is not specified!");
  }

  const infuraUrl = `https://mainnet.infura.io/v3/${infuraKey}`;
  return new Web3(infuraUrl);
}

async function createMetamaskWeb3() {
  if (!window.ethereum) {
    throw new Error("There is no 'window.ethereum'. Do you have MetaMask?");
  }

  const web3 = new Web3(window.ethereum);

  await window.ethereum.enable();

  web3.eth.defaultAccount = window.ethereum.selectedAddress;

  loadMetamaskEvents();

  return web3;
}

async function createWalletConnectWeb3() {
  const provider = new WalletConnectProvider({
    infuraId: process.env.REACT_APP_INFURA_KEY,
  });

  // provider.disconnect();

  // It will launch the wallet connect QR Code modal
  await provider.enable();

  const web3 = new Web3(provider);
  web3.eth.defaultAccount = provider.accounts[0];

  window.send = (e, t) => {
    return provider.send(e, t);
  };

  loadWalletConnectEvents(provider);

  return web3;
}

function goToSelfkey(params, protocol = "selfkey") {
  const anchor = document.createElement("a");
  anchor.href = `${protocol}://${params}`;
  anchor.target = "_blank";
  document.body.appendChild(anchor);
  anchor.click();
}

function getSelfkeyDeeplink() {
  let protocol = "selfkey";

  if (isMobile()) {
    return `${protocol}://wc`;
  }

  if (process.env.NODE_ENV === "development") {
    protocol += "-dev";
  }

  return `${protocol}://wallet-connect`;
}

async function creatSelfKeyWeb3() {
  if (!isMobile()) {
    localStorage.setItem("walletconnect", null);
  }
  const provider = new WalletConnectProvider({
    infuraId: process.env.REACT_APP_INFURA_KEY,
    qrcode: false,
  });

  provider.connector.on("display_uri", (err, payload) => {
    const uri = payload.params[0];
    if (isMobile()) {
      goToSelfkey(`wc?uri=${uri}`);
    } else {
      goToSelfkey(
        `wallet-connect/${uri}`,
        `selfkey${process.env.NODE_ENV === "development" ? "-dev" : ""}`
      );
    }
  });

  localStorage.setItem(
    "WALLETCONNECT_DEEPLINK_CHOICE",
    JSON.stringify({
      name: "SelfKey",
      href: getSelfkeyDeeplink(),
    })
  );
  await provider.enable();

  if (!isMobile()) {
    const web3 = new Web3(provider);
    web3.eth.defaultAccount = provider.accounts[0];
    window.send = (e, t) => {
      return provider.send(e, t);
    };
    loadWalletConnectEvents(provider, provider.accounts[0]);
    return web3;
  }
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      if (provider.connected) {
        clearInterval(interval);
        const web3 = new Web3(provider);
        web3.eth.defaultAccount = provider.accounts[0];

        window.send = (e, t) => {
          return provider.send(e, t);
        };

        loadWalletConnectEvents(provider, provider.accounts[0]);

        resolve(web3);
      }
    }, 1000);
  });
}

const createWeb3InBrowser = (providerId) => {
  if (providerId === WalletProviderId.Infura) {
    return createInfuraWeb3();
  }

  if (providerId === WalletProviderId.Metamask) {
    return createMetamaskWeb3();
  }

  if (providerId === WalletProviderId.SelfKey) {
    return creatSelfKeyWeb3();
  }

  if (providerId === WalletProviderId.WalletConnect) {
    return createWalletConnectWeb3();
  }

  throw new Error(`Wallet provider ${providerId} not supported`);
};

let _web3 = null;
let _providerId = null;
let _providerLibrary = null;

const getWeb3 = async (providerId, init, library, account) => {
  if (library || _providerLibrary) {
    if (library) {
      library.eth.defaultAccount = account;
      _providerLibrary = library;
    }
    return _providerLibrary;
  } else {
    if (_web3) {
      if (!providerId || (providerId && providerId === _providerId)) {
        return _web3;
      }
    }
    // prevent repeat requests to desktop wallet
    if (init && providerId === WalletProviderId.SelfKey && !isMobile()) {
      return;
    }

    _providerId = providerId;

    if (typeof window === "undefined") {
      _web3 = createWeb3InNodeJS();
    } else {
      _web3 = await createWeb3InBrowser(providerId);
    }

    return _web3;
  }
};

const resetWeb3 = () => {
  _web3 = null;
  _providerLibrary = null;
  resetNetwork();
};

const approveErc20IfNeeded = async (
  web3,
  assetAddress,
  receiver,
  amount,
  trxOverrides,
  options = {}
) => {
  const erc20Contract = new web3.eth.Contract(Erc20Abi, assetAddress);

  const allowance = new BigNumber(
    await erc20Contract.methods
      .allowance(getCurrentAccountAddress(web3), receiver)
      .call()
  );

  const notEnough = allowance.lt(amount);
  const notZero = allowance.gt(0);

  const { pendingCallbackParams } = options;

  if (notEnough) {
    if (notZero) {
      // Set approved amount to 0 first
      await erc20Contract.methods.approve(receiver, 0).send(
        {
          from: getCurrentAccountAddress(web3),
          ...trxOverrides,
        },
        pendingCallbackParams
          ? getPendingTrxCallback(pendingCallbackParams.callback, {
              platform: pendingCallbackParams.platform,
              type: "approve reset",
              assets: pendingCallbackParams.assets.map((assetInfo) => ({
                symbol: assetInfo.symbol,
                amount: 0,
              })),
            })
          : // We need to provide any function as callback or web3 will fail with:
            // Error: "No 'from' address specified..."
            () => {}
      );
    }

    return erc20Contract.methods.approve(receiver, amount).send(
      {
        from: getCurrentAccountAddress(web3),
        ...trxOverrides,
      },
      pendingCallbackParams
        ? getPendingTrxCallback(pendingCallbackParams.callback, {
            platform: pendingCallbackParams.platform,
            type: "approve",
            assets: pendingCallbackParams.assets,
          })
        : // We need to provide any function as callback or web3 will fail with:
          // Error: "No 'from' address specified..."
          () => {}
    );
  }
};

let _network = null;

const getNetwork = async (web3) => {
  if (_network) {
    return _network;
  }

  if (!web3) {
    web3 = await getWeb3();
  }

  const chainId = await web3.eth.net.getId();

  let name = networkNames[chainId];
  if (!name) {
    name = "unknown";
  }

  _network = { chainId, name };

  if (_providerId === WalletProviderId.Metamask) {
    window.ethereum.once("chainChanged", () => {
      resetNetwork();
    });
  }

  return _network;
};

const resetNetwork = () => {
  _network = null;
};

const getTrxOverrides = (options) => {
  const overrides = {};
  if (options.gasPrice !== undefined) overrides.gasPrice = options.gasPrice;
  if (options.nonce !== undefined) overrides.nonce = options.nonce;
  if (options.gas !== undefined) overrides.gas = options.gas;
  return overrides;
};

const  promisifyBatchRequest = (batch, requestFn, params = {}) => {
  return new Promise((resolve, reject) => {
    const req = requestFn(params, (error, result) => {
      if (error) {
        reject(error);
      }

      resolve(result);
    });
    batch.add(req);
  });
};

const REQUEST_TYPE_CALL = "call";
const REQUEST_TYPE_SEND = "send";

const web3BatchRequest = (
  web3,
  method,
  reqType,
  methodParamsArray,
  requestParamsArray = null,
  catchFunction = null
) => {
  if (![REQUEST_TYPE_CALL, REQUEST_TYPE_SEND].includes(reqType)) {
    throw new Error(`Wrong type of request: '${reqType}'`);
  }

  const batch = new web3.BatchRequest();

  const promises = methodParamsArray.map((params, index) => {
    return promisifyBatchRequest(
      batch,
      method(...params)[reqType].request,
      requestParamsArray ? requestParamsArray[index] : undefined
    );
  });

  batch.execute();
  return Promise.all(
    catchFunction ? promises.map((p) => p.catch(catchFunction)) : promises
  );
};

const getCurrentAccountAddress = (web3) => web3.eth.defaultAccount;

const getPendingTrxCallback = (callback, trxProperties) => {
  if (!callback) {
    // We need to provide any function as callback or web3 will fail with:
    // Error: "No 'from' address specified..."
    return () => {};
  }

  return (error, trxHash) => {
    if (!error) {
      callback({
        ...trxProperties,
        hash: trxHash,
      });
    }
  };
};

module.exports={
  createWeb3InNodeJS,
  createInfuraWeb3,
  createMetamaskWeb3,
  createWalletConnectWeb3,
  createWeb3InBrowser,
  getWeb3,
  resetWeb3,
  approveErc20IfNeeded,
  getNetwork,
  resetNetwork,
  getTrxOverrides,
  promisifyBatchRequest,
  web3BatchRequest,
  getCurrentAccountAddress,
  getPendingTrxCallback
}