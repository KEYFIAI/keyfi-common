
const PubSub = require('pubsub-js');

exports.Web3Events = {
  accountsChanged: 'accountsChanged',
};


let eventsLoaded = {};

exports.loadMetamaskEvents = () => {
  if (eventsLoaded['metamask']) {
    return;
  }

  eventsLoaded['metamask'] = true;

  const ethereum = window.ethereum;

  ethereum.on("accountsChanged", (accounts) => {
    PubSub.publish(Web3Events.accountsChanged, accounts);
  });
}

exports.loadWalletConnectEvents = (provider)=> {
  if (eventsLoaded['walletConnect']) {
    return;
  }

  eventsLoaded['walletConnect'] = true;

  // Subscribe to accounts change
  provider.on(Web3Events.accountsChanged, (accounts) => {
    PubSub.publish(Web3Events.accountsChanged, accounts);
  });

  // Subscribe to chainId change
  // provider.on("session_update", (error, payload) => {
  //     console.log("XXX", error, payload);
  // });

  // // Subscribe to session connection
  // provider.on("connect", () => {
  //   console.log("XXX connect");
  // });

  // // Subscribe to session disconnection
  // provider.on("disconnect", (error, payload) => {
  //   console.log("XXX", error, payload);
  // });
}

module.exports={
  PubSub
}
