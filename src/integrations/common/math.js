import BigNumber from "bignumber.js";
import { decimals } from "./constants";

export const normalizeAmount = (
  network,
  assetSymbol,
  amount,
  reversed=false,
) => {
  if (!decimals[network.name]) {
    throw new Error(
      `There is no decimals for network chainId=${network.chainId}`
      + `, name='${network.name}'`
    );
  }

  const currentDecimals = decimals[network.name][assetSymbol];
  if (isNaN(currentDecimals)) {
    throw new Error(
      `There is no decimals for currency '${assetSymbol}' on network: `
      + `chainId=${network.chainId}, name=${network.name}`
    );
  }

  const newAmount = new BigNumber(amount);
  if (reversed) {
    return newAmount.shiftedBy(-currentDecimals).toFixed();
  }

  return newAmount.shiftedBy(currentDecimals).integerValue().toFixed();
};

export const denormalizeAmount = (network, assetSymbol, amount) =>
  normalizeAmount(
    network,
    assetSymbol,
    amount,
    true,
  );
