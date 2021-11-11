import BigNumber from "bignumber.js";
import { ERC20Tokens, BEP20Tokens } from "../../constants";
import { decimals } from "./constants";

export const normalizeAmount = (
  network,
  assetSymbol,
  amount,
  reversed = false,
  decimalNumber
) => {
  if (!decimals[network.name]) {
    throw new Error(
      `There is no decimals for network chainId=${network.chainId}` +
        `, name='${network.name}'`
    );
  }

  const currentDecimals = () => {
    if (decimalNumber) return decimalNumber;
    if (decimals[network.name][assetSymbol])
      return decimals[network.name][assetSymbol];

    return network.name === "bsc-mainnet"
      ? Number(
          BEP20Tokens.find(
            (token) => token.symbol.toLowerCase() === assetSymbol.toLowerCase()
          ).decimals
        )
      : Number(
          ERC20Tokens.find(
            (token) => token.symbol.toLowerCase() === assetSymbol.toLowerCase()
          ).decimals
        );
  };

  if (isNaN(currentDecimals())) {
    throw new Error(
      `There is no decimals for currency '${assetSymbol}' on network: ` +
        `chainId=${network.chainId}, name=${network.name}`
    );
  }

  const newAmount = new BigNumber(amount);
  if (reversed) {
    return newAmount.shiftedBy(-currentDecimals()).toFixed();
  }

  return newAmount.shiftedBy(currentDecimals()).integerValue().toFixed();
};

export const denormalizeAmount = (
  network,
  assetSymbol,
  amount,
  decimalNumber
) => normalizeAmount(network, assetSymbol, amount, true, decimalNumber);
