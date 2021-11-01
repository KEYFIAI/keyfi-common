const BigNumber = require("bignumber.js");
const decimals = require("./constants").decimals;

 const normalizeAmount = (
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

  const currentDecimals = decimalNumber
    ? decimalNumber
    : decimals[network.name][assetSymbol];
  if (isNaN(currentDecimals)) {
    throw new Error(
      `There is no decimals for currency '${assetSymbol}' on network: ` +
        `chainId=${network.chainId}, name=${network.name}`
    );
  }

  const newAmount = new BigNumber(amount);
  if (reversed) {
    return newAmount.shiftedBy(-currentDecimals).toFixed();
  }

  return newAmount.shiftedBy(currentDecimals).integerValue().toFixed();
};

 const denormalizeAmount = (
  network,
  assetSymbol,
  amount,
  decimalNumber
) => normalizeAmount(network, assetSymbol, amount, true, decimalNumber);

module.exports = {
  normalizeAmount,
  denormalizeAmount
}