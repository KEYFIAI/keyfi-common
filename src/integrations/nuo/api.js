import reserveAbi from './abi/reserve.abi.json';
import { tokens, reserveAddress } from './constants';
import { createWeb3InNodeJS, createWeb3InBrowser } from '../common/web3';

const nuoApi = {
  async getWeb3() {
    if (this._web3) {
      return this._web3;
    }

    if (typeof window === 'undefined') {
      this._web3 = createWeb3InNodeJS();
    } else {
      this._web3 = await createWeb3InBrowser();
    }

    return this._web3;
  },

  normalizeAmount(asset, amount) {
    const tokenInfo = tokens[asset];
    if (!tokenInfo) {
      throw new Error(`Token is not supported: '${asset}'`);
    }

    return String(Number.parseFloat(amount) * Math.pow(10, tokenInfo.decimal));
  },

  // async deposit(asset, amount) {
  // },

  // async withdraw(asset, amount) {
  // },

  async getBalance(address = null) {
    const web3 = await this.getWeb3();

    if (!address) {
      address = web3.eth.defaultAccount;
    }

    const reserveContract = new web3.eth.Contract(reserveAbi, reserveAddress);
    console.log('reserveAddress', reserveAddress);

    const balances = {};
    await Promise.all(
      Object.entries(tokens).map(async ([tokenSymbol, tokenInfo]) => {
        const { address } = tokenInfo;

        console.log(`token: ${tokenSymbol}, address=`, address);
        const lastReserveUpdateTime = await reserveContract.methods
          .lastReserveRuns(address).call();

          console.log(`token: ${tokenSymbol}, lastReserveUpdateTime=`, lastReserveUpdateTime);

        return reserveContract.methods.reserves(
            lastReserveUpdateTime,
            address
          )
          .call()
          .then((balance) => (balances[tokenSymbol] = balance));
      })
    );

    return balances;
  },
};

export default nuoApi;
