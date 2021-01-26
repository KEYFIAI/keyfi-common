import 'dotenv/config';
import nuoApi from './nuo';

const address = process.env.ETHEREUM_ADDRESS;

const testDepositEth = async () => {
  console.log('Supplying ETH to the Aave protocol...');
  const trx = await nuoApi.deposit("ETH", 1);
  console.log('Supply transaction object', trx);
}

const testWithdrawEth = async () => {
  console.log('Redeeming ETH...');
  const trx = await nuoApi.withdraw("ETH", 1);
  console.log('Redeem transaction: ', trx);
}

const testDepositErc20 = async () => {
  console.log('Supplying USDT to the Aave protocol...');
  const trx = await nuoApi.deposit("USDT", 100);
  console.log('Supply transaction object', trx);
}

const testWithdrawErc20 = async () => {
  console.log('Redeeming USDT...');
  const trx = await nuoApi.withdraw("USDT", 100);
  console.log('Redeem transaction: ', trx);
}

const testGetBalance = async () => {
  const balance = await nuoApi.getBalance(address);
  console.log(`Balance of ${address}:`, JSON.stringify(balance, null, 2));
}

const main = async () => {
  // await testDepositEth();
  // await testWithdrawEth();

  // await testDepositErc20();
  // await testWithdrawErc20();

  await testGetBalance();
}

main().catch(console.error)
