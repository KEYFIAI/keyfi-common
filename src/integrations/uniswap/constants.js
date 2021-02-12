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

// Actual on 2020.02.12
export const availablePairs = {
  'mainnet': [
    {
      assetA: 'BAT',
      assetB: 'WETH',
      key: 'BAT:WETH',
      address: '0xB6909B960DbbE7392D405429eB2b3649752b4838'
    },
    {
      assetA: 'CHAI',
      assetB: 'WETH',
      key: 'CHAI:WETH',
      address: '0x12EDE161c702D1494612d19f05992f43aa6A26FB'
    },
    {
      assetA: 'DAI',
      assetB: 'WETH',
      key: 'DAI:WETH',
      address: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11'
    },
    {
      assetA: 'USDC',
      assetB: 'WETH',
      key: 'USDC:WETH',
      address: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc'
    },
    {
      assetA: 'USDT',
      assetB: 'WETH',
      key: 'USDT:WETH',
      address: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852'
    },
    {
      assetA: 'TUSD',
      assetB: 'WETH',
      key: 'TUSD:WETH',
      address: '0xb4d0d9df2738abE81b87b66c80851292492D1404'
    },
    {
      assetA: 'BUSD',
      assetB: 'WETH',
      key: 'BUSD:WETH',
      address: '0xC2923b8a9683556A3640ccc2961B2F52B5C4459A'
    },
    {
      assetA: 'WETH',
      assetB: 'sUSD',
      key: 'WETH:sUSD',
      address: '0xf80758aB42C3B07dA84053Fd88804bCB6BAA4b5c'
    },
    {
      assetA: 'PAX',
      assetB: 'WETH',
      key: 'PAX:WETH',
      address: '0x598e7A017dAce2534Bc3F7496124C89425b1E165'
    },
    {
      assetA: 'WETH',
      assetB: 'renBTC',
      key: 'WETH:renBTC',
      address: '0x81FbEf4704776cc5bBa0A5dF3a90056d2C6900B3'
    },
    {
      assetA: 'WBTC',
      assetB: 'WETH',
      key: 'WBTC:WETH',
      address: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940'
    },
    {
      assetA: 'HBTC',
      assetB: 'WETH',
      key: 'HBTC:WETH',
      address: '0xA6F4EAE7FdaA20E632C45d4cd39E4f3961892322'
    },
    {
      assetA: 'WETH',
      assetB: 'sBTC',
      key: 'WETH:sBTC',
      address: '0xb749eDaC57278A86984692dD2aA1EE2aafCf5B45'
    },
    {
      assetA: 'BAT',
      assetB: 'DAI',
      key: 'BAT:DAI',
      address: '0x6929abD7931D0243777d3CD147fE863646A752ba'
    },
    {
      assetA: 'BAT',
      assetB: 'USDC',
      key: 'BAT:USDC',
      address: '0x02DD9Ff64EeC5D866a512EF08463C7c85A14e4Aa'
    },
    {
      assetA: 'BAT',
      assetB: 'USDT',
      key: 'BAT:USDT',
      address: '0x0c11F54ec778Cdf062Ad0d8464cC7b7C9108c934'
    },
    {
      assetA: 'BAT',
      assetB: 'WBTC',
      key: 'BAT:WBTC',
      address: '0x65cc29d2E912827e6C1A53A5d18A7c23c9D2920d'
    },
    {
      assetA: 'CHAI',
      assetB: 'DAI',
      key: 'CHAI:DAI',
      address: '0xF24D78Aad09Ab026aC5242E34C99200eEE3529Db'
    },
    {
      assetA: 'DAI',
      assetB: 'USDC',
      key: 'DAI:USDC',
      address: '0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5'
    },
    {
      assetA: 'DAI',
      assetB: 'USDT',
      key: 'DAI:USDT',
      address: '0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405'
    },
    {
      assetA: 'DAI',
      assetB: 'TUSD',
      key: 'DAI:TUSD',
      address: '0xbdFa9eBFf5369bC10ff75b4a2FBfce8d5caf1024'
    },
    {
      assetA: 'BUSD',
      assetB: 'DAI',
      key: 'BUSD:DAI',
      address: '0x66DDD3B7d017A769cC0c702B937c230EBd3c72D6'
    },
    {
      assetA: 'DAI',
      assetB: 'sUSD',
      key: 'DAI:sUSD',
      address: '0x2B797191b77B7579a5c32027174d79AB7b725114'
    },
    {
      assetA: 'DAI',
      assetB: 'renBTC',
      key: 'DAI:renBTC',
      address: '0x7F4bc1F022A403300356e3FfFab6251c8AA4d26b'
    },
    {
      assetA: 'DAI',
      assetB: 'WBTC',
      key: 'DAI:WBTC',
      address: '0x231B7589426Ffe1b75405526fC32aC09D44364c4'
    },
    {
      assetA: 'USDC',
      assetB: 'USDT',
      key: 'USDC:USDT',
      address: '0x3041CbD36888bECc7bbCBc0045E3B1f144466f5f'
    },
    {
      assetA: 'TUSD',
      assetB: 'USDC',
      key: 'TUSD:USDC',
      address: '0xf1f27Db872b7F6E8B873C97F785fe4f9a6C92161'
    },
    {
      assetA: 'BUSD',
      assetB: 'USDC',
      key: 'BUSD:USDC',
      address: '0x524847C615639e76fE7D0FE0B16be8c4eAC9CF3c'
    },
    {
      assetA: 'USDC',
      assetB: 'sUSD',
      key: 'USDC:sUSD',
      address: '0x0865b9C7Cd9aa9F0e9F61E96C11e524145b70550'
    },
    {
      assetA: 'PAX',
      assetB: 'USDC',
      key: 'PAX:USDC',
      address: '0x3139Ffc91B99aa94DA8A2dc13f1fC36F9BDc98eE'
    },
    {
      assetA: 'USDC',
      assetB: 'renBTC',
      key: 'USDC:renBTC',
      address: '0xdD71f5E002143d34eA24696600bC4d82B904FAFA'
    },
    {
      assetA: 'USDC',
      assetB: 'WBTC',
      key: 'USDC:WBTC',
      address: '0x004375Dff511095CC5A197A54140a24eFEF3A416'
    },
    {
      assetA: 'KEYFI',
      assetB: 'USDC',
      key: 'KEYFI:USDC',
      address: '0xb99c23A9A444eBeb0cE4a67F27DAB8D4826B1108'
    },
    {
      assetA: 'TUSD',
      assetB: 'USDT',
      key: 'TUSD:USDT',
      address: '0x615Cc08dF9084e3faC80FE19045A55612185B6a4'
    },
    {
      assetA: 'BUSD',
      assetB: 'USDT',
      key: 'BUSD:USDT',
      address: '0xa0ABda1F980e03D7eADb78aed8fC1f2DD0fe83Dd'
    },
    {
      assetA: 'USDT',
      assetB: 'sUSD',
      key: 'USDT:sUSD',
      address: '0xB0A539BEA1787813359Fb9AF8e2efD35dd35a744'
    },
    {
      assetA: 'PAX',
      assetB: 'USDT',
      key: 'PAX:USDT',
      address: '0x7cD0378010711CB72a6ca35f09D5Da2094061D9c'
    },
    {
      assetA: 'USDT',
      assetB: 'WBTC',
      key: 'USDT:WBTC',
      address: '0x0DE0Fa91b6DbaB8c8503aAA2D1DFa91a192cB149'
    },
    {
      assetA: 'PAX',
      assetB: 'TUSD',
      key: 'PAX:TUSD',
      address: '0xfC5211986172260fb6579eb06220b14F4389011F'
    },
    {
      assetA: 'TUSD',
      assetB: 'WBTC',
      key: 'TUSD:WBTC',
      address: '0xe5542de22E8819195171ba8A496F78009c7410B8'
    },
    {
      assetA: 'WBTC',
      assetB: 'renBTC',
      key: 'WBTC:renBTC',
      address: '0xF12C086347a328F3a000d892f23875d886d530cF'
    },
    {
      assetA: 'HBTC',
      assetB: 'WBTC',
      key: 'HBTC:WBTC',
      address: '0x8064c6C75F05Bb01d1F9c618221e880DA51E4D38'
    }
  ],
  'ropsten': [
    {
      assetA: 'DAI',
      assetB: 'WETH',
      key: 'DAI:WETH',
      address: '0x1c5DEe94a34D795f9EEeF830B68B80e44868d316'
    },
    {
      assetA: 'LOCK',
      assetB: 'WETH',
      key: 'LOCK:WETH',
      address: '0x193f075B905e55E46F674988eD06c62e75214Bf8'
    },
    {
      assetA: 'USDT',
      assetB: 'WETH',
      key: 'USDT:WETH',
      address: '0x230c4C6De893F369920a94Bd354589EA1A8BcAfD'
    },
    {
      assetA: 'UNI',
      assetB: 'WETH',
      key: 'UNI:WETH',
      address: '0x4E99615101cCBB83A462dC4DE2bc1362EF1365e5'
    },
    {
      assetA: 'KEYFI',
      assetB: 'WETH',
      key: 'KEYFI:WETH',
      address: '0xa6471E93BBAa43F54337094AD444F8DBe95ED0b5'
    },
    {
      assetA: 'DAI',
      assetB: 'USDT',
      key: 'DAI:USDT',
      address: '0x081F7d45775fFf4f5d81Cc81B71Aac26D87e0502'
    },
    {
      assetA: 'DAI',
      assetB: 'UNI',
      key: 'DAI:UNI',
      address: '0x36a59aC1b05D10Cc00bD8e7e5D98B967aeB4feDb'
    }
  ]
};

export const PAIR_NOT_EXISTS = 'PAIR_NOT_EXISTS';
export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
