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

const supportedPairs = [
  {
    id: "0x4b6000F9163de2E3f0a01eC37E06e1469DBbcE9d",
    token0: {
      symbol: "KEYFI",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc087c78abac4a0e900a327444193dbf9ba69058e",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x7bd46f6da97312ac2dbd1749f82e202764c0b914",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x51e6d27fa57373d8d4c256231241053a70cb1d93",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x2e707261d086687470b515b320478eb1c88d49bb",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xa0c3ef24414ed9c9b456740128d8e63d016a9e11",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x40d4543887e4170a1a40cd8db15a6b297c812cb1",
    token0: {
      symbol: "ADA",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x8b6ecea3e9bd6290c2150a89af6c69887aaf1870",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x1e1afe9d9c5f290d8f6996ddb190bd111908a43d",
    token0: {
      symbol: "BTCB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xfd1ef328a17a8e8eeaf7e4ea1ed8a108e1f2d096",
    token0: {
      symbol: "DOGE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x6f0f18f5fcc1466ec41c8106689e10befe68d1c0",
    token0: {
      symbol: "XRP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x092ada3818db7fbb8e0a2124ff218c5125c1cce6",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "LINK",
    },
  },
  {
    id: "0x61fe209e404166a53cc627d0ae30a65606315da7",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "ADA",
    },
  },
  {
    id: "0x0f12362c017fe5101c7bba09390f1cb729f5b318",
    token0: {
      symbol: "LTC",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x29a4a3d77c010ce100a45831bf7e798f0f0b325d",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "MATIC",
    },
  },
  {
    id: "0x21cbb561c5d7d70e9e6cc42136cb22f07552aeef",
    token0: {
      symbol: "DOT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xdd6c7a955c72b3ffd546d8dadbf7669528d8f785",
    token0: {
      symbol: "ETC",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1d0c3044ebf055986c52d38b19b5369374e6bc6a",
    token0: {
      symbol: "SUSHI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xb7f42e58cf2364ac994f93f7aff3b158cfa3dc76",
    token0: {
      symbol: "CELR",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x044f2b275a344d4edfc3d98e1cb7c02b30e6484e",
    token0: {
      symbol: "ETH",
    },
    token1: {
      symbol: "SUSHI",
    },
  },
  {
    id: "0x60593abea55e9ea9d31c1b6473191cd2475a720d",
    token0: {
      symbol: "Cake",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xc0afb6078981629f7eae4f2ae93b6dbea9d7a7e9",
    token0: {
      symbol: "SHIB",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x47a0b7ba18bb80e4888ca2576c2d34be290772a6",
    token0: {
      symbol: "FTM",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x015f807d0186f7e62810d0c597a23cb19ff57e4d",
    token0: {
      symbol: "BLZ",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf726b3e81fa7166b9c2cfd7eb7fe8ccbcb6b1355",
    token0: {
      symbol: "SXP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xf13e007e181a8f57ed3a4d4cce0a9ff9e7241cef",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "AAVE",
    },
  },
  {
    id: "0xddd3f9d5bd347c55d18752c0c2075698ec657750",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BIFI",
    },
  },
  {
    id: "0x6e425b4fc4efd070dc0def1654a17946c7e6b3c4",
    token0: {
      symbol: "BAT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x40afc7cbd0dc2be5860f0035b717d20afb4827b2",
    token0: {
      symbol: "AVAX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xb4c0c621b2edfe6c22585ebac56b0e634907b8a7",
    token0: {
      symbol: "COMP",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x0d70924695b6ae496f0a74a36bf79d47307dd519",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "IOTA",
    },
  },
  {
    id: "0xc1c7a1d33b34019f82808f64ba07e77512a13d1a",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BAKE",
    },
  },
  {
    id: "0xd0f82498051067e154d1dcd3d88fa95063949d7e",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "SPACE",
    },
  },
  {
    id: "0xb75724635a6cda850f08b578f23a568cedba099d",
    token0: {
      symbol: "NEAR",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x2b2c771e44af4c6f858598308e05fb89b23f11ce",
    token0: {
      symbol: "ZEC",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x649a5ad5135b4bd287e5aca8d41f4d5e1b52af5c",
    token0: {
      symbol: "AUTO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x8b1f1f28a8ccbaa8a8bc1582921ece97ce99d9e1",
    token0: {
      symbol: "SNX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x924d3f2f94618e8ee837d4c2b8d703f0de12a57e",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "ONT",
    },
  },
  {
    id: "0x789fd04bfbc64169104466ee0d48716e0452bcf6",
    token0: {
      symbol: "NUTS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x288ea5437c7aad045a393cee2f41e548df24d1c8",
    token0: {
      symbol: "NAUT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1696a65ea693593ba771b5a7afc54c8eaf4c20de",
    token0: {
      symbol: "BFT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xacfdcf0486adc2421aac3ffc0923b9c56faebc47",
    token0: {
      symbol: "COTI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x85d87c038917ec8949f12b06262bb9d7a1290db6",
    token0: {
      symbol: "BAT",
    },
    token1: {
      symbol: "ETH",
    },
  },
  {
    id: "0xfb6063f29af6dcd1fc03a8e221c6d91deabbe764",
    token0: {
      symbol: "JDI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x744527700ceb261689df9862fcd0036f5771324c",
    token0: {
      symbol: "LYPTUS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x876ba49c4f438643ab33f871e14a54cbb897df49",
    token0: {
      symbol: "NRV",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x1ea398a30f0f2a6ce00bebfe08fe11cd9df5afb6",
    token0: {
      symbol: "LYPTUS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x8a10489f1255fb63217be4cc96b8f4cd4d42a469",
    token0: {
      symbol: "CRUSH",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x756d4406169273d99aac8366cf5eaf7865d6a9b9",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "TAPE",
    },
  },
  {
    id: "0xfeaf192c2662e5700bda860c58d2686d9cc12ec8",
    token0: {
      symbol: "TYPH",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xbf34598168b890e1fd9e845c118a80c4861220ff",
    token0: {
      symbol: "RUPEE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x7a8acaeafc4fa051de4eabff8d1abdd0388ae08a",
    token0: {
      symbol: "KEYFI",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xcf2c3af91b5a55e283a8a8c2932b88009b557b4a",
    token0: {
      symbol: "bMXX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x6011c6bae36f2a2457dc69dc49068a1e8ad832dd",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "wBAN",
    },
  },
  {
    id: "0xc2fef4bec915315bef9f6e8a06b2516e64d29d06",
    token0: {
      symbol: "bxBTC",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x334e697022aeabba58385afb3abf3d9347c1b260",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "pCWS",
    },
  },
  {
    id: "0xfc791965beacf6c0bcebcc4b8d165f0c0d35e82d",
    token0: {
      symbol: "RUPEE",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x5514e0e1da40a38e19d58e8b6e16226e16e183fa",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "BREW",
    },
  },
  {
    id: "0xa3f0f63268df562c71051ac5e81460e857c32c12",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "SWAMP",
    },
  },
  {
    id: "0x7898466cacf92df4a4e77a3b4d0170960e43b896",
    token0: {
      symbol: "wBAN",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x73cddf4ea34dbd872f89e98c2866c81929aafe50",
    token0: {
      symbol: "FEG",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xe6de19ae48969af0a6f78271e41d3ce47580eafb",
    token0: {
      symbol: "MOONLIGHT",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x5fcec12f1c7e57789f22289ef75fbdb1c6b4895d",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "DINOP",
    },
  },
  {
    id: "0x656f1081715e0b9986446c35efb6b4b66199cc0a",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "CROW",
    },
  },
  {
    id: "0x9fc885b1dddac249f946c31ef49e58f38f8bf1b7",
    token0: {
      symbol: "TWIN",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x44530667302c2655e8cd3d0365a799e9789f388d",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "LYPTUS",
    },
  },
  {
    id: "0x2073df355abeb7339be4ea573692dc97f0b6d508",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "BINGUS",
    },
  },
  {
    id: "0xb0d759cd87b74f079166283f4f6631f5703cea1a",
    token0: {
      symbol: "GMR",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xb022b1f501c326d58e7b5baaca91f9c3acc5e906",
    token0: {
      symbol: "gRUPEE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x67a8c4cd5fd2dabfacf9beca5dc228819a80c73e",
    token0: {
      symbol: "CRX",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xdb77fa37766dbf0d74bc9f0ad497f7cc887ea322",
    token0: {
      symbol: "TAKO",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x3b2ebd524bd5d3a31d4e47b96a8661153dcfff7b",
    token0: {
      symbol: "CROW",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x2457598552db0adfd1163f132f51a636d6b3342f",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "PMOT",
    },
  },
  {
    id: "0xb0ed855d390e783e2a7f1ffdbede5bc7b6cf3deb",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "MEMEX",
    },
  },
  {
    id: "0x44baf117d79d5313bea1fbba416e4067436e4bbe",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "NUTS",
    },
  },
  {
    id: "0xc0acacab94006ede5c2705b65919b6f9573f9866",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "VOXb",
    },
  },
  {
    id: "0x2c4747fa7d9e485881976f5f299a60a4a30b5252",
    token0: {
      symbol: "TAKO",
    },
    token1: {
      symbol: "BANANA",
    },
  },
  {
    id: "0x095153e064a45d3e7043d4bc4dd7087852f0310c",
    token0: {
      symbol: "gRUPEE",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xe1eaebfad38c5725b636582b0f0f83e98d102a55",
    token0: {
      symbol: "BUSD",
    },
    token1: {
      symbol: "MEMEX",
    },
  },
  {
    id: "0xca21e3adb07a2f1a289ca1c5530021a6f8130dbc",
    token0: {
      symbol: "TAPS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xe4fba63b748175d2775bfe49c106a10800200bb6",
    token0: {
      symbol: "TAKO",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xe5085ce5f12516ba3077edf4a3b58c2cc8faabcd",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "RUPEE",
    },
  },
  {
    id: "0x6366dc2aa1e53c268aa2009a97609ad817948ea2",
    token0: {
      symbol: "PMOT",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xbd896f59baf9a624a7587de5d28b7ad3459342ba",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "CRX",
    },
  },
  {
    id: "0xd7903933b10504a7c67f191285a6a7e5a233fd3b",
    token0: {
      symbol: "GFCE",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xa48271ff51900007d3b21cecf30fdc8ccb63fee6",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "SOUL",
    },
  },
  {
    id: "0x268f002a3b8d2fac2aa2ba6d4b90d519ca0d1d46",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "HPS",
    },
  },
  {
    id: "0x436bda511fb94276313d65c41bcf227d8112c87a",
    token0: {
      symbol: "GORIL",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xe152f30c2a69a7fdd0bd08224d40fb321db2b07f",
    token0: {
      symbol: "CHIPS",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0x51bb531a5253837a23ce8de478a4941a71a4202c",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "BAKE",
    },
  },
  {
    id: "0x70ccf4cd3caf08b53577d2c58e5e22b6e3294bad",
    token0: {
      symbol: "Cake",
    },
    token1: {
      symbol: "TAKO",
    },
  },
  {
    id: "0x9949e1db416a8a05a0cac0ba6ea152ba8729e893",
    token0: {
      symbol: "Cake",
    },
    token1: {
      symbol: "BANANA",
    },
  },
  {
    id: "0x455254e9f1846f70184f586b56dffb82e5370dec",
    token0: {
      symbol: "TAPS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0xbc8cb82b11cd0f0050cf6c09a3cb61ed4e4ce1b2",
    token0: {
      symbol: "LOTUS",
    },
    token1: {
      symbol: "BUSD",
    },
  },
  {
    id: "0x0a6dd2e402531009b0f13ffeba9df48625a86e72",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "GMEv3",
    },
  },
  {
    id: "0x988d345b3ac0459ab4870a7fc76d1de365e349c4",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "MARS",
    },
  },
  {
    id: "0x2f420f7a6d3594f8bc93955fe44493015e94fd34",
    token0: {
      symbol: "BLUE",
    },
    token1: {
      symbol: "BANANA",
    },
  },
  {
    id: "0x8330e0814aa1f0dc1a61e4ed73e6d1315c7ad732",
    token0: {
      symbol: "DSL",
    },
    token1: {
      symbol: "WBNB",
    },
  },
  {
    id: "0xa63cc83e7308bbe742af2f83b0da489acc5d4423",
    token0: {
      symbol: "WBNB",
    },
    token1: {
      symbol: "TOASTZ",
    },
  },
  {
    id: "0xbe3e38918ca1180f0285fa18c3fa154d0dde6853",
    token0: {
      symbol: "Foxy",
    },
    token1: {
      symbol: "WBNB",
    },
  },
];

export const PAIR_NOT_EXISTS = "PAIR_NOT_EXISTS";
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

export { contractAddresses, supportedPairs };
