import 'dotenv/config';
import compoundApi from './compound';

const address = process.env.ETHEREUM_ADDRESS;

const testDepositEth = async () => {
  console.log('Supplying ETH to the Compound protocol...');
  const trx = await compoundApi.deposit('ETH', 1);
  console.log('web3.js transaction object', trx);
};

const testWithdrawEth = async () => {
  console.log('Redeeming ETH...');
  const trx = await compoundApi.withdraw('ETH', 1);
  console.log('Redeem transaction: ', trx);
};

const testDepositUSDT = async () => {
  console.log('Supplying USDT to the Compound protocol...');
  const trx = await compoundApi.deposit('USDT', 10);
  console.log('web3.js transaction object', trx);
};

const testWithdrawUSDT = async () => {
  console.log('Redeeming USDT...');
  const trx = await compoundApi.withdraw('USDT', 10);
  console.log('Redeem transaction: ', trx);
};

const testGetBalance = async () => {
  const balance = await compoundApi.getBalance(address);
  console.log(`Balance of ${address}:`, JSON.stringify(balance, null, 2));
};

const main = async () => {
  await testDepositEth();
  await testWithdrawEth();

  await testDepositUSDT();
  await testWithdrawUSDT();

  await testGetBalance();
};

main().catch(console.error);
