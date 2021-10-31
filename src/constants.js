import ETHList1 from "./tokenLists/tokensListETH1.json";
import ETHList2 from "./tokenLists/tokensListETH2.json";
import ETHList3 from "./tokenLists/tokensListETH3.json";
export const WalletProviderId = {
  Infura: "Infura",
  Metamask: "Metamask",
  Coinbase: "Coinbase",
  WalletConnect: "WalletConnect",
  SelfKey: "SelfKey",
};

export const ERC20Tokens = [
  ...ETHList1.tokens,
  ...ETHList2.tokens,
  ...ETHList3.tokens,
];
