import BigNumber from 'bignumber.js';
import { decimals } from './constants';

export const normalizeAmount = (assetSymbol, amount, reversed=false) => {
  const currentDecimals = decimals[assetSymbol];
  if (isNaN(currentDecimals)) {
    throw new Error(`There is no decimals for currency '${assetSymbol}'`);
  }

  const newAmount = new BigNumber(amount);
  if (reversed) {
    return newAmount.shiftedBy(-currentDecimals).toFixed();
  }

  return newAmount.shiftedBy(currentDecimals).integerValue().toFixed();
};

export const denormalizeAmount = (assetSymbol, amount) => normalizeAmount(
  assetSymbol,
  amount,
  true,
);
