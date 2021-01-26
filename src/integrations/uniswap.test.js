import 'dotenv/config';
import uniswap from './uniswap';

const testSwapEstimation = async () => {
  const result = await uniswap.estimateSwap('ETH', 1, 'DAI');
  console.log('Swap (1 ETH -> DAI) estimated result:', result);

  const result2 = await uniswap.estimateSwap('DAI', 200, 'ETH');
  console.log('Swap (200 DAI -> ETH) estimated result:', result2);

  const result3 = await uniswap.estimateSwap('DAI', 1, 'USDT');
  console.log('Swap (1 DAI -> USDT) estimated result:', result3);
};

const testSwapEthToToken = async () => {
  const result = await uniswap.swap('ETH', 2, 'USDT');
  console.log('Swap (1 ETH -> USDT) result:', result);
};

const testSwapTokenToEth = async () => {
  const result = await uniswap.swap('USDT', 100, 'ETH');
  console.log('Swap (200 USDT -> ETH) result:', result);
};

const testSwapTokenToToken = async () => {
  const result = await uniswap.swap('USDT', 50, 'DAI');
  console.log('Swap (50 USDT -> DAI) result:', result);
};

const testGetLiquidityEthUsdt = async () => {
  const result = await uniswap.getLiquidity('ETH', 'USDT');
  console.log('Got liquidity:', result);
};

const testGetAccountLiquidityEthUsdt = async () => {
  const result = await uniswap.getAccountLiquidity('ETH', 'USDT');
  console.log('Got account liquidity:', result);
};

const testAddLiquidityEthUsdt = async () => {
  const result = await uniswap.addLiquidity('ETH', 0.25, 'USDT', 100, {
    slippage: 0.25, // 25%
  });
  console.log('Liquidity add result:', result);
};

const testAddLiquidityUsdtDai = async () => {
  const result = await uniswap.addLiquidity('USDT', 30, 'DAI', 30, {
    slippage: 0.25, // 25%
  });
  console.log('Liquidity add result:', result);
};

const testRemoveLiquidityEthUsdt = async () => {
  const result = await uniswap.removeLiquidity('ETH', 'USDT', 0.5, {
    slippage: 0.25, // 25%
  });
  console.log('Liquidity remove result:', result);
};

const testRemoveLiquidityUsdtDai = async () => {
  const result = await uniswap.removeLiquidity('USDT', 'DAI', 0.25, {
    slippage: 0.25, // 25%
  });
  console.log('Liquidity remove result:', result);
};

const testGetAccountLiquidityAll = async () => {
  const result = await uniswap.getAccountLiquidityAll();
  console.log('All account liquidity:', result);
};

const testGetSupportedAssets = async () => {
  const result = await uniswap.getSupportedAssets();
  console.log('Supported assets:', result);
};

// Only on Ropsten network
const testGetLiquidityEthLock = async () => {
  const result = await uniswap.getLiquidity('ETH', 'LOCK');
  console.log('Liquidity:', result);
};

const testAddLiquidityEthLock = async () => {
  const result = await uniswap.addLiquidity('ETH', 1, 'LOCK', 4, {
    slippage: 0.25, // 25%
  });
  console.log('Liquidity add result:', result);
};

const main = async () => {
  await testSwapEstimation();
  await testSwapEthToToken();
  await testSwapTokenToEth();
  await testSwapTokenToToken();

  await testGetLiquidityEthUsdt();
  await testAddLiquidityEthUsdt();
  await testAddLiquidityUsdtDai();

  await testGetAccountLiquidityEthUsdt();

  // await testRemoveLiquidityEthUsdt();
  // await testRemoveLiquidityUsdtDai();

  await testGetAccountLiquidityAll();

  await testGetSupportedAssets();

  // Only on Ropsten network
  // await testGetLiquidityEthLock();
  // await testAddLiquidityEthLock();
};

main().catch((error) => console.error('FATAL', error));
