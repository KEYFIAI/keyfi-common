import 'dotenv/config';
import { getUsdPrice } from './common';

const testGetUsdPrice1 = async () => {
  const result = await getUsdPrice('ETH');
  console.log('Price of ETH:', result);
};

const testGetUsdPriceMultiple = async () => {
  const result = await getUsdPrice(['ETH', 'USDT', 'DAI']);
  console.log('Prices:', result);
};

const main = async () => {
  await testGetUsdPrice1();
  await testGetUsdPriceMultiple();
};

main().catch(console.error);
