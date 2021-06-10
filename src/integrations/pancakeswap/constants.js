const contractAddresses = {
  "bsc-mainnet": {
    Routerv2: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    Factory: "0xBCfCcbde45cE874adCB698cC183deBcF17952812",
    KEYFI: "0x4b6000F9163de2E3f0a01eC37E06e1469DBbcE9d",
    wBNB: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    CAKE: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    USDT: "0x55d398326f99059fF775485246999027B3197955",
    BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    ETH: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    BELT: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
    BTCB: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    DAI: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    UST: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    DOT: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    VAI: "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
    UNI: "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
    LINK: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
    ALPACA: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
    XRP: "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
    BUNNY: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
    XVS: "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
    AUTO: "0xa184088a740c695e156f91f5cc086a06bb78b827",
    ADA: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
    TRX: "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
    NRV: "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
    ALPHA: "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
    TKO: "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
    ZIL: "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
    TWT: "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
    REEF: "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
    DOGE: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
    SXP: "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
    INJ: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    LTC: "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
    BIFI: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    FINE: "0x4e6415a5727ea08aAE4580057187923aeC331227",
    BAND: "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
    DODO: "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
    LIT: "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
    SUSHI: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
    DFT: "0x42712dF5009c20fee340B245b510c0395896cF6e",
    ALICE: "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
    FRONT: "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    EGG: "0xf952fc3ca7325cc27d15885d37117676d25bfda6",
    BDO: "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454",
    BSCX: "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
    BRY: "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830",
    SFP: "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
  },
};

// Supported pairs 2021/06/10
const supportedPairs = [
  {
    id: "0xd47618f68b1018f89b69d6c941c8c2b83868577c",
    token0: {
      symbol: "KEYFI",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xa527a61703d82139f8a06bc30097cc9caa2df5a6",
    token0: {
      symbol: "CAKE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1b96b92314c44b159149f7e0303511fb2fc4774f",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x7561eee90e24f3b348e1087a005f78b4c8453524",
    token0: {
      symbol: "BTCB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x70d8929d04b60af4fb9b58713ebcf18765ade422",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc5b0d73a7c0e4eaf66babf7ee16a2096447f7ad6",
    token0: {
      symbol: "BDO",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x99d865ed50d2c32c1493896810fa386c1ce81d91",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "BETH",
    },
  },
  {
    id: "0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c",
    token0: {
      symbol: "DOT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56",
    token0: {
      symbol: "AUTO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x83b92d283cd279ff2e057bd86a95bdefffed6faa",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BELT",
    },
  },
  {
    id: "0x680dd100e4b394bda26a59dd5c119a391e747d18",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xff17ff314925dff772b71abdff2782bc913b3575",
    token0: {
      symbol: "VAI",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x7bb89460599dbf32ee3aa50798bbceae2a5f7f6a",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BUNNY",
    },
  },
  {
    id: "0xba51d1ab95756ca4eab8737ecd450cd8f05384cf",
    token0: {
      symbol: "ADA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x4269e7f43a63cea1ad7707be565a94a9189967e9",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "UNI",
    },
  },
  {
    id: "0xaebe45e3a03b734c68e5557ae04bfc76917b4686",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "LINK",
    },
  },
  {
    id: "0x4e0f3385d932f7179dee045369286ffa6b03d887",
    token0: {
      symbol: "ALPHA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2",
    token0: {
      symbol: "XRP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf3ce6aac24980e6b657926dfc79502ae414d3083",
    token0: {
      symbol: "ALPACA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xd1f12370b2ba1c79838337648f820a87edf5e1e6",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xa0718093baa3e7aae054eed71f303a4ebc1c076f",
    token0: {
      symbol: "sBDO",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xebaaa639a55ecbebac4d7d43a5a6d7c5c1216a09",
    token0: {
      symbol: "BTD",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x752e713fb70e3fa1ac08bcf34485f14a986956c4",
    token0: {
      symbol: "SXP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xbc765fd113c5bdb2ebc25f711191b56bb8690aec",
    token0: {
      symbol: "LTC",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc639187ef82271d8f517de6feae4faf5b517533c",
    token0: {
      symbol: "BAND",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x74690f829fec83ea424ee1f1654041b2491a7be9",
    token0: {
      symbol: "BDO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x8fbd89b44403b6da70737a02bfde39685bfe47bb",
    token0: {
      symbol: "WOOP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x0392957571f28037607c14832d16f8b653edd472",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "COMP",
    },
  },
  {
    id: "0x41182c32f854dd97ba0e0b1816022e0acb2fc0bb",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "XVS",
    },
  },
  {
    id: "0x17580340f3daedae871a8c21d15911742ec79e0f",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "SUSHI",
    },
  },
  {
    id: "0x5e3cd27f36932bc0314ac4e2510585798c34a2fc",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BRY",
    },
  },
  {
    id: "0x19e7cbecdd23a16dfa5573df54d98f7caae03019",
    token0: {
      symbol: "BUSD",
    },
    token1: {
      symbol: "EGG",
    },
  },
  {
    id: "0x2333c77fc0b2875c11409cdcd3c75d42d402e834",
    token0: {
      symbol: "ATOM",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x981d2ba1b298888408d342c39c2ab92e8991691e",
    token0: {
      symbol: "EOS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x6411310c07d8c48730172146fd6f31fa84034a8b",
    token0: {
      symbol: "Helmet",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x03ff6c83226cdb10c7a42a2c54c67d63a135ab69",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x610e7a287c27dffcac0f0a94f547cc1b770cf483",
    token0: {
      symbol: "TWT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x4db28767d1527ba545ca5bbda1c96a94ed6ff242",
    token0: {
      symbol: "BUSD",
    },
    token1: {
      symbol: "TPT",
    },
  },
  {
    id: "0x60bb03d1010b99ceadd0dd209b64bc8bd83da161",
    token0: {
      symbol: "LIT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "SFP",
    },
  },
  {
    id: "0x58b58cab6c5cf158f63a2390b817710826d116d0",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "REEF",
    },
  },
  {
    id: "0x9e642d174b14faea31d842dc83037c42b53236e6",
    token0: {
      symbol: "DODO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8",
    token0: {
      symbol: "BSCX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x7a34bd64d18e44cfde3ef4b81b87baf3eb3315b6",
    token0: {
      symbol: "INJ",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x36b7d2e5c7877392fb17f9219efad56f3d794700",
    token0: {
      symbol: "FRONT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "EGG",
    },
  },
  {
    id: "0xab97952a2806d5c92b7046c7ab13a72a87e0097b",
    token0: {
      symbol: "BEL",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xe022baa3e5e87658f789c9132b10d7425fd3a389",
    token0: {
      symbol: "ALICE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x68ff2ca47d27db5ac0b5c46587645835dd51d3c1",
    token0: {
      symbol: "YFI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xbcbf0c95c94798ffef0e71a087a7e98f29d5c0ee",
    token0: {
      symbol: "MSC",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xd132d2c24f29ee8abb64a66559d1b7aa627bd7fd",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BIFI",
    },
  },
  {
    id: "0x284a5d8712c351ca28417d131003120808dce48b",
    token0: {
      symbol: "SOUP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xe9c53b5ab0c9cdbd72a03151a628863c28c55a6a",
    token0: {
      symbol: "BLZD",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x981db69f2f2f96e0f08d6519befda0b927c22190",
    token0: {
      symbol: "MSC",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1f280a4fa78f5805bac193dddafeb77b16da4614",
    token0: {
      symbol: "WAULT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xffb9e2d5ce4378f1a89b29bf53f80804cc078102",
    token0: {
      symbol: "wSOTE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x9adc6fb78cefa07e13e9294f150c1e8c1dd566c0",
    token0: {
      symbol: "SAFEMOON",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x3763a3263ceaca5e7cc1bc22a43920bad9f743cd",
    token0: {
      symbol: "Fuel",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xdc6c130299e53acd2cc2d291fa10552ca2198a6b",
    token0: {
      symbol: "WATCH",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x36b8b28d37f93372188f2aa2507b68a5cd8b2664",
    token0: {
      symbol: "IOTX",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "EGLD",
    },
  },
  {
    id: "0xbea35584b9a88107102abef0bdee2c4fae5d8c31",
    token0: {
      symbol: "UNFI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x91589786d36fee5b27a5539cfe638a5fc9834665",
    token0: {
      symbol: "BTCST",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x2562f94e90de6d9eb4fb6b3b8eab56b15aa4fc72",
    token0: {
      symbol: "TRADE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948",
    token0: {
      symbol: "LINA",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x820b7d71218a74297645f0fec0b9de85dcca043c",
    token0: {
      symbol: "NRV",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xf64a269f0a06da07d23f43c1deb217101ee6bee7",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "MIR",
    },
  },
  {
    id: "0xd65f81878517039e39c359434d8d8bd46cc4531f",
    token0: {
      symbol: "MDO",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xbe14f3a89a4f7f279af9d99554cf12e8c29db921",
    token0: {
      symbol: "bALBT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af",
    token0: {
      symbol: "ZEE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1387cd767d797c834a8fed4c2a3bf84067582420",
    token0: {
      symbol: "TOOLS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x27a5a5c1ff96447f2a0c4badcf26e7c65c040e3c",
    token0: {
      symbol: "BLZD",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "HARD",
    },
  },
  {
    id: "0xfec200a5e3addd4a7915a556dde3f5850e644020",
    token0: {
      symbol: "FOR",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x135aedcfb35b0b5dcf61db7891a21253452eb970",
    token0: {
      symbol: "SWIRL",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x86e650350c40a5178a5d014ba37fe8556232b898",
    token0: {
      symbol: "BOR",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc1800c29cf91954357cd0bf3f0accaada3d0109c",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "SWGb",
    },
  },
  {
    id: "0x470bc451810b312bbb1256f96b0895d95ea659b1",
    token0: {
      symbol: "DITTO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x45a9e8d48bc560416008d122c9437927fed50e7d",
    token0: {
      symbol: "BFI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x4d5aa94ce6bbb1bc4eb73207a5a5d4d052cfcd67",
    token0: {
      symbol: "bMXX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1490c68d0d5e3e7c9d53299824c9bb816639aa66",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BOG",
    },
  },
  {
    id: "0x9d8b7e4a9d53654d82f12c83448d8f92732bc761",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "bOPEN",
    },
  },
  {
    id: "0x73601076a92e0d1bd81737b38b150d6842aa1aa1",
    token0: {
      symbol: "MSS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458",
    token0: {
      symbol: "CAKE",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x7b1e440240b220244761c9d9a3b07fba1995bd84",
    token0: {
      symbol: "COS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x4576c456af93a37a096235e5d83f812ac9aed027",
    token0: {
      symbol: "SWINGBY",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xbf36959939982d0d34b37fb3f3425da9676c13a3",
    token0: {
      symbol: "RAMP",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xb7918560273fd56e50e9c215cc0dfe8d764c36c5",
    token0: {
      symbol: "DUSK",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x292ca56ed5b3330a19037f835af4a9c0098ea6fa",
    token0: {
      symbol: "xMARK",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xca01f5d89d5b1d24ca5d6ecc856d21e8a61dafcc",
    token0: {
      symbol: "NULS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x5acac332f0f49c8badc7afd0134ad19d3db972e6",
    token0: {
      symbol: "XTZ",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xa32a983a64ce21834221aa0ad1f1533907553136",
    token0: {
      symbol: "BSCX",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x852a68181f789ae6d1da3df101740a59a071004f",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "mGOOGL",
    },
  },
  {
    id: "0xc92dc34665c8a21f98e1e38474580b61b4f3e1b9",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "mAMZN",
    },
  },
  {
    id: "0x69ab367bc1bea1d2c0fb4dbaec6b7197951da56c",
    token0: {
      symbol: "DEXE",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "HGET",
    },
  },
  {
    id: "0x0f556f4e47513d1a19be456a9af778d7e1a226b9",
    token0: {
      symbol: "BUX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x35fe9787f0ebf2a200bac413d3030cf62d312774",
    token0: {
      symbol: "FIL",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x54edd846db17f43b6e43296134ecd96284671e81",
    token0: {
      symbol: "BCH",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x6304ae062c6bdf3d24ac86374c7019a025443247",
    token0: {
      symbol: "SOUPS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x4925d290b22a9c19e126583a4dc858fbe909b014",
    token0: {
      symbol: "MDS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xd20e0bcca8b29409bf5726cb24dd779fe337020e",
    token0: {
      symbol: "TXL",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xf609ade3846981825776068a8ed7746470029d1f",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "mNFLX",
    },
  },
  {
    id: "0xd5664d2d15cdffd597515f1c0d945c6c1d3bf85b",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "mTSLA",
    },
  },
  {
    id: "0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "TEN",
    },
  },
  {
    id: "0x7380e10f5c5f9dff4857de3cf9c39bb16f4c6dcf",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "BTCB",
    },
  },
  {
    id: "0xd245bdb115707730136f0459e2aa9b0b19023724",
    token0: {
      symbol: "MDO",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x7793870484647a7278907498ec504879d6971eab",
    token0: {
      symbol: "CTK",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xb8875e207ee8096a929d543c9981c9586992eacb",
    token0: {
      symbol: "BTCB",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x1e47da535d9e96e2f9348d00c18fbe967566bc28",
    token0: {
      symbol: "BSCPAD",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x14189b31dc03f1a5a66ae89fbb5fe40ff78e7968",
    token0: {
      symbol: "XKAT",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xe86493d416eeb7800f08787de759d179b61db921",
    token0: {
      symbol: "BTS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x2366ec9ddd1eb27506fa2ed48da8f2d9e99ed3c7",
    token0: {
      symbol: "ACS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc743dc05f03d25e1af8ec5f8228f4bd25513c8d0",
    token0: {
      symbol: "blink",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x9634cfd96f1499990695ebbc081b4ee8d63d2e12",
    token0: {
      symbol: "CYC",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x8d8b74ea95c0689ac84ddc702d2953c6b2e9f48b",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "NMX",
    },
  },
  {
    id: "0x698aa347d65abebb52901163f65b77c4ce441939",
    token0: {
      symbol: "zSEED",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x44c3dd9c5b49296b97ba58725116d4d63f0e81d4",
    token0: {
      symbol: "OXB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xa823c74de2343e922ab24520f29d08390b4e894d",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "SWAMP",
    },
  },
  {
    id: "0xe7ff9aceb3767b4514d403d1486b5d7f1b787989",
    token0: {
      symbol: "DFX",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x9b06c33807a9dee35dc676c401e6b8d93ab2a2f4",
    token0: {
      symbol: "SWAMP",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x2f82286c2178e9144f2a7b8d27d5b3203253cba4",
    token0: {
      symbol: "SXP",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x1040bf9c9d91a90e9f6ac978506b32f91e2887df",
    token0: {
      symbol: "LIC",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x0ef564d4f8d6c0ffe13348a32e21efd55e508e84",
    token0: {
      symbol: "CUB",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xee39eac90ffb27a9878512200c50481f69d16b76",
    token0: {
      symbol: "PoFi",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x5f4f524e4462d9e0a96334adba82ad4c85be8a48",
    token0: {
      symbol: "DGN",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x989b107cbe05af601573dc7d02e54747148e5dfc",
    token0: {
      symbol: "GSPI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x835281b8c987d1d1f7aca50fd3de1ac46709e169",
    token0: {
      symbol: "UBU",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x574a978c2d0d36d707a05e459466c7a1054f1210",
    token0: {
      symbol: "YFII",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xb9729c1ec74cad850b4b868dd798711bd91da95b",
    token0: {
      symbol: "ZD",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xab69c56d927292197527e3f7bb0073386636635f",
    token0: {
      symbol: "SUPER",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xac774129e8a09a6a4baf30f6120b006b667c70d3",
    token0: {
      symbol: "sBGO",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x4c865169d7300ca00318e53fcbea7c171f805909",
    token0: {
      symbol: "SAFESTAR",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xd6af37e75d62684dea3490ec5684feb1e50f006a",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "TAO",
    },
  },
  {
    id: "0x808b62e7f7c8ea2f589351340a050726e446117b",
    token0: {
      symbol: "GMT",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x45d8d5d9bd425efc26e3259848bcfefa16f927f0",
    token0: {
      symbol: "BTCB",
    },
    token1: {
      symbol: "KEBAB",
    },
  },
  {
    id: "0x82f504d655ec6dba8d5ebbd0036a908a719a295f",
    token0: {
      symbol: "Ramen",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf124a4eed8858665af57b0201cb71b69a50e13c7",
    token0: {
      symbol: "GFCE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x78d9a0c50f6484291b4122f61888bb9ee71879ff",
    token0: {
      symbol: "SPACE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xd51bee2e0a3886289f6d229b6f30c0c2b34fc0ec",
    token0: {
      symbol: "KEBAB",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x70e882efa9bea28262d4873e65d5f65e9b2baba6",
    token0: {
      symbol: "BR34P",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x243e060deca0499fcae6abe548c0115faaba0ed4",
    token0: {
      symbol: "bLEO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc84433a2580aa85cb88094a63e099a8fe8b2f526",
    token0: {
      symbol: "PoFi",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x8fbcbd7e30b1733965a8980bf7ae2ca1c0c456cc",
    token0: {
      symbol: "DFT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf9a25cc47afed187ab23740fd4789a9585a44b92",
    token0: {
      symbol: "FRIDGE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xb3c4217ab2b265bf8c69718d280e3708b5e50577",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xfadc9f1e264c9f174340901f5840c811f6ef3292",
    token0: {
      symbol: "bTBB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x865d2360b5c7a588a1ffdec347089a70589d9440",
    token0: {
      symbol: "OCT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x396e3474a8d1b5882072a4a181b80c52b9fed479",
    token0: {
      symbol: "anyMTLX",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xdd0abd138e0eb151e7c2bdc187960ab1b3ea3aea",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "EBRH",
    },
  },
  {
    id: "0x04f81b56b6947cd0fd35fbea570fc09d1b946c56",
    token0: {
      symbol: "Ramen",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xc08c74dc9ef46c6db122b30c48a659831017dd2e",
    token0: {
      symbol: "CUB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xd9e8a84bb1cf583410bed19af437ddd057053d17",
    token0: {
      symbol: "ALIA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x18cca70dda1699148cb37941d75ccf4847bea188",
    token0: {
      symbol: "PMP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x793fe5a628a79ae3e619acbcde1cbaf8053befc5",
    token0: {
      symbol: "ARGON",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x23764e9669f601fe5fcb62fcbf9cac354993c388",
    token0: {
      symbol: "BUSD",
    },
    token1: {
      symbol: "TAO",
    },
  },
  {
    id: "0xd9a0d1f5e02de2403f68bb71a15f8847a854b494",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xfbd0b87f4132e5a14aa85c21476738c0c13fd06c",
    token0: {
      symbol: "SLME",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xcb645714520080ef4e65de3254d61356262f0818",
    token0: {
      symbol: "SLME",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x9cbecba2a5789759f7ede9d3af0f76e34f070d06",
    token0: {
      symbol: "BGO",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xbb74572f3c00b4d18fabeadb7d5984d7b3ae05d1",
    token0: {
      symbol: "SPG",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x4bbf3f2eef2485dac831167db92d77735946aacc",
    token0: {
      symbol: "CRX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x6c7cdffa997f46598b9616bc0481372e45a00dc4",
    token0: {
      symbol: "bwJUP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x25fd42d82d5c238ee7aa277261aa6ca5bdfe5cd4",
    token0: {
      symbol: "KEBAB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf40780c935070b76f77472ebea2fb9476a315716",
    token0: {
      symbol: "IMO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf0176fc16e8a1340d228c0d450ce15b882aee554",
    token0: {
      symbol: "HAZE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1a91d819521b32c57e1deaefe456683823ad81b5",
    token0: {
      symbol: "bSRK",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1f43e18a2558aef9276a00e041c57ba589813eb2",
    token0: {
      symbol: "ELE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x7b45057ab04b73cde08e0c1a6e32da9657db1b98",
    token0: {
      symbol: "DMS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x567e2b16f8ef147ae62f5d958397eb08974680c1",
    token0: {
      symbol: "bUNDB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf5c3287bb9500dd75b35a13a3ef1771207b248ca",
    token0: {
      symbol: "BTESTA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x078113f736255ad4254838ef8fb804bfdb2cf945",
    token0: {
      symbol: "SFUEL",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x3cc9801e423b7d2a5e6a5213e2f998e078e0aaa9",
    token0: {
      symbol: "ETNA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x9ef19a4321e466263d763b07cd521bbbecdc2ede",
    token0: {
      symbol: "BSCV",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x7075745fa4d819d1a9e0ad155d465f271bdbe0f5",
    token0: {
      symbol: "PEAK",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xe5dc0db6566c8ab329945c87c89a44601976cf9c",
    token0: {
      symbol: "PDAO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc8f900cd8052862a8a5abf9278ad088611b2bd04",
    token0: {
      symbol: "MCRN",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x7fb2c6b9377480fcfb3afb987fd5be6f6139d8c4",
    token0: {
      symbol: "gROOT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x6b936c5c1fd7de08e03684b0588a87dbd8ce6b63",
    token0: {
      symbol: "SPACE",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x91bd9ccbfab019e2dbf801d270d09681b36240e5",
    token0: {
      symbol: "FUSII",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x506c6f29dbb50ef7d9c580cdb914c0e7877515ae",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "UBU",
    },
  },
  {
    id: "0x54c1ec2f543966953f2f7564692606ea7d5a184e",
    token0: {
      symbol: "DOT",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x768bab009c840c9ed321e96cdd6189462dfcd85f",
    token0: {
      symbol: "BBOO",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xdbcf15684d9f7e1393c0d7a8bfe6e4ba4d403794",
    token0: {
      symbol: "UwU",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x83910d938642f3d8908b8b9a1d54fd65356d88e1",
    token0: {
      symbol: "MOR",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x8e2519273c457a267840043f3fca80cb773cd167",
    token0: {
      symbol: "BGO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x837cd42282801e340f1f17aadf3166fee99fb07c",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "ALPA",
    },
  },
  {
    id: "0x723203e821f1ff2d0e396d5dd2ea390f3c9d42cf",
    token0: {
      symbol: "BREW",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x81a2c3833b89797c7f5c7fce682df2f5e30738af",
    token0: {
      symbol: "LIGHT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x9f4c08aa169973d23a90f79e2650ee81e0748462",
    token0: {
      symbol: "NANA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x7c6b36107cdca6f6de649b3d286236141d2591bb",
    token0: {
      symbol: "BCU",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x6596f770786915556c47e301cc8290aa14288d99",
    token0: {
      symbol: "SALT",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x99ffd623a46362d61d5e0f9abf9728a2a429acf5",
    token0: {
      symbol: "VLAD",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xcdff007f71e6986397bdb099160d37c3f194b642",
    token0: {
      symbol: "WLT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xca5a529f3137109eccd5a239e58a150f651710a2",
    token0: {
      symbol: "BLUE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x6284b49544c8900b4612f8450dce8d484e5c2631",
    token0: {
      symbol: "SALT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc1a37db3ac15d6925af08fadedac5d756affa98d",
    token0: {
      symbol: "ABS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x74d2a66650bbd8027fd1f4a3454a16d75a05cc14",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "CROW",
    },
  },
];

export const PAIR_NOT_EXISTS = "PAIR_NOT_EXISTS";
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

export { contractAddresses, supportedPairs };
