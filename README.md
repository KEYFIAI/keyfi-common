# KeyFi Common Module

NPM package for commonly used DeFi integrations via web3.  Can be used with frontend JS frameworks such as React.

## Versioning

Modified semver used:
* X.0.0 - reserved for major updates
* 0.X.0 - are for updates without backward compatibility
* 0.0.X - are for minor updates backward compatible

## Structure

### `integrations`

Contains all related to external services integrations.

Main used libraries:

* web3 - main library for integration with blockchain services
* BigNumbers.js - library for big integer math
* axios - for making HTTP requests to REST APIs

Directory `common` contains common functions used in majority of integrations or related to blockchain itself, like:

* Fetching user's ETH/ERC20 balance
* Fetching tokens prices
* Instantiation of web3
* Checking current blockchain network
* Functions for converting javascript floats to big integers

`integrations/common/constants.js` contains lists:

* Supported networks and their names
* Supported tokens (their addresses, decimals, coingecko ids)

All of major service's integrations have common async function: `isSupportedNetwork(web3OrNetwork)` - it accepts web3 or network object obtainable from `integrations.getNetwork()` function or no arguments at all and returns boolean if service is available on selected network.

All functions with amount as argument accepts amount in normalized way (so to mention 10.5 USDC just put 10.5 as argument) if opposite is not mentioned explicitly. Same applied to returned assets amounts.

Many functions accept optional object `options` as an argument. It can contain service-specific options and common options like `pendingCallback` - callback function which will receive pending transactions details.

#### Compound-like services

Services with interface like Compound: Compound itself, Aave, DyDx, keyfipool. Have 3 common functions:

* `getBalance(accountAddress)` - returns object:

  ```json
  {
      "ETH": "10.59",
      "USDT": "1555.12"
  }
  ```
  contains object where the key is asset name, value is amount of asset deposited in service from account `accountAddress`. All values already normalized to floats.

* `deposit(asset, amount, options)` - deposit selected amount of asset to service. Returns details of last transaction.

* `withdraw(asset, amount, options)` - withdraw selected amount of asset from service. Returns details of last transaction.

#### Uniswap-like services

Services with interface like Uniswap with assets organized in pairs: Uniswap itself, Curve (no swap functions), 1inch (only swap functions). Functions:

* `getAccountLiquidityAll(assetA, assetB, accountAddress)`

  Get all pairs that selected account have liquidity staked to as an array. Example:

  ```json
  [
    {
      "assetA": "USDC",
      "assetB": "USDT",
      "USDC": "10.5",
      "USDT": "15.78",
      "liquidity": "0.001",
      "totalLiquidity": "10.155",
      "liquidityPercent": "0.000098",
    }
  ]
  ```

  where `liquidity` is amount of liquidity token user have, `totalLiquidity` is total amount of liquidity token and `liquidityPercent` is a rate between these ones.

* `getAccountLiquidity(assetA, assetB, accountAddress, options)`

  Get liquidity staked in selected pair of assetA/assetB from selected account. Returns one pair.

* `addLiquidity(assetA, assetAAmount, assetB, assetBAmount, options)`

  Stake selected amount into pair assetA/assetB. Common option here is `slippage` - percent of allowed trade value slippage (`{ slippage: 0.01 }` mean one percent slippage allowed).

* `removeLiquidity(assetA, assetB, percent, options)`

  Remove selected amount of liquidity from pair assetA/assetB. Use `percent = 1.0` to remove 100% of liquidity.

* `estimateSwap(fromAssetSymbol, fromAmount, toAssetSymbol)`

  Estimate swap from selected asset to other selected asset. Returns object:
  ```json
  {
    "returnAmount": "1500511",
    "returnAmountHuman": "1.500511",
  }
  ```
  with estimated result asset amount. `returnAmount` is raw amount (without normalization), `returnAmountHuman` is normalized amount.

* `swap(fromAssetSymbol, fromAmount, toAssetSymbol, estimation, options)`

  Perform swap from selected asset to other selected asset. `estimation` is estimation result got from function above. Returns details of last transaction.

### FAQ

> How to add new token support for balance and price fetching?

Open `integrations/common/constants.js` and add token contract address, token decimals. Add its coingecko id if its price is fetchable from coingecko or add it to zero priced tokens in `integrations/common/balance.js`.
