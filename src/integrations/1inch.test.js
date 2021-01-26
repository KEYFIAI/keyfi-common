import 'dotenv/config';
import inch from './1inch';

const testSwapEstimation = async () => {
  const result = await inch.estimateSwap('ETH', 1, 'DAI');
  console.log('Swap (1 ETH -> DAI) estimated result:', result);
};

const testSwapEthToDai = async () => {
  const result = await inch.swap('ETH', 1, 'DAI');
  console.log('Swap (1 ETH -> DAI) result:', result);
};

const testSwapDaiToEth = async () => {
  const result = await inch.swap('DAI', 200, 'ETH');
  console.log('Swap (200 DAI -> ETH) result:', result);
};

const main = async () => {
  await testSwapEstimation();
  await testSwapEthToDai();
  await testSwapDaiToEth();
};

main().catch(console.error);
