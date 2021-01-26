const universalRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const universalFactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

export const contractAddresses = {
  'mainnet': {
    'Router02': universalRouterAddress,
    'Factory': universalFactoryAddress,
    'WETH': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    'BAT': '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    'CHAI': '0x06AF07097C9Eeb7fD685c692751D5C66dB49c215',
    'DAI': '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    'USDC': '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    'USDT': '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    'TUSD': '0x0000000000085d4780B73119b644AE5ecd22b376',
    'BUSD': '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
    'sUSD': '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
    'PAX': '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
    'renBTC': '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
    'WBTC': '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    'TBTC': '0x1bBE271d15Bb64dF0bc6CD28Df9Ff322F2eBD847',
    'HBTC': '0x0316EB71485b0Ab14103307bf65a021042c6d380',
    'sBTC': '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
    'KEYFI': '0xB8647e90C0645152Fccf4d9AbB6B59Eb4AA99052',
  },
  'ropsten': {
    'Router02': universalRouterAddress,
    'Factory': universalFactoryAddress,
    'WETH': '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    'DAI': '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
    'LOCK': '0xe8348b237dee32a8e087932cde1786983d91a6e6',
    'USDT': '0x516de3a7a567d81737e3a46ec4ff9cfd1fcb0136',
    'UNI': '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    'KEYFI': '0x7C63008B7ed8534215Ff942826499BAcDd18D729',
  },
};

export const uniswapContracts = ['Router02', 'Factory'];

export const supportedNetworks = {
  1: 'mainnet',
  3: 'ropsten',
};

// Actual on 2020.12.12
export const availablePairs = {
  'mainnet': [
    [ 'BAT', 'DAI' ],     [ 'BAT', 'ETH' ],     [ 'BAT', 'USDC' ],
    [ 'BAT', 'USDT' ],    [ 'BAT', 'WBTC' ],    [ 'BAT', 'WETH' ],
    [ 'BUSD', 'DAI' ],    [ 'BUSD', 'ETH' ],    [ 'BUSD', 'USDC' ],
    [ 'BUSD', 'USDT' ],   [ 'BUSD', 'WETH' ],   [ 'CHAI', 'DAI' ],
    [ 'CHAI', 'ETH' ],    [ 'CHAI', 'WETH' ],   [ 'DAI', 'ETH' ],
    [ 'DAI', 'TUSD' ],    [ 'DAI', 'USDC' ],    [ 'DAI', 'USDT' ],
    [ 'DAI', 'WBTC' ],    [ 'DAI', 'WETH' ],    [ 'DAI', 'renBTC' ],
    [ 'DAI', 'sUSD' ],    [ 'ETH', 'HBTC' ],    [ 'ETH', 'PAX' ],
    [ 'ETH', 'TUSD' ],    [ 'ETH', 'USDC' ],    [ 'ETH', 'USDT' ],
    [ 'ETH', 'WBTC' ],    [ 'ETH', 'renBTC' ],  [ 'ETH', 'sBTC' ],
    [ 'ETH', 'sUSD' ],    [ 'HBTC', 'WBTC' ],   [ 'HBTC', 'WETH' ],
    [ 'KEYFI', 'USDC' ],  [ 'PAX', 'TUSD' ],    [ 'PAX', 'USDC' ],
    [ 'PAX', 'USDT' ],    [ 'PAX', 'WETH' ],    [ 'TUSD', 'USDC' ],
    [ 'TUSD', 'USDT' ],   [ 'TUSD', 'WBTC' ],   [ 'TUSD', 'WETH' ],
    [ 'USDC', 'USDT' ],   [ 'USDC', 'WBTC' ],   [ 'USDC', 'WETH' ],
    [ 'USDC', 'renBTC' ], [ 'USDC', 'sUSD' ],   [ 'USDT', 'WBTC' ],
    [ 'USDT', 'WETH' ],   [ 'USDT', 'sUSD' ],   [ 'WBTC', 'WETH' ],
    [ 'WBTC', 'renBTC' ], [ 'WETH', 'renBTC' ], [ 'WETH', 'sBTC' ],
    [ 'WETH', 'sUSD' ],
  ],
  'ropsten': [
    [ 'DAI', 'ETH' ],
    [ 'DAI', 'UNI' ],
    [ 'DAI', 'USDT' ],
    [ 'DAI', 'WETH' ],
    [ 'ETH', 'KEYFI' ],
    [ 'ETH', 'LOCK' ],
    [ 'ETH', 'UNI' ],
    [ 'ETH', 'USDT' ],
    [ 'KEYFI', 'WETH' ],
    [ 'LOCK', 'WETH' ],
    [ 'UNI', 'WETH' ],
    [ 'USDT', 'WETH' ],
  ]
};

export const PAIR_NOT_EXISTS = 'PAIR_NOT_EXISTS';
export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
