const universalRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const universalFactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

export const contractAddresses = {
  'mainnet': {
    'Router02': universalRouterAddress,
    'Factory': universalFactoryAddress,
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

// Actual on 2020.03.04
export const availablePairs = {
  'mainnet': [
    {
      assetA: "DAI",
      assetB: "USDT",
      key: "DAI:USDT",
      address: "0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405"
    },
    {
      assetA: "DAI",
      assetB: "USDC",
      key: "DAI:USDC",
      address: "0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5"
    },
    {
      assetA: "DAI",
      assetB: "TUSD",
      key: "DAI:TUSD",
      address: "0xbdFa9eBFf5369bC10ff75b4a2FBfce8d5caf1024"
    },
    {
      assetA: "DAI",
      assetB: "WBTC",
      key: "DAI:WBTC",
      address: "0x231B7589426Ffe1b75405526fC32aC09D44364c4"
    },
    {
      assetA: "DAI",
      assetB: "LINK",
      key: "DAI:LINK",
      address: "0x6D4fd456eDecA58Cf53A8b586cd50754547DBDB2"
    },
    {
      assetA: "BAT",
      assetB: "DAI",
      key: "BAT:DAI",
      address: "0x6929abD7931D0243777d3CD147fE863646A752ba"
    },
    {
      assetA: "1INCH",
      assetB: "DAI",
      key: "1INCH:DAI",
      address: "0x1DF4139144595e0245B084E7EA1a75101Fb95548"
    },
    {
      assetA: "AMPL",
      assetB: "DAI",
      key: "AMPL:DAI",
      address: "0x08a564924C26D8289503bbaA18714B9C366dF9a5"
    },
    {
      assetA: "BAL",
      assetB: "DAI",
      key: "BAL:DAI",
      address: "0x6F4795E8A5669ab8d69f79fb27B46E069f6619AA"
    },
    {
      assetA: "BAND",
      assetB: "DAI",
      key: "BAND:DAI",
      address: "0xD515c37b7e22db51e51Ea4d240F7a143034184f1"
    },
    {
      assetA: "BUSD",
      assetB: "DAI",
      key: "BUSD:DAI",
      address: "0x66DDD3B7d017A769cC0c702B937c230EBd3c72D6"
    },
    {
      assetA: "CEL",
      assetB: "DAI",
      key: "CEL:DAI",
      address: "0xe15C6160a69EffD67D5D721cC04bfbD780DaCdB1"
    },
    {
      assetA: "DAI",
      assetB: "ENJ",
      key: "DAI:ENJ",
      address: "0x8F4E5d6B4Ec386C5E7Df984178eF12b87e3d3F95"
    },
    {
      assetA: "DAI",
      assetB: "HEGIC",
      key: "DAI:HEGIC",
      address: "0x502700F282e6BfC2Bb3b805893fAdFfaCf688e7b"
    },
    {
      assetA: "DAI",
      assetB: "HEX",
      key: "DAI:HEX",
      address: "0xe1aB0442520D5b8bCf09317aD7E0C5bAD5824fcd"
    },
    {
      assetA: "DAI",
      assetB: "KNC",
      key: "DAI:KNC",
      address: "0x22228474041f3D98ec314Eb71362b6F79971d5fB"
    },
    {
      assetA: "DAI",
      assetB: "KP3R",
      key: "DAI:KP3R",
      address: "0x184a96e221FBFbaB562a3d4c3365FE12E35F463e"
    },
    {
      assetA: "DAI",
      assetB: "LEND",
      key: "DAI:LEND",
      address: "0xb603c2b5AB4ee7932103b42f8dd899C8721DD25E"
    },
    {
      assetA: "DAI",
      assetB: "MANA",
      key: "DAI:MANA",
      address: "0x9d090ffD76dDfd94f49040DF91eDD6977e30e6C6"
    },
    {
      assetA: "DAI",
      assetB: "MKR",
      key: "DAI:MKR",
      address: "0x517F9dD285e75b599234F7221227339478d0FcC8"
    },
    {
      assetA: "DAI",
      assetB: "REN",
      key: "DAI:REN",
      address: "0x2d0A1c45cD6f7CDb718703d0897c877EFc9dB9F7"
    },
    {
      assetA: "DAI",
      assetB: "RLC",
      key: "DAI:RLC",
      address: "0x627eb7E7E39c6b9f94Bad420C3910eB0177ae0Ca"
    },
    {
      assetA: "DAI",
      assetB: "RSR",
      key: "DAI:RSR",
      address: "0x5F80A84aFb9dC3C097b8862bD9c5f8D7118bD85C"
    },
    {
      assetA: "DAI",
      assetB: "SNX",
      key: "DAI:SNX",
      address: "0xcA9B553d9f8cCD9D6ad546707f1EC3B9150292b1"
    },
    {
      assetA: "DAI",
      assetB: "STAKE",
      key: "DAI:STAKE",
      address: "0x8FCCc2F2279bc5318700B1F2278B69559baee2c4"
    },
    {
      assetA: "DAI",
      assetB: "sUSD",
      key: "DAI:sUSD",
      address: "0x2B797191b77B7579a5c32027174d79AB7b725114"
    },
    {
      assetA: "DAI",
      assetB: "SXP",
      key: "DAI:SXP",
      address: "0xed64aB11a68887fd4ffF9174D55B4cF5A70c3F0B"
    },
    {
      assetA: "DAI",
      assetB: "UBT",
      key: "DAI:UBT",
      address: "0xB6a4614Bf9F6D9B025c07311A191c8De974386A9"
    },
    {
      assetA: "DAI",
      assetB: "WETH",
      key: "DAI:WETH",
      address: "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11"
    },
    {
      assetA: "DAI",
      assetB: "YFI",
      key: "DAI:YFI",
      address: "0x3CD132ac73A4043Bb4f1674369E70BE6f88EdD73"
    },
    {
      assetA: "DAI",
      assetB: "ZRX",
      key: "DAI:ZRX",
      address: "0x7808e5c594b25Fa35Cf0E5567a76f01483912513"
    },
    {
      assetA: "DAI",
      assetB: "UNI",
      key: "DAI:UNI",
      address: "0xf00e80f0DE9aEa0B33aA229a4014572777E422EE"
    },
    {
      assetA: "COMP",
      assetB: "DAI",
      key: "COMP:DAI",
      address: "0xf3194E22d3212A6F930a7C6A88003d43F68befAB"
    },
    {
      assetA: "CRV",
      assetB: "DAI",
      key: "CRV:DAI",
      address: "0xf00F7A64B170D41789C6f16a7eb680a75A050e6D"
    },
    {
      assetA: "AAVE",
      assetB: "DAI",
      key: "AAVE:DAI",
      address: "0x38E12fDd8DC51e48830863151e1Afa7799e6fE97"
    },
    {
      assetA: "USDC",
      assetB: "USDT",
      key: "USDC:USDT",
      address: "0x3041CbD36888bECc7bbCBc0045E3B1f144466f5f"
    },
    {
      assetA: "TUSD",
      assetB: "USDT",
      key: "TUSD:USDT",
      address: "0x615Cc08dF9084e3faC80FE19045A55612185B6a4"
    },
    {
      assetA: "USDT",
      assetB: "WBTC",
      key: "USDT:WBTC",
      address: "0x0DE0Fa91b6DbaB8c8503aAA2D1DFa91a192cB149"
    },
    {
      assetA: "LINK",
      assetB: "USDT",
      key: "LINK:USDT",
      address: "0x9Db10C305c671153662119D453C4D2c123725566"
    },
    {
      assetA: "BAT",
      assetB: "USDT",
      key: "BAT:USDT",
      address: "0x0c11F54ec778Cdf062Ad0d8464cC7b7C9108c934"
    },
    {
      assetA: "1INCH",
      assetB: "USDT",
      key: "1INCH:USDT",
      address: "0x0357079bbeCADD7bd4B7a9f418014679Fc4e3926"
    },
    {
      assetA: "AMPL",
      assetB: "USDT",
      key: "AMPL:USDT",
      address: "0x83503BE303Ff0e05a5d6DcD1C2A3Bd589fB0DED4"
    },
    {
      assetA: "AXS",
      assetB: "USDT",
      key: "AXS:USDT",
      address: "0x8fE2A436B383B5f6656bAf318BF549a26201d6A8"
    },
    {
      assetA: "BAL",
      assetB: "USDT",
      key: "BAL:USDT",
      address: "0x08aa3763A810087fECe6A9769724de8ece26aFE0"
    },
    {
      assetA: "BAND",
      assetB: "USDT",
      key: "BAND:USDT",
      address: "0x3e0B4BC4dd79DBAf932f5Bc889C09c613FDF9aA4"
    },
    {
      assetA: "BUSD",
      assetB: "USDT",
      key: "BUSD:USDT",
      address: "0xa0ABda1F980e03D7eADb78aed8fC1f2DD0fe83Dd"
    },
    {
      assetA: "CEL",
      assetB: "USDT",
      key: "CEL:USDT",
      address: "0xbcC65B38bBd4B0f45e033C7CA0D30f302879E7E5"
    },
    {
      assetA: "CREAM",
      assetB: "USDT",
      key: "CREAM:USDT",
      address: "0xC7B9153A7d71D7c363D3f946B0a490fCddDDe105"
    },
    {
      assetA: "DIA",
      assetB: "USDT",
      key: "DIA:USDT",
      address: "0x39892F48A0361437E565aA6bF16a4F4f5f958b13"
    },
    {
      assetA: "ENJ",
      assetB: "USDT",
      key: "ENJ:USDT",
      address: "0xD677b2d0DD5c8F71cE22ccDb700Dffc6558fd1d1"
    },
    {
      assetA: "HEX",
      assetB: "USDT",
      key: "HEX:USDT",
      address: "0xbBB9bF440D0F686487925FEF3B0a0F9Aa67753f6"
    },
    {
      assetA: "KNC",
      assetB: "USDT",
      key: "KNC:USDT",
      address: "0x248Aba53caFb77Ebe6EEfaC3b4dE8A9d0d2134EC"
    },
    {
      assetA: "KP3R",
      assetB: "USDT",
      key: "KP3R:USDT",
      address: "0x80beA4c2Db94Ee49369162f0bFbBaBFA9e97aF5f"
    },
    {
      assetA: "LEND",
      assetB: "USDT",
      key: "LEND:USDT",
      address: "0xB378f0bBE343C730652113fC9Dd66eBbd8FDC7d4"
    },
    {
      assetA: "MANA",
      assetB: "USDT",
      key: "MANA:USDT",
      address: "0xc31508Fa519E5b3f1287759B15EB7150CF76b7Ef"
    },
    {
      assetA: "MKR",
      assetB: "USDT",
      key: "MKR:USDT",
      address: "0xa14DFBaa23EE8E8b69878381F8Fd1D0BC502c043"
    },
    {
      assetA: "OCEAN",
      assetB: "USDT",
      key: "OCEAN:USDT",
      address: "0x44e2bA9d7552E695BA0a00F79f93e51dA7aB88f9"
    },
    {
      assetA: "OMG",
      assetB: "USDT",
      key: "OMG:USDT",
      address: "0x759374b8eae5d148C62f3995204AF243bf11E541"
    },
    {
      assetA: "RSR",
      assetB: "USDT",
      key: "RSR:USDT",
      address: "0x6B5202cDC27c33e9e290A673Fe0E678493a9Cb92"
    },
    {
      assetA: "SLP",
      assetB: "USDT",
      key: "SLP:USDT",
      address: "0x4f45915f2B52394B08e1A79ecF9b3Bf2470eBC5b"
    },
    {
      assetA: "SNX",
      assetB: "USDT",
      key: "SNX:USDT",
      address: "0xe5eDEef795A4Ac7eF477cB3068f5e5d12788B6Cb"
    },
    {
      assetA: "STAKE",
      assetB: "USDT",
      key: "STAKE:USDT",
      address: "0xed9fC98816817cF855eEED3cb2AB81887cb3fc71"
    },
    {
      assetA: "USDT",
      assetB: "sUSD",
      key: "USDT:sUSD",
      address: "0xB0A539BEA1787813359Fb9AF8e2efD35dd35a744"
    },
    {
      assetA: "SUSHI",
      assetB: "USDT",
      key: "SUSHI:USDT",
      address: "0xE3FfaB89E53422f468BE955E7011932EfE80aA26"
    },
    {
      assetA: "SXP",
      assetB: "USDT",
      key: "SXP:USDT",
      address: "0x3334f98928C387132Bdad0946C74752A65198C37"
    },
    {
      assetA: "USDT",
      assetB: "WETH",
      key: "USDT:WETH",
      address: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852"
    },
    {
      assetA: "USDT",
      assetB: "XOR",
      key: "USDT:XOR",
      address: "0xe63D5659eD5bA927Fa5712ec51800f341c26c04D"
    },
    {
      assetA: "USDT",
      assetB: "YFI",
      key: "USDT:YFI",
      address: "0xAcD2556F64D4BE9Aaa205278895653D3e6d639aE"
    },
    {
      assetA: "USDT",
      assetB: "ZRX",
      key: "USDT:ZRX",
      address: "0x05556053D0966c7701201A2103dcb56CF75BdD92"
    },
    {
      assetA: "UNI",
      assetB: "USDT",
      key: "UNI:USDT",
      address: "0x5ac13261c181a9c3938BfE1b649E65D10F98566B"
    },
    {
      assetA: "COMP",
      assetB: "USDT",
      key: "COMP:USDT",
      address: "0x942Be9e8a12cFAAF997Cd266487Eaf8553B119d2"
    },
    {
      assetA: "CRV",
      assetB: "USDT",
      key: "CRV:USDT",
      address: "0x3eEd0Af1c5F350C6571525D9E3EEea7d2608af81"
    },
    {
      assetA: "AAVE",
      assetB: "USDT",
      key: "AAVE:USDT",
      address: "0x1f447690A6ddF18400533b705516159E1312f892"
    },
    {
      assetA: "TUSD",
      assetB: "USDC",
      key: "TUSD:USDC",
      address: "0xf1f27Db872b7F6E8B873C97F785fe4f9a6C92161"
    },
    {
      assetA: "USDC",
      assetB: "WBTC",
      key: "USDC:WBTC",
      address: "0x004375Dff511095CC5A197A54140a24eFEF3A416"
    },
    {
      assetA: "LINK",
      assetB: "USDC",
      key: "LINK:USDC",
      address: "0xd8C8a2B125527bf97c8e4845b25dE7e964468F77"
    },
    {
      assetA: "BAT",
      assetB: "USDC",
      key: "BAT:USDC",
      address: "0x02DD9Ff64EeC5D866a512EF08463C7c85A14e4Aa"
    },
    {
      assetA: "1INCH",
      assetB: "USDC",
      key: "1INCH:USDC",
      address: "0x58D1E10796D95F60e27Aa0C6Af98FeE7CDC8e3A6"
    },
    {
      assetA: "AMPL",
      assetB: "USDC",
      key: "AMPL:USDC",
      address: "0xfA545ce38d18EA4350ADB899f380058aFaD7619e"
    },
    {
      assetA: "AXS",
      assetB: "USDC",
      key: "AXS:USDC",
      address: "0xBb0586B4e677BDD7E51bda25B5F5685F54863A1f"
    },
    {
      assetA: "BAL",
      assetB: "USDC",
      key: "BAL:USDC",
      address: "0x26A2db3eA75FCe4CC7864C69ECD3397E864764be"
    },
    {
      assetA: "BAND",
      assetB: "USDC",
      key: "BAND:USDC",
      address: "0x20e16467A40157F3C2D83BD120a5B72748a8ecB8"
    },
    {
      assetA: "BUSD",
      assetB: "USDC",
      key: "BUSD:USDC",
      address: "0x524847C615639e76fE7D0FE0B16be8c4eAC9CF3c"
    },
    {
      assetA: "CEL",
      assetB: "USDC",
      key: "CEL:USDC",
      address: "0x3EF47DACfF7486eb8052ee765eE03Ee566A008f0"
    },
    {
      assetA: "CREAM",
      assetB: "USDC",
      key: "CREAM:USDC",
      address: "0x396a4D22777aAee768cCCb2F763228EfA1fD7584"
    },
    {
      assetA: "DIA",
      assetB: "USDC",
      key: "DIA:USDC",
      address: "0xd876beA7F5121a8E21459224e58AeC6C933A16e9"
    },
    {
      assetA: "HEGIC",
      assetB: "USDC",
      key: "HEGIC:USDC",
      address: "0xf596Cdc6ddd770b5056872F059529beD6d91F51E"
    },
    {
      assetA: "HEX",
      assetB: "USDC",
      key: "HEX:USDC",
      address: "0xF6DCdce0ac3001B2f67F750bc64ea5beB37B5824"
    },
    {
      assetA: "KNC",
      assetB: "USDC",
      key: "KNC:USDC",
      address: "0xa14c9AA1337F25135Ce6917464fC5f01CC3C9CA9"
    },
    {
      assetA: "KP3R",
      assetB: "USDC",
      key: "KP3R:USDC",
      address: "0x67d91035D546E6917a9A3DF35Dfbc7d5D21082Db"
    },
    {
      assetA: "LEND",
      assetB: "USDC",
      key: "LEND:USDC",
      address: "0x308d87865397672a74Ec62B3dC8E7323a18c0f1e"
    },
    {
      assetA: "MKR",
      assetB: "USDC",
      key: "MKR:USDC",
      address: "0x340A5a2F73eBaa181eC2826802Fdf8ED21Fc759a"
    },
    {
      assetA: "OCEAN",
      assetB: "USDC",
      key: "OCEAN:USDC",
      address: "0xBeEbD4362A784E31C19733d293B074A0d4BdE63F"
    },
    {
      assetA: "REN",
      assetB: "USDC",
      key: "REN:USDC",
      address: "0x07F068ca326a469Fc1d87d85d448990C8cBa7dF9"
    },
    {
      assetA: "RLC",
      assetB: "USDC",
      key: "RLC:USDC",
      address: "0x6942b7e4B6E79b5A0C2C01E40B1777A899EE8F2b"
    },
    {
      assetA: "RSR",
      assetB: "USDC",
      key: "RSR:USDC",
      address: "0x121D40DC2e642168703695F4112d815B27DAA789"
    },
    {
      assetA: "SNX",
      assetB: "USDC",
      key: "SNX:USDC",
      address: "0x3A1B4f6Dce585eF469a5DAA73A6EB87ce13E859D"
    },
    {
      assetA: "STAKE",
      assetB: "USDC",
      key: "STAKE:USDC",
      address: "0xE3B74928fE2076f40c1Cb4761aEc3Bc1B5D9c244"
    },
    {
      assetA: "USDC",
      assetB: "sUSD",
      key: "USDC:sUSD",
      address: "0x0865b9C7Cd9aa9F0e9F61E96C11e524145b70550"
    },
    {
      assetA: "SUSHI",
      assetB: "USDC",
      key: "SUSHI:USDC",
      address: "0x239650663A422273C0b2c7A1f1a8bdAb69E78D1B"
    },
    {
      assetA: "SXP",
      assetB: "USDC",
      key: "SXP:USDC",
      address: "0x5BF1e52256636Fd5a24B496A46c2DdA2B0024d6E"
    },
    {
      assetA: "UBT",
      assetB: "USDC",
      key: "UBT:USDC",
      address: "0x59ADAA706B700FA7e3aE2BbB47cD74275dc628E6"
    },
    {
      assetA: "USDC",
      assetB: "WETH",
      key: "USDC:WETH",
      address: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc"
    },
    {
      assetA: "USDC",
      assetB: "XOR",
      key: "USDC:XOR",
      address: "0xEA1eB8234f6F3923885C9A360ec50c4Bc3E4Dd3a"
    },
    {
      assetA: "USDC",
      assetB: "YFI",
      key: "USDC:YFI",
      address: "0xdE37cD310c70e7Fa9d7eD3261515B107D5Fe1F2d"
    },
    {
      assetA: "USDC",
      assetB: "ZRX",
      key: "USDC:ZRX",
      address: "0x9f65DF828d21C8860ee1499dA6397D50d85E14a0"
    },
    {
      assetA: "DPI",
      assetB: "USDC",
      key: "DPI:USDC",
      address: "0xF2983d86b2bB69CfC7E963fce7801D84527036AA"
    },
    {
      assetA: "KEYFI",
      assetB: "USDC",
      key: "KEYFI:USDC",
      address: "0xb99c23A9A444eBeb0cE4a67F27DAB8D4826B1108"
    },
    {
      assetA: "UNI",
      assetB: "USDC",
      key: "UNI:USDC",
      address: "0xEBFb684dD2b01E698ca6c14F10e4f289934a54D6"
    },
    {
      assetA: "COMP",
      assetB: "USDC",
      key: "COMP:USDC",
      address: "0x6F81d90E771B551451382b4c8B41C86B978d3420"
    },
    {
      assetA: "CRV",
      assetB: "USDC",
      key: "CRV:USDC",
      address: "0x210a97bA874a8e279C95b350aE8bA143A143C159"
    },
    {
      assetA: "AAVE",
      assetB: "USDC",
      key: "AAVE:USDC",
      address: "0x674E114dAd81838d151d9BedA2271228eeAe0E8B"
    },
    {
      assetA: "TUSD",
      assetB: "WBTC",
      key: "TUSD:WBTC",
      address: "0xe5542de22E8819195171ba8A496F78009c7410B8"
    },
    {
      assetA: "AMPL",
      assetB: "TUSD",
      key: "AMPL:TUSD",
      address: "0x7Dd337d3451472e6C94dEc8F7C65E41e200F135f"
    },
    {
      assetA: "TUSD",
      assetB: "WETH",
      key: "TUSD:WETH",
      address: "0xb4d0d9df2738abE81b87b66c80851292492D1404"
    },
    {
      assetA: "LINK",
      assetB: "WBTC",
      key: "LINK:WBTC",
      address: "0x8a01BA64FBc7B12ee13F817DFa862881feC531b8"
    },
    {
      assetA: "BAT",
      assetB: "WBTC",
      key: "BAT:WBTC",
      address: "0x65cc29d2E912827e6C1A53A5d18A7c23c9D2920d"
    },
    {
      assetA: "1INCH",
      assetB: "WBTC",
      key: "1INCH:WBTC",
      address: "0x3393E9B661E2c54B6c15e35d2774E16dc2887f96"
    },
    {
      assetA: "AMPL",
      assetB: "WBTC",
      key: "AMPL:WBTC",
      address: "0xc27286b35101dB690aA48fCa4A21A2a5cB109FCA"
    },
    {
      assetA: "CEL",
      assetB: "WBTC",
      key: "CEL:WBTC",
      address: "0xff3e0D43eA324084FC2656353D05E8c1ea7b9139"
    },
    {
      assetA: "HEX",
      assetB: "WBTC",
      key: "HEX:WBTC",
      address: "0x96DA3b8eDEa72329c791d9baf5521909791df560"
    },
    {
      assetA: "KNC",
      assetB: "WBTC",
      key: "KNC:WBTC",
      address: "0x278103B317522ca9bD6b5FCfEE7cCa9569462E3E"
    },
    {
      assetA: "KP3R",
      assetB: "WBTC",
      key: "KP3R:WBTC",
      address: "0xf2f8a9299C8F2BB751E8DF500983e6030D77f411"
    },
    {
      assetA: "LEND",
      assetB: "WBTC",
      key: "LEND:WBTC",
      address: "0x72cf70978BBe071787D47241060427ed99fbdA21"
    },
    {
      assetA: "UBT",
      assetB: "WBTC",
      key: "UBT:WBTC",
      address: "0x4E1B91A33aD666D6fED758Cd7B2736B85Bb7869f"
    },
    {
      assetA: "WBTC",
      assetB: "WETH",
      key: "WBTC:WETH",
      address: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940"
    },
    {
      assetA: "WBTC",
      assetB: "YFI",
      key: "WBTC:YFI",
      address: "0xbAe1264CeC9371238da484C42b56B0dC8C31c6B9"
    },
    {
      assetA: "DPI",
      assetB: "WBTC",
      key: "DPI:WBTC",
      address: "0xa391CCE0F9Ad45696E4a83256855d2C2D7847991"
    },
    {
      assetA: "UNI",
      assetB: "WBTC",
      key: "UNI:WBTC",
      address: "0xAA873C9DA6541f13C89416C17271b4c21bf7B2d7"
    },
    {
      assetA: "AAVE",
      assetB: "WBTC",
      key: "AAVE:WBTC",
      address: "0x48978eF5BeB2d69e27DeF9C046cEbE18Ab5708Ad"
    },
    {
      assetA: "BAT",
      assetB: "LINK",
      key: "BAT:LINK",
      address: "0x9773f438F0856099411fBBC0C964873b214B7406"
    },
    {
      assetA: "AMPL",
      assetB: "LINK",
      key: "AMPL:LINK",
      address: "0x60877A93D2C4e6C94efA0C90a10f1279E02052f3"
    },
    {
      assetA: "BAND",
      assetB: "LINK",
      key: "BAND:LINK",
      address: "0xD8a2aa8d4bed6495F42342442DC37864779c7137"
    },
    {
      assetA: "ENJ",
      assetB: "LINK",
      key: "ENJ:LINK",
      address: "0xF71EDb61924eBf0cb5C7855d377876419D50faA3"
    },
    {
      assetA: "KNC",
      assetB: "LINK",
      key: "KNC:LINK",
      address: "0x02621C56959272a32963d274Cc51ca1E1A0DEE48"
    },
    {
      assetA: "LEND",
      assetB: "LINK",
      key: "LEND:LINK",
      address: "0x30AC34c371f0F9b5d3522e54Da3a6ac6a73405B5"
    },
    {
      assetA: "LINK",
      assetB: "MANA",
      key: "LINK:MANA",
      address: "0xD77ffd33896B7dCE899d53705B90162d1c53694d"
    },
    {
      assetA: "LINK",
      assetB: "OCEAN",
      key: "LINK:OCEAN",
      address: "0xc0B427dAE764BFff36b46E8202aa998CC4f889f5"
    },
    {
      assetA: "LINK",
      assetB: "OMG",
      key: "LINK:OMG",
      address: "0xBc2Dd6F7af8Ef2b520BDa27bCC6ada82DAd17dCB"
    },
    {
      assetA: "LINK",
      assetB: "REN",
      key: "LINK:REN",
      address: "0xBc4D96f5f291f2F843B448200c9e9Fe5ad741D23"
    },
    {
      assetA: "LINK",
      assetB: "RLC",
      key: "LINK:RLC",
      address: "0x06502cAF266906a71D5F7021cbd3b8e8FF63E059"
    },
    {
      assetA: "LINK",
      assetB: "RSR",
      key: "LINK:RSR",
      address: "0xA1f8fC90E3A4C797222f84905133a11792d8A266"
    },
    {
      assetA: "LINK",
      assetB: "SNX",
      key: "LINK:SNX",
      address: "0x5A3Cb6B3E42C8101Cbc0AB4c35DA4f92e0Dd2586"
    },
    {
      assetA: "LINK",
      assetB: "UBT",
      key: "LINK:UBT",
      address: "0x3F7BfFB6BC53290F548e699d329b4779E0237a94"
    },
    {
      assetA: "LINK",
      assetB: "WETH",
      key: "LINK:WETH",
      address: "0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974"
    },
    {
      assetA: "LINK",
      assetB: "XOR",
      key: "LINK:XOR",
      address: "0x97AeCDa4c0f872c06bA3700b6C0B500dE62Ae013"
    },
    {
      assetA: "LINK",
      assetB: "YFI",
      key: "LINK:YFI",
      address: "0xB49Ac553Aeff303B1c73af00A8511Cb1585c1204"
    },
    {
      assetA: "DPI",
      assetB: "LINK",
      key: "DPI:LINK",
      address: "0xe0afbfAD975026E643907778E3D3Cf8F5dDbC53D"
    },
    {
      assetA: "LINK",
      assetB: "UNI",
      key: "LINK:UNI",
      address: "0x9b2662DC8b80B0fE79310AD316b943CB5Bb15e8b"
    },
    {
      assetA: "COMP",
      assetB: "LINK",
      key: "COMP:LINK",
      address: "0xcf4A0967C6c0b0fCD416283b8664f735391a36EC"
    },
    {
      assetA: "AAVE",
      assetB: "LINK",
      key: "AAVE:LINK",
      address: "0xE9cc31da55080593369e3Cdf589BD1DE85E0151A"
    },
    {
      assetA: "AMPL",
      assetB: "BAT",
      key: "AMPL:BAT",
      address: "0xA0a44777B4B95364990fbB29c42990AC24BB9c43"
    },
    {
      assetA: "BAND",
      assetB: "BAT",
      key: "BAND:BAT",
      address: "0xd4e00D5dBbE6F74Fe9c2B9f884b55ba590cBdeea"
    },
    {
      assetA: "BAT",
      assetB: "DIA",
      key: "BAT:DIA",
      address: "0xEC6AD622549F4480a3B7ce97Cd74C6e7c62591F7"
    },
    {
      assetA: "BAT",
      assetB: "REN",
      key: "BAT:REN",
      address: "0x8BB9d4dd62b94c70D6b3c667ace0Fffa751a3441"
    },
    {
      assetA: "BAT",
      assetB: "SXP",
      key: "BAT:SXP",
      address: "0x20b70C9f1358Ef0da08c4ea90B7F550448631DB2"
    },
    {
      assetA: "BAT",
      assetB: "WETH",
      key: "BAT:WETH",
      address: "0xB6909B960DbbE7392D405429eB2b3649752b4838"
    },
    {
      assetA: "BAT",
      assetB: "UNI",
      key: "BAT:UNI",
      address: "0x2531331F7A2Cd0eBA74a3B23E1b761DfdE21Fc22"
    },
    {
      assetA: "BAT",
      assetB: "COMP",
      key: "BAT:COMP",
      address: "0x112B376914f39afE57C76EF8027363a004Aaed1B"
    },
    {
      assetA: "BAT",
      assetB: "CRV",
      key: "BAT:CRV",
      address: "0xD42730adc5Fce4A71e420A0aD548E27df56080DB"
    },
    {
      assetA: "KEY",
      assetB: "WETH",
      key: "KEY:WETH",
      address: "0xEF9Ac6348A04Ac07C8Cfb19FE19827f1C92d7512"
    },
    {
      assetA: "1INCH",
      assetB: "SUSHI",
      key: "1INCH:SUSHI",
      address: "0x8eb3051b6bbcc301800c74ef34a7D5b6b23Aa5F2"
    },
    {
      assetA: "1INCH",
      assetB: "SXP",
      key: "1INCH:SXP",
      address: "0x2A83Cc522AE73Adb5A09ee6683d4E25C81380F28"
    },
    {
      assetA: "1INCH",
      assetB: "WETH",
      key: "1INCH:WETH",
      address: "0x26aAd2da94C59524ac0D93F6D6Cbf9071d7086f2"
    },
    {
      assetA: "1INCH",
      assetB: "YFI",
      key: "1INCH:YFI",
      address: "0x58Ce2c05f73F64b6b23d2fc2A20424D5061F473F"
    },
    {
      assetA: "1INCH",
      assetB: "AAVE",
      key: "1INCH:AAVE",
      address: "0x7c251F4F998425aAcAbe84e716ec7ae73B275926"
    },
    {
      assetA: "AMPL",
      assetB: "ENJ",
      key: "AMPL:ENJ",
      address: "0x758e5020aBd493d163E70e30fd70d767dd440e73"
    },
    {
      assetA: "AMPL",
      assetB: "KNC",
      key: "AMPL:KNC",
      address: "0x10cb5745dbC1a9d40e56b87a89443B7eE5685700"
    },
    {
      assetA: "AMPL",
      assetB: "LEND",
      key: "AMPL:LEND",
      address: "0xaCb74201Fe556ce4b01dF104Aba3666855D10D09"
    },
    {
      assetA: "AMPL",
      assetB: "MKR",
      key: "AMPL:MKR",
      address: "0xd18B6f4a4F9f9e5A77514Ccf25478B351A95dE40"
    },
    {
      assetA: "AMPL",
      assetB: "REN",
      key: "AMPL:REN",
      address: "0x20b68e4eBbcf8F4213F2520bd933A9f77Fe2Ba5c"
    },
    {
      assetA: "AMPL",
      assetB: "REP",
      key: "AMPL:REP",
      address: "0x39fb8D79d23F338a503D7DFeb22AF035465CE6Da"
    },
    {
      assetA: "AMPL",
      assetB: "SNX",
      key: "AMPL:SNX",
      address: "0xf0DBD8D468248a9F01690858a421a437f4b99CE1"
    },
    {
      assetA: "AMPL",
      assetB: "SUSHI",
      key: "AMPL:SUSHI",
      address: "0x7fa64A4Be88F9A66401C4a9Cce6B0560e5503f17"
    },
    {
      assetA: "AMPL",
      assetB: "WETH",
      key: "AMPL:WETH",
      address: "0xc5be99A02C6857f9Eac67BbCE58DF5572498F40c"
    },
    {
      assetA: "AMPL",
      assetB: "YFI",
      key: "AMPL:YFI",
      address: "0x419a0d9598A8219990242FCd5eC321a78ADE9292"
    },
    {
      assetA: "AMPL",
      assetB: "ZRX",
      key: "AMPL:ZRX",
      address: "0xB450E654E1853DC49fe1d1fA9A94C898D6c5b07f"
    },
    {
      assetA: "AMPL",
      assetB: "UNI",
      key: "AMPL:UNI",
      address: "0x7FE29551bFB700d3eE801EeA1a689525d1EA4F58"
    },
    {
      assetA: "AMPL",
      assetB: "COMP",
      key: "AMPL:COMP",
      address: "0xFaa7e98E633a10E90B71a84200E10562E5302A92"
    },
    {
      assetA: "AXS",
      assetB: "SLP",
      key: "AXS:SLP",
      address: "0xacBFC935137AC0b6C5cec9A8784349913037381d"
    },
    {
      assetA: "AXS",
      assetB: "SUSHI",
      key: "AXS:SUSHI",
      address: "0x3b8c8c021C99546784e3e318FE1bc6Ca4cd31AaA"
    },
    {
      assetA: "AXS",
      assetB: "WETH",
      key: "AXS:WETH",
      address: "0x24b24Af104c961DA1BA5bCCce4410d49AA558477"
    },
    {
      assetA: "BAL",
      assetB: "MANA",
      key: "BAL:MANA",
      address: "0xb91ac1d9807368c8BAc2503bB85649502fFA9c38"
    },
    {
      assetA: "BAL",
      assetB: "SNX",
      key: "BAL:SNX",
      address: "0x5966338c2038c342A0bc03470BD99b670dD5d20D"
    },
    {
      assetA: "BAL",
      assetB: "WETH",
      key: "BAL:WETH",
      address: "0xA70d458A4d9Bc0e6571565faee18a48dA5c0D593"
    },
    {
      assetA: "BAL",
      assetB: "UNI",
      key: "BAL:UNI",
      address: "0x896d652AFEc3f34bCE61d29450d57c68879Efd1c"
    },
    {
      assetA: "BAND",
      assetB: "DIA",
      key: "BAND:DIA",
      address: "0xb2504AdBa62eD739c7723533819760321F46Eb4a"
    },
    {
      assetA: "BAND",
      assetB: "ENJ",
      key: "BAND:ENJ",
      address: "0xc23bB2C209c204A10b719b2ADCbEe5e01900f7b9"
    },
    {
      assetA: "BAND",
      assetB: "MANA",
      key: "BAND:MANA",
      address: "0xBD0cad57A0D75e8711E01ecE151464404834Bc7a"
    },
    {
      assetA: "BAND",
      assetB: "WETH",
      key: "BAND:WETH",
      address: "0xf421c3f2e695C2D4C0765379cCace8adE4a480D9"
    },
    {
      assetA: "BAND",
      assetB: "YFI",
      key: "BAND:YFI",
      address: "0x9Ff2D0A5522EbA53C5703D6Cf0d2B1abE75857c7"
    },
    {
      assetA: "BAND",
      assetB: "UNI",
      key: "BAND:UNI",
      address: "0xa7c526F724150115fD1C4B4BA102D8455A48AFcf"
    },
    {
      assetA: "BUSD",
      assetB: "WETH",
      key: "BUSD:WETH",
      address: "0xC2923b8a9683556A3640ccc2961B2F52B5C4459A"
    },
    {
      assetA: "CEL",
      assetB: "WETH",
      key: "CEL:WETH",
      address: "0xa5E79baEe540f000ef6F23D067cd3AC22c7d9Fe6"
    },
    {
      assetA: "CREAM",
      assetB: "KP3R",
      key: "CREAM:KP3R",
      address: "0xe65c2C8a268ebec6E1F8f6C70A20378487aB075B"
    },
    {
      assetA: "CREAM",
      assetB: "WETH",
      key: "CREAM:WETH",
      address: "0xddF9b7a31b32EBAF5c064C80900046C9e5b7C65F"
    },
    {
      assetA: "CREAM",
      assetB: "YFI",
      key: "CREAM:YFI",
      address: "0x69bc5B4721B42eD5f80419FB36c15af5058d2d2B"
    },
    {
      assetA: "CREAM",
      assetB: "UNI",
      key: "CREAM:UNI",
      address: "0x5ADe6677584175a687A5DE9B6e39262c5bABB224"
    },
    {
      assetA: "DIA",
      assetB: "WETH",
      key: "DIA:WETH",
      address: "0x4Dc02e1bB2EC1CE4C50C351e6e06505E7B1dCe8d"
    },
    {
      assetA: "DYT",
      assetB: "WETH",
      key: "DYT:WETH",
      address: "0x5B7aD60A92e725597e4A28444d498d1999cF66b6"
    },
    {
      assetA: "ENJ",
      assetB: "REN",
      key: "ENJ:REN",
      address: "0x5CC75273bC777aF30c33519519122835C5a895ae"
    },
    {
      assetA: "ENJ",
      assetB: "STAKE",
      key: "ENJ:STAKE",
      address: "0xc13789C35C41E227E1eE8815de16dF806ecd5386"
    },
    {
      assetA: "ENJ",
      assetB: "WETH",
      key: "ENJ:WETH",
      address: "0xE56c60B5f9f7B5FC70DE0eb79c6EE7d00eFa2625"
    },
    {
      assetA: "ENJ",
      assetB: "ZRX",
      key: "ENJ:ZRX",
      address: "0x5e29C9114C8299d7AD7047e1Fc1fEeC74f11aE85"
    },
    {
      assetA: "ENJ",
      assetB: "UNI",
      key: "ENJ:UNI",
      address: "0xDAFD9b251F966c32D81c17F684b5A0FD34e75A96"
    },
    {
      assetA: "CRV",
      assetB: "ENJ",
      key: "CRV:ENJ",
      address: "0x1A213bbA014008B9a84e40a7c1076D979b5a5A1f"
    },
    {
      assetA: "AAVE",
      assetB: "ENJ",
      key: "AAVE:ENJ",
      address: "0x44fB27C260D9Dc9b21709D8054258AE896C5a9A8"
    },
    {
      assetA: "FYZ",
      assetB: "WETH",
      key: "FYZ:WETH",
      address: "0xa80108E9E31f9ECf044f5f99B5d7879508770FCD"
    },
    {
      assetA: "HEGIC",
      assetB: "WETH",
      key: "HEGIC:WETH",
      address: "0x1273aD5D8f3596A7a39EfDb5a4b8f82E8F003fc3"
    },
    {
      assetA: "HEX",
      assetB: "WETH",
      key: "HEX:WETH",
      address: "0x55D5c232D921B9eAA6b37b5845E439aCD04b4DBa"
    },
    {
      assetA: "HEX",
      assetB: "UNI",
      key: "HEX:UNI",
      address: "0x52146A769ac02BDB737CEcD8712515da746ECe7F"
    },
    {
      assetA: "KNC",
      assetB: "MKR",
      key: "KNC:MKR",
      address: "0x167aCB2fd872A14187a02fc1281790d1de1b4145"
    },
    {
      assetA: "KNC",
      assetB: "RLC",
      key: "KNC:RLC",
      address: "0xf89c6984C5F801D40236987C749B56a34AbE7b07"
    },
    {
      assetA: "KNC",
      assetB: "SNX",
      key: "KNC:SNX",
      address: "0x3375ACcF7291dF28885822b37d872aeB9d14029d"
    },
    {
      assetA: "KNC",
      assetB: "WETH",
      key: "KNC:WETH",
      address: "0xf49C43Ae0fAf37217bDcB00DF478cF793eDd6687"
    },
    {
      assetA: "KNC",
      assetB: "ZRX",
      key: "KNC:ZRX",
      address: "0x79CDa9b30AD6775Aa50A76dab2371dA7cb1E3710"
    },
    {
      assetA: "COMP",
      assetB: "KNC",
      key: "COMP:KNC",
      address: "0x8564A1837136bb3d2AB571E03197cbEBb87c004d"
    },
    {
      assetA: "KP3R",
      assetB: "WETH",
      key: "KP3R:WETH",
      address: "0x87fEbfb3AC5791034fD5EF1a615e9d9627C2665D"
    },
    {
      assetA: "KP3R",
      assetB: "YFI",
      key: "KP3R:YFI",
      address: "0x57378670B3f4e0a46C215A239A272FaDb0dc1E67"
    },
    {
      assetA: "KP3R",
      assetB: "UNI",
      key: "KP3R:UNI",
      address: "0x281D562AF8D08fB517B54878828ceCdd8f4107ee"
    },
    {
      assetA: "LEND",
      assetB: "SNX",
      key: "LEND:SNX",
      address: "0x0780Afd54B94cd3809821611d6D92E1EDF542758"
    },
    {
      assetA: "LEND",
      assetB: "WETH",
      key: "LEND:WETH",
      address: "0xaB3F9bF1D81ddb224a2014e98B238638824bCf20"
    },
    {
      assetA: "LEND",
      assetB: "YFI",
      key: "LEND:YFI",
      address: "0x0D622FFE3dA58c6390D1A2150288adfC02264c0A"
    },
    {
      assetA: "LEND",
      assetB: "ZRX",
      key: "LEND:ZRX",
      address: "0x20149FC21a158F195964e01430b3B29eb38b6b27"
    },
    {
      assetA: "LEND",
      assetB: "UNI",
      key: "LEND:UNI",
      address: "0x3368CB67D74BE9AA5D76754E7b9B9e6d0b098e94"
    },
    {
      assetA: "COMP",
      assetB: "LEND",
      key: "COMP:LEND",
      address: "0x50E5Dd5BE3f93256690Adc12EF8EdAb1eB18612d"
    },
    {
      assetA: "AAVE",
      assetB: "LEND",
      key: "AAVE:LEND",
      address: "0x2DBA9D75C4EEdcD6b6BbB746C8369fE8CF24B117"
    },
    {
      assetA: "MANA",
      assetB: "WETH",
      key: "MANA:WETH",
      address: "0x11b1f53204d03E5529F09EB3091939e4Fd8c9CF3"
    },
    {
      assetA: "MANA",
      assetB: "UNI",
      key: "MANA:UNI",
      address: "0x3fB41aEdc135f619B8eA7Ecf7268F26595e29f6D"
    },
    {
      assetA: "MKR",
      assetB: "SNX",
      key: "MKR:SNX",
      address: "0xD7aab32CC04104190502802d0bcdA1acdc23De2D"
    },
    {
      assetA: "MKR",
      assetB: "sUSD",
      key: "MKR:sUSD",
      address: "0xB198Eb5E9725fB76Ba2EF8b19374A8894FCECDDf"
    },
    {
      assetA: "MKR",
      assetB: "WETH",
      key: "MKR:WETH",
      address: "0xC2aDdA861F89bBB333c90c492cB837741916A225"
    },
    {
      assetA: "MKR",
      assetB: "UNI",
      key: "MKR:UNI",
      address: "0xB981acFc76ca389CCbB376A921E1C077b1C3c031"
    },
    {
      assetA: "COMP",
      assetB: "MKR",
      key: "COMP:MKR",
      address: "0x72Ef722d2A6c3B72e6113B6f3f1c62c75aA152E5"
    },
    {
      assetA: "OCEAN",
      assetB: "WETH",
      key: "OCEAN:WETH",
      address: "0x9b7DaD79FC16106b47a3DAb791F389C167e15Eb0"
    },
    {
      assetA: "OCEAN",
      assetB: "UNI",
      key: "OCEAN:UNI",
      address: "0xEF67D644b5c444258Fcf5928816D5b3607538385"
    },
    {
      assetA: "OMG",
      assetB: "RLC",
      key: "OMG:RLC",
      address: "0x30FEB20Af1B4cD47790Ea348f9fDeD1aB4c09767"
    },
    {
      assetA: "OMG",
      assetB: "WETH",
      key: "OMG:WETH",
      address: "0x48E313460DD00100e22230e56E0A87B394066844"
    },
    {
      assetA: "OMG",
      assetB: "ZRX",
      key: "OMG:ZRX",
      address: "0x0400ED78C8cE56f4c9D3bA1B7a22D5ad3C0261A1"
    },
    {
      assetA: "CRV",
      assetB: "OMG",
      key: "CRV:OMG",
      address: "0x59aee17B30614a8fFE38B334F0F3ed97584947f8"
    },
    {
      assetA: "REN",
      assetB: "UBT",
      key: "REN:UBT",
      address: "0xA2178650e702549C3260272723652F4ceb3F8d32"
    },
    {
      assetA: "REN",
      assetB: "WETH",
      key: "REN:WETH",
      address: "0x8Bd1661Da98EBDd3BD080F0bE4e6d9bE8cE9858c"
    },
    {
      assetA: "REN",
      assetB: "YFI",
      key: "REN:YFI",
      address: "0x6759cFF0e38Bf92F841d741E0c9BAF540C2976BD"
    },
    {
      assetA: "REN",
      assetB: "UNI",
      key: "REN:UNI",
      address: "0x5e4206B6AA6e919B2bc6E813EA0ffB9B3C8aC042"
    },
    {
      assetA: "COMP",
      assetB: "REN",
      key: "COMP:REN",
      address: "0x2d3Bb351C409E39e78e1f0daA757aDf921b5fE44"
    },
    {
      assetA: "REP",
      assetB: "WETH",
      key: "REP:WETH",
      address: "0xec2D2240D02A8cf63C3fA0B7d2C5a3169a319496"
    },
    {
      assetA: "REP",
      assetB: "YFI",
      key: "REP:YFI",
      address: "0x954975D6457a51c3D49A2c827B6b9B3d4a22c8ce"
    },
    {
      assetA: "REP",
      assetB: "UNI",
      key: "REP:UNI",
      address: "0xe5Ea6FCA0A54aD195d6dFa4170DF5EBfda0Fd378"
    },
    {
      assetA: "RLC",
      assetB: "WETH",
      key: "RLC:WETH",
      address: "0x6d57a53A45343187905aaD6AD8eD532D105697c1"
    },
    {
      assetA: "RSR",
      assetB: "WETH",
      key: "RSR:WETH",
      address: "0xba65016890709dBC9491Ca7bF5DE395B8441DC8B"
    },
    {
      assetA: "SLP",
      assetB: "WETH",
      key: "SLP:WETH",
      address: "0xBF452277b8aF4084fB8A0472ec808f2ded51f1C1"
    },
    {
      assetA: "SNX",
      assetB: "UBT",
      key: "SNX:UBT",
      address: "0x5B3A217ed49794666b363FcCa62cf59378523313"
    },
    {
      assetA: "SNX",
      assetB: "WETH",
      key: "SNX:WETH",
      address: "0x43AE24960e5534731Fc831386c07755A2dc33D47"
    },
    {
      assetA: "SNX",
      assetB: "UNI",
      key: "SNX:UNI",
      address: "0xac336A0F92099893e6545Ce75F99302b29cff4e6"
    },
    {
      assetA: "COMP",
      assetB: "SNX",
      key: "COMP:SNX",
      address: "0x5487BB5c9f0b84875D2Fb0F0900a50A94255AFf9"
    },
    {
      assetA: "CRV",
      assetB: "SNX",
      key: "CRV:SNX",
      address: "0xfB4D92fF44f2858996E115e14E0FDB67df68865C"
    },
    {
      assetA: "STAKE",
      assetB: "WETH",
      key: "STAKE:WETH",
      address: "0x3B3d4EeFDc603b232907a7f3d0Ed1Eea5C62b5f7"
    },
    {
      assetA: "STAKE",
      assetB: "UNI",
      key: "STAKE:UNI",
      address: "0xC776DF57034fDc7B45ed461306FcDEabEbd8e8d2"
    },
    {
      assetA: "WETH",
      assetB: "sUSD",
      key: "WETH:sUSD",
      address: "0xf80758aB42C3B07dA84053Fd88804bCB6BAA4b5c"
    },
    {
      assetA: "CRV",
      assetB: "sUSD",
      key: "CRV:sUSD",
      address: "0x76D06b1aD16b582Bfe8f68f42cD9E836026e79e3"
    },
    {
      assetA: "SUSHI",
      assetB: "WETH",
      key: "SUSHI:WETH",
      address: "0xCE84867c3c02B05dc570d0135103d3fB9CC19433"
    },
    {
      assetA: "SUSHI",
      assetB: "YFI",
      key: "SUSHI:YFI",
      address: "0xdEb9725e10642D1dE906923F5b57851aa92a70AA"
    },
    {
      assetA: "SUSHI",
      assetB: "UNI",
      key: "SUSHI:UNI",
      address: "0x6580E58dEd2b562CF5DFA361956f6854F5Cab507"
    },
    {
      assetA: "COMP",
      assetB: "SUSHI",
      key: "COMP:SUSHI",
      address: "0x30526288559f920Ec20d79D9eB147eA330Fe9809"
    },
    {
      assetA: "SXP",
      assetB: "WETH",
      key: "SXP:WETH",
      address: "0xaC317d14738A454Ff20B191ba3504aA97173045b"
    },
    {
      assetA: "UBT",
      assetB: "WETH",
      key: "UBT:WETH",
      address: "0xB27dE0bA2abFbFdf15667a939f041b52118aF5Ba"
    },
    {
      assetA: "UBT",
      assetB: "YFI",
      key: "UBT:YFI",
      address: "0x4F73DbA04c5039e18C3a980d9A7ee0325541AAc9"
    },
    {
      assetA: "WETH",
      assetB: "XOR",
      key: "WETH:XOR",
      address: "0x01962144D41415cCA072900Fe87Bbe2992A99F10"
    },
    {
      assetA: "WETH",
      assetB: "YFI",
      key: "WETH:YFI",
      address: "0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28"
    },
    {
      assetA: "WETH",
      assetB: "ZRX",
      key: "WETH:ZRX",
      address: "0xc6F348dd3B91a56D117ec0071C1e9b83C0996De4"
    },
    {
      assetA: "DPI",
      assetB: "WETH",
      key: "DPI:WETH",
      address: "0x4d5ef58aAc27d99935E5b6B4A6778ff292059991"
    },
    {
      assetA: "UNI",
      assetB: "WETH",
      key: "UNI:WETH",
      address: "0xd3d2E2692501A5c9Ca623199D38826e513033a17"
    },
    {
      assetA: "COMP",
      assetB: "WETH",
      key: "COMP:WETH",
      address: "0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f"
    },
    {
      assetA: "CRV",
      assetB: "WETH",
      key: "CRV:WETH",
      address: "0x3dA1313aE46132A397D90d95B1424A9A7e3e0fCE"
    },
    {
      assetA: "AAVE",
      assetB: "WETH",
      key: "AAVE:WETH",
      address: "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f"
    },
    {
      assetA: "UNI",
      assetB: "YFI",
      key: "UNI:YFI",
      address: "0xF80960072b76804d4e0C12bebE784E6Bf95883b9"
    },
    {
      assetA: "AAVE",
      assetB: "YFI",
      key: "AAVE:YFI",
      address: "0x49604b4bC98f1196D4B2116f8a1Fac64ab69cef8"
    },
    {
      assetA: "COMP",
      assetB: "UNI",
      key: "COMP:UNI",
      address: "0x83C72Bf7c69795B53497dB3d214b4e42362f1b5e"
    },
    {
      assetA: "CRV",
      assetB: "UNI",
      key: "CRV:UNI",
      address: "0x71Aa44cbEd2CA17077aeE7C5087e86a53Fc01f6E"
    },
    {
      assetA: "AAVE",
      assetB: "UNI",
      key: "AAVE:UNI",
      address: "0xDbb317929A4924e032bc21add1ce8e30A978C257"
    }
  ]
};

export const PAIR_NOT_EXISTS = 'PAIR_NOT_EXISTS';
export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
