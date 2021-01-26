import 'dotenv/config';
import aaveApi from './aave';

const address = process.env.ETHEREUM_ADDRESS;

const testGetAddress = async () => {
  let address = await aaveApi.getAddress('LendingPool');
  console.log('LendingPool address:', address);

  address = await aaveApi.getAddress('aETH');
  console.log('aETH address:', address);
};

const testDepositEth = async () => {
  console.log('Supplying ETH to the Aave protocol...');
  const trx = await aaveApi.deposit('ETH', 1);
  console.log('Supply transaction object', trx);
};

const testWithdrawEth = async () => {
  console.log('Redeeming ETH...');
  const trx = await aaveApi.withdraw('ETH', 1);
  console.log('Redeem transaction: ', trx);
};

const testDepositErc20 = async () => {
  console.log('Supplying USDT to the Aave protocol...');
  const trx = await aaveApi.deposit('USDT', 100);
  console.log('Supply transaction object', trx);
};

const testWithdrawErc20 = async () => {
  console.log('Redeeming USDT...');
  const trx = await aaveApi.withdraw('USDT', 100);
  console.log('Redeem transaction: ', trx);
};

const testGetBalance = async () => {
  const balance = await aaveApi.getBalance(address);
  console.log(`Balance of ${address}:`, JSON.stringify(balance, null, 2));
};

const main = async () => {
  await testGetAddress();
  // Second one should return instantly
  await testGetAddress();

  await testDepositEth();
  // await testWithdrawEth();

  await testDepositErc20();
  // await testWithdrawErc20();

  await testGetBalance();
};

main().catch(console.error);
