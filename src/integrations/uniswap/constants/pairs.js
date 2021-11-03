const fs = require("fs");

let pairs = [
  {
    id: "0x21b8065d10f73ee2e260e5b47d3344d3ced7596e",
    token0: {
      symbol: "WISE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x94b0a3d511b6ecdb17ebf877278ab030acb0a878",
    token0: {
      symbol: "FEI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
    token0: {
      symbol: "WBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5fa464cefe8901d66c09b85d5fcdc55b3738c688",
    token0: {
      symbol: "TOKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd3d2e2692501a5c9ca623199d38826e513033a17",
    token0: {
      symbol: "UNI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf52f433b79d21023af94251958bed3b64a2b7930",
    token0: {
      symbol: "HKMT",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
    token0: {
      symbol: "LINK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7d7e813082ef6c143277c71786e5be626ec77b20",
    token0: {
      symbol: "DELTA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x3041cbd36888becc7bbcbc0045e3b1f144466f5f",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x75f89ffbe5c25161cbc7e97c988c9f391eaefaf9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "wPE",
    },
  },
  {
    id: "0xd6f3768e62ef92a9798e5a8cedd2b78907cecef9",
    token0: {
      symbol: "FLX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcd6bcca48069f8588780dfa274960f15685aee0e",
    token0: {
      symbol: "⚗️",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3dd49f67e9d5bc4c5e6634b3f70bfd9dc1b6bd74",
    token0: {
      symbol: "SAND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f",
    token0: {
      symbol: "AAVE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7b73644935b8e68019ac6356c40661e1bc315860",
    token0: {
      symbol: "ELON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x27fd0857f0ef224097001e87e61026e39e1b04d1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RLY",
    },
  },
  {
    id: "0x0af81cd5d9c124b4859d65697a4cd10ee223746a",
    token0: {
      symbol: "XXi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8ae720a71622e824f576b4a8c03031066548a3b1",
    token0: {
      symbol: "RAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x25647e01bd0967c1b9599fa3521939871d1d0888",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SUPER",
    },
  },
  {
    id: "0x9cbfb60a09a9a33a10312da0f39977cbdb7fde23",
    token0: {
      symbol: "SAITAMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ee0cb563a52ae1170ac34fbb94c50e89adde4bd",
    token0: {
      symbol: "WAXE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x61b62c5d56ccd158a38367ef2f539668a06356ab",
    token0: {
      symbol: "FNK",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc2adda861f89bbb333c90c492cb837741916a225",
    token0: {
      symbol: "MKR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6591c4bcd6d7a1eb4e537da8b78676c1576ba244",
    token0: {
      symbol: "BOND",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9c4fe5ffd9a9fc5678cfbd93aa2d4fd684b67c4c",
    token0: {
      symbol: "PAXG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9ff68f61ca5eb0c6606dc517a9d44001e564bb66",
    token0: {
      symbol: "BOTTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x97e1fcb93ae7267dbafad23f7b9afaa08264cfd8",
    token0: {
      symbol: "UFO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x470e8de2ebaef52014a47cb5e6af86884947f08c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FOX",
    },
  },
  {
    id: "0x10e4a463f2ace6e3836fe547e885993844299be6",
    token0: {
      symbol: "FLOKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf6dcdce0ac3001b2f67f750bc64ea5beb37b5824",
    token0: {
      symbol: "HEX",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xa5e9c917b4b821e4e0a5bbefce078ab6540d6b5e",
    token0: {
      symbol: "STARL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7924a818013f39cf800f5589ff1f1f0def54f31f",
    token0: {
      symbol: "LON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x94ae6d2390680ac6e6ee6069be42067d6ad72e2a",
    token0: {
      symbol: "CARDS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x582e3da39948c6339433008703211ad2c13eb2ac",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "USD",
    },
  },
  {
    id: "0x6ada49aeccf6e556bb7a35ef0119cc8ca795294a",
    token0: {
      symbol: "WOO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc5be99a02c6857f9eac67bbce58df5572498f40c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AMPL",
    },
  },
  {
    id: "0xc0bf97bffa94a50502265c579a3b7086d081664b",
    token0: {
      symbol: "STRONG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05be6820730b30086d6355c44c424230aaff41fb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VEMP",
    },
  },
  {
    id: "0xe6f19dab7d43317344282f803f8e8d240708174a",
    token0: {
      symbol: "KEEP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x70ea56e46266f0137bac6b75710e3546f47c855d",
    token0: {
      symbol: "RPL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdf60e6416fcf8c955fddf01148753a911f7a5905",
    token0: {
      symbol: "KUMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xffa98a091331df4600f87c9164cd27e8a5cd2405",
    token0: {
      symbol: "POLS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x811beed0119b4afce20d2583eb608c6f7af1954f",
    token0: {
      symbol: "SHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf66369997ae562bc9eec2ab9541581252f9ca383",
    token0: {
      symbol: "PERP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ee312a6d5fe7b4b8c25f0a32fca6391209ebebf",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GOVI",
    },
  },
  {
    id: "0x21c5918ccb42d20a2368bdca8feda0399ebfd2f6",
    token0: {
      symbol: "GRO",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xbc6d37be25b06471d9e094dbb800c1d006e5a9ed",
    token0: {
      symbol: "BOOST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc730ef0f4973da9cc0ab8ab291890d3e77f58f79",
    token0: {
      symbol: "AUDIO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaf5a7469cf2571b973aeee9ae2f8aad00e1337d2",
    token0: {
      symbol: "SUNC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfe903a12359496b932e24c5e9b78f1b9060a6342",
    token0: {
      symbol: "PKF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaf31fd9c3b0350424bf96e551d2d1264d8466205",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PUSH",
    },
  },
  {
    id: "0xdf42388059692150d0a9de836e4171c7b9c09cbf",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KISHIMOTO",
    },
  },
  {
    id: "0x854373387e41371ac6e307a1f29603c6fa10d872",
    token0: {
      symbol: "FEG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d5ef58aac27d99935e5b6b4a6778ff292059991",
    token0: {
      symbol: "DPI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x700fc86c46299cf2a8fd86edadae3f57014351b0",
    token0: {
      symbol: "RACA",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x570febdf89c07f256c75686caca215289bb11cfc",
    token0: {
      symbol: "ERN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0efea698136d636e2babad10821e9064fe08f418",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ICE",
    },
  },
  {
    id: "0x4fda00d490c1c05ff15d7313d1cebe9c711e434b",
    token0: {
      symbol: "WHALE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf91c12dae1313d0be5d7a27aa559b1171cc1eac5",
    token0: {
      symbol: "ETH2x-FLI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x69884da24f31960f694a8fa1f30aa8e0416fbd04",
    token0: {
      symbol: "LTX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa5f0cf205af1f5b02c00ba7ab834824c01855b54",
    token0: {
      symbol: "OPUL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xda3a20aad0c34fa742bd9813d45bbf67c787ae0b",
    token0: {
      symbol: "AKITA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbbbf1426cbe8509ef58451ab7ad67cb74866e3fa",
    token0: {
      symbol: "SHKOOBY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeb4664d8229dde455dca168a404ed6c03d4bb701",
    token0: {
      symbol: "URUS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6cbcd84abcfbb411426dc21a621fe9a68b985bf4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PEEPS",
    },
  },
  {
    id: "0x8c1c499b1796d7f3c2521ac37186b52de024e58c",
    token0: {
      symbol: "RAD",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x29f07e631a2f990e1f6117c6285a44e746b1f090",
    token0: {
      symbol: "EVN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xff62e62e8b3cf80050464b86194e52c3ead43bb6",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "COIN",
    },
  },
  {
    id: "0xf82d8ec196fb0d56c6b82a8b1870f09502a49f88",
    token0: {
      symbol: "KISHU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0be902716176d66364f1c2ecf25829a6d95c5bee",
    token0: {
      symbol: "CDS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x60a39010e4892b862d1bb6bdde908215ac5af6f3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LUNA",
    },
  },
  {
    id: "0xbe44e5dd67276f53b2aca540b4ed32c84ed0e7b3",
    token0: {
      symbol: "BigSB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf043c39a106db6b58c76995f30ba35fd211c3b76",
    token0: {
      symbol: "APY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8d1ca95559abed542ef4402a252974221b5e1036",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "wCELO",
    },
  },
  {
    id: "0x343fd171caf4f0287ae6b87d75a8964dc44516ab",
    token0: {
      symbol: "PNK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x11b1f53204d03e5529f09eb3091939e4fd8c9cf3",
    token0: {
      symbol: "MANA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x33906431e44553411b8668543ffc20aaa24f75f9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CHAIN",
    },
  },
  {
    id: "0x08650bb9dc722c9c8c62e79c2bafa2d3fc5b3293",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AMP",
    },
  },
  {
    id: "0xe3ee3d5f7e9c750490d99ab166edc1886de0a85e",
    token0: {
      symbol: "SPI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x10db37f4d9b3bc32ae8303b46e6166f7e9652d28",
    token0: {
      symbol: "RBC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4e84460a8b8bad045ff4eb5be1ecce7a3e3a17c8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LUFFY",
    },
  },
  {
    id: "0x602414a63c90801dc4337ee440b3454a6d2c275b",
    token0: {
      symbol: "SHEESHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb20bd5d04be54f870d5c0d3ca85d82b34b836405",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x44c21f5dcb285d92320ae345c92e8b6204be8cdf",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$DG",
    },
  },
  {
    id: "0xbc2c5392b0b841832bec8b9c30747badda7b70ca",
    token0: {
      symbol: "RENA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4cd36d6f32586177e36179a810595a33163a20bf",
    token0: {
      symbol: "DAO",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x1bfffb738d69167d5592160a47d5404a3cf5a846",
    token0: {
      symbol: "KEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcffdded873554f362ac02f8fb1f02e5ada10516f",
    token0: {
      symbol: "COMP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9339227db67f747114c929b26b81fe7974436b94",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YLD",
    },
  },
  {
    id: "0x3da1313ae46132a397d90d95b1424a9a7e3e0fce",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CRV",
    },
  },
  {
    id: "0xe5c5227d8105d8d5f26ff3634eb52e2d7cc15b50",
    token0: {
      symbol: "ALBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEXT",
    },
  },
  {
    id: "0x5f6fbe81171d0f52cc58d6a2ac6ee1a9e52d18d2",
    token0: {
      symbol: "10SET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2caccf71bdf8fff97c06a46eca29b611b1a74b5e",
    token0: {
      symbol: "SWFL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8ff2fd6f94cdce7c56bb11328eb9928c9483aa66",
    token0: {
      symbol: "MINDS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc88ac988a655b91b70def427c8778b4d43f2048d",
    token0: {
      symbol: "DERC",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xaf996125e98b5804c00ffdb4f7ff386307c99a00",
    token0: {
      symbol: "XFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc3d7aa944105d3fafe07fc1822102449c916a8d0",
    token0: {
      symbol: "WDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6490828bd87be38279a36f029f3b9af8b4e14b49",
    token0: {
      symbol: "RVST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x873056a02255872514f05249d93228d788fe4fb4",
    token0: {
      symbol: "DG",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x3b3d4eefdc603b232907a7f3d0ed1eea5c62b5f7",
    token0: {
      symbol: "STAKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaf21b0ec0197e63a5c6cc30c8e947eb8165c6212",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DETS",
    },
  },
  {
    id: "0xc0067d751fb1172dbab1fa003efe214ee8f419b6",
    token0: {
      symbol: "DOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d3c5db2c68f6859e0cd05d080979f597dd64bff",
    token0: {
      symbol: "MVI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaae5f80bac0c7fa0cad6c2481771a3b17af21455",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SALE",
    },
  },
  {
    id: "0xdfea03ed1ec53116cd6ea45373cbb6e8823ef59d",
    token0: {
      symbol: "LGCY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc50ef7861153c51d383d9a7d48e6c9467fb90c38",
    token0: {
      symbol: "UST",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xf063806d07fe742b031a543145fb46d1bc670fe8",
    token0: {
      symbol: "OCEAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6147805e1011417b93e5d693424a62a70d09d0e5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ankrETH",
    },
  },
  {
    id: "0xc465c0a16228ef6fe1bf29c04fdb04bb797fd537",
    token0: {
      symbol: "SDT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x70ec2fa6eccf4010eaf572d1c1a7bcbc72dec983",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ROOK",
    },
  },
  {
    id: "0x819f3450da6f110ba6ea52195b3beafa246062de",
    token0: {
      symbol: "MATIC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x12d4444f96c644385d8ab355f6ddf801315b6254",
    token0: {
      symbol: "CVP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ae2bf1c5e67509ef5b2367751a87e65c47be2c4",
    token0: {
      symbol: "MINTYS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb5bd39fc0c57d902271ba6c5cd89c1510a37c0dd",
    token0: {
      symbol: "POLC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7ca51456b20697a0e5be65e5aeb65dfe90f21150",
    token0: {
      symbol: "arNXM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x984a3eab3cf2fc2b4ca6e4a3768624a8272fe2a3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "C3",
    },
  },
  {
    id: "0x4a7d4be868e0b811ea804faf0d3a325c3a29a9ad",
    token0: {
      symbol: "REQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x797e1dc0738f2f047d7e0dd185e41a35f87c5618",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZCX",
    },
  },
  {
    id: "0x48a91882552dad988ae758fcb7070b8e9844dec5",
    token0: {
      symbol: "ARCH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x131caa9c69394acb7c20c1a0af0ca9ebd1cdbb86",
    token0: {
      symbol: "DBUY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x55d5c232d921b9eaa6b37b5845e439acd04b4dba",
    token0: {
      symbol: "HEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb5f790a03b7559312d9e738df5056a4b4c8459f4",
    token0: {
      symbol: "GLM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf232d640a5700724748464ba8bd8bed21db609a6",
    token0: {
      symbol: "SKL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa2b04f8133fc25887a436812eae384e32a8a84f2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "COTI",
    },
  },
  {
    id: "0x6d7b6dad6abed1dfa5eba37a6667ba9dcfd49077",
    token0: {
      symbol: "VSP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3185626c14acb9531d19560decb9d3e5e80681b1",
    token0: {
      symbol: "XRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0c722a487876989af8a05fffb6e32e45cc23fb3a",
    token0: {
      symbol: "TORN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd3d8c734f06229e36febd07505d8f57b7b78af7c",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "ZKS",
    },
  },
  {
    id: "0xc5ed7350e0fb3f780c756ba7d5d8539dc242a414",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DUCK",
    },
  },
  {
    id: "0x23f7d99c169dee26b215edf806da8fa0706c4ecc",
    token0: {
      symbol: "DEGO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d76f7d16ca40dd13e52df3e1615318f763c0241",
    token0: {
      symbol: "BIRD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6a164da2cdae5f1836c8fe6d683c3df4a0a65e5c",
    token0: {
      symbol: "DJ15",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdc2b82bc1106c9c5286e59344896fb0ceb932f53",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RGT",
    },
  },
  {
    id: "0x3bf862093cbb6412b6ee498f4d652bba005aa7f3",
    token0: {
      symbol: "K21",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x089dfd0078aaa2c9529bb37f66ccea1dc0ced3be",
    token0: {
      symbol: "PUNDIX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed6c2f053af48cba6cbc0958124671376f01a903",
    token0: {
      symbol: "ALD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf6c3595cbd6858b47e93c83312cef89750cea3a4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CUBE",
    },
  },
  {
    id: "0x12de8a435ff54f3e00951ef04119ff0e6a717bff",
    token0: {
      symbol: "DVI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x383d02acbb27b0066234cc1c9c459e0c54a41b24",
    token0: {
      symbol: "UMX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcaa004418eb42cdf00cb057b7c9e28f0ffd840a5",
    token0: {
      symbol: "WILD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8d50d0fd88016ea63229e432803db4069c40db09",
    token0: {
      symbol: "pBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9def9511fec79f83afcbffe4776b1d817dc775ae",
    token0: {
      symbol: "ANT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4dc02e1bb2ec1ce4c50c351e6e06505e7b1dce8d",
    token0: {
      symbol: "DIA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb1bbeea2da2905e6b0a30203aef55c399c53d042",
    token0: {
      symbol: "UMB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd75d1b30967d94b105f82f572ae7591cc3c48beb",
    token0: {
      symbol: "CLS",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xc60c479f3cc66f1654a4113f4949c98ce77a9995",
    token0: {
      symbol: "KYL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x459e4eeafb9e5d7299bbbcd5b6ab36667ffe3597",
    token0: {
      symbol: "F9",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf6c4e4f339912541d3f8ed99dba64a1372af5e5b",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "HEZ",
    },
  },
  {
    id: "0x67b3825348521b94828127f1ee31da80ee67d285",
    token0: {
      symbol: "LUNA",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xca13c1f54c67a125ffdef3246650d0666f7ae2f1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PIPT",
    },
  },
  {
    id: "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28",
    token0: {
      symbol: "YFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x20d2c17d1928ef4290bf17f922a10eaa2770bf43",
    token0: {
      symbol: "MUSE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b577e849b128ee1a69144b218e809b8bb98c35d",
    token0: {
      symbol: "NAOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfcd13ea0b906f2f87229650b8d93a51b2e839ebd",
    token0: {
      symbol: "DOGE",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x78b9524101fb67286338261ddd85e20665e571c1",
    token0: {
      symbol: "UNISTAKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2d27cae0c7e88de9b85b3e44ea37b9cb70ca745f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SMI",
    },
  },
  {
    id: "0xb8a1a865e4405281311c5bc0f90c240498472d3e",
    token0: {
      symbol: "NOIA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b7dad79fc16106b47a3dab791f389c167e15eb0",
    token0: {
      symbol: "OCEAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x87898263b6c5babe34b4ec53f22d98430b91e371",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BEAN",
    },
  },
  {
    id: "0xb6909b960dbbe7392d405429eb2b3649752b4838",
    token0: {
      symbol: "BAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05f21e62952566cefb77f5153ec6b83c14fb6b1d",
    token0: {
      symbol: "RFuel",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc962b726f356105c4d9391ec85a1d0324fc96a43",
    token0: {
      symbol: "ORO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe45b4a84e0ad24b8617a489d743c52b84b7acebe",
    token0: {
      symbol: "AGIX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xda3706c9a099077e6bc389d1baf918565212a54d",
    token0: {
      symbol: "VIDYA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4a9596e5d2f9bef50e4de092ad7181ae3c40353e",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "BSG",
    },
  },
  {
    id: "0xa3b79b78678c15eec77389b380988b0229da1876",
    token0: {
      symbol: "WHITE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x60270a3b7c4be0aff35299fe401c612cb7e1e173",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CBK",
    },
  },
  {
    id: "0xddf8390ced9fad414b1ca1dd4fe14f881c2cfa70",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NTVRK",
    },
  },
  {
    id: "0xcb37b0027858796ce60ecce4b54c45afdff02aca",
    token0: {
      symbol: "PBR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe0cc5afc0ff2c76183416fb8d1a29f6799fb2cdf",
    token0: {
      symbol: "XIO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x84e34df6f8f85f15d24ec8e347d32f1184089a14",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Yf-DAI",
    },
  },
  {
    id: "0x6f118ecebc31a5ffe49b87c47ea80f93a2af0a8a",
    token0: {
      symbol: "XCAD",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x1f964ff83c54ce447adae5cb93f9ec17018bf55b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BEZOGE",
    },
  },
  {
    id: "0xc433e27c2b7a77e4021524a90354b9922c825335",
    token0: {
      symbol: "RDT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc76225124f3caab07f609b1d147a31de43926cd6",
    token0: {
      symbol: "SFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x36938d1419b717c97ebdb273702806ca73f89a4c",
    token0: {
      symbol: "CFi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x040bef6a2984ba28d8af8a24ddb51d61fbf08a81",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "COMBO",
    },
  },
  {
    id: "0x5b1e45ca08fa4d65aa7fdcf9e116990fb7fce73b",
    token0: {
      symbol: "pBTC35A",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xadd5510ebf896cf5f90c0e0c828e57fae9f1f93e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "META",
    },
  },
  {
    id: "0x1fbf001792e8cc747a5cb4aedf8c26b7421147e7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "USF",
    },
  },
  {
    id: "0x5013b8c94ff2e95e8b36e3c064274b20987403f8",
    token0: {
      symbol: "Mononoke-Inu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd372a3221021df72eda38f77117d3a95f057e163",
    token0: {
      symbol: "DFL",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x684b00a5773679f88598a19976fbeb25a68e9a5f",
    token0: {
      symbol: "eXRD",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x75001b3ffe0f77864c7dc64c55e1e22b205e4a07",
    token0: {
      symbol: "FVT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0cfb06414c6d9790bc661230dba0b24060808bf4",
    token0: {
      symbol: "GAME",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9",
    token0: {
      symbol: "XMON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d136871d5617019dfdb339a2cd7cb5a0b75e7f3",
    token0: {
      symbol: "imBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc50ff50a6e01cd5d06cec9ceef805ca7f05e5bd3",
    token0: {
      symbol: "ALPHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb9acb51416557ec55804d44eb3b11a819f11dd72",
    token0: {
      symbol: "LEAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0e9c8107682ab88604b4fbf847eeeceacf38e9e6",
    token0: {
      symbol: "OIL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xb6ca52c7916ad7960c12dc489fd93e5af7ca257f",
    token0: {
      symbol: "eMax",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x43ae24960e5534731fc831386c07755a2dc33d47",
    token0: {
      symbol: "SNX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf64af01a14c31164ff7381cf966df6f2b4cb349f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DPX",
    },
  },
  {
    id: "0xb1a824a6caf1f789aa7ca1072e36e83cd62ba3ee",
    token0: {
      symbol: "LAYER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2e03677a64cfd8ef9510e11855581cb22f2acade",
    token0: {
      symbol: "ZEE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa5e79baee540f000ef6f23d067cd3ac22c7d9fe6",
    token0: {
      symbol: "CEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6e6d348260deccaaa03faaa7160f81968e9728c3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TZKI",
    },
  },
  {
    id: "0x7ee2d59972dd251f4212cfb69e0414cb33962650",
    token0: {
      symbol: "GREY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x02dff5bd909f3e49a69eebb7eed481c2c4df9ba3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "APENOUT",
    },
  },
  {
    id: "0x4b3ec6f5290f729e4b9b0ccfbb1dfaa118c078a2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GAIN",
    },
  },
  {
    id: "0x81fbef4704776cc5bba0a5df3a90056d2c6900b3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "renBTC",
    },
  },
  {
    id: "0x1cd926f3e12f7b6c2833fbe7277ac53d529a794e",
    token0: {
      symbol: "ALBT",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa8eeef45b04c58a7bfe1c5819afc21b20c06db9c",
    token0: {
      symbol: "ORION",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa2f6a219a51b4682e34a13a94c160d6c79cdca35",
    token0: {
      symbol: "FILST",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x1a41936bfdd484d1f426ad5f2293c49847b9bf76",
    token0: {
      symbol: "ACT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf4eae3218778510cc1d07ed22338d6d8df2adaf1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DWEB",
    },
  },
  {
    id: "0x127cadea890813125ca083280ab921d2220558c2",
    token0: {
      symbol: "eSOV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd8a07e9fe071106bf29536b93e8c9a26527af787",
    token0: {
      symbol: "BLANK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x85cb0bab616fe88a89a35080516a8928f38b518b",
    token0: {
      symbol: "POOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7fd1de95fc975fbbd8be260525758549ec477960",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HOGE",
    },
  },
  {
    id: "0x4423be2173401e96065953a3e962ba7b8fdba68a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "renFIL",
    },
  },
  {
    id: "0xc8ca3c0f011fe42c48258ecbbf5d94c51f141c17",
    token0: {
      symbol: "CGG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d8d4550637e3fc86cb465734ab33280e4838e08",
    token0: {
      symbol: "TAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4a5cf9ecc6fdd4750df92a33ced79d477d9298c8",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "MCO2",
    },
  },
  {
    id: "0x6cd7301d8366382198e2ab7d3cc4c6a74f3b4fc8",
    token0: {
      symbol: "CARD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1037fa1f40b69c9266c4aeb2abcedc7553614b4c",
    token0: {
      symbol: "GLCH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa32523371390b0cc4e11f6bb236ecf4c2cdea101",
    token0: {
      symbol: "RING",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbf4ff08b9a3bbb77a362b609119100545c0445fe",
    token0: {
      symbol: "PMON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x99dfde431b40321a35deb6aeb55cf338ddd6eccd",
    token0: {
      symbol: "UFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x481efdd010433ded1a931b557e4fe63b7b897964",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XED",
    },
  },
  {
    id: "0xec81c9eb83e464499b09b38510f967d97363745b",
    token0: {
      symbol: "CHADS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe46935ae80e05cdebd4a4008b6ccaa36d2845370",
    token0: {
      symbol: "OM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0f6b0960d2569f505126341085ed7f0342b67dae",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SNOOD",
    },
  },
  {
    id: "0x0f5a2eb364d8b722cba4e1e30e2cf57b6f515b2a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TVK",
    },
  },
  {
    id: "0x0f9768ee0914c48f65234cf10e8aeb6028c8426c",
    token0: {
      symbol: "BID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6061a36ad6b7958f68129bb313e6eff81cd9113c",
    token0: {
      symbol: "SMARTCREDIT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x232818620877fd9232e9ade0c91ef5518eb11788",
    token0: {
      symbol: "DF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a6c361b43a2edcae08e2bd5448e90e9369cced9",
    token0: {
      symbol: "FNSP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9acc449b3d582daa61df507b7da2ad051a9a8afa",
    token0: {
      symbol: "PYR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b6be21c4d1f2c1c5a3d6af3599f3bb0a785ae2f",
    token0: {
      symbol: "GERO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b5fc4a09ecfa187c4e5b26a52636d2495f78692",
    token0: {
      symbol: "SNP",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x21a7afa9f7e2d48bfa8e8f384d77f3b5c19a5add",
    token0: {
      symbol: "DINGER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x648450d9c30b73e2229303026107a1f7eb639f6c",
    token0: {
      symbol: "ARMOR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b272ce3e225b019a3fbd968206824b24c674344",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MCHC",
    },
  },
  {
    id: "0x32d588fd4d0993378995306563a04af5fa162dec",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SURF",
    },
  },
  {
    id: "0x424485f89ea52839fdb30640eb7dd7e0078e12fb",
    token0: {
      symbol: "SDAO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x937e882083a0aaf58d7fcf566de8e5d990e882a9",
    token0: {
      symbol: "kitty",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b21609d42fa32f371f58df294ed25b2d2e5c8ba",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PAN",
    },
  },
  {
    id: "0x57ab5aeb8bac2586a0d437163c3eb844246336ce",
    token0: {
      symbol: "MIR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7ba9b94127d434182287de708643932ec036d365",
    token0: {
      symbol: "eRSDL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5ac9ead73344718dca963f44af960e04f168bd65",
    token0: {
      symbol: "wLITI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2b7888a8d7b62e2a518bbc79fbbd6b75da524b6",
    token0: {
      symbol: "SAV3",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8d4de8dc1650e73c1c238fa3b4d01ccc4c1aaee8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CNFI",
    },
  },
  {
    id: "0xae2d4004241254aed3f93873604d39883c8259f0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PLR",
    },
  },
  {
    id: "0xce84867c3c02b05dc570d0135103d3fb9cc19433",
    token0: {
      symbol: "SUSHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8a982c9430c5ba14f3ecfa4a910704d0ab474d04",
    token0: {
      symbol: "XBASE",
    },
    token1: {
      symbol: "EBASE",
    },
  },
  {
    id: "0x050397956e1fc8a0a2e62af035275f8a415b85a7",
    token0: {
      symbol: "TKN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2680a95fc9de215f1034f073185cc1f2a28b4107",
    token0: {
      symbol: "GET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xba7872534a6c9097d805d8bee97e030f4e372e54",
    token0: {
      symbol: "DYP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf227e97616063a0ea4143744738f9def2aa06743",
    token0: {
      symbol: "QRX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8d2a4cc2e2ca0f7ab011b686449dc82c3af924c7",
    token0: {
      symbol: "RUNE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdfcf744c8ae896e8631ba9b9dc717546646f6708",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SAITO",
    },
  },
  {
    id: "0x9232c48a4ccdd1286a7815a8b3a6985f984a59c1",
    token0: {
      symbol: "FOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xad00dff100a0325590b52651a8f9687c12d25af1",
    token0: {
      symbol: "META",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7b28470032da06051f2e620531adbaeadb285408",
    token0: {
      symbol: "MPL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xf0e3fdf48661cd10d56692f60bd4eccd01e9cf64",
    token0: {
      symbol: "YAXIS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbc159c4ff09a134ee7d47df92c1be4f3ca136f53",
    token0: {
      symbol: "VRX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb767c20d9773adce84d0f0a5bc64e2f114ad3076",
    token0: {
      symbol: "wOMI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd90a1ba0cbaaaabfdc6c814cdf1611306a26e1f8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SWAP",
    },
  },
  {
    id: "0x1e9ed2a6ae58f49b3f847eb9f301849c4a20b7e3",
    token0: {
      symbol: "GSWAP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6f428eb46f050293f80726c377811615aa9dfc96",
    token0: {
      symbol: "BID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0cfd1ab3f175c684f907ed3704007fceb27727e2",
    token0: {
      symbol: "GOKU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x94de6945a51bd3a734de3ddb197864adef6e05f4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PKN",
    },
  },
  {
    id: "0x32ce7e48debdccbfe0cd037cc89526e4382cb81b",
    token0: {
      symbol: "CORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1e45eae7461c56529e5cc335f6b1f797576f8a27",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "SCIFI",
    },
  },
  {
    id: "0xac336936f2f0c2ab0c8dece3a027445323e8a244",
    token0: {
      symbol: "PUSSY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfaad1072e259b5ed342d3f16277477b46d379abc",
    token0: {
      symbol: "DEGEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe6936df3d937cfc2ccf5b84ddbfd5455b468bbb9",
    token0: {
      symbol: "MONA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8bd1661da98ebdd3bd080f0be4e6d9be8ce9858c",
    token0: {
      symbol: "REN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x79fd3e7fe3e832c66a0c005fbc99319b5e851f04",
    token0: {
      symbol: "KOKO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c083084c9d50334b343c44ec97d16011303cc73",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GMEE",
    },
  },
  {
    id: "0x71000582ec4914629a61ec95f22f764aa7e3b8a5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BOTS",
    },
  },
  {
    id: "0x7937619a9bd1234a303e4fe752b8d4f37d40e20c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "REEF",
    },
  },
  {
    id: "0xdfa42ba0130425b21a1568507b084cc246fb0c8f",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "GRT",
    },
  },
  {
    id: "0x70258aa9830c2c84d855df1d61e12c256f6448b4",
    token0: {
      symbol: "TRB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfca090c1868004bec9c91f53db013288dc21c55b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MOD",
    },
  },
  {
    id: "0x23d15edceb5b5b3a23347fa425846de80a2e8e5c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HEZ",
    },
  },
  {
    id: "0x8fd3a04cb30a1fd9ffaf1548972b2e5117d0a52d",
    token0: {
      symbol: "OCEAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbbcd9986304fe340870f4816c614ba0c7a53512e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HYVE",
    },
  },
  {
    id: "0x5cd0dba2365c35620d6cb938385a029199a9a293",
    token0: {
      symbol: "NRGT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa9bd7eef0c7affbdbdae92105712e9ff8b06ed49",
    token0: {
      symbol: "BMI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb34daaf8832432e5619efcf8262a4f5ecfd1384a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KINE",
    },
  },
  {
    id: "0x80b4d4e9d88d9f78198c56c5a27f3bacb9a685c5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRU",
    },
  },
  {
    id: "0x77bbc2b409c2c75e4999e8e3eb8309efff37cf2d",
    token0: {
      symbol: "PNT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbc9d21652cca70f54351e3fb982c6b5dbe992a22",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RKFL",
    },
  },
  {
    id: "0x8044e86ca1963e099a7e70594d72bc96a088fed2",
    token0: {
      symbol: "KLEE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7afebb30e3a406ef1c9e35b48db13cb999f7e57a",
    token0: {
      symbol: "QUID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb20f3f78253da4bd8f4a0fb5f19da23ae9cdbe69",
    token0: {
      symbol: "XDB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x70a3944215de6fa1463a098ba182634df90bb9f4",
    token0: {
      symbol: "POOLZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0529bf56c9448eafe144c151402bc11c0ff47c4c",
    token0: {
      symbol: "EPIK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x724d5c9c618a2152e99a45649a3b8cf198321f46",
    token0: {
      symbol: "REVV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5cd136e8197be513b06d39730dc674b1e0f6b7da",
    token0: {
      symbol: "KIRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x456fb056a8d118300b624d3aee3864e685ae086c",
    token0: {
      symbol: "CAPS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8c64b2acf3fd4fce02ed1aaf3b2791e57704950d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHIBARMY",
    },
  },
  {
    id: "0x6047a8b64aeae00aabe07c45b8d9e14817c3bd21",
    token0: {
      symbol: "BPP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf346d00965776e504930675100c8e2871bd6530d",
    token0: {
      symbol: "Skey",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x004375dff511095cc5a197a54140a24efef3a416",
    token0: {
      symbol: "WBTC",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xce2cc0513634cef3a7c9c257e294ef5e3092f185",
    token0: {
      symbol: "OGN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x414fbf662fc98415dbee27c72013a6f3a937ed66",
    token0: {
      symbol: "OWL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x874dcf6a3f2dcf2d07e88718935184999c50709d",
    token0: {
      symbol: "KEK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x353a70db3888e957ad2e7444a08a2c9c08a5db47",
    token0: {
      symbol: "XP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0efb424c465dbd0a626359d63412838f727f2c25",
    token0: {
      symbol: "MUTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe1188ec51db807aa2ed4e81deefcda943d1cfdb3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Hype.Bet",
    },
  },
  {
    id: "0xf274d21e16cd7fa726585c6b12f817b81f7ced22",
    token0: {
      symbol: "DEC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2dc9d00da9542f91d5391be53ed1d58a04ec1c07",
    token0: {
      symbol: "pETH18C",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x38a94c4f4d9400643f0fb97198f90c93986f018e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DDIM",
    },
  },
  {
    id: "0x8627c8cb59f01435c2ded1e0e941f064ccb0f5b8",
    token0: {
      symbol: "SHFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf4f1109b7f7eec4a38e7d68104e661f6fc2e1695",
    token0: {
      symbol: "FBASE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x62904a841c77c96403ca86669004485ea06acdaf",
    token0: {
      symbol: "SYNL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x14b6154bcbf537368af932901456a7feb57cbe5a",
    token0: {
      symbol: "OCC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2e0c4928789e5db620e53af29f5fc7bca262635",
    token0: {
      symbol: "TRADE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x874376be8231dad99aabf9ef0767b3cc054c60ee",
    token0: {
      symbol: "LEASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c4cc862f51b1ba90485de3502aa058ca4331f32",
    token0: {
      symbol: "CELL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2cd2d275cdb237e696c60419109fac5f331484e1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CGT",
    },
  },
  {
    id: "0x8616e439239bf0c116f430f399502e706dc8b7fb",
    token0: {
      symbol: "LINK",
    },
    token1: {
      symbol: "STRONG",
    },
  },
  {
    id: "0xcc01d9d54d06b6a0b6d09a9f79c3a6438e505f71",
    token0: {
      symbol: "OUSD",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc31c1779ed68e0d3415274e4ecd6a0e245ad45c2",
    token0: {
      symbol: "NDS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x92330d8818e8a3b50f027c819fa46031ffba2c8c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FRM",
    },
  },
  {
    id: "0xd3772a963790fede65646cfdae08734a17cd0f47",
    token0: {
      symbol: "ADX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x63804d757b5b7c43509fded8f7ce10cc0bac2ae0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ASKO",
    },
  },
  {
    id: "0xbcffa1619ab3ce350480ae0507408a3c6c3572bd",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ID",
    },
  },
  {
    id: "0xb38be7fd90669abcdfb314dbddf6143aa88d3110",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GTH",
    },
  },
  {
    id: "0x4214290310264a27b0ba8cff02b4c592d0234aa1",
    token0: {
      symbol: "RFOX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x800a45f2b861229d59e952aef57b22e84ff949a1",
    token0: {
      symbol: "PAWTH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5f0a8554a31d43b4db5f0bdb898b5d2319b6ea48",
    token0: {
      symbol: "GYSR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc9919a9eb691f571e41db417f911135b4ac46fe7",
    token0: {
      symbol: "LSS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc70bb2736e218861dca818d1e9f7a1930fe61e5b",
    token0: {
      symbol: "UNCX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x931e8d3c0fadf7a3549b9831d8c7b2b4c86981d7",
    token0: {
      symbol: "PSLIP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x26aad2da94c59524ac0d93f6d6cbf9071d7086f2",
    token0: {
      symbol: "1INCH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b90d9548618f6c43e3c13962d9bfcbb9b8afb6c",
    token0: {
      symbol: "IMX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0d0d65e7a7db277d3e0f5e1676325e75f3340455",
    token0: {
      symbol: "MTA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe5437565cba444f33f40215afecc92e38e2d1ba9",
    token0: {
      symbol: "MYX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x181655fee818e1e22c8aebb780c716e15b6f29aa",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "LUNA",
    },
  },
  {
    id: "0xbe78353416003aa6e2c38e85249fdee3ce8c9b1b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ETHY",
    },
  },
  {
    id: "0x85673c92f0f27a9c4d8c221f6bfefa33b716338a",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "DPR",
    },
  },
  {
    id: "0x854056fd40c1b52037166285b2e54fee774d33f6",
    token0: {
      symbol: "TBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ffc57cada109985ad896a69fbcebd565db4290e",
    token0: {
      symbol: "FTM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x879db9d6f68788a1084bed56cbbc206ac01054eb",
    token0: {
      symbol: "TENSHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d7324471e0e4fa908e5573c5f0a4e1ccbb8ad8b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FAI",
    },
  },
  {
    id: "0x7d9c8d888d03df89461c645bd1108ae138b63a2a",
    token0: {
      symbol: "GLQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2e81ec0b8b4022fac83a21b2f2b4b8f5ed744d70",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GRT",
    },
  },
  {
    id: "0x8014851acaa37e277e7369c5a850f29a152b1169",
    token0: {
      symbol: "DOOR",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9ec5149472db6acffb9023a47d37b4ecbcf68a4b",
    token0: {
      symbol: "ELONONE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf8d99cf7046dedcb1dc8cfc309aa96946c9b9db2",
    token0: {
      symbol: "XFIT",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x3c442bab170f19dd40d0b1a405c9d93b088b9332",
    token0: {
      symbol: "POWR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9973bb0fe5f8df5de730776df09e946c74254fb3",
    token0: {
      symbol: "BAO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x438d3e9cacab4614a8f1613ac7b182378d76e1f8",
    token0: {
      symbol: "WSCRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa40bb1c47f6dd27142a2bd7c93bfa98db9d1f5c5",
    token0: {
      symbol: "MASK",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x0d9c6511980f80e477a774156492f5c133d2c0f3",
    token0: {
      symbol: "SUPERBID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa3d588a914c7534356a006ae3c1d8ae19c9694e1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PDEX",
    },
  },
  {
    id: "0xe275eb6154cb4a73f0ba573e43b2b06e9e78b7f0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FSW",
    },
  },
  {
    id: "0xb27de0ba2abfbfdf15667a939f041b52118af5ba",
    token0: {
      symbol: "UBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x06e4c11eaac88ae9253f9e86b60c8b4e7d4b281c",
    token0: {
      symbol: "NBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaaa2bb0212ec7190dc7142cd730173b0a788ec31",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "ALD",
    },
  },
  {
    id: "0x163d38e33b16697e69249665daadb50be81e7f72",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "PKEX",
    },
  },
  {
    id: "0xed247449a7ca06db5b27b44b2c092f0b48bbdb77",
    token0: {
      symbol: "CIV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x59e7bee6374a3f6ecb33180ece978fd4f2b7cea2",
    token0: {
      symbol: "SNT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbc8ed8c2ad89c14e55ee35d933f83e41cbd11121",
    token0: {
      symbol: "ARAID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7e451ab571a119fd6cf36e5b91b58303e81e1d4f",
    token0: {
      symbol: "SX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ab24a692eff49b9712ceacdef853152d78b9050",
    token0: {
      symbol: "XPb",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x61247d8aca1c485a50728e1336d9b26c8339e701",
    token0: {
      symbol: "GUSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x242301fa62f0de9e3842a5fb4c0cdca67e3a2fab",
    token0: {
      symbol: "DXO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf52cc785d5f3e7d6ff0ad4e665a929b84f69e7c5",
    token0: {
      symbol: "HOE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9081b50bad8beefac48cc616694c26b027c559bb",
    token0: {
      symbol: "ORAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfb2f545a9ad62f38fe600e24f75ecd790d30a7ba",
    token0: {
      symbol: "SYNC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6e8d6937eaf35a868f84af76fb05001302a2ffb8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VIKINGS",
    },
  },
  {
    id: "0x0e4c6715ac7bc80a93f47bbf92281a88ad729c1e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GGTK",
    },
  },
  {
    id: "0x092e793afe54366601eb7ef7e63b6abb93edb485",
    token0: {
      symbol: "MINT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7e5d0da0f5ba5c24043dceb0da78e97dfddca7df",
    token0: {
      symbol: "POP!",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeb4770eea58fefab132663b852a8b7a35a843c71",
    token0: {
      symbol: "EPAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x347c280fa84363147441cae5cd28df1b596f2c1f",
    token0: {
      symbol: "DEFLCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd058416f4c83a4f187631c454f872b076c0a7642",
    token0: {
      symbol: "ZOOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x09062ce4f20aac71f8074ac6cf8e6968abd4d03e",
    token0: {
      symbol: "EQX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0b316150f91dbd9a234b870cc75aaf57def1be43",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEFO",
    },
  },
  {
    id: "0xcd4a2f72e3d646e8addab74a68c2175d6a36b0e3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DAFI",
    },
  },
  {
    id: "0x1e8ff5341bc63782b0212926d6eaf43cb80a0c75",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XEND",
    },
  },
  {
    id: "0xedc25e28c40762b64fa8fe139939c9164d5b3805",
    token0: {
      symbol: "REVO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8745df04862b854d0d7ee8ecf80ac4e9c109d547",
    token0: {
      symbol: "MUNCH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x54d16d35ca16163bc681f39ec170cf2614492517",
    token0: {
      symbol: "OIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x169bf778a5eadab0209c0524ea5ce8e7a616e33b",
    token0: {
      symbol: "INSUR",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x04b6be23297548d828c3c4e4b7fb3f4a67d2dae3",
    token0: {
      symbol: "ETHPAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7de15e8d9a5252425d4345d8942f771848241c44",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RFR",
    },
  },
  {
    id: "0xecfe2c3c1ac0a5a59227a01f3dd7044159b11a57",
    token0: {
      symbol: "RAMP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05cb3f8d65f91d3d518310abe678009a75d7e0cb",
    token0: {
      symbol: "HINA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x78612ae1f88bdf52fd8fe4c1844820716bf82d91",
    token0: {
      symbol: "SHARE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1a57ec5459928389fbb5612ff2a5e0b534fd9e2e",
    token0: {
      symbol: "MTLX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x4161fa43eaa1ac3882aeed12c5fc05249e533e67",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "fUSDC",
    },
  },
  {
    id: "0xb983499b7d2f2569a7399048bbd72ca65e4e44e2",
    token0: {
      symbol: "C20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x01f8989c1e556f5c89c7d46786db98eeaae82c33",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ROOT",
    },
  },
  {
    id: "0x6c35c40447e8011a63ab05f088fa7cd914d66904",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XAMP",
    },
  },
  {
    id: "0x0c4a68cf6857cc76fe946d04fe85fac5fae9625e",
    token0: {
      symbol: "QNT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x837f68d11cd15e8ab10dd5f3f210516f2cf2bcfb",
    token0: {
      symbol: "eMTRG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xac6776d1c8d455ad282c76eb4c2ade2b07170104",
    token0: {
      symbol: "KIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x00aa1c57e894c4010fe44cb840ae56432d7ea1d1",
    token0: {
      symbol: "DOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x146d3401b6a41122bd318ba676a01c44cb0795e2",
    token0: {
      symbol: "NFY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe56c60b5f9f7b5fc70de0eb79c6ee7d00efa2625",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ENJ",
    },
  },
  {
    id: "0x85917d97a4c399816cf6edb2d2e8767002f6a96a",
    token0: {
      symbol: "ATD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec7a1a2896d4b9d7014fa7be2aa936c8a76a8072",
    token0: {
      symbol: "MATTER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7b412f141996411401f57e2ba1bc2235af807d4d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CUMINU",
    },
  },
  {
    id: "0xeff2dbe03e67ee5e5a6b645cb61a1c0dcfd890d9",
    token0: {
      symbol: "STAK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8f3869c177090eace770396f9495424780c73537",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PINT",
    },
  },
  {
    id: "0x9bd82673c50acb4a3b883d61e070a3c8d9b08e10",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "HEZ",
    },
  },
  {
    id: "0x17ec169b5c1d0cb37dc66c4cf7d1855638408f70",
    token0: {
      symbol: "SWAPP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x350db0440f1ff18e900dcc8c01180aa00e72cc91",
    token0: {
      symbol: "MET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2fba756c64d4f9dbb17f1b3a1afb5f05af7f18c0",
    token0: {
      symbol: "XTK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5a20f9b0d8cffb758e65b8fb8191aa2bc1b26d47",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "1-UP",
    },
  },
  {
    id: "0x8d9a7c5170af4249c37c489339da0fed0f7c7f5f",
    token0: {
      symbol: "FXF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5f6af850b5aec2962397d24e8cd820e511c2f1ee",
    token0: {
      symbol: "QANX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x73a86455888902108bc88f5831919e23098b9b04",
    token0: {
      symbol: "PAID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x89635f792f4cfe2499eb1bbdba99e5d162e427fa",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XPR",
    },
  },
  {
    id: "0xe6c804ff4ec692e6808c0d032cdbc03772fc4d42",
    token0: {
      symbol: "renZEC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x64cac8fa24f437ceca90e20a7a24a609f162b0d1",
    token0: {
      symbol: "PRQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x15ab0333985fd1e289adf4fbbe19261454776642",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MLN",
    },
  },
  {
    id: "0xa323fc62c71b210e54171887445d7fca569d8430",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VISION",
    },
  },
  {
    id: "0x96040f16f98657b07e6e4326bbf5f5160fcab336",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Inari",
    },
  },
  {
    id: "0xd1bc66660ba7edd64f0cc442ca5f32e5d199dfc6",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NIOX",
    },
  },
  {
    id: "0x60031819a16266d896268cfea5d5be0b6c2b5d75",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VRA",
    },
  },
  {
    id: "0xba65016890709dbc9491ca7bf5de395b8441dc8b",
    token0: {
      symbol: "RSR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcff0ac508c5c7d24f237de246141821a689ceaf2",
    token0: {
      symbol: "HYPE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x790d769a126909fd7bed206178a2a7ffe358669c",
    token0: {
      symbol: "ENS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c18a2f9545112ab2fcbdd228536562406a53232",
    token0: {
      symbol: "PEAK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xba6bd00cf4d8a6b182ebd762660151fd34c675aa",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SAFEEARTH",
    },
  },
  {
    id: "0x01388f9242964e2aaadef6379eb92276acb5520e",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "FRONT",
    },
  },
  {
    id: "0x86fef14c27c78deaeb4349fd959caa11fc5b5d75",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RARI",
    },
  },
  {
    id: "0xaed171a3369e54aff2601dc92a8d15bbc7e9fa32",
    token0: {
      symbol: "LIFE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3f75a5b408feb14cba3d21bd934dc5b88908f105",
    token0: {
      symbol: "SPC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe53533f78787c63735c77c9e2f9c60081b942cdb",
    token0: {
      symbol: "FEAR",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd64224a4c2bed96c75df9517b2d77aebb13f0e37",
    token0: {
      symbol: "HXRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaef16913b6c50ebcf627a394921f306985fc8604",
    token0: {
      symbol: "STORJ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1273ad5d8f3596a7a39efdb5a4b8f82e8f003fc3",
    token0: {
      symbol: "HEGIC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc0e30ff7e079a6ebb88d068dc27f98517dfb6b0c",
    token0: {
      symbol: "TREND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdec87f2f3e7a936b08ebd7b2371ab12cc8b68340",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FCL",
    },
  },
  {
    id: "0xfb032551b73323319fa0e05dac6a072720df7b0d",
    token0: {
      symbol: "WEMP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x64c29aac69d3122f6e5531ceca1b753f95350af4",
    token0: {
      symbol: "BOND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x56cb109d29689b475c2e960954525d25b51a1810",
    token0: {
      symbol: "PINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x23b7e6932cb873b8696afba077c4a2486b1c862e",
    token0: {
      symbol: "SIG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x08fd2cc7db770e0ead04dae445bc0ebde6658e10",
    token0: {
      symbol: "CNFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0b41854f5d251c12b1de6a88dd4292944f04305c",
    token0: {
      symbol: "SNP",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xee597f571c65c5abfa56a8128c4b7bb7fb31ebc6",
    token0: {
      symbol: "PLUG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcabebc0c5a9d6522640d81c22975ca31b8f8ff48",
    token0: {
      symbol: "KTLYO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf9fdd3a82566cbaf5dd3d3094d8dd9aaa72a1c36",
    token0: {
      symbol: "SLM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x95332661b2e36a02dc05e6fb7c31193f0690c90f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZONE",
    },
  },
  {
    id: "0x5dfbe95925ffeb68f7d17920be7b313289a1a583",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MEME",
    },
  },
  {
    id: "0x76911e11fddb742d75b83c9e1f611f48f19234e4",
    token0: {
      symbol: "DYP",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xe0deb97487bddf4c28ab1aa169179db0da625b29",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FWT",
    },
  },
  {
    id: "0x8d3c9f4d0a8dbb6d5e2068ac36719290f7988cc1",
    token0: {
      symbol: "SARCO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3aeee5ba053ef8406420dbc5801fc95ec57b0e0a",
    token0: {
      symbol: "DEC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9ac08370a3803a2a108052e2f7cd345288399dbc",
    token0: {
      symbol: "LIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9314941c11d6dee1d7bf93113eb74d4718949f3b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HOKK",
    },
  },
  {
    id: "0x08ad72b16d56a5a9f2189afb972dbdfe72920cac",
    token0: {
      symbol: "RNB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5bab10d7b7d43867403ac5f908fe344932fa3496",
    token0: {
      symbol: "LOOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9a0b717f4222aff9900075329c947316ddccd09c",
    token0: {
      symbol: "BICO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x57cd855ff9106bcf8a0943156cc43b1075ec0c81",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CLT",
    },
  },
  {
    id: "0xaa7d358b7c16d228f603426cb0c50a8d96139842",
    token0: {
      symbol: "ODA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2d20328eb8bb0bf0984d9149eab611920be9ba1",
    token0: {
      symbol: "VNLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x577349ecd462a369ab71908a260ae1e2d8982b74",
    token0: {
      symbol: "KOMET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa66cdad5facbcbf74d9b60dcc8034c2a485e63ff",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RVF",
    },
  },
  {
    id: "0x588fcc8306ffdf880e4aa21e615cc52c475d3ba4",
    token0: {
      symbol: "BNS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x92ffe72ee8a6a3df28d18d6ca01a8e17adf608f0",
    token0: {
      symbol: "RYOSHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x92935f844447abb37b38c4ffcf48d6c4fffd9232",
    token0: {
      symbol: "HANU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6f23d2fedb4ff4f1e9f8c521f66e5f2a1451b6f3",
    token0: {
      symbol: "MARK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x106dc1e3638ce6cb4d3bbad9f1288935fb8398a8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NAMI",
    },
  },
  {
    id: "0x98f90bfc702ec548d21b5a566a4df6853e2890d4",
    token0: {
      symbol: "AKRO",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x37d9c7f451e5c619a7d4ca01e06761eb7dae6f89",
    token0: {
      symbol: "CYC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4fc47579ecf6aa76677ee142b6b75faf9eeafba8",
    token0: {
      symbol: "RAZE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2e333b4252497bb73ed6ed64e09177630c699db6",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BMT",
    },
  },
  {
    id: "0x6afb3d434ac3d0c92e5397895f17f1f9af22a6c2",
    token0: {
      symbol: "WORLD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96b1071dec3158bd1c0bfc8aecf5ee969f9ca3db",
    token0: {
      symbol: "ELX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x786e67fec4fc0537630d4b91ac222cd95a1e8a72",
    token0: {
      symbol: "DEKU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x300d97e471989223daa4f1bb8d6e6dc72469a465",
    token0: {
      symbol: "NRCH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2944918d41780d4ae41f842bda84202279261546",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BHDT",
    },
  },
  {
    id: "0xe1ecadb5fec254c2c893c230b935db30b8fff0db",
    token0: {
      symbol: "unknown",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc36068bf159414beb497f8ece08763868149b2fe",
    token0: {
      symbol: "WILD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9fb24efec63c6a978efd21bda010099cb4f23707",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YFBTC",
    },
  },
  {
    id: "0x9c5de3ad97b95a0da09fd0de84c347db450cd75c",
    token0: {
      symbol: "MARSH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa71d47a551c734398a2e1c80589ffea844850664",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BUNNYROCKET",
    },
  },
  {
    id: "0x8d9b9e25b208cac58415d915898c2ffa3a530aa1",
    token0: {
      symbol: "CHSB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4edfec7aa5588786901c63a8338e4b37611b2af",
    token0: {
      symbol: "dKUMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x01962144d41415cca072900fe87bbe2992a99f10",
    token0: {
      symbol: "XOR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x420725a69e79eeffb000f98ccd78a52369b6c5d4",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "TCR",
    },
  },
  {
    id: "0x5d4164a80c01e78308bde7ce3e223525a8b871d8",
    token0: {
      symbol: "META",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c6faf9ad252390ee5e6f0b2f8d2fc927a8eb4e6",
    token0: {
      symbol: "CoShi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb3f7ccdb38dc51dca399f4c27a8344276bcd855a",
    token0: {
      symbol: "Archa",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x17213a669c5abadb822df1f2f06611221b0167de",
    token0: {
      symbol: "VVT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe0a97733f90d089df8eee74a8723d96196fc4931",
    token0: {
      symbol: "BLXM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb8207f870ce0083334675b2efca8e3ba7cad68de",
    token0: {
      symbol: "wSIENNA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x76ad8bc4f1c51c1d2525a4f45fa31a66b933273a",
    token0: {
      symbol: "DIGI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa886576fed10723401386697aadf777e1d4bca05",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GAINS",
    },
  },
  {
    id: "0x1e0693f129d05e5857a642245185ee1fca6a5096",
    token0: {
      symbol: "AXIAv3",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1657a26534db98c71b55f4e15ae8083671a8059b",
    token0: {
      symbol: "NEBO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6a0d8a35cda1f0d3534a346394661ed02e9a4072",
    token0: {
      symbol: "BSOCIAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xde6faedbcae38eec6d33ad61473a04a6dd7f6e28",
    token0: {
      symbol: "HORD",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xb52acc458099bcd032b68784d19afd7cc8618d5e",
    token0: {
      symbol: "DAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x231b7589426ffe1b75405526fc32ac09d44364c4",
    token0: {
      symbol: "WBTC",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x60f6e2200bfef8b4d120028faff4d9a4486526f4",
    token0: {
      symbol: "IONX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x11cb9e028b82eee75443fdc27929b9c49736c552",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEXE",
    },
  },
  {
    id: "0xc4aae4163afd45ed78fa385ae0b10684b83b5321",
    token0: {
      symbol: "PNODE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xabd9c284116b2e757e3d4f6e36c5050aead24e0c",
    token0: {
      symbol: "DYP",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xd03dffd02db4b076e3eed9272a6a243a23de16e3",
    token0: {
      symbol: "Metis",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdc98556ce24f007a5ef6dc1ce96322d65832a819",
    token0: {
      symbol: "PICKLE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3ba718e63af0ecb89a2fa80c8a9ba6512117658a",
    token0: {
      symbol: "BABYSHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf0644757918d29e5a9b9ca62d8a4d599ab9f5109",
    token0: {
      symbol: "MAPS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d23cb25ad23d73e0a723a47b146139d46ab5f91",
    token0: {
      symbol: "LST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x48616d7ecbf2a439cadd4801fbd643ad2e9d4ee6",
    token0: {
      symbol: "ZUZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb2fb04a19a4fa77eb946f6a51ae9e2641475ee65",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ROCKI",
    },
  },
  {
    id: "0x87febfb3ac5791034fd5ef1a615e9d9627c2665d",
    token0: {
      symbol: "KP3R",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7c6fd8bf8a8064a7a336724872bced5d7ee911a9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RIOT",
    },
  },
  {
    id: "0xcceb09c6d9bb5e9eaed77475b610e6019af05cde",
    token0: {
      symbol: "KIT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcc290a463aa1c2afd36990f1eec40b734c3bf3f3",
    token0: {
      symbol: "BIST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa49937eca1c5cabd7338c07ebbda296dcacfd388",
    token0: {
      symbol: "BEACH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4dd26482738be6c06c31467a19dcda9ad781e8c4",
    token0: {
      symbol: "API3",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5340c7b63cef225e7c5e4620d4ff6c57ee585dd1",
    token0: {
      symbol: "RPG",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x0e20642b32567f2dc74f149663fc474f534e1d5a",
    token0: {
      symbol: "BDT",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd583d0824ed78767e0e35b9bf7a636c81c665aa8",
    token0: {
      symbol: "LYXe",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xde68ad8502874a7d5dd1758f7b0a7831f142b78a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DIP",
    },
  },
  {
    id: "0x780fa21e8346f0af614ad82a851f9794479301f6",
    token0: {
      symbol: "SWASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d8a31269a9f3336e3f23de17b2ec7393bdd6916",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SI",
    },
  },
  {
    id: "0x2999528824a1a839d9af5cfead053236be675984",
    token0: {
      symbol: "DOWS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x39de6c18d82ab9dd1ed4b9e0b4d1bc971ddd6c9d",
    token0: {
      symbol: "SHIBGF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfc74ecdee4e9fff2f2ef4cdf4f1c777b2ef0e905",
    token0: {
      symbol: "SUKU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdfcc12a0aad50d84639d558551edd7a523b69ac5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "STACY",
    },
  },
  {
    id: "0x8d7bed5b25b291c7d76578ac02979ec5ea33c97f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LITH",
    },
  },
  {
    id: "0xc31c590acfad809d3293f58a1873c182a9643b7e",
    token0: {
      symbol: "PIKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb49221ad08e84b1692f80b62cd5f90c1aadbe6e",
    token0: {
      symbol: "CUDOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa00d47b4b304792eb07b09233467b690db847c91",
    token0: {
      symbol: "IMX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x324f8017f712077d35396c2d37bc8fded0699314",
    token0: {
      symbol: "COPS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf2fbafe0fb235f80b6551918f8df505a5dbd4d5e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MYOBU",
    },
  },
  {
    id: "0xd63751b0fbef5f0153c69d6429ed1429b6f79247",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PONYO",
    },
  },
  {
    id: "0xa21ece44cc5dac03e3805362bd3f68f22a49ea1e",
    token0: {
      symbol: "SLICE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcf4236db746dbc1855a4d095aaf58da9b030491e",
    token0: {
      symbol: "BLZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x432dbbd09fee1dfb2cae40c5abc1a301a2ef76ee",
    token0: {
      symbol: "LESS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x610382c1968aa065a662e34e5a258cc64048324f",
    token0: {
      symbol: "DOV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd561235046bb35e4ca93995ae39db2045af62b9a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "COGE",
    },
  },
  {
    id: "0xd4405f0704621dbe9d4dea60e128e0c3b26bddbd",
    token0: {
      symbol: "BAC",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x269b2c76765d483cbb047568587f49a508b3c02b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KP3R",
    },
  },
  {
    id: "0xc98b3b8c7cc0d7d925d1a407347b845d9f001391",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ORBS",
    },
  },
  {
    id: "0x7c8699ecb6d16010f91372f6f3103fe5aac78810",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRX",
    },
  },
  {
    id: "0xc0897d6ba893e31f42f658eead777aa15b8f824d",
    token0: {
      symbol: "MAHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2e6e17845844e3673bb248b7fa9e260a67e333f",
    token0: {
      symbol: "SEPA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x454d7156b0f62f61e7f2ad6a65d29ce681d6d354",
    token0: {
      symbol: "VAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x61122b41600c59ef4248ff9818fbf0a1b43abe17",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CRBN",
    },
  },
  {
    id: "0x4a9275d2217ed01e49d5b6746e01f8deb11bd1d3",
    token0: {
      symbol: "IT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x56feaccb7f750b997b36a68625c7c596f0b41a58",
    token0: {
      symbol: "FARM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbbc95e1eb6ee476e9cbb8112435e14b372563038",
    token0: {
      symbol: "WOO",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xdf8df7208f4216964b5210092acf18926d2216cd",
    token0: {
      symbol: "SBF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0612f7b15779ca6ddbe927f92d6c4144fbae1485",
    token0: {
      symbol: "REALM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6c8b0dee9e90ea9f790da5daf6f5b20d23b39689",
    token0: {
      symbol: "ORN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb1a16bfb8fc536d7ab9ab9c17e3239cad505928",
    token0: {
      symbol: "BANKETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0fa501e1f97d32133e742acbc499cf4d8840772",
    token0: {
      symbol: "SBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2d717cf165dc083530fe23588f74ffed15683d0",
    token0: {
      symbol: "DRCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x213b02e31fd17d631e1d7207ce5957552990008a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GS",
    },
  },
  {
    id: "0xa39d7a85553a46faeb3ba5e0c49d6a5db67df30f",
    token0: {
      symbol: "DNXC",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xe93dc496dbc669d7ee4f03b0eb0a10bb13a4b2a4",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "DUCK",
    },
  },
  {
    id: "0xa76ae94659b6b53c5e85d37fbdd36adcb7635b23",
    token0: {
      symbol: "UMBR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcce852e473ecfdebfd6d3fd5bae9e964fd2a3fa7",
    token0: {
      symbol: "COIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xab3b031512a08c85d52c6e7c4f50170f01bf19e8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UDO",
    },
  },
  {
    id: "0x04febe14262a64f96702750bded3a3685bee7bf3",
    token0: {
      symbol: "TLG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6fcc7db7acbc3e9dde3ee7d96cb61fc9c0ca17a7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SPO",
    },
  },
  {
    id: "0x62f01e27474745334bbac7cda911a9942cc6b186",
    token0: {
      symbol: "OHMINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6c25cf2160db4a1be0f1317fc301f5a5cdba9199",
    token0: {
      symbol: "BLV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8867f20c1c63baccec7617626254a060eeb0e61e",
    token0: {
      symbol: "PHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x39c99091c0883287fea9e2f33529a3b8eed289de",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ABS",
    },
  },
  {
    id: "0xdadc9459c36b345e2e2007d2d2746f44a0b3b2df",
    token0: {
      symbol: "SPH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4ce3687fed17e19324f23e305593ab13bbd55c4d",
    token0: {
      symbol: "FUSE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x49e0c498137c4badf85da070f4dca027e5997a0c",
    token0: {
      symbol: "PAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb8ec4eb95d104753747bc689e6e997a637245bbd",
    token0: {
      symbol: "SHIH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd65e975c7d0d5871eff8b079120e43c9f377ada1",
    token0: {
      symbol: "YOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3155acd9f75915fcc21d34035f440da7040bd3ba",
    token0: {
      symbol: "PROS",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x966053ca4fca049173eb1f27e4cb168ccb794534",
    token0: {
      symbol: "VLT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7d611e4cf1c7b94561c4caa5602f329d108336e3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHROOM",
    },
  },
  {
    id: "0xec7a6619c3b5c251ca6ac8ee3d126d66e9541050",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HAPI",
    },
  },
  {
    id: "0x176d5681af7a7d33bca2b10f716bb19499a9dd12",
    token0: {
      symbol: "WLEO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x461d46caa0ffa91bf76c11938105744f74f1e016",
    token0: {
      symbol: "LOCG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xde26d72fcf376a8a98560c8d57b1465715037851",
    token0: {
      symbol: "COR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9175a0756d4274dade881dfa0766539729d9fac9",
    token0: {
      symbol: "DOLPHIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3854612b93b140726167cca5418b01e832515d42",
    token0: {
      symbol: "HIGH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x886fbb0f9af628b43508fb7d76d034dcfe6a6d6d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HELIOS",
    },
  },
  {
    id: "0x291c69fdaebd3cbe953843da243f8605a766a268",
    token0: {
      symbol: "TEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa03154bfb9a750b944b5f8de7a744a34ac6dd16d",
    token0: {
      symbol: "OXY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8cedb0bc185c2bc06c7cbb7fae3b6f916c48ed08",
    token0: {
      symbol: "SDX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8382aeab50c5d60e06cf3b68a51cd88c39a061c6",
    token0: {
      symbol: "BCUG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4168cef0fca0774176632d86ba26553e3b9cf59d",
    token0: {
      symbol: "DEV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfca68d9d45e0ebeb569b3e9ad2872c9e8d7a75ba",
    token0: {
      symbol: "UMI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x916560c92f423bf7d20f34591a6b27a254c3bd7a",
    token0: {
      symbol: "YUP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc66ce0de9fd74e6ce40b6b8a9e86103ec56e45ed",
    token0: {
      symbol: "KST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xebd17511f46a877199ff08f0ea4f119c9b4aea50",
    token0: {
      symbol: "BRKL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x7aee34d421fa24c2e29aa7267647818191903d53",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "wCUSD",
    },
  },
  {
    id: "0x9b40b6c7803071fc84e96d4b01f32f086e908d41",
    token0: {
      symbol: "FROG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5e4a92625a337707ba362abff463bccc5b896d21",
    token0: {
      symbol: "NGC",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x5393b489e9bfb09be9cac59ed5c65cacc55cdebd",
    token0: {
      symbol: "USDap",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xa469d741ffe634154cd2f94dff4b8be907940340",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WARP",
    },
  },
  {
    id: "0x40449d1f4c2d4f88dfd5b18868c76738a4e52fd4",
    token0: {
      symbol: "CWS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c19fd9bd77d4383c66d9a6ecf1bc67d462c477f",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "DEC",
    },
  },
  {
    id: "0x953b14fe6b90151dd068cd81969c7f5e5fa97e4d",
    token0: {
      symbol: "DDS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x974ea1b7f459a46cb8da5131dd0f98492c5a0988",
    token0: {
      symbol: "NFTP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdc7d8cc3a22fe0ec69770e02931f43451b7b975e",
    token0: {
      symbol: "EWTB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x34d00a06161a5728845a3f83acd28488de57db00",
    token0: {
      symbol: "DSA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xda0983905209244a5a39d2db1f665a0f5dcf32fb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NUCLEUS",
    },
  },
  {
    id: "0xd081dce9172a8670926e36cc3bde9cee36e4f8bb",
    token0: {
      symbol: "SAINT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcbb577e5d60503313575218392ea7c41e61a9bef",
    token0: {
      symbol: "ALOHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf44e8ff3bb644479124e691bf572f7813a1bc499",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EDDA",
    },
  },
  {
    id: "0x8da66b6e90cac30db0dce239086cfdb2dbf66a30",
    token0: {
      symbol: "GNYerc20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd9d39540d61f8d6eb2ee7eedfae93cc09cc24f0e",
    token0: {
      symbol: "FOAM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbacb3673b547c5941412a82621254f479f63a899",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BP",
    },
  },
  {
    id: "0x944fd50276599807625786fb8edc9876c54565e8",
    token0: {
      symbol: "NYAN-2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x76333b38567f78240d6276e5b3985baa6fa5fda5",
    token0: {
      symbol: "BNSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc093d30af9928c77b3c90cfd72565241b336cd40",
    token0: {
      symbol: "CHOPPER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc09bf2b1bc8725903c509e8caeef9190857215a8",
    token0: {
      symbol: "IXS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe3bd93547009449b4af93d3c4f47b8ba05cf4934",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MP4",
    },
  },
  {
    id: "0xba2dda035358e513f2de62f1fe73c20fe3ba316f",
    token0: {
      symbol: "NEXT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x80a0102a1e601c55fd3f136128bb2d222a879ff3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BDP",
    },
  },
  {
    id: "0xbeea2d0cc63a5b321448a36376f7b578cbcf303a",
    token0: {
      symbol: "SDOG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4a9e79219e9417ec6c0b67c42da387fb8a45230e",
    token0: {
      symbol: "WWT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x420cf323d2c19ed37b3a24093fd29da3733e7e58",
    token0: {
      symbol: "SHIBAKEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3a925503970d40d36d2329e3846e09fcfc9b6acb",
    token0: {
      symbol: "SDAO",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x6d9d2427cfa49e39b4667c4c3f627e56ae586f37",
    token0: {
      symbol: "ROYA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5c392b2cf73c052315cba76b065effb8f06f1ffa",
    token0: {
      symbol: "THEOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9730b014700e78593fe62c06cad47ad1e0e5dff9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NOW",
    },
  },
  {
    id: "0xc86533607e9d875d28b4c48f4184961932947d49",
    token0: {
      symbol: "IAG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4ac7d3789139d4775f6472bce62d7070356612fe",
    token0: {
      symbol: "SPACEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc3fa0a8d68a43ed336174cb5673903572bbace8e",
    token0: {
      symbol: "YFIM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xae30e27fbd0dcd2a4dff66d5a021c6319d669100",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BTT",
    },
  },
  {
    id: "0xdf21bb85a5bfb606bfca4562aa8cea2017622415",
    token0: {
      symbol: "WOWS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x80d972d2a62ba71814f4e08bd27f95e5d81d02a9",
    token0: {
      symbol: "STOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x162cb3a005c81dbd61f85b6a8c609189c026735c",
    token0: {
      symbol: "SRK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x258223ffcefe36f74615e13e5ce4fbbfd13df1d5",
    token0: {
      symbol: "eFIL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5c344edd13de1ad056102d13876f97b4e6dec19c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ETHYS",
    },
  },
  {
    id: "0x6060ad7b2abb5716adc82c669353e5c5f3b9fb4d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DOGEGF",
    },
  },
  {
    id: "0x9ca8aef2372c705d6848fdda3c1267a7f51267c1",
    token0: {
      symbol: "UDT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfcad5c316f5618a79852f89e1a9b18103e48a456",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZINU",
    },
  },
  {
    id: "0x8979a3ef9d540480342ac0f56e9d4c88807b1cba",
    token0: {
      symbol: "REPv2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x44f692888a0ed51bc5b05867d9149c5f32f5e07f",
    token0: {
      symbol: "BBP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x52a500af09450aa8deef61f048313cf57fcb30b6",
    token0: {
      symbol: "WHL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05d230229e624da10f89e00c3f82d806768c3a98",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BAG",
    },
  },
  {
    id: "0x783aab49d80f7682d0591acdc07a7bac8aa9938a",
    token0: {
      symbol: "HATSU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b3df8eae6e1ed1b931086852860d3c6375d7ae6",
    token0: {
      symbol: "MLT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7f1da3697236d4a5e0efd2a99de5d9c076937856",
    token0: {
      symbol: "UNN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x781ce9a6808503261ab27973f3a34dd9f851a6fc",
    token0: {
      symbol: "CAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2cea677e38f16a3016cab43b533efda0458af0e6",
    token0: {
      symbol: "MoFi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec5c7dba9911c2e6b21337760e7c6ffdfaa16a88",
    token0: {
      symbol: "EPARA",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x7b85bbe242be081d8d8230f4d1464b87e069066a",
    token0: {
      symbol: "GSFY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfccfea8860dd2fd7d6d89366f7a811dbfdcf7453",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UZUMAKI",
    },
  },
  {
    id: "0xc92b1c381450c5972ee3f4a801e651257aed449a",
    token0: {
      symbol: "DEXM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96c0c50b3c8439b8e9206ac65cf393d98960ffab",
    token0: {
      symbol: "yBAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa4c13470da60e81f15d304d071a9e1168605a6e0",
    token0: {
      symbol: "EDGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d149abac8c1b2c6eccda50ec5e74b70fecc24b7",
    token0: {
      symbol: "SPDR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7dd3f5705504002dc946aeafe6629b9481b72272",
    token0: {
      symbol: "DAO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2c814e0346672ce6813f7e1eaf944be8703ec10f",
    token0: {
      symbol: "GEEQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x91b1b853c1426c4aa78cac984c6f6dd1e80b0c4f",
    token0: {
      symbol: "DON",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x10b17d9b2aee94a65eeb4c71141add20caa4376f",
    token0: {
      symbol: "wMBX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x550301e3e18009e67a115f9fa067f9d7a62073df",
    token0: {
      symbol: "HNZO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe32479d25b6cb8c02507c3568813e11a37fa32ca",
    token0: {
      symbol: "SWISS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7df4a1d4a8d8390bef36f311252423cce04e5647",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ASTRO",
    },
  },
  {
    id: "0x2187d81332f433467338b0d6970a97885e79650e",
    token0: {
      symbol: "Shibmerican",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4e8c3bf57e52fbf1b0990c74d685a484d61cea2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BRAIN",
    },
  },
  {
    id: "0xbdfe29d9e42ea541c581eef6cf3a2bb27b51e2c4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "COOK",
    },
  },
  {
    id: "0x9e98deac1a416c9ce3c892bd8eef586f1291ca35",
    token0: {
      symbol: "BEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a66392317698c5818df7a72a58556049f0ae6f2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SYLO",
    },
  },
  {
    id: "0x05a4fa8d7672bafc097223ce1188fa8940db2ddf",
    token0: {
      symbol: "BTBS",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x88ae9e1625cfcbd128b89e7f037eaaf6a7cc9666",
    token0: {
      symbol: "FST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x81f9dc0086ea532aa11d107097d1b171a655cc20",
    token0: {
      symbol: "TRADE",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x2dfee82f4250dd3f3c6811c5d2926ede8b37a7d5",
    token0: {
      symbol: "JUP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbcb3841a83f9b1a8be3d3d2249b907bc6bc62f63",
    token0: {
      symbol: "CLAW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4bb0925fa50da9b4c8936869433b48e78ccc5c13",
    token0: {
      symbol: "AGIX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x90f1bdf7f72102b2724b4d2d9c12f00270e4d376",
    token0: {
      symbol: "UNO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdac9b2c7a5a8e2163b4161e34c2148e11b51fcc7",
    token0: {
      symbol: "BLOCKS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x82cd7e4b567ad7d2a00c3cc93ac968ccb61cafca",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "DORA",
    },
  },
  {
    id: "0x84d1f4bbd0fb53b9a09e95e051f2fe1bf3e01e6a",
    token0: {
      symbol: "TECH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc6f348dd3b91a56d117ec0071c1e9b83c0996de4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZRX",
    },
  },
  {
    id: "0xc724b925b99491b055750b37e564d17843053cd9",
    token0: {
      symbol: "MASQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1fead6b98371793a0897b3d1a9402e4bb9906775",
    token0: {
      symbol: "PLUG",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xe3437c8232cffd64aec48a9d87db3f9ae1cb7558",
    token0: {
      symbol: "CLI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa7ad4ce6c21d9e875f1067cd377256326b483002",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SANSHU",
    },
  },
  {
    id: "0xa1444ac5b8ac4f20f748558fe4e848087f528e00",
    token0: {
      symbol: "DEXTF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x155c119abedc4996ba571cda949f50d83470d23d",
    token0: {
      symbol: "ROBO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbbca2b6b6e8c76ba2d53f8d3cbab00a9e5535fe3",
    token0: {
      symbol: "BoomB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcab335e1964363e48a790da303b74ec02d3f8fb2",
    token0: {
      symbol: "DFYN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8672aa02f8a5b6eb6bb0915ce6c65f771d705127",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "OCT",
    },
  },
  {
    id: "0xb2c87aec3288db3b619ccfe49235c768c8bfee2c",
    token0: {
      symbol: "DICK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x718e7c6022255fc9b7c6a43d0c00c8dca193321d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KRZ",
    },
  },
  {
    id: "0xa70d458a4d9bc0e6571565faee18a48da5c0d593",
    token0: {
      symbol: "BAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc5202e3f5f60423d7106a68278c627fd091b5c7d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ARIA20",
    },
  },
  {
    id: "0xb89ed43f45d1f870be815c7b53368a1cc5184474",
    token0: {
      symbol: "MRPH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x41fcf9e248e2be21c5debe8f010080335dcb0d40",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NFT",
    },
  },
  {
    id: "0x0f225fb979029ac264c7cc9493745b1fdb28c82d",
    token0: {
      symbol: "HID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbc00e708c407d7633f7504434e74c13e171de7f1",
    token0: {
      symbol: "SATA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x67513fffec1f9bc1e7d971d067446205049ffe71",
    token0: {
      symbol: "KONGZ20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x219a12c08800d3deaf6a5ef7cf7e67d37247167d",
    token0: {
      symbol: "NEZUKO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8b1445e1ce4f144fe56cf912843f141f7e2131c0",
    token0: {
      symbol: "i7",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d1126cc2c77384448913b41fbf308563aae1f16",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "USD",
    },
  },
  {
    id: "0x7cdc560cc66126a5eb721e444abc30eb85408f7a",
    token0: {
      symbol: "DGVC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x02f14c27037bd30f18a6578590fd40fafd3376ff",
    token0: {
      symbol: "MOONS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x50e3d53b4a22e94ee1ce5c3a852d94d145d5852e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FNT",
    },
  },
  {
    id: "0x43fdbee01a1f6698766a51a69d4a849ec09cbe81",
    token0: {
      symbol: "UNCL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9f624b25991b99d7b14d6740a9d581dd77980808",
    token0: {
      symbol: "ARPA",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x73c2c52ffe660bf17b9dfd1a170bb4e3ebf48d9d",
    token0: {
      symbol: "VENT",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xc30b399f0ea22efa92cfe205e6ea562791d51c57",
    token0: {
      symbol: "XKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4329da08c4f7621cde8fccbb57aaa2acc2fe7cbc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEXO",
    },
  },
  {
    id: "0xb2c1f8c154cb3d66d4c3f42f3b2baed611ae5765",
    token0: {
      symbol: "DDDD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcc3d1ecef1f9fd25599dbea2755019dc09db3c54",
    token0: {
      symbol: "SRM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb7ee81a278a7580f74866c99efc92e1ca88082c3",
    token0: {
      symbol: "PLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d640080af7c81911d87632a7d09cc4ab6b133ac",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "MFI",
    },
  },
  {
    id: "0x288d25592a995ca878b79762cb8ec5a95d2e888a",
    token0: {
      symbol: "BPRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x67beaf934c2501d1a041d9b15f2b277dc99a9ab0",
    token0: {
      symbol: "POLVEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a182e532a379cb2c7f1b34ce3f76f3f7d3596f7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BBANK",
    },
  },
  {
    id: "0xbe38a889d67467b665e30e20ee5604a6f5696e38",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PTF",
    },
  },
  {
    id: "0x8536629173c9913cec80f4e1608f5228f26ae79f",
    token0: {
      symbol: "PICIPO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1af26ce001ea7806612e9916766fa1f6c4f3fa20",
    token0: {
      symbol: "TCP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb9ad5ee1d62e2441d2c0f37734c4ea56d3d156b1",
    token0: {
      symbol: "MEWTWO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe9c966bc01b4f14c0433800efbffef4f81540a97",
    token0: {
      symbol: "COMFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf4a80c9e5e23d29038bd2023701339dbac649c00",
    token0: {
      symbol: "Inuyasha",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x77d97e9622deae2744f1bdbd9aa6fe3c41dfddd5",
    token0: {
      symbol: "STOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2f85e11f6f12ead6af643f083a34e001030d2a6f",
    token0: {
      symbol: "LPOOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x396ff45b933117809068b1e66529f5e226551b1b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "eArena",
    },
  },
  {
    id: "0xf8b411b077073a4d00e1449ceb3df6e968b47219",
    token0: {
      symbol: "FORS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0c2445bec45c443c58f44f8e0a5796960e052d63",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VISR",
    },
  },
  {
    id: "0x17202e8e31fe0eebdb401b2e11492f5be52c8312",
    token0: {
      symbol: "ANB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0595df8d96f7fa5a0f383bb048ae7df8e0e96366",
    token0: {
      symbol: "IMP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6fc2fcc5e5065eab7588e3538923c9933d83bc5e",
    token0: {
      symbol: "JINDOGE",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa14e051af256157ce093aa54cb3b2f775358f559",
    token0: {
      symbol: "XCAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8d82b68f2346483d6b210383edbe27e7f5ef2365",
    token0: {
      symbol: "CTASK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd18748b9839b0081a867a1a871d5b562b2ec9884",
    token0: {
      symbol: "POND",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x7e13c19152d4cb6f7835d0c7ae9a3e5352a68f0c",
    token0: {
      symbol: "FLOKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb75767451fc277211a480ff3712eac6b0fa23b13",
    token0: {
      symbol: "ERP",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x2d5146fcd5a2dd95e887dbd347c2f906311cc047",
    token0: {
      symbol: "$HRIMP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa71d014ffc0d2aff34d1fe1672dcdef6ec00af66",
    token0: {
      symbol: "MTLX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x93154cb8556d12c0d54aab77d3ede2ea0ed42237",
    token0: {
      symbol: "SHED",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5e62de3fab648c2b83af866edffb23799bf22cd0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PP",
    },
  },
  {
    id: "0xe97bff521dae652a1bb107e2212907642c5a4ac4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LOVE",
    },
  },
  {
    id: "0x0a0acc02aec70778b34ea1a92bd9ec5d00f16593",
    token0: {
      symbol: "PCNT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7c5f2a5d428d713e545a05ec1b4bf49bf656818f",
    token0: {
      symbol: "MOOV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf04543fbf20daee9b0357db966428ef2a4ae0f5a",
    token0: {
      symbol: "FTX Token",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x68eef76574d25b262cacc7de24ec8a89ba4a305a",
    token0: {
      symbol: "FLOKI GOLD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc5bbe611a5a0ee224abf7ad959c11aad3b875957",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HAKA",
    },
  },
  {
    id: "0x5fc0f870a71a5911fad3bd33a165f87414b743f4",
    token0: {
      symbol: "ABYSS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf0d1109e723cb06e400e2e57d0b6c7c32bedf61a",
    token0: {
      symbol: "BEL",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xec5409816efe7151b809c1214b4780131d5f251b",
    token0: {
      symbol: "BSL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf49fbb0a1c32e4beb1653ded4c11f40a190ac442",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NAUSICAA",
    },
  },
  {
    id: "0xde5b7ff5b10cc5f8c95a2e2b643e3abf5179c987",
    token0: {
      symbol: "BASE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d3138931437dcc356ca511ac812e14ba8199fd6",
    token0: {
      symbol: "BONDLY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x485d20e8aac9f7c6a39d05147737487ff4093af4",
    token0: {
      symbol: "YFI",
    },
    token1: {
      symbol: "USD",
    },
  },
  {
    id: "0x92dbb765f587f6e16c07c799e0db6a1f3af498b8",
    token0: {
      symbol: "KTN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7f75f0aed3c4158b91ad3641afa6e8d035311862",
    token0: {
      symbol: "NKN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xecbc16e251846d1d37c140d83319690783d0d756",
    token0: {
      symbol: "REDPANDA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d57a53a45343187905aad6ad8ed532d105697c1",
    token0: {
      symbol: "RLC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x598e7a017dace2534bc3f7496124c89425b1e165",
    token0: {
      symbol: "PAX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x49179a590b086ee09dacc5750cfdb312c0c73d10",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TOSHI",
    },
  },
  {
    id: "0xe632ded5195e945a31f56d674aab0c0c9e7e812c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UBI",
    },
  },
  {
    id: "0x873823930b78e1c1c3d9674b5cb107dd2d211bf0",
    token0: {
      symbol: "SPDR",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x6a1020280efdeaee3bf8ee974d2328ee2c1cc696",
    token0: {
      symbol: "SHUNG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ed60952e119588c31c72125075010e1dd1752f1",
    token0: {
      symbol: "BLAST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7586e4a1e7d950912544732ed533e4a448317225",
    token0: {
      symbol: "CLIQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc447aaa230af55b2eaa75227521768914ec590aa",
    token0: {
      symbol: "UNIQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaffd914ead57221be3dbbf78543cfc61291a7ebe",
    token0: {
      symbol: "LMAO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x64f0bc5141b18b8c816da7e7f1f26676e10506bb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MATRIX",
    },
  },
  {
    id: "0x0bc13935c6960ff823daf255a276acab93aea072",
    token0: {
      symbol: "EJS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaba7af37dbdc67b7463917e483b55340d153928a",
    token0: {
      symbol: "BABYDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xab2d2f5bc36620a57ec4bb60d6a7df2a847deab5",
    token0: {
      symbol: "xFUND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ae5a1eed730d53960469d5bd2776b4cef3ea469",
    token0: {
      symbol: "MSA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x62f22a47e5d2f8b71cc44fd85863753618312f67",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ONX",
    },
  },
  {
    id: "0x6bc4fbe8b72512d994fba72ade9de502b3d88ac4",
    token0: {
      symbol: "EverApe 🍌",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6fbf081e93b775c0270767fe821d9c951e593a9f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "APYS",
    },
  },
  {
    id: "0x6a3d23fa07c455f88d70c29d230467c407a3964b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RMPL",
    },
  },
  {
    id: "0x618cd2216955d73ee8c679cd364fb2d5dc613f81",
    token0: {
      symbol: "YFO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x758ddf37606fe2e0771918ec340e11aa9960370f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ISLAINU",
    },
  },
  {
    id: "0x55ffd0aa50c75298757d0e9cabc18758bcc1d789",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VERSE",
    },
  },
  {
    id: "0x0a965a4caf929338044c593d82d385c4c898d8c6",
    token0: {
      symbol: "FWB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x670c0f67a4dc05b6d482c3ddaf0bcb8a20cdc304",
    token0: {
      symbol: "LKR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xef8cd6cb5c841a4f02986e8a8ab3cc545d1b8b6d",
    token0: {
      symbol: "DEPAY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d0c5ed36c42de1ec62d242c43e5e6698e25424e",
    token0: {
      symbol: "GIVE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe1dabc245e75d7925a42e0143b52f9843546e25d",
    token0: {
      symbol: "MPH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2dfd41ec20b973382c82123a6e7e3b33a5df6d01",
    token0: {
      symbol: "PRDZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed196f5f01e8c99ef4c6d77b83ccaf629032a8f2",
    token0: {
      symbol: "Nsure",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30bc873193466dc59fc08159460c49f26f609795",
    token0: {
      symbol: "ALICE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc3ba90184bce7e332e9de493a782cffdcbeb30a9",
    token0: {
      symbol: "$GASPAY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x310acda8447845198419c5d060b63a3d41f30b11",
    token0: {
      symbol: "XKI",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x408ede68c77878f84e4ade3ae192d1edf44fea76",
    token0: {
      symbol: "PIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe875d87b63df4129182e582bfe8b46240ee5d83f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EXNT",
    },
  },
  {
    id: "0x99d1a8302b6ac22fe970338f406e34543fe52737",
    token0: {
      symbol: "GZONE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3f3aa0726b240aef0fe4f7df2814df525303dc43",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ECO",
    },
  },
  {
    id: "0xb27c012b36e79decb305fd1e512ba90eb035a6fa",
    token0: {
      symbol: "WAIF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7bfc76198fa4352d059f0edb9e8f9e0a0b755c09",
    token0: {
      symbol: "BTBS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0216b5f9167355c6397db0e99709b9d289f2d5ac",
    token0: {
      symbol: "DEFIT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb14b9464b52f502b0edf51ba3a529bc63706b458",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ETHIX",
    },
  },
  {
    id: "0xb6b14791191699a58747cf38fd2b19e3215cfa96",
    token0: {
      symbol: "WOOF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5811ec00d774de2c72a51509257d50d1305358aa",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "WTON",
    },
  },
  {
    id: "0x39c0edef530d284b8f7820061114157c5bd78093",
    token0: {
      symbol: "TCORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x76dfe78b0ce06e77aa41326208cd03a773cb5bbf",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BABYSAITAMA",
    },
  },
  {
    id: "0xce33f3562f2a9954f163edaedd1a96a8f874e11c",
    token0: {
      symbol: "WIVA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x48356de0473fa6993ec68a1c5e04da2896becf7c",
    token0: {
      symbol: "POLP",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x4358b0eb9c126e45687c4987eb9f1f483f894982",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YSEC",
    },
  },
  {
    id: "0x8b7cdbaa67133ac1e62e068368f1a312c942b49c",
    token0: {
      symbol: "DFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe964d013d193354170ad1d3d8e500f6d26334f45",
    token0: {
      symbol: "BART",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x99d7e4ad0e7cbefe84cae1634f017d9e03a2b28b",
    token0: {
      symbol: "EAS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xea38ac8ce7756be643341bff2c34c8d975215506",
    token0: {
      symbol: "eFIL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x3e48f95d40b7d78b9ac7b89b30fad6147ea655b4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MOAP",
    },
  },
  {
    id: "0xd57717362ea0be73e516e5c1b12849db01b9243f",
    token0: {
      symbol: "DIREWOLF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xff496e9135ee1bac7b87f92b48ec147bbe4a0584",
    token0: {
      symbol: "rPepe",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcdf5ade987f1b51f739c8dbc852bca92aa4c0f37",
    token0: {
      symbol: "VLXPAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa24501a910e7930148445bcf1fb601a4304e4551",
    token0: {
      symbol: "VPP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfd76e8a495d9cc16b650f391a7ec8676c532f8a6",
    token0: {
      symbol: "JPAW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd88a6d3535e2db3207eea47fc1f40250ac905830",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MCU",
    },
  },
  {
    id: "0x9660882055eeb18e54deee7725dec5a4b6ae1138",
    token0: {
      symbol: "BTSE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0fdc86703c938e3e1cbc9e14f21c6bf709c13acc",
    token0: {
      symbol: "TXL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7bbca9f1d391189ec9739e71b4b8a9ba1581494b",
    token0: {
      symbol: "MONTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x64b91b92240bc1901855dd55ae632addb650d089",
    token0: {
      symbol: "Mars",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xf6887ad6f3b342840dbea138e8003f2ca14f4500",
    token0: {
      symbol: "IOI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x635b58600509acfe70e0bd4c4935c08182774e58",
    token0: {
      symbol: "STACK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdd83a1cf726c355aef6832bd4042510c08fc32c1",
    token0: {
      symbol: "DPRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa12b7a78a31854d2e9ee8fbc92e262aaf4fcd4f1",
    token0: {
      symbol: "CNTR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xee3b01b2debd3df95bf24d4aacf8e70373113315",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NODE",
    },
  },
  {
    id: "0x8878df9e1a7c87dcbf6d3999d997f262c05d8c70",
    token0: {
      symbol: "LRC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3df97eb77c664ba7702c2cd5d1df21ef0f541497",
    token0: {
      symbol: "SIMP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1287f7d44369dd1a4bffcc78ab0931b7d7905ace",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "GBI",
    },
  },
  {
    id: "0x6225f6d7ad5ea259a2227d3f39cf808f3098af6e",
    token0: {
      symbol: "KEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c6c852a56de59a59f7a4527724a2a0a87f7d223",
    token0: {
      symbol: "FERA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x85609c626b532ca8bea6c36be53afdcb15dd4a48",
    token0: {
      symbol: "wANATHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x188270f9662b244862fe617990e065050767cd02",
    token0: {
      symbol: "BYN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x853a43cc651e8b25e753eed19dde68c6a6cab254",
    token0: {
      symbol: "MOF",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd860d2685b875ae34594caa3c44bc92231ee69d0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WOLVERINU",
    },
  },
  {
    id: "0xdc51312c1fd1728253be2e0c4c214c3ceb2b54ff",
    token0: {
      symbol: "EPRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8580bed4a165f4bf60ca8070001171242ab94ba4",
    token0: {
      symbol: "BCVT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf1d37effaf688db524fce242a2b85587a977ba65",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PIKACHU",
    },
  },
  {
    id: "0xf80758ab42c3b07da84053fd88804bcb6baa4b5c",
    token0: {
      symbol: "sUSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa986f2a12d85c44429f574ba50c0e21052b18ba1",
    token0: {
      symbol: "XYO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x89b1251a978e88218affdf0147ffe376291f1447",
    token0: {
      symbol: "SPICE",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xbbf933c1af0e9798615099a37a17cafc6da87732",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "MM",
    },
  },
  {
    id: "0x2c8eb0861bf6fd761481e8d1ff1c57536c983e98",
    token0: {
      symbol: "ROCKS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c7fda31922a675a7b77c265904c9eb0dd20b151",
    token0: {
      symbol: "SHOE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x68fa181c720c07b7ff7412220e2431ce90a65a14",
    token0: {
      symbol: "DODO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ddf85abdf165d2360b31d9603b487e0275e3928",
    token0: {
      symbol: "OPEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d470e0e3dffbba05e4f56541416a69574675889",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BSKT",
    },
  },
  {
    id: "0x68ca62c3c0cc90c6501181d625e94b4f0fdc869c",
    token0: {
      symbol: "MISHKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x203928ce3316205d7336f6a14c9e916b54848076",
    token0: {
      symbol: "NFTT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e523afed38640c0819eb8cce63b40e0849e6ee3",
    token0: {
      symbol: "RickMortyDoxx",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf5e875b9f457f2dd8112bd68999eb72befb17b03",
    token0: {
      symbol: "$ADS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf513439d55c04918048f06e94893a87be0611e6c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "yERB",
    },
  },
  {
    id: "0xc62bf2c79f34ff24e2f97982af4f064161ed8949",
    token0: {
      symbol: "BCUBE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbefeaa0335d842b31053b091d5e2ba5d6a696dbe",
    token0: {
      symbol: "DFSocial",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1a58aa618df8f1ec282748fef6185c1a1cc2faa6",
    token0: {
      symbol: "TRAC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d5afc30ea4cb9a03f363877182e6c3f13551281",
    token0: {
      symbol: "TOYINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd17351869efe6cd11861ae9eac87119a891d9ac3",
    token0: {
      symbol: "ZIG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe213c825213eb6a5ad346c4aaab3700ebd17b319",
    token0: {
      symbol: "LUCKY😺",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x803fc05552868c40336482dfdda36c2e13e6d5d6",
    token0: {
      symbol: "XFIT",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x4f6d22362629c5a933d285ad0036d78f30a6b1cb",
    token0: {
      symbol: "NWC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2deeeda49e5436cfe18e0ba10f58e4496b8fc631",
    token0: {
      symbol: "URQA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b68ead18db86cd6130df53c4b6c3c77332a3351",
    token0: {
      symbol: "LITH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb3fee89d04d02dc4b522d487c24c810ad8e5809c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DGD",
    },
  },
  {
    id: "0xe8846b27988ff52c371d5bd27bf8dba4097c93d2",
    token0: {
      symbol: "DOUGH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x81a8bd7f2b29cee72aae18da9b4637acf4bc125a",
    token0: {
      symbol: "LINK",
    },
    token1: {
      symbol: "USD",
    },
  },
  {
    id: "0x8ed342474d03734a042a942a1b1f2e3b2c9157a4",
    token0: {
      symbol: "IPAD",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x50969c5b74ab455b3a35225cf5cb9bcefdb92559",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "vETH",
    },
  },
  {
    id: "0x753923189369a3e54caab0b9925e487e645599ca",
    token0: {
      symbol: "PNT",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x21359dfb99489204a3549692dd80f2cff4d4e8f9",
    token0: {
      symbol: "STR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b10fa100c9cbbba76853ad2f9a42b9340ce7164",
    token0: {
      symbol: "YIELD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4b8852e4747b8a7d4caf0440e4e3397032a6723d",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "O3",
    },
  },
  {
    id: "0xd5fc1a6f75cd465c46e2f15f74b9ac0016b18386",
    token0: {
      symbol: "ARGO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x469506e58d4d0d7abb476dd5c0a999d46723351f",
    token0: {
      symbol: "CRU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x037a4245bf5f656571e7f54fa95ab4a9d30e9b73",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SaitaX",
    },
  },
  {
    id: "0x2a1a72b2f9df73ae57bbbd8b95669955ea1eb8ef",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ODDZ",
    },
  },
  {
    id: "0x32bd6416cf5a6b1f570d0a8fbbedce2555eec959",
    token0: {
      symbol: "SIMBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb1fe30cebc74f832b314acceaaa1fe817528a43e",
    token0: {
      symbol: "XZAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3fd4cf9303c4bc9e13772618828712c8eac7dd2f",
    token0: {
      symbol: "BNT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe266486afe9763c93530893e90264144c3a4023d",
    token0: {
      symbol: "SENT",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x653a9c9ed5e0b1085e68498c17957ba06404bba5",
    token0: {
      symbol: "TITS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3d3ee86a2127f4d20b1c533e2c1abd8040da1dd9",
    token0: {
      symbol: "VOX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5474ebd853e2ce2c9d343f0469206350231670be",
    token0: {
      symbol: "BCMC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b8d2834ba1b3c31688e084ce9792baa0ca2e2f7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PERL",
    },
  },
  {
    id: "0xab3f9bf1d81ddb224a2014e98b238638824bcf20",
    token0: {
      symbol: "LEND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x108b0800a463333b3e9c342fbe00a759a8eb7594",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Lelouch",
    },
  },
  {
    id: "0x7e76cd594dd6e28b18a679962df90489bf7d9b00",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LVLUP",
    },
  },
  {
    id: "0xde089c608c5fb839c89b3f9cdd99bd31c2d35578",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BOBO",
    },
  },
  {
    id: "0x878fc16966cfa667eabb5ec7dbf2b5a87f8aa901",
    token0: {
      symbol: "yTSLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9861f7187b58023d89b2c2b0767bdee43345620a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "2GT",
    },
  },
  {
    id: "0x65d0a154d2425ce2fd5fed3bdae94d9a9afe55ce",
    token0: {
      symbol: "NDR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x736aaa2ba1e71f6ae8314905f1a5a9c39ee37a00",
    token0: {
      symbol: "$FIRE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x13bb5add7fd43c52d987e2c320f95d4b5e9cfa5f",
    token0: {
      symbol: "MXS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xad08700094bb12b938e989d14f581f5635befdbd",
    token0: {
      symbol: "BULK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdab143548832194c8f2677eba9830e0b453b37c6",
    token0: {
      symbol: "TKX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x81cf053b1179826b4ee35b023d8ace10e374681d",
    token0: {
      symbol: "L1T",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe768f3d38c5c076027398ba3b7484e63a78478d9",
    token0: {
      symbol: "JEFF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x28c6cd63b17a8586ee0a7cb6a537e33d81bb463d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EMON",
    },
  },
  {
    id: "0x608095446de5500937d50fff7f0f39e307e7a62a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRY",
    },
  },
  {
    id: "0x26ce49c08ee71aff0c43db8f8b9bea950b6cdc67",
    token0: {
      symbol: "HT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x379d908bfba62366cef868c96b80568656b2d9aa",
    token0: {
      symbol: "KEI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0120b5473cc9b28321a8f6e712cb5b4d2df32b31",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ITGR",
    },
  },
  {
    id: "0xf1fe852fca1b5a869ef1fe06a2799e1f38b70b84",
    token0: {
      symbol: "WQT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc346ab6af1ca2a2e9662e88d85ff448b636149c7",
    token0: {
      symbol: "RPTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7f0ad87b99ba16e6e651120c2e230cf6928c3d15",
    token0: {
      symbol: "MARK",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x979a6e410760b83bdc6dcddd0e904998ea575197",
    token0: {
      symbol: "USHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x67a0b9c65e79eeaa0fb450497361d15e991f39e3",
    token0: {
      symbol: "xSUNC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf8f039c7a782c599879b9356cba6d9ecd3fb4d16",
    token0: {
      symbol: "KONGZ VX20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xee0661bfeca75a8ba69b4259dc86441cda47b251",
    token0: {
      symbol: "PWC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe72767b6f08694c7a0484d419eda074de3b81d1c",
    token0: {
      symbol: "STARS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaeaf0c8f9b6b281a1f552f3bda1958091c762de3",
    token0: {
      symbol: "START",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30ac70e2dc5092f64031685bb23d50f782c27566",
    token0: {
      symbol: "FLOKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa92d2e98fcc91585c5ecee548451da261e5314da",
    token0: {
      symbol: "BZN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7cdb719aa9d079da0be147495a197bd39be6e7c9",
    token0: {
      symbol: "UCN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfee4800067bfc9dff564d116cba4d4b16ca7b7b3",
    token0: {
      symbol: "KEANU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f1a2ea0c27f8fb01ebdeeecb1f09ee9187df191",
    token0: {
      symbol: "TON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf4835af5387fab6bbc59f496cbcfa92998469b7b",
    token0: {
      symbol: "BRIGHT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6a9efe235697d4773276cc3d7bfe5992af74b8b",
    token0: {
      symbol: "RKT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x92a6eee7f57581eba1bca3b52808d2b49da8b020",
    token0: {
      symbol: "SCA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b30bd6c94394b1f128a99afda8f1cb42e32f260",
    token0: {
      symbol: "AKAMARU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29ba3d899e8a819cf920adaff53ef1cf31969e66",
    token0: {
      symbol: "ALEPH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa151593f01dd3b98da14f574dfef51c16ac470cd",
    token0: {
      symbol: "GOGETA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xca7d3e930932a6cb26ae4e06c18b2ad09a43bb90",
    token0: {
      symbol: "MOAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05636a7c0544ab05e179a552dcb811bdbf304f38",
    token0: {
      symbol: "NFTs",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xf248959d7aa50cd47b448f507063eaa6cc5404c4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PRE",
    },
  },
  {
    id: "0x28d2df1e3481ba90d75e14b9c02cea85b7d6fa2c",
    token0: {
      symbol: "WAG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c5999653f44672336c2ef0a0008587fa8b9957e",
    token0: {
      symbol: "HAKKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcce561cd3217dc5a6f9b9919fd3928cf3d0e282f",
    token0: {
      symbol: "TOK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4c471205e8c357e10bbecda80b6aefe9351f01b",
    token0: {
      symbol: "ATD",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x176c481a1a59e806883c7fca360a517ea524f1c1",
    token0: {
      symbol: "FLOKIPUP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9e79ccaacaaa5dbb6714eea8fdfd6496c9618f40",
    token0: {
      symbol: "SWINGBY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x23bff8ca20aac06efdf23cee3b8ae296a30dfd27",
    token0: {
      symbol: "wNXM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed6f038534f321c80ba7c1490177c52f0f33a85f",
    token0: {
      symbol: "CLOUT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0e4dadf1ba9aee6379129bae2fcb09f1b385e7ef",
    token0: {
      symbol: "CXN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbe5b2c7d8e990b71767cf6d95573386e1d3d1995",
    token0: {
      symbol: "LTY",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xedbbd8b0b5013135ac5c3b0a866f974a2e4d62b4",
    token0: {
      symbol: "ANGEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x465d676bc576eac77f3a69c5454a84294cea5092",
    token0: {
      symbol: "FOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2f56d2f22511e95c946afb86e8df49b1e7128242",
    token0: {
      symbol: "DMX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5239873c892376799b6cb49a3cfb1146d4a260b8",
    token0: {
      symbol: "NORD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x42c02c24caaf42a27dd95c790073a4ea3118ea48",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HODL 💎",
    },
  },
  {
    id: "0xc8e78ad2573f5e16a286443aea2a6f1ba0c06b96",
    token0: {
      symbol: "AAPX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaa298a459ca6dc7c4b11b4ac09d82e6270a3b234",
    token0: {
      symbol: "CHIRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x49f9316eb22de90d9343c573fbd7cc0b5ec6e19f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "POWER",
    },
  },
  {
    id: "0xca4c92f756450060c0f78883434344254140ffb2",
    token0: {
      symbol: "SAHU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d474d4b4a62b0ad0c819841eb2c74d1c5050524",
    token0: {
      symbol: "TIME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x426c02d6ce5fde4ae7556e7345f8101f64807a7c",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "OBOT",
    },
  },
  {
    id: "0x18112da8f2d6576926fcfb4d2c511fe9c6f8b2b5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZORA",
    },
  },
  {
    id: "0x0f347b63747a0842abd5e74810311fd3b093bc51",
    token0: {
      symbol: "NANOCORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0422edb6e1a5258298cc0366c5f719bbd1bd85be",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ICAP",
    },
  },
  {
    id: "0x24b24af104c961da1ba5bccce4410d49aa558477",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AXS",
    },
  },
  {
    id: "0x48e313460dd00100e22230e56e0a87b394066844",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "OMG",
    },
  },
  {
    id: "0x3452a7f30a712e415a0674c0341d44ee9d9786f9",
    token0: {
      symbol: "INDEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc12051d9c41d99b01906cf53d9f40af8026b9021",
    token0: {
      symbol: "LOCC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x80562222ec4d0f8a2bddd10ce972cbb2d6167802",
    token0: {
      symbol: "CAVA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0b85b3000bef3e26e01428d1b525a532ea7513b8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RIO",
    },
  },
  {
    id: "0x42d52847be255eacee8c3f96b3b223c0b3cc0438",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UOS",
    },
  },
  {
    id: "0x49aa60661199aeaf8b6f5abd51151f918875c3cd",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ASAP",
    },
  },
  {
    id: "0x85cbb3c053a7b88e14bc318e7b6017452fc95325",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WFAIR",
    },
  },
  {
    id: "0xea7952fac7ff6e997d895c1566599b86b91444c0",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "UBI",
    },
  },
  {
    id: "0x6da6c5c7eb4d840049f51ba1a79ac8caf3009466",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FIS",
    },
  },
  {
    id: "0x9e32f8f5c51ec90bd89f86a5c1db7ebbde911052",
    token0: {
      symbol: "CHARIZARD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x75c83c6dafe52218f7a13c8244e9af5b60bc4511",
    token0: {
      symbol: "WOLFY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2d9fd51e896ff0352cb6d697d13d04c2cb85ca83",
    token0: {
      symbol: "LABS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x51bf9908dac4a283d017edc071d954ec3a4b1376",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "NRGY",
    },
  },
  {
    id: "0x1069cea8fa5e8a081536adecd62a7347d325e977",
    token0: {
      symbol: "ORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8214018542bc5c582dcaa1c9118fcf00d7040f38",
    token0: {
      symbol: "AQUA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x87c6c475f40299e5ce3cba736f613f97e820f101",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ROTTS",
    },
  },
  {
    id: "0xffab5e6ae571fa8193b4b0306c540e56ceab14d0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SBOBINU",
    },
  },
  {
    id: "0x0b1d5a651c16e4218613ca4a261cc9ef71f2ac9d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AHF",
    },
  },
  {
    id: "0x2edd8e4d658262d8885eb2cd89bc9a099eb9f7c4",
    token0: {
      symbol: "FINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x532ae13f3e42632094addad5e75a472e1fb8d0a6",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SAT",
    },
  },
  {
    id: "0x9962a44b3dec853c2e2047c3f3467ed26d3f58ed",
    token0: {
      symbol: "Zin",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b23e3c5fa38c9b1748b6f04a64af1cb1bb9535f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TAC",
    },
  },
  {
    id: "0xe805730341d3f49dd404947ccb6f9bd6f6e978ce",
    token0: {
      symbol: "ADD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec385cd6f67c6287bdc1644ec732ae26c0a626c2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PINU",
    },
  },
  {
    id: "0xc17b5116ab39c8f747f045e107ea47a917532cdc",
    token0: {
      symbol: "NIIFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3071e2aad52f0ce5b1cade7046df356608881268",
    token0: {
      symbol: "FOXX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x09fd13b785ac94e42eca73b6a0781ca3762e9a42",
    token0: {
      symbol: "TOKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x797ccc4f0d1403d21c7d151d2b55661c53130608",
    token0: {
      symbol: "N1",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8fccb8f38295fd65bc8b6c99590ed4f5eaba56b2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CWAP",
    },
  },
  {
    id: "0x478893fcbfffc3283fece2a216229e1c34093980",
    token0: {
      symbol: "PAINT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3b7143336130cfb7c45f246e0085f6e74afd3fa8",
    token0: {
      symbol: "RBX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x974bfcc7b25f979950b58ce0cf8d9c621a9c771e",
    token0: {
      symbol: "KONO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x83a02859886fa12619a95b0b56794a7186598619",
    token0: {
      symbol: "BlueSparrow",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0e550efde3e9875e05be2d24b52dad6ce2155364",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SVX",
    },
  },
  {
    id: "0x39fb7af42ef12d92a0d577ca44cd54a0f24c4915",
    token0: {
      symbol: "COC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1f6a7d520c828b9ff22a267a187dd2f170e44a8f",
    token0: {
      symbol: "FONT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc4d9102e36c5063b98010a03c1f7c8bd44c32a00",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ATRI",
    },
  },
  {
    id: "0xa22a11d16187c2833b6067c1a666e6fa9317836f",
    token0: {
      symbol: "CHONK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xae0fd242029b383d325d4828e9fa36ca935da5b3",
    token0: {
      symbol: "INU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x76efea638426a85a868eac23d5efb34ba52156c1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UNV",
    },
  },
  {
    id: "0x9fd0b7a9f931d9bcdfb9c6b3ef0132a0c5237189",
    token0: {
      symbol: "eSUPREME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3473c92d47a2226b1503dfe7c929b2ae454f6b22",
    token0: {
      symbol: "N3RDz",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2d97755d2d18a77ef9ead977dd0c3ca7c840d5fc",
    token0: {
      symbol: "KTON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x952bf48a7b68e027a64bf9230f303cc63bc166e4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ONEPIECE",
    },
  },
  {
    id: "0x1636a5dfcf7a21945c06d1bea40b52ce975ea614",
    token0: {
      symbol: "LABRA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x93e7dec988e24b08cc1606061b232deeb80ffbf8",
    token0: {
      symbol: "RCORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0bde6a03e063b2185a749d0c0b85222f5d9f200",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XTF2SSSWR3",
    },
  },
  {
    id: "0x8cb77ea869def8f7fdeab9e4da6cf02897bbf076",
    token0: {
      symbol: "AKRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xafb202c128e3b740f75a69288b885422b037649b",
    token0: {
      symbol: "PROT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4e37dcad9e6e1465f33387587cef22616aac2541",
    token0: {
      symbol: "DIS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbece15ed02a078272a3044827e68d33ef2db8335",
    token0: {
      symbol: "SHD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe4f8f3cb9b33247789e4984a457bb69a1a621df3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SNOW",
    },
  },
  {
    id: "0x689371e9f7833c1d6b33434dd6f121ef5a88a20b",
    token0: {
      symbol: "KAWA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x214913d4aab5bb321498edb7309cf68cd8c5d86b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TKINU",
    },
  },
  {
    id: "0x3787497077693bee217fc2c9fbe3345a2815d27d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NOONE",
    },
  },
  {
    id: "0x89af5a68cfa436693b1797cc2a41715f4530fa61",
    token0: {
      symbol: "ISLAND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3696fa5ad6e5c74fdcbced9af74379d94c4b775a",
    token0: {
      symbol: "VETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x31cf0327782a22958e7361f75ed86a7b69eb0aa7",
    token0: {
      symbol: "FORM",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x394993c5776bcf230e0f7ec956937e0fe5d216c9",
    token0: {
      symbol: "eAPEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f9a70b87aac8e4b751f65350942b8faa9dc4b4e",
    token0: {
      symbol: "BitANT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa7ddf273e9d1eade13c6e5c51ffe35a23cd6feed",
    token0: {
      symbol: "ARM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x97e3feacf3be8398bf3e83f38c0835b9f75839a3",
    token0: {
      symbol: "ForeverUp",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6e168d4fd7569ea1c56d985256cd2e93ee12490e",
    token0: {
      symbol: "COMB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3787497077693bee217fc2c9fbe3345a2815d27d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NOONE",
    },
  },
  {
    id: "0xcda9e6fe9a73c288d1e54912da31b3cd1cd1992e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Rug Or Treat",
    },
  },
  {
    id: "0x078e0bca688615c1c4f0c9d4baf6fd8aee4f42dd",
    token0: {
      symbol: "DIGS",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x502fd0302624db0b27c9652e0924872b5d3fb728",
    token0: {
      symbol: "CRAFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5390e2cf29f38c5969e014daf769d1da482ed329",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MORK",
    },
  },
  {
    id: "0x748a9631bad6af6d048ae66e2e6e3f44213fb1e0",
    token0: {
      symbol: "TWA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x85d8371b2eb5c462da1ace6606e03d75e1dc30de",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GASG",
    },
  },
  {
    id: "0xc34da1ab0f93dfed30729951dafcfb9ce3e2a9ae",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XTM",
    },
  },
  {
    id: "0xd00ed1098180b1d6ed42b066555ab065c4515493",
    token0: {
      symbol: "WG0",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xab3da691942b259f529f3a3c034adc64f0469a00",
    token0: {
      symbol: "SGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b248100f611820a99c451ef63f3971f332a6658",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KALLY",
    },
  },
  {
    id: "0xe87a25367b80b247a70745f00d447f8a4a28420f",
    token0: {
      symbol: "YUANG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x97e58528d0c7bf0d0089f52be1dec3565d84c46a",
    token0: {
      symbol: "CIRUS",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa908fad532f5f58cef5d1cf07c5b9844b6aa1b60",
    token0: {
      symbol: "LZRS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x90bd040f2a46671314fe79ab1af105bf6176e38d",
    token0: {
      symbol: "PRARE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x175909b959ff608a74b7b0045b3014ab0a4932f4",
    token0: {
      symbol: "MNY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xab732a0730243c198ec949963630ea2d65442726",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AOZ",
    },
  },
  {
    id: "0x624bba3c604eeb90fb2d589d3609a85fd6ce3483",
    token0: {
      symbol: "SKULL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x901875f43468abb246b14d95b5aba7a718fafff8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HRSLN",
    },
  },
  {
    id: "0x0db1a0061270418037fd9839dff08b8377b55e1d",
    token0: {
      symbol: "SALT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4a0ea6ad985f6526de7d1ade562e1007e9c5d757",
    token0: {
      symbol: "RAI",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x4028daac072e492d34a3afdbef0ba7e35d8b55c4",
    token0: {
      symbol: "stETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6694aeaaf22abba85c481b67551da9e073714ea",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "CW",
    },
  },
  {
    id: "0xd4d090ac5b3729159f2f69fa1e8800c243ae5b58",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WHOLE",
    },
  },
  {
    id: "0xfaedb1b74f50086775fd15bbb3570eadd897e514",
    token0: {
      symbol: "MP3",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x97bc8c2c0606966ca4e8caa4389c67bd077888c4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TOPS",
    },
  },
  {
    id: "0x728102a5ba2c67f2250002c0a4418724019862ae",
    token0: {
      symbol: "COMP",
    },
    token1: {
      symbol: "USD",
    },
  },
  {
    id: "0x1bcce9e2fd56e8311508764519d28e6ec22d4a47",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "STABLEx",
    },
  },
  {
    id: "0x5f005abb542d08d23b95f239ab367f9ff233d0a8",
    token0: {
      symbol: "WCHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5421d5e6128a6be3eecfa06afd05f72cd7ab0284",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "APING",
    },
  },
  {
    id: "0x576cea6d4461fcb3a9d43e922c9b54c0f791599a",
    token0: {
      symbol: "CRU",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd5b1cd8d245a93e0697707aee82497388508b132",
    token0: {
      symbol: "DMOD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4aa610e26d2634907f70c218d2edba61488eb12c",
    token0: {
      symbol: "DIGINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf8b6109227ad873018841e702321315bb1b9f992",
    token0: {
      symbol: "GCR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd521ea2eac8f7a575aa985b150265e7ec0767a5f",
    token0: {
      symbol: "$FDD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c877141147fdf2d3b963a6c897a4af7c113e25f",
    token0: {
      symbol: "AMAS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb733771a429a053daa47a7d219e0834c57b04a87",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DFIO",
    },
  },
  {
    id: "0x40829a59080a12f16bb8fba22354a6a42c810aab",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VTX",
    },
  },
  {
    id: "0x93268722e643df5e4099bd685c972cd667968e89",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SCIFI",
    },
  },
  {
    id: "0x640028768df6986d2b0f7fb27c046263b0c6c188",
    token0: {
      symbol: "HOKAGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xce9add58ec5a07cb643faf7418eb94c193672844",
    token0: {
      symbol: "DVD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xba9a5e027d24dc433bbb0da2b28a52e148aa4fff",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "CORN",
    },
  },
  {
    id: "0x367340c85e1fde271506ccda21a424f9fbde8d9c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CYBR",
    },
  },
  {
    id: "0xa06ea8dcbef3fee861cdbf9d9772bc04e454d3d4",
    token0: {
      symbol: "RAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb405652045933afdcdc6fcbbfb4d0ecaf33c67f0",
    token0: {
      symbol: "AOM",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xdc4760afc2b1401cd2c2f5e5e514dab5447c811e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEFIDO",
    },
  },
  {
    id: "0x4d184bf6f805ee839517164d301f0c4e5d25c374",
    token0: {
      symbol: "GDAO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa8bef252afac1d6263f22c1e4f33f3777ed30bd6",
    token0: {
      symbol: "ENOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x83524f1df56629fec3805299846ac39b00bc6092",
    token0: {
      symbol: "CMS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x52c469c0204e104a1963647281a5e7235aa97c3f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BabyFloki",
    },
  },
  {
    id: "0xdfcec6581fe2064f48b7821969aeea555262287e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NAME",
    },
  },
  {
    id: "0xb1f1915d20dd21ad356fb1f20ee37dc484e8b731",
    token0: {
      symbol: "HOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1de76481f8881ed323ede2388095a59fda09be9b",
    token0: {
      symbol: "LGB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b4f9f96884eb976d7ffcb461471749a78c2b5db",
    token0: {
      symbol: "EBOX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e406eca97c1252d13455850055e2b008740e30d",
    token0: {
      symbol: "CHIHUA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcf0d81fc27c08149e22f7ea48cb6df5a1728291e",
    token0: {
      symbol: "TOLL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfaf477185220f1fbf987a43374ca640d670f2c90",
    token0: {
      symbol: "XDEX",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x86ba94f5dccc71b15c9ebbcbb37a19a875694aa9",
    token0: {
      symbol: "KYE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x97c4adc5d28a86f9470c70dd91dc6cc2f20d2d4d",
    token0: {
      symbol: "FRAX",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xa67741e5929d970c133cc8943ce3b8d9115bf392",
    token0: {
      symbol: "SANA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x712a8ab4a4fee5d13d372833bc0ac54a60f68f17",
    token0: {
      symbol: "TW33T",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1cf0484e18bc2a4ffb0ad49c5197a1e2a5bb9d11",
    token0: {
      symbol: "INSPIRATION4X",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc32ab5f17c0edaeb4d597bfb9726f28bc37fd6af",
    token0: {
      symbol: "ZUT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaee132d8294b1531f21a432149ccf16d65f9abfa",
    token0: {
      symbol: "DAWGS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3f3eebf7955cbd806f79f34136557c9049ec2217",
    token0: {
      symbol: "TRADE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9406d8fd82db5a7b4dfb85f0ddd91b5b3055bde2",
    token0: {
      symbol: "HTB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3b44f35fd81040e4d0cdccfe77714512feb1da4d",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "PROM",
    },
  },
  {
    id: "0x2e2728e8c24d078c4a7c7da12cdfa94affc36d22",
    token0: {
      symbol: "DDOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5cd14ef406a4a78f767a4159483f82f3cfc01166",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "bUKH",
    },
  },
  {
    id: "0xdc5df90222e63d77111aab7e4cd9edd055926f53",
    token0: {
      symbol: "PAZZY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x51fe8e8fa3f9f10288fa8c2aff1400f887d21c42",
    token0: {
      symbol: "MITx",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4353cee09a4f020f6f1667921788acfafe8093a9",
    token0: {
      symbol: "FRUNKPUPPY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4e9e73c0170f09e709573127c4ab02e57b868178",
    token0: {
      symbol: "TOWER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x34ce891ed19e47e3564625e42f27a8b6dec83ad7",
    token0: {
      symbol: "ZOMB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x54056a936ea638579bd6284073c2cff96050451d",
    token0: {
      symbol: "UNDG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x165c6e50ed0ced21c0192fac26c1affb0dea5c28",
    token0: {
      symbol: "SHN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9cd7403ac4856071581e1f5a298317d9a72a19cf",
    token0: {
      symbol: "LTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd9280d19271e26299cfa6b1ca093e557c146ff92",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Yfild",
    },
  },
  {
    id: "0x2efb50b1118b2cccc24fdcbb69fd9096a93cd621",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UNFT",
    },
  },
  {
    id: "0xf5ef67632cd2256d939702a126fe2c047d0a07bf",
    token0: {
      symbol: "HOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d3a9f0f58d64a43d48479f7601113b5365e8d64",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DOBE",
    },
  },
  {
    id: "0x43747d31fc178d626047c5b4346a251418167a1a",
    token0: {
      symbol: "NBNG",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xb8172076ceb35b6701f96eb9088818efc010bd44",
    token0: {
      symbol: "SAKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5397d87eb8ddd36f631b704653a3ab2bf1739467",
    token0: {
      symbol: "GAME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a25d4e27204a8754a24af380f01c0de6e2a3ed3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TSLA",
    },
  },
  {
    id: "0xf2f3e2ab2360ab53e9e3cdef1976a5ba0d3047db",
    token0: {
      symbol: "ARTX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x37de1b300b0f3293caee46f19fd167201e33f55f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VAB",
    },
  },
  {
    id: "0xe3a54f377ace6d90bbf14573a0025f1531a9ea07",
    token0: {
      symbol: "pCORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x81e7c04436b6f42e497a08efbea49903fba29e36",
    token0: {
      symbol: "SCAM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdb9cd2f59b930ce823d8b071ba8f2174b59194b5",
    token0: {
      symbol: "PRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b9b815a4310f5d00c7cd6eb1ff84f8bac6c233a",
    token0: {
      symbol: "PRY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d9b1a8d38460719fc3a22edca690ab9639c13f8",
    token0: {
      symbol: "DGMAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa3509a16bbfc5992eb01cc861b615ccd8e937da8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GTC",
    },
  },
  {
    id: "0xad3e3cc56cffa42235b326090176891292dfca20",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YFMS",
    },
  },
  {
    id: "0x9e53fad7cb9343333809a049c322ebc1f72ef544",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Inu",
    },
  },
  {
    id: "0x08538213596fb2c392e9c5d4935ad37645600a57",
    token0: {
      symbol: "OTBC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb261783816f8488d09eb4595811b3c620c419e4",
    token0: {
      symbol: "FAANG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9f703e1819707d55d79a9bbf0bdaaebbec579c13",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UNDB",
    },
  },
  {
    id: "0x78d1866129ee81b8bc0a95bcbb2c633a6b80ebee",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ORAO",
    },
  },
  {
    id: "0xa2fc0a09ed525ed1e1322472d3f71270c167e976",
    token0: {
      symbol: "BASX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d4b2b2a2ca8762410801b51f128b73743439e39",
    token0: {
      symbol: "DOKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdd04b4ad49ccb31dcef04d4050deffb831d7119e",
    token0: {
      symbol: "DOGUS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbc713ab084fde8e6704123f8cf3f2c0cba4b9951",
    token0: {
      symbol: "MOMENTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf411b3da76a265ba1fa180bc4a6a0e27c0feea36",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NMT",
    },
  },
  {
    id: "0x430ba84fadf427ee5e8d4d78538b64c1e7456020",
    token0: {
      symbol: "SAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1965a114cc3341c0d2ba96a6361790b96ba8c20c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MX",
    },
  },
  {
    id: "0xec5a5bc94100ebdf75812eefe56fe0f8c3c5efd4",
    token0: {
      symbol: "MOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6e544c3e420154c2c663f14edad92737d7fbde5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FEY",
    },
  },
  {
    id: "0x2e8b685abe0af1e05949c22227164dc58c133e68",
    token0: {
      symbol: "BDT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd045110c466ccb2e57eb426baae7ce869458f173",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHR",
    },
  },
  {
    id: "0x187094a90a0fc1f0cf51ef408cf88338a456561b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BLES",
    },
  },
  {
    id: "0xf6c0428f56f9ca7ed54bd824a4856e92c3a8e401",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "USD",
    },
  },
  {
    id: "0x8733494587b7b2c63bfb5aedfe58428880b672b2",
    token0: {
      symbol: "NFTS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc491405d542a393d8d202a72f0fb076447e61891",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WHACKD",
    },
  },
  {
    id: "0x6660551884b1ccc968662d72c2e6897a1ca4bfac",
    token0: {
      symbol: "AC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x611abc072ee91c0cc19ffef97ac7e69a1a7a17ec",
    token0: {
      symbol: "MOMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xae70ae3d5197729bd1be63415d40ab251a89ebeb",
    token0: {
      symbol: "ULT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d96369002fc5b9687ee924d458a7e5baa5df34e",
    token0: {
      symbol: "MPH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x67843780c9142eca00374a79f4ffda3fe72d917b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FREE",
    },
  },
  {
    id: "0xfc0dd985f6de9c2322ebd97c3422b0857c4d78c7",
    token0: {
      symbol: "ARMOR",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x246ae970918958c0e9b02876b2708df4d68cbc2f",
    token0: {
      symbol: "DT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x280ab9403372be0371313a9ddd9222b5590dbfef",
    token0: {
      symbol: "JSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5209261cae02e22907c348bb974a75f1ebdd6689",
    token0: {
      symbol: "c0",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d7a7b251a6cac43f1798494d847e6d333f9ffca",
    token0: {
      symbol: "ANB",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xca9c4cc09e901f4d2aa072ed1aa95dcbe3a7a8e5",
    token0: {
      symbol: "AST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xde93684627d4e34d6ef96adf5bcabf10bbd8dd81",
    token0: {
      symbol: "ALICE",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x620d46247290133665063664216ee7e9c53fd13a",
    token0: {
      symbol: "EVNY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb5b51148a602afb716e241273adbce5558540293",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "SPWN",
    },
  },
  {
    id: "0xc9e2edfee4d25acb365819e77051c3037a68f364",
    token0: {
      symbol: "LVGX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9ddd23c1ec9c69bc833008d4d2f86f6aa491bc91",
    token0: {
      symbol: "BUNNY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x33347912e2a382b4604f7f0c879bb73ca388b2b6",
    token0: {
      symbol: "DCTD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5c4cf7329a129ba19e5c15f9dee1332a98e475be",
    token0: {
      symbol: "Ichigo",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf49c43ae0faf37217bdcb00df478cf793edd6687",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KNC",
    },
  },
  {
    id: "0x8f1c582b85259f7bbdb8c093f58268131a4ecd87",
    token0: {
      symbol: "DGCL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x53455f3b566d6968e9282d982dd1e038e78033ac",
    token0: {
      symbol: "DRC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb103f3c9e25e6211b5cec3138b22a28be1d8fa9a",
    token0: {
      symbol: "UGT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1812ef69e1753f908229df40d304a5fbdcd52dd3",
    token0: {
      symbol: "FORTH",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x276e62c70e0b540262491199bc1206087f523af6",
    token0: {
      symbol: "DRC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdadf443c086f9d3c556ebc57c398a852f6a02898",
    token0: {
      symbol: "DOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x856e90282961c0e7f6693fd2f62b35d5df9783cf",
    token0: {
      symbol: "DEOR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcc888f701a6f7a9100dd71064aff002f7ef898ae",
    token0: {
      symbol: "SAFEHEDGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd78e04a200048a438d9d03c9a3d7e5154de643b1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "STACK",
    },
  },
  {
    id: "0xeacd8a344c16b5724819c7a1c253da07f2ca50a4",
    token0: {
      symbol: "CE",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x0e8cc25eac180d68ff214bb9d4b2a043af764a28",
    token0: {
      symbol: "VEE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9f11faf42a16d986f7bfd6338f41db880da6df39",
    token0: {
      symbol: "KIF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfcc3a312a65ffca5d54e61a7d0e6d95e9875f1b1",
    token0: {
      symbol: "SOAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe705decee2d6f6bc322726dbfd9e03aff08e4e8b",
    token0: {
      symbol: "KKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b19b1c4d21ef1242e15f65077659d68bec12ef8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AES",
    },
  },
  {
    id: "0x164ed0df02b3747315b50b806b79962ad9517578",
    token0: {
      symbol: "YELD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7fcb6239f44861feed21651281a143c04ead2bd8",
    token0: {
      symbol: "$DIE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1921b852f38bc68430780242b2628d0ca14cef83",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NCDT",
    },
  },
  {
    id: "0xc1e5ef3ffc470e4004db0a312672c4d98ae9ccc6",
    token0: {
      symbol: "EM3",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdd5d1a256b25e1087fc3b098b443e96cfa73237d",
    token0: {
      symbol: "GEAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0095e51f0c0c39b636e24ac014ce1bfd0a8bbb2d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "7ADD",
    },
  },
  {
    id: "0xe5c26fccbdb2f9f6fd05cedb6049c229a00d2425",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PUGL",
    },
  },
  {
    id: "0x3e78f2e7dade07ea685f8612f00477fd97162f1e",
    token0: {
      symbol: "BASv2",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x5df9a7336413c37d487d7b7fa5351c34df41ab7c",
    token0: {
      symbol: "MOST",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x8f6bcb61836f43cfdb7de46e2244d363d90527ef",
    token0: {
      symbol: "FMTA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa16a3cbc92d77b720a851d33a91890c4fbfb0299",
    token0: {
      symbol: "MKR",
    },
    token1: {
      symbol: "USD",
    },
  },
  {
    id: "0x75e2b1e62168e06844d8de66a7a3c201d72cb67a",
    token0: {
      symbol: "GDEFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2d17ba675e25fb5dd4fee48ce7fd55a8a37611d5",
    token0: {
      symbol: "ZAM",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x6a928d733606943559556f7eb22057c1964ce56a",
    token0: {
      symbol: "UBXT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x865e7f86e589b172e3305cf13361ca6c5d9b15d8",
    token0: {
      symbol: "FHT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbe06f49563f9b893254ba3706231f30dd9c63749",
    token0: {
      symbol: "VANA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc83dfc5b6085b32adabd512526e392b2b6daa0ad",
    token0: {
      symbol: "RUSH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x35249f360a96237596edb6f6757fbd19c85ba8ba",
    token0: {
      symbol: "LON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x82cb2d43db6916b8a4821aabf18352456fc64362",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ADAPAD",
    },
  },
  {
    id: "0xfeecba581f7b69245eb059c19fdba56779a4c341",
    token0: {
      symbol: "SNAP!",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb454552a72d1b969ba45b000f558a5302d79543e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TESINU",
    },
  },
  {
    id: "0x92cc4300b9fd36242900bca782b2e9e000bd5099",
    token0: {
      symbol: "ROUTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2c618ff14c3273236ee441cb24aa6998f266a872",
    token0: {
      symbol: "BCDT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x06441d79d21ff7ab135e7a4052025834a43a6fe3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CRWNY",
    },
  },
  {
    id: "0xdd2d284e5d16b8d4e0917526b35e0d39f355c3d7",
    token0: {
      symbol: "TCAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x47f9a5979508deb69153bcc846120f3022bf17d9",
    token0: {
      symbol: "ADD",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x9d03e5dfd44ac41a33a04151257390bedf6858ad",
    token0: {
      symbol: "IMS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc9b7c3ba45ee5c3c2c8629b157c0e814c36d9b46",
    token0: {
      symbol: "AVOCADO🥑",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbcea1c03caae2184a4411a1da9d10c42b17c9419",
    token0: {
      symbol: "LED",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x24d9f6a1575a1eb774e6d7f4281a4b7af5111b75",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ITS",
    },
  },
  {
    id: "0x3eb9833bbea994287a2227e3feba0d3dc5d99f05",
    token0: {
      symbol: "SPORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x960d228bb345fe116ba4cba4761aab24a5fa7213",
    token0: {
      symbol: "CHART",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x31284b0c33b7155f32da2b36678451936bb27088",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HRD",
    },
  },
  {
    id: "0x1be574041828303f0bfb5d06a2414f3bd6da1b2a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HUSKY",
    },
  },
  {
    id: "0x0f3ce875cd56870ec7915e0fa247a202685888c5",
    token0: {
      symbol: "AXI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6624c6babd13a2ceb4c43aabf8f543bc7c74212",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEAR",
    },
  },
  {
    id: "0xcf3f7d858444f78ed16a339fed8c3fd9819ec235",
    token0: {
      symbol: "DMTR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x53048eec4ec09f8514a4c409a2e48cb2b7a3cf84",
    token0: {
      symbol: "YAE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8dd99b88e76d7196d87ec097d1138c1084d60a07",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ePING",
    },
  },
  {
    id: "0x3a52408f5ac412f8cabc353b3fba9ac5729b5ff8",
    token0: {
      symbol: "CFLO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xab9bef8242c2b97772ae239a5d71c60496a06334",
    token0: {
      symbol: "SNTVT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4cda71fce5e03e9eb56dfc1a5445e2bd59bdd250",
    token0: {
      symbol: "eCash",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9346c20186d1794101b8517177a1b15c49c9ff9b",
    token0: {
      symbol: "yyDAI+yUSDC+yUSDT+yTUSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1a1fe6f955b6567a75dddec526320a4a1a214fa9",
    token0: {
      symbol: "ARCONA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x68a5ff743041e533034071b2a0f34d771b13352a",
    token0: {
      symbol: "BURP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xebd7cf5d9fe2a9858fdb1f0d8662f336a42ea217",
    token0: {
      symbol: "HAL9000",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x000dd0b1528a396c6ea2e09796a7b4a534e9e37b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ISP",
    },
  },
  {
    id: "0xf66aca2375130e3082e68b5c7623e9cbfdd1fdc8",
    token0: {
      symbol: "Balls",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0054c61a19e307ddd3ff81746487d7526f8c4a76",
    token0: {
      symbol: "iFUND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2367025716cf1109321e4cb96f47c0e3f9beb05",
    token0: {
      symbol: "TRDG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b8fb733f1a427e68533db48b7210d1548ee1dcd",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "CHSB",
    },
  },
  {
    id: "0x7a99822968410431edd1ee75dab78866e31caf39",
    token0: {
      symbol: "XI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb216f9f864134ad2f32e2bef1673378b580603e9",
    token0: {
      symbol: "STPAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5488ed7f9a99684d0e9eccd3847860c734017575",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DoTx",
    },
  },
  {
    id: "0xd234e8493d6690d6a7820d3f6e4f1f13579efe3a",
    token0: {
      symbol: "CHOW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xecc558b8db3f95d043844442f51187ceb534d17a",
    token0: {
      symbol: "VLX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb76bcf6b873cbd749854a90d477e6fe1fcbe86a6",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "UDO",
    },
  },
  {
    id: "0x3e8468f66d30fc99f745481d4b383f89861702c6",
    token0: {
      symbol: "GNO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe72abe04b524959e7551d6781b0edff9ed941d27",
    token0: {
      symbol: "ONEZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a785850bf6455e00359fbae0da83e9a3a3ad44a",
    token0: {
      symbol: "LIT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf1d8258e9ca9437f24b5e46c017a45ed972896ba",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NBU",
    },
  },
  {
    id: "0x3f759c3f4cdba32e69ddf607e0cdcc2547061b97",
    token0: {
      symbol: "GFARM2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7638d7167dc92bb486d17a352ab9fcd608228a4f",
    token0: {
      symbol: "DBOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb2d0cad27830d78e95313ef6b3a5383406ae77da",
    token0: {
      symbol: "xDEF2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0cecc726d097c756c62272f1180ebfff29cb57f9",
    token0: {
      symbol: "Kitty Dinger",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfe9845edfea4b8efed936b9c1294e7fb0d65bc55",
    token0: {
      symbol: "EH2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa16b52b83a9fbcfa3f899fe7786f6a57676e5ddd",
    token0: {
      symbol: "miniSAITAMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe4fabdb6b1658aa39146d8017c0266f8fb0f1f1e",
    token0: {
      symbol: "DENA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x25a878e0469a85e114217fccde82b5ed1e9ec54c",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "IDO",
    },
  },
  {
    id: "0xc0a6bb3d31bb63033176edba7c48542d6b4e406d",
    token0: {
      symbol: "RNDR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x98d266c51fc3c0a0b5a285c481d40b689d18e6f1",
    token0: {
      symbol: "HUSL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x64c9cfa988bbe7b2df671af345bcf8fa904cebb8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VAL",
    },
  },
  {
    id: "0x5e7829f6b7f09da29473d69785cc16bf6b221bb3",
    token0: {
      symbol: "$Marvin",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3d6bbd63ad5946e1566477077bcd0ff058114e80",
    token0: {
      symbol: "TRUST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc75253291c312e9edd3bbeb5cc228eb50f2e2950",
    token0: {
      symbol: "bALPHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x23201344493fae9e9daf3279e930bdb0d4e5d5ec",
    token0: {
      symbol: "UM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x718dd8b743ea19d71bdb4cb48bb984b73a65ce06",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DONUT",
    },
  },
  {
    id: "0x51c1d5cdf10dda49219054920c22c8d4a23eed89",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BEPRO",
    },
  },
  {
    id: "0x23b45e2ba3a794904d340504a9cc102ba2a5bc53",
    token0: {
      symbol: "GFX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x54965801946d768b395864019903aef8b5b63bb3",
    token0: {
      symbol: "EYE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xffe8df2f623bfd954d785809185beb291330c70d",
    token0: {
      symbol: "UPI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6c0ced70ec08e2d1168750a99402375956668656",
    token0: {
      symbol: "SNFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0bc4428491010dfeaa97e48c70bf4940fa783b40",
    token0: {
      symbol: "KANGAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x20228100b9c0bb28978087124e3afc36a99fa5cf",
    token0: {
      symbol: "SHIT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbc365f6c554a8f412acb75aa71265ba9278977fb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SKRG",
    },
  },
  {
    id: "0xfc221e168dc56cda3deea3108760df13766280b6",
    token0: {
      symbol: "SPHRI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xce3c72d2e99e7fb9f6af1863c54ba7bf2e3ddc2a",
    token0: {
      symbol: "RISE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5ecdc0d5d89fa727612d271bc040043120381757",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHLD",
    },
  },
  {
    id: "0x297e9f676afb92b77e2048bd6c8cb3253823d984",
    token0: {
      symbol: "FOG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbaeca7c35346a8d31811ef971f38603012a12c1e",
    token0: {
      symbol: "wOXEN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xf9c8100c95145baed19794745d30cb63cd98bca9",
    token0: {
      symbol: "CULTUR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c4d55a2632b4fe47a82cc3053006d6b5629adc8",
    token0: {
      symbol: "METADOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8e6d7b8027fd72e0d052c261e9e98ec42b3c333a",
    token0: {
      symbol: "LIQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0fc81d94dafa1f8db788ad634750caab0213eb6d",
    token0: {
      symbol: "DXY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9de74e8fad391203e18dfecfeed2d4d2e26ffef0",
    token0: {
      symbol: "VB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4aedd28e59cdb3043e269f1d51cbdddf23be56bb",
    token0: {
      symbol: "GODL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x63d50dfb6b64ee7bec77d118131c93784a959a68",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KUNU",
    },
  },
  {
    id: "0x6aeebc2f5c979fd5c4361c2d288e55ac6b7e39bb",
    token0: {
      symbol: "PAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x598e740cda7c525080d3fcb9fa7c4e1bd0044b34",
    token0: {
      symbol: "sETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96f081118b47655ea07b09ae3279feaadcd755d1",
    token0: {
      symbol: "GFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0e0a03e226db977ca37f883912cbe39ccd2c43f2",
    token0: {
      symbol: "POLI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc992a50169f6075d52013118355c633bf92ae853",
    token0: {
      symbol: "BACON",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x2cbfa9117c543a17efe0bb897f7e32f0d3f04130",
    token0: {
      symbol: "BIM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xad0af64d3aa85d00bdac5b8f7af6f835c038ed1d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NFTL",
    },
  },
  {
    id: "0x694f8f9e0ec188f528d6354fdd0e47dca79b6f2c",
    token0: {
      symbol: "XST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9a4d5580497abde06df106b5cd2d2ecbed7b09c9",
    token0: {
      symbol: "TANGO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf7239a3be607ad88a06eaee37ae1b92c1b440548",
    token0: {
      symbol: "SYYF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e8e036ddfd310b0838d3cc881a9fa827778845d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RNBW",
    },
  },
  {
    id: "0xedf7a6fb0d750dd807375530096ebf2e756eaee0",
    token0: {
      symbol: "USDFL",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x4d5ebb22982ffeccb7b3e42a624555cb313285f0",
    token0: {
      symbol: "HGET",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x367e2d443988e4b222fbfdafdb35eeb7dda9fbb7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEUS",
    },
  },
  {
    id: "0xbf7045f6ea651abb04e96cba61adabe6d7bf0ee8",
    token0: {
      symbol: "CVR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfd52dd9d4d6837a355eb5518acb2a55769a13f92",
    token0: {
      symbol: "2CRZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaa6bf7dd7eae500fd9243aa0b7d586e56ebb537b",
    token0: {
      symbol: "ZOM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfb9043d1e7ac75bd314992fb555aafe31f6af7aa",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MOONYIELD",
    },
  },
  {
    id: "0x5c460c0054fd472a821a5a601378f0d2bf02a9b4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "R34P",
    },
  },
  {
    id: "0x6f6e2080b10acd8e52c914fb5ac190ec00b3d805",
    token0: {
      symbol: "BHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc19263e6a6f678ef1ce87f8a55444beef5ddd5db",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FTX",
    },
  },
  {
    id: "0xec6a6b7db761a5c9910ba8fcab98116d384b1b85",
    token0: {
      symbol: "TRU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xda82255b1c648b7ba33446bef6fdd17fbed291b4",
    token0: {
      symbol: "LMT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x124aa7d564348a4e5dbcd107da38bee3e0c27d1a",
    token0: {
      symbol: "TKX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd07d843cd1d769cdf918be8a3c2c0b708889f7fc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "OPCT",
    },
  },
  {
    id: "0x517df5a818164e68adc986809286e0fedadd8597",
    token0: {
      symbol: "PUP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x14f23d9217ee7d895357ae2b1843961481b58e86",
    token0: {
      symbol: "FLOKIGF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec1a04d8e18fcae024c9028e5e03cba265eb6be1",
    token0: {
      symbol: "ENB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x81a10a45143d7a6b7e1a0e63761b4fba311bb661",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "IBG",
    },
  },
  {
    id: "0xee9b50b74a132912cf55e7699ef3aa7ae2b00e0c",
    token0: {
      symbol: "RVP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x60c5bf43140d6341bebfe13293567fafbe01d65b",
    token0: {
      symbol: "DHV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf94556124786e08171d278a75cf1b46ee9592227",
    token0: {
      symbol: "DAO1",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x645b2fec49bc950cbcffb37abbfe80fe1e545b5a",
    token0: {
      symbol: "INSTAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b31fcd3118ccd891f8cd5152fec883a423e58d5",
    token0: {
      symbol: "PoSH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9ad55f43277b1f85a604b01dc6060732c4121624",
    token0: {
      symbol: "SEEDS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc14182d9c0422541a765ae67863d60d1a3220c5a",
    token0: {
      symbol: "TRBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x503c2e33418ec5b7c8c1b2c38c3eac7735c0aad8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRI",
    },
  },
  {
    id: "0x59d4a73b2edcde7d2e0edeaae118622e1ee109fc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "JULIEN",
    },
  },
  {
    id: "0x072b8f05c1389437fa25479dab4326593213e44c",
    token0: {
      symbol: "DJBZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b87fde6af5396165fdadf7f532784622a824abf",
    token0: {
      symbol: "OCTO",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xde2e46992bd4f86471b52f21dac2d7c9f6deac26",
    token0: {
      symbol: "ZAP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe94272661fd46362e5dd247221e0fc018a298d09",
    token0: {
      symbol: "STND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc576db94017c441214f9a9909cc742f52881d271",
    token0: {
      symbol: "1337",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf421c3f2e695c2d4c0765379ccace8ade4a480d9",
    token0: {
      symbol: "BAND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x00d76633a1071e9aed6158ae1a5e1c4c5dc75e54",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "STN",
    },
  },
  {
    id: "0x59c1349bc6f28a427e78ddb6130ec669c2f39b48",
    token0: {
      symbol: "BANK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4469d6168330d0c64083d2f3191e46a2f2941ce1",
    token0: {
      symbol: "Bebop-Inu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbe9ba93515e87c7bd3a0cebb9f61aaabe7a77dd3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PYLON",
    },
  },
  {
    id: "0xf0936e53d924d7f442a04c038082a46c77ecc8d8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RCN",
    },
  },
  {
    id: "0xdacf0df40d3aee33f297505ef7166044ee6fa35a",
    token0: {
      symbol: "SOLVE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2059024d050cdafe4e4850596ff1490cfc40c7bd",
    token0: {
      symbol: "SWAG",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xc7e3eca6b26714ce1616ed1c7cb02bf6a6cc18c2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VICEx",
    },
  },
  {
    id: "0xb784ced6994c928170b417bbd052a096c6fb17e2",
    token0: {
      symbol: "NMR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xca9d4cbbd22ca8d598f2cd4556e53a4484772daf",
    token0: {
      symbol: "LOCK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec49c9f6a0e5d74d7c784e13bda598e913bae5f0",
    token0: {
      symbol: "INUBIS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdfb8824b094f56b9216a015ff77bdb056923aaf6",
    token0: {
      symbol: "REI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xfcb910d871d7e94f5a566b7b32fb2b19583c09d7",
    token0: {
      symbol: "LCX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x414b0de19d69c18657bcef0f30c72500598b1b88",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "L3P",
    },
  },
  {
    id: "0xdfe56501901e58c175e4ff381b4cf6b39d3bea22",
    token0: {
      symbol: "DSCVR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30296ea311779740ec158ff8c9e3a8c0217f8113",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BFLY",
    },
  },
  {
    id: "0xfecc3b6fab9e07e1f2e6c712d17f86ff2b5ee5ac",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "IBG",
    },
  },
  {
    id: "0x917c164e924b5cf4f36f7c6713e1e3330928d1ce",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YMEN",
    },
  },
  {
    id: "0xced90b981d15be3ec81d89038f4b55f193d224bb",
    token0: {
      symbol: "BID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5c4da16aee3e3261689e0dca9ec31bab0ac01345",
    token0: {
      symbol: "SHOKKY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbdee9c999b7f1a07bf62c2006a5cfb3dd40b1776",
    token0: {
      symbol: "DEFX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb328eb3175b5440dff5b158205a9906a97c37c51",
    token0: {
      symbol: "PERX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdc5798d32d879df46ad430e2b43fd0341d0678ef",
    token0: {
      symbol: "PRXY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa568b6f1173d6c6affd12655ac0eb22f766bbdb0",
    token0: {
      symbol: "YGY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xddf9b7a31b32ebaf5c064c80900046c9e5b7c65f",
    token0: {
      symbol: "CREAM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x26d05832d25f9354386f87a27103f48d78b81795",
    token0: {
      symbol: "SMTY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe618785149a1ee7d3042e304e2f899f7a4616b7d",
    token0: {
      symbol: "WOZX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x2295ebe4985c92093da59656bf3d759a4b2dfddc",
    token0: {
      symbol: "AceD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed643618dd5194f243a8f23c7bd786a37a6dcf8b",
    token0: {
      symbol: "YFBETA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b4f24e30f9e96789e68500f7ade6698add1e5af",
    token0: {
      symbol: "TeaFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8c3b2e86aaceb1b7ad8cb96e63881c28f5cef29a",
    token0: {
      symbol: "SFSHLD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5ed7eb576adea05766f950a495393c44af815aeb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HVN",
    },
  },
  {
    id: "0xa2ffe0168b2772c5c399be346ef6601d83869af2",
    token0: {
      symbol: "DANK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe052a67abe9f3914ec126f85af42051dab8f814c",
    token0: {
      symbol: "NIROS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x755c1a8f71f4210cd7b60b9439451efcbeba33d1",
    token0: {
      symbol: "LPT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x44fa3d570f1838dcf079ac7d19b8f2d23e2b889f",
    token0: {
      symbol: "DENA",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x2d88dd9e282c72d93a2230c5cc324bb4f717010c",
    token0: {
      symbol: "WINRY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xedb536b4f53d1a4ca9a8f5563ed3cdaf7ec69309",
    token0: {
      symbol: "Saja",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe7607a563105f7dba8beb87ad7f5b3a9ec793958",
    token0: {
      symbol: "INFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x185e32f3db8226a8363c31ca0453385f3f8dc126",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CMERGE",
    },
  },
  {
    id: "0x88fcdd9cd5ee7e53ba452c45f7f704041df0b042",
    token0: {
      symbol: "MIX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa219aad740f88470c59a3ddbaf6ded12e7c3fb76",
    token0: {
      symbol: "BigSB",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xb43542e6b7c209f7da4b579792f67a1844546ce8",
    token0: {
      symbol: "TIDAL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xe7f70c26ac86cc6c512c9d2d84496ecdb8d2b744",
    token0: {
      symbol: "MIX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x16f56a101236d6b4476826627a4f6730f450249d",
    token0: {
      symbol: "NUII LP",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xe0f566fa12a5646b277b85834f9989cea95b0923",
    token0: {
      symbol: "POLY",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x681ff81fa615274b297b0b6c6136d4c967f16c2e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AWARS",
    },
  },
  {
    id: "0xd10c1366d2824ca112261ddba911f57509fb6bec",
    token0: {
      symbol: "WFCT",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x30e851c5d4ecc35451a04b3af91bef5c49b10c12",
    token0: {
      symbol: "TOTM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeef0c752b92737f47e91355c5656203a2de31bdd",
    token0: {
      symbol: "SKRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x507d84fe072fe62a5f2e1f917be8cc58bdc53ef8",
    token0: {
      symbol: "OPEN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xcf7a4c424df675a23362965714f338b21dcf8d5d",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "LYM",
    },
  },
  {
    id: "0xbf2b11394d69bba1f75b0f83ce446b6b1fdb87b9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHIROX",
    },
  },
  {
    id: "0x768d5c16a34e11e8383ec294e989a8d704545b61",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LAYERX",
    },
  },
  {
    id: "0x0d2a2efa1460782344c204a64807bed53e5bc1ae",
    token0: {
      symbol: "SERGS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf431bbfff6334e19ebf7ed76dde0a17b76271b9b",
    token0: {
      symbol: "APES",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d2694b1233a3d829418c15bc8b7f6a88c023df0",
    token0: {
      symbol: "UNL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed997633ce2a80d55bde945461b2a4ccc388ef26",
    token0: {
      symbol: "SHIBSHABU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb154256024041e3011c8024874e698b69a2081b3",
    token0: {
      symbol: "NCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec74e1707402fff0fa84451db4fda551755a5668",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "eNaira",
    },
  },
  {
    id: "0x97524f602706cdb64f9dfa71909ace06e98200b6",
    token0: {
      symbol: "BADGER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d03b651b7fdd85d7c87d23aaadb54ed178f6fca",
    token0: {
      symbol: "BSE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8f2b237943359d3e30ca5e0cbefbe78e4710e30b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Gil",
    },
  },
  {
    id: "0x876692166cac59506eac1db7f01b120f5da98a50",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "xKAWA",
    },
  },
  {
    id: "0x14c10b4bdccd9d3f8940fb79e0ee00121391d6de",
    token0: {
      symbol: "WXMR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e49ff025d9b1304c4b041bc6ce6f781ab39c580",
    token0: {
      symbol: "SHELTER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x59c2b713c3c3a49f554207946076aa4bea9359ba",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AsunaInu",
    },
  },
  {
    id: "0x304872a6d0faf474a7d8e43d874880a5199a4e34",
    token0: {
      symbol: "SPRAY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x63aedd08c61589a0f909eb5bb96b4d05245db631",
    token0: {
      symbol: "wBIND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7a646ee13eb104853c651e1d90d143acc9e72cdb",
    token0: {
      symbol: "ARES",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe6e1f4f9b0303ca3878a110061c0ec9b84fddd03",
    token0: {
      symbol: "Shiryo-Inu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbb041d4de2a97559044eb79a2acd1f83be5e9794",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "lildogeFloki",
    },
  },
  {
    id: "0xac317d14738a454ff20b191ba3504aa97173045b",
    token0: {
      symbol: "SXP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x68db76a1172d18fd83da8eb446c35e7f274959f7",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "LKT",
    },
  },
  {
    id: "0xaf7c6dead245b93de19bb1bb828b0acce94aefb3",
    token0: {
      symbol: "BurnX20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed86244cd91f4072c7c5b7f8ec3a2e97ea31b693",
    token0: {
      symbol: "BUND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd0fbb87e47da9987d345dbdf3a34d4266cf5ebe9",
    token0: {
      symbol: "DSLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x013b748c535568d835ba3ea1953e4e7f946952d0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Mmax",
    },
  },
  {
    id: "0xd3c7c77098786e8dab975a37a79caa6a91c1bcf6",
    token0: {
      symbol: "CON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed1ba5252f94e029f41506adeaf90c459c0aca69",
    token0: {
      symbol: "PUN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8582de88bb2fc8bcd5dd3b38f44d8440e51685ed",
    token0: {
      symbol: "PFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b4de908a8329c95c63414375612fe52ffb8792e",
    token0: {
      symbol: "GLM",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xd2624c0b07f186fffe856e0e0423f0ff84a5cad8",
    token0: {
      symbol: "CHLI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x33be7ed806479061a7e62a33d3c9b500fc9b47bf",
    token0: {
      symbol: "REL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x77d5e268b26874f849425ea13755743b271a3050",
    token0: {
      symbol: "DLTA",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xf3fd3aceb26581ccefb502825239f072933a25b3",
    token0: {
      symbol: "DTOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xea02e0f8f470de1107cb336f827c4192117574bb",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "REEF",
    },
  },
  {
    id: "0x5e4085b816fdc167410650d805f69d7013c896d8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VNTW",
    },
  },
  {
    id: "0x7aacf9e1e3f8e01d991628485e30a6641fcd8d81",
    token0: {
      symbol: "JGN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1740aa56eb4e333bacd317dacd0cf28043d8e8a1",
    token0: {
      symbol: "NKN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x09271c86c5fe517d8a1bdce47a2c6c2c2e60095f",
    token0: {
      symbol: "CROOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0bf46ba06dc1d33c3bd80ff42497ebff13a88900",
    token0: {
      symbol: "rDPX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb1f4327046a7d5ac1a502a44516f765e9e8845df",
    token0: {
      symbol: "STKR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf6048f2a7e1c44012265fab271c8eb89bb74bd4e",
    token0: {
      symbol: "FORTH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x45687b3aaabb7997d3d06561cb7f8677641fd7bc",
    token0: {
      symbol: "TAILS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9382b7a1ca8ee720f3b6a6ba176bbe5dc7fa5294",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "JOJO",
    },
  },
  {
    id: "0x89751f5258baf36b8a588169c041e0ac06f53175",
    token0: {
      symbol: "TONE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x02ecc701259acd166f67e912e75ce169c7bc8fdf",
    token0: {
      symbol: "WFAIR",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x5f094191ddad05c5b6ddfa992a4f49d8d679290d",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "PRE",
    },
  },
  {
    id: "0x3b86c3ade27861eac7fd4a2c1f30dd6ada1d29e0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XFI",
    },
  },
  {
    id: "0xd29c1415ed09faafa5525dc6ccfedb2a37c8f3a6",
    token0: {
      symbol: "VIXEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x938167169ec40ec331478cb516d958dfc0fa9098",
    token0: {
      symbol: "LINK",
    },
    token1: {
      symbol: "ACR",
    },
  },
  {
    id: "0xa7cc68376682ff7e861ac4e616486407f944e672",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AIDI",
    },
  },
  {
    id: "0x8f2a116a77612b535eefae8f920d3e82ca67e45e",
    token0: {
      symbol: "BND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa26040ae76f518d3f36b34bbc0284081d4ded73d",
    token0: {
      symbol: "NFTD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb1562400feaa849c363127bb847693cca05c1080",
    token0: {
      symbol: "FOUR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9479b62fd1cb36f8fed1eebb1bb373d238d08216",
    token0: {
      symbol: "PPBLZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x617f89f8e87151e07d975bed788d31466aed5b97",
    token0: {
      symbol: "STACK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaf5a67e524158f813784e8d39b91ec30c3a13de1",
    token0: {
      symbol: "FARM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc4dd155de5337507ed70f494ec4ff595c24ceebc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BishuFi",
    },
  },
  {
    id: "0x72c6f69b7e59dda1e0912286839b861fca9d96e7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PDT",
    },
  },
  {
    id: "0x74b745ec3a087a3b9a82eb9594e747b4fa0db11a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CURRY",
    },
  },
  {
    id: "0xd9aee7c860a3e66e5deda3938481c658bc9ea386",
    token0: {
      symbol: "PARTY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfe2743bcc93033d92c91f7998c44b112325c8ce2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "C4G3",
    },
  },
  {
    id: "0x13db360c3ca681377387d253d8b1a3a552f906ee",
    token0: {
      symbol: "SPLINK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd65fa5e293e1d20de7ef7e9b5f7b238f005cfa84",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRTH",
    },
  },
  {
    id: "0xef4d5a55647cfa09d3e0436abaca0fa1eb39ee23",
    token0: {
      symbol: "MEWN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x128ab6c2d883eed81a900510d0f885933a9352df",
    token0: {
      symbol: "YFOX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x049b4493010fc0ee3deed6a7fcae4e5fba86bb45",
    token0: {
      symbol: "MAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x74f987e377cc62c7b90650b2b6094498c9151e7d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ARWING",
    },
  },
  {
    id: "0xaca52998a3cba700cd9d1f344d9fdfba3eb10ac9",
    token0: {
      symbol: "YUKON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5aeec06be0ac269ce284dbb3186454ea56484712",
    token0: {
      symbol: "BER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05f04f112a286c4c551897fb19ed2300272656c8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "POLK",
    },
  },
  {
    id: "0x672c973155c46fc264c077a41218ddc397bb7532",
    token0: {
      symbol: "KXUSD",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0xe0b1433e0174b47e8879ee387f1069a0dbf94137",
    token0: {
      symbol: "SWM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf80d79c62ffd82bc2914e4e2e42c5b89e4a50e2d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DFX",
    },
  },
  {
    id: "0x654def3e97c3f4218c3f49ace81687483c361b2b",
    token0: {
      symbol: "AZUKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8f30ba1f75ec27a014591789d117a1bb4703bff8",
    token0: {
      symbol: "SHAKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x623ac7e26c774dbc646e0d4ac12110567cef579f",
    token0: {
      symbol: "BFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5fc071ffcabed4c50865ccb5424a6cf737b2cf60",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TANJIRO",
    },
  },
  {
    id: "0xacbf3c973eeec20c573ec930ce31198afb4ad0d5",
    token0: {
      symbol: "REVV",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xda04793f875ea2b53fc0dce0bcf1580c6ef2542e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LOR",
    },
  },
  {
    id: "0x83054b25b21d1f3a2b96e8e3803dbd4921358d52",
    token0: {
      symbol: "NUX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6e8abba440a58421f5eec9892b19c1a72c55c992",
    token0: {
      symbol: "PPAY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbce060d3d8e6ffc3b874dba775a0111609b87d90",
    token0: {
      symbol: "CHN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x810affe767db3ce35268a7ab278911149bcd911b",
    token0: {
      symbol: "AUTZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x591b1c81594bc14aa0a768c1bc0e2e3056cfb970",
    token0: {
      symbol: "ROGUE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc55da2fa7beea46f0bfd065a696444fdc766f765",
    token0: {
      symbol: "Ryoshimoto",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfd0a40bc83c5fae4203dec7e5929b446b07d1c76",
    token0: {
      symbol: "FRAX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa42ccf4afdc0a7a698351c6cd87d9ea95b522d6d",
    token0: {
      symbol: "DMEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c8341379e95f70c08defb76c4f9c036525edc30",
    token0: {
      symbol: "RFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x022fc445fd3ec66cc48e0975265ec825245cd7a9",
    token0: {
      symbol: "EQMT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x024cfbb7f06edb4124b29b3d0ede65b1f60a5728",
    token0: {
      symbol: "NMS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaac072e474841acbe95870d9993a2f1011dfe3e5",
    token0: {
      symbol: "CORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa1d78b8a537c803fdedb8caaea0cdfa118b546d8",
    token0: {
      symbol: "INK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x63cd4c240722b2fbb60e0d1697be697450625f50",
    token0: {
      symbol: "ABR",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x40a02a22f3d52a69ed429e021a7424d66c85e975",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SPWN",
    },
  },
  {
    id: "0x9b533f1ceaa5ceb7e5b8994ef16499e47a66312d",
    token0: {
      symbol: "OXT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaa617c8726adfde9e7b08746457e6b90ddb21480",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MASK20",
    },
  },
  {
    id: "0xc0fc2e4cbaf48b36948971c4afd487a90272ddfe",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UTK",
    },
  },
  {
    id: "0x81fa7ecd239e5a8642e1ecc7f309a89321bcb879",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SINU",
    },
  },
  {
    id: "0x7be79082248f14999a6cc8048ba6406b349c7d52",
    token0: {
      symbol: "NERDY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96977cde397ee7acf7876d6be0f13bbf2bc6bbf5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FEAST",
    },
  },
  {
    id: "0xc3e8fe715ccc382f7ee71c8534d63e3c10de08f6",
    token0: {
      symbol: "AHouse",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5550a2617a60b89229032e9e803d1a0dde883347",
    token0: {
      symbol: "CyberD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5a034b3037f952191ac15673f05bb15c18be386d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RELOADED",
    },
  },
  {
    id: "0x2ddcab396698062e98d496b22c1fe07ad2250ae8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CSWAP",
    },
  },
  {
    id: "0x9251511132efdae3f62ad2e4bd2fe191cb31f61d",
    token0: {
      symbol: "MEOW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd8901e4b3681955635c9b41b144828629d59d739",
    token0: {
      symbol: "TRL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4b8fc31bbef97440836e7316a7c807aa90644e3b",
    token0: {
      symbol: "SSGT",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa9eacd0387a714eb19c1eeee365b7c445f1d152a",
    token0: {
      symbol: "SHIBASWAP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30f3e60db5f453a5ff38da8db5c639d54670d223",
    token0: {
      symbol: "ROBIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b1675ca3ce3898546570f8ddb6121436b33c48d",
    token0: {
      symbol: "SBRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf2f84c274f715ba1fe7d1d28a4e377fb59a33386",
    token0: {
      symbol: "NAMI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x54db24bcb701d99eb1d68dc09423bb6b23311c45",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KFT",
    },
  },
  {
    id: "0xbcb0d6df596463cab6e97b0cf408db618ecbc596",
    token0: {
      symbol: "APE$",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3a8afc58b70b34a0a5615d3a5ffe623ca1fa92b8",
    token0: {
      symbol: "NU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf8f571d2ace4c5c118933a3f8a8654d51ba455dd",
    token0: {
      symbol: "PNL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x245c9b2ec969a700c7e4ee798060dbaf7ca1fcc4",
    token0: {
      symbol: "N3WS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x01688e1a356c38a8ed7c565bf6c6bfd59543a560",
    token0: {
      symbol: "BFC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb88d770e73d2ea6e55ac971538f08584659cf685",
    token0: {
      symbol: "CNT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x173b8806fa83f60faf53bfe902d6847d3111a294",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "F1Shiba",
    },
  },
  {
    id: "0x09fa49d406f033b452fbd9fb77dc373e78864b5f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BANKAI",
    },
  },
  {
    id: "0xdfe317f907ca9bf6202cddec3def756438a3b3f7",
    token0: {
      symbol: "PHNX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x38b81d939fe237e03eceb655c5a212c082bf09b0",
    token0: {
      symbol: "GSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd51b4c6bef349571aac48793d830da975d25f920",
    token0: {
      symbol: "DIAMND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe2a1d215d03d7e9fa0ed66355c86678561e4940a",
    token0: {
      symbol: "DFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb9b752f7f4a4680eeb327ffe728f46666763a796",
    token0: {
      symbol: "BZRX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x45dae1ab9898b374134cd1033bbc797d323eb380",
    token0: {
      symbol: "L",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x97f1c99d7e680ecc5e015c6d26cfe9308db4c4ff",
    token0: {
      symbol: "GANYMEDE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x91efe50638706a9a1dd3856446547404a58a57e2",
    token0: {
      symbol: "NEKO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x820d74078eb4c94e24ef0bcc8ccf848a238f473e",
    token0: {
      symbol: "DFP2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x67c32c5c035feb198ee203d43c81e2c18effa759",
    token0: {
      symbol: "cBSN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5201883feeb05822ce25c9af8ab41fc78ca73fa9",
    token0: {
      symbol: "ANKR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4bd66f75f73c6d8ac14064537eb32cc420c7afbe",
    token0: {
      symbol: "OJA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x818e9c3b7b141f90f0713ea10ac92c8ec45a2163",
    token0: {
      symbol: "CATS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c20be0f142fb34f10e33338026fb1dd9e308da3",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "RCG",
    },
  },
  {
    id: "0x99585c8570f7d6c1ea535aecc8c29742580bdff8",
    token0: {
      symbol: "BABYCAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb5d948ef184f912d631fede35f9f5af1fe808246",
    token0: {
      symbol: "WBUY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3a417de058cee3640b3fa83f0778e0daaa7bc76e",
    token0: {
      symbol: "KEYFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd10122ef86ae040efee3f53f35d3247230ca670c",
    token0: {
      symbol: "GEO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe571b939062474bfeb593a3f80fee9d2265b3b18",
    token0: {
      symbol: "FLOKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdab052f73f9439b27e818ef187bdd3c49d34487a",
    token0: {
      symbol: "TSX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcfdcd696dde5df39f569807c6934e6ba97cebb8a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VBTC",
    },
  },
  {
    id: "0x54049236fc1db3e274128176efedf7c69b4c6335",
    token0: {
      symbol: "TAP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x51996fc38c8d839abd6c2db9a4c221df1cb487a0",
    token0: {
      symbol: "rHEGIC2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ac1f0c9991e8aa9aef3edd41f9c1f2b848118b9",
    token0: {
      symbol: "YFPRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5ed0dde7441efcd728e31cfd055c4c7efe20a57b",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "GMEE",
    },
  },
  {
    id: "0x7f7b6b6d3c5495cf5664baa7857639e3b964dade",
    token0: {
      symbol: "MOONDAY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9896bd979f9da57857322cc15e154222c4658a5a",
    token0: {
      symbol: "cDAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd7cfbcadaaf6475321cfcf3884f15a93400be658",
    token0: {
      symbol: "OCTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7e97e27c6df50add321a7e4c47a87e73626989c3",
    token0: {
      symbol: "PETS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf4ef707f3f4166cc79af15959014dbe0ecd7efa3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DGTX",
    },
  },
  {
    id: "0x9b3e5c1e8399c36494f02f899a9eb33d3327cb15",
    token0: {
      symbol: "DAC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8ca78f74bea444d9b793be863ab5eacba9a7feb9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$GATSBYINU",
    },
  },
  {
    id: "0xc75650fe4d14017b1e12341a97721d5ec51d5340",
    token0: {
      symbol: "ABI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x88ff79eb2bc5850f27315415da8685282c7610f9",
    token0: {
      symbol: "ESD",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x75efd92ff443c3d3342eaa64dd32be387f5ef328",
    token0: {
      symbol: "CHUBBIES20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3c70f4faea49e50adc8305f2e1aa0ea326a54ffc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "INJ",
    },
  },
  {
    id: "0xb1440c49092b22e423ea9cacf61a803c0cbbf0ca",
    token0: {
      symbol: "FIAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb62a74f8be38cef3b00455b9989637349d4a1bc3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UBX",
    },
  },
  {
    id: "0x4df890855d391ee001178f44d6a19b762d87305a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KILLUA",
    },
  },
  {
    id: "0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
    token0: {
      symbol: "IDEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfa51202d3894f6498a538dcdff32205cbde17010",
    token0: {
      symbol: "UnicV2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xae8b9d75a75a8b7c5cc5deb51fa916ac49147dad",
    token0: {
      symbol: "DEPO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6473c18de05292bcca1b10193c304432ed6e0202",
    token0: {
      symbol: "DTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x21a56f266f6c1d66b9ea28faa5d7349a81033172",
    token0: {
      symbol: "EternalUp",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd3d7b1ceb661306ce3fa323230cfc695ebb8c842",
    token0: {
      symbol: "ACR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3440559f2b7ceefb98f9fd7718adce4f6082e8ae",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "BBIT",
    },
  },
  {
    id: "0xf951290ac7888145c1c643eba31868f899963299",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ARTY",
    },
  },
  {
    id: "0xd417f1fcab7947cb4ee838fb73d35b9541ca8211",
    token0: {
      symbol: "SWFTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x62c4d772492df926e6ea33df9af5ec08a0e7c6cc",
    token0: {
      symbol: "ZCC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c35628544e37e8ec5a6d59b6bcbba28113ea274",
    token0: {
      symbol: "OMS",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x8973be4402bf0a39448f419c2d64bd3591dd2299",
    token0: {
      symbol: "YFII",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbe49646a69cbceaa2edc0727ae667e163c34801c",
    token0: {
      symbol: "KORO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x88d97d199b9ed37c29d846d00d443de980832a22",
    token0: {
      symbol: "UMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x896eebeb02f81445f5a88ff7884af8d937294ee8",
    token0: {
      symbol: "SLICE",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0xe35fab81612aa59713f9ef6f1613f33311d3e37d",
    token0: {
      symbol: "BAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0e6a01fcd1420b719cb570be60b6bf80fbe460c4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ANY",
    },
  },
  {
    id: "0x631540a0f8908559f6c09f5bf1510e467f66715d",
    token0: {
      symbol: "wXEQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa9c511bc021a039d5a39b95511840a7f2bb66c15",
    token0: {
      symbol: "LIME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xad36750ce07ce42978444c359c05cc88d087cbe1",
    token0: {
      symbol: "MWG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2702bd7268793b5e1c7ee1ac2d9cae2ae2ecfe55",
    token0: {
      symbol: "CRU",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xd1f9137b87e5c3262cf90d1845c02b750ec39633",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BLND",
    },
  },
  {
    id: "0xeb4b2b5e0eae7a0eadd0673ef8c3c830f8762f28",
    token0: {
      symbol: "REQ",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x534f2675ff7b4161e46277b5914d33a5cb8dcf32",
    token0: {
      symbol: "CHEESE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x37250d1016aa7ecc0ced121e549e42ac32396676",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DoraemonInu",
    },
  },
  {
    id: "0x8d7c9fa808151d8a0cc6b11e8f15ced337586c54",
    token0: {
      symbol: "VSN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x196ae610e9d0377f734e4ca40458e09f0be800ae",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EGIVE",
    },
  },
  {
    id: "0x6f9e023c0881ec3d8f56630a6c4fd137c025419e",
    token0: {
      symbol: "YLDY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb469899812f74ee43bffe2d2022590111da86425",
    token0: {
      symbol: "XMM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d5a1eaf90218e91f2bb32e42b0b02ff39827d16",
    token0: {
      symbol: "PICA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb06a5f6615f7ce50478a5c57c651bf5ead0578b0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "eQUAD",
    },
  },
  {
    id: "0x78160ba77f39419070ee622262c46ee9ed546c20",
    token0: {
      symbol: "TAIYO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaec21057bb0c910c22f6f6db64ae6743e96718b4",
    token0: {
      symbol: "DWZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d16948ab5f81890a24ee753d8b43544a7b606e5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BTCu",
    },
  },
  {
    id: "0x169905f5abfce7f90e2a57e404c49b5ae2c8805b",
    token0: {
      symbol: "ICNQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3bf94529f40c7cabe0151c0e10c14a8b9a57b297",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "GENI",
    },
  },
  {
    id: "0x50ad418e70cffec790e486dab138aa9ca3b2e286",
    token0: {
      symbol: "L1T",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x776ef089dc0b09053bd35e25f093a8ed2d3b5164",
    token0: {
      symbol: "PotterInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf2a9e1b9b79d708aa2f333e6abac07a1d87451e1",
    token0: {
      symbol: "COLL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2edb60ea153f1323781da119d2b428cb687a9870",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MLUFFY",
    },
  },
  {
    id: "0x309e9f9a50726c469488c3e56ab593c523d12f42",
    token0: {
      symbol: "TESLF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe9fb878cdf1d0bab5da9e6540379418aad919fb7",
    token0: {
      symbol: "RPT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x02588a657d1744cdec1bda2784c1c988b6947187",
    token0: {
      symbol: "PASV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa6be7f7c6c454b364cda446ea39be9e5e4369de8",
    token0: {
      symbol: "ELF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x23ab44bfbfb2d60df173c4b89f7e8366474ab05f",
    token0: {
      symbol: "MM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9369a7c8a50774014e12431a53c44d940c2194c8",
    token0: {
      symbol: "SLASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2632ec29eddca8868355bca24f98a8a8123ad471",
    token0: {
      symbol: "ROGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0b0d6c11d26b58cb25f59bd9b14190c8941e58fc",
    token0: {
      symbol: "OVR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeb48e5ed2e584d3f8bb4f21c1a6bfc3ff9604bb8",
    token0: {
      symbol: "GenIm",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b29799a983d67d83d7bf6ec6146851c2a027a3a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "8PAY",
    },
  },
  {
    id: "0x2b370c11b6b66a1e6b743f24aa67991801ec309e",
    token0: {
      symbol: "AVS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7c6c06d21f46664afd7d12197ce105651d29d1b0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "STARS",
    },
  },
  {
    id: "0x5368dce7483f062ce23d90f45e6442c082b4d764",
    token0: {
      symbol: "UDOG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x38ce0f33e1bb7f040ff580b907dd92644b253d88",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FAST",
    },
  },
  {
    id: "0x475ae29fedb0d645af32ef3ff1f84ec3f34100ed",
    token0: {
      symbol: "BBASE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc6b9c3fa037303d10d50d71ae3cedb0eea7a1c78",
    token0: {
      symbol: "GHX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf2f98cbd5d84640a2c5cfda5c996cd830067bc95",
    token0: {
      symbol: "RAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc28817ddbe2c4f37c2489b6faba724385f07d17a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$BBH",
    },
  },
  {
    id: "0xa44dbd8fdb2a87a15fe9c91033a664ebe4f0ac14",
    token0: {
      symbol: "CTK",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9076a5277ed7d8a89496b7132c0bf4503a9a9f93",
    token0: {
      symbol: "ALD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x536b55c3efd13968ec4ddb5cb6f768158e01d570",
    token0: {
      symbol: "CHAOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b11bb612a11f222b87018b0cd7d534c22759131",
    token0: {
      symbol: "METASHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb1700c93ddc26ce1d59441c24daef1035444d7b7",
    token0: {
      symbol: "BIPX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x202e161107455203f06d5944a09409cb7404fb38",
    token0: {
      symbol: "PROGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b9f8fe8ffc437a9008bb3097066f02b0a1c52ec",
    token0: {
      symbol: "REQ",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x1c87170cdbb3de04dce91bc99c04680d140d1982",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VIBE",
    },
  },
  {
    id: "0xec745519247642fbf14689ac7254068dffba08e3",
    token0: {
      symbol: "ELongD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9f0f0fede68bb21c46b629c183b0720039f9841e",
    token0: {
      symbol: "HELLSING",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3f2eea452d4717dea05dbe55e1bfaf020294dd97",
    token0: {
      symbol: "eXRD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x66e32d1b776a43935ed20e8dc39a27a140d31c8f",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "ERC20-EPK",
    },
  },
  {
    id: "0xda23eb287316c9ee0e4e2b763b7d2dda8a90e827",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PITQD",
    },
  },
  {
    id: "0xd141c76ed0c9e4676a9c14ed1d525864c22ce894",
    token0: {
      symbol: "DHS",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x1aaf380463e5189640f3a712d95eb9ae74f773a5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "miniKishimoto",
    },
  },
  {
    id: "0xf13fd944aba186edb1cfd2446f60836b5405dd52",
    token0: {
      symbol: "LADZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x57e69e4385896fa4511f958e88d8775fd6a8c6c0",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "HTRE",
    },
  },
  {
    id: "0xdd2c4c70d7d6d1737035079d19cbcb548f775123",
    token0: {
      symbol: "GENI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc1a3e7777f10589c555247ac99b66eb28a395d31",
    token0: {
      symbol: "UPS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7ef85de60effb1ae1f2b50c88592804732bd89dc",
    token0: {
      symbol: "KP4R",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xce449c2b578250d7d90d09304c7be33fee5e5f8e",
    token0: {
      symbol: "TINKU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x195fa8a92f10471c0537623bb3c67b4ce8bdc7a0",
    token0: {
      symbol: "PIS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30c86753b88d430436b8a6ef23b4c6faa930ad7d",
    token0: {
      symbol: "FROGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b065c9bad9005a8024dc1df532b36720ea06072",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "OJE",
    },
  },
  {
    id: "0x59f96b8571e3b11f859a09eaf5a790a138fc64d0",
    token0: {
      symbol: "STA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x379c98c016e26ec910fd7bb7445f68adcb40ec05",
    token0: {
      symbol: "KEY",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x6ffca04b61a69a10c8076e72c68036cf0222311f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WJXN",
    },
  },
  {
    id: "0x95a5543111343ab2a66a06bc663a1170acf050b9",
    token0: {
      symbol: "AUSCM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x18fa2f9d2f06e9094a1aaff7d0751e3c0f157544",
    token0: {
      symbol: "Gorilla Inu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1368de433db88782bbdf547ac321e338607369c4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AURAX",
    },
  },
  {
    id: "0x2b53861bb489501537cddf9bfec8f1caa2851a24",
    token0: {
      symbol: "DMT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8635c7d895711abf4c8a0eb5e2cc54b30b90bd8a",
    token0: {
      symbol: "X22",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc3eb22050b8cd04a94cbb61518814b13fa05f156",
    token0: {
      symbol: "ACE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7874912471b8b8a758d8166fc332c10798fe13ec",
    token0: {
      symbol: "KITSU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x18f238a96392a8fabb87065b5129dd00192e6cb1",
    token0: {
      symbol: "SHARE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0b1a9f721bfd6c1366c5e20cfb79ec02957cd30a",
    token0: {
      symbol: "APPA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x58cbf1f33a730754a1432b2f446abc4fe0b83fd2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SCORT",
    },
  },
  {
    id: "0x182885fa47b63c02d06a8d65db3bf3871be9f998",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YVS",
    },
  },
  {
    id: "0x227ddb6c7381867e4478b74a2b53a8578f935234",
    token0: {
      symbol: "Meteor",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x83d8d0384cf652977797e4454fcbbf91397f1967",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MBCORE",
    },
  },
  {
    id: "0x237cf2e759a3ede62821e6bfe737e6a00658acb8",
    token0: {
      symbol: "AGA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe20d1742b1e01a2beb257c3826eb4ce96e1752e7",
    token0: {
      symbol: "WTF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x77c1d3cd554b500ee9f2fee41509360f7503257f",
    token0: {
      symbol: "$BREAST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8fd88bec1a213fe3bc28cad549f9fa0f9387764f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WSDOGE",
    },
  },
  {
    id: "0x4c704725e29679635d3b8cb2fb20950ad38da86b",
    token0: {
      symbol: "EQZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb079d6be3faf5771e354586dbc47d0a3d37c34fb",
    token0: {
      symbol: "DFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4042a04c54ef133ac2a3c93db69d43c6c02a330b",
    token0: {
      symbol: "FET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbf8e5b541f785e1edce8ba8e918a70c54b8b0a12",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ADAM",
    },
  },
  {
    id: "0xf0e2b0bcdc8df1339343575ce89b208988bcb3d0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FIFTY",
    },
  },
  {
    id: "0x2976f079e3112f0c61d0020eec7e7f8305558c34",
    token0: {
      symbol: "YFM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8448a5a1ba751f1b3cbb2cdac3a0b7e4900780e1",
    token0: {
      symbol: "EVED",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2615b89ad032ccda6d67e1d511f0e4c9e3a5dc13",
    token0: {
      symbol: "NEXO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2f9a78e7da6c8b511feb8faa57ae59617bdb916c",
    token0: {
      symbol: "KABOSU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf38424fb7da8603e331aca2acb6cef8aed469fe2",
    token0: {
      symbol: "eViral 🧬",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x15861b072abad08b24460add30b09e1481290f94",
    token0: {
      symbol: "MUST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x216a09bdf716b20b7c16bb164d9e3cc69b3c79fb",
    token0: {
      symbol: "ZENO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd074b3b19b9cbd9bc77d8d1fde11ce96de5528a2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "iDOGE",
    },
  },
  {
    id: "0xeaceac83cecca6beebc736edd6360d1633175b01",
    token0: {
      symbol: "COIL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdb28312a8d26d59978d9b86ca185707b1a26725b",
    token0: {
      symbol: "STBZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b7ad60a92e725597e4a28444d498d1999cf66b6",
    token0: {
      symbol: "DYT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xca17db44f45864a1de0e2108f0d67b8e9d2fd167",
    token0: {
      symbol: "EVILELON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3b1fc07e3010d5c45f20a703b355ee46fae2bc3f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PHIBA",
    },
  },
  {
    id: "0x38679cd2f9790cf484a34073cf9688d9ff026d87",
    token0: {
      symbol: "EPRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa498f5d710e3b3c10496994b2d4eb11e900f9df5",
    token0: {
      symbol: "StarSb",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x709043b155f73589eea2c4aefd8ff3108f11134e",
    token0: {
      symbol: "BTAP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b56a3c97512b54b31064118afc895b877f69cf8",
    token0: {
      symbol: "FAMILY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x112ac5515bc2efe275e82d5c3a4dec1ba387b858",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ziot",
    },
  },
  {
    id: "0xed3eac30d9f068a6afa787330e8fe4373a828cdf",
    token0: {
      symbol: "$RYZEINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc490b125411c79bf93feb8014fff032fd2c867ca",
    token0: {
      symbol: "FOX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf00819f1abec513a565880a4708596e8dc838027",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "kMPL",
    },
  },
  {
    id: "0xcde5404b086f6f86925962b89fff9aae4b04eed8",
    token0: {
      symbol: "BANANA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfd3f91feff074f22550a71e21aea0942bd2dbcf4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TEN",
    },
  },
  {
    id: "0x3530a9461788891b7f5b94148a6e82ffa6fd236a",
    token0: {
      symbol: "PERI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc65679db1262acb60ee9dcab60a2d376db56d8cd",
    token0: {
      symbol: "FLURRY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1964b39279625989ef14697a76b730718b9ee6ed",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MUSK",
    },
  },
  {
    id: "0xf2d9b3ffadd33b70e5878b3e32c74c02b19a8cb4",
    token0: {
      symbol: "FRG3",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x277f51fb92f56426face7c0e6c487f0e9563b10d",
    token0: {
      symbol: "$EDrain",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x544cd63c9a3363dab66733bf8073cb981db58cba",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NYAN",
    },
  },
  {
    id: "0xd91911131afe19526d45fc403c514be55c404c39",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AGL",
    },
  },
  {
    id: "0x276b14c47472f6d4e30619ec1f7d23ad3cd08cab",
    token0: {
      symbol: "YFE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xebe9cfd978f0db637d920e4ed4ae10282d9aba17",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$ANRX",
    },
  },
  {
    id: "0x7894dae584dfa3a5d60a13bafc25ee0b43124e7e",
    token0: {
      symbol: "PBR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29b44a48d94f44655ca5da5b575c0e85315422ed",
    token0: {
      symbol: "PARA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30ca87ff548c250aea5eefc93f85e9170e52b627",
    token0: {
      symbol: "STEP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b68e9b9984e2f68ffc8fe450b896147dc27206f",
    token0: {
      symbol: "OLY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2f1fd188f127cde9d0feef58c3eb457cc0bcb9c",
    token0: {
      symbol: "SHIBAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8db968f17077d4ac8a36f8bd6d0e1c3bd90254b0",
    token0: {
      symbol: "WMUSK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa28a380706ddf43417cba815b726235b22c9b1bb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "R3G",
    },
  },
  {
    id: "0x8b11a4f1b102c4d055b55e95726e378b4e8fc7d2",
    token0: {
      symbol: "GENGAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ca584b699e31e3e8f12432fa0de41f1aca6da41",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NEXE",
    },
  },
  {
    id: "0xa3f47dcfc09d9aadb7ac6ecab257cf7283bfee26",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UPStkn",
    },
  },
  {
    id: "0xa1858c7238dc38b3b8e9d84cf44d394b0c7e22f5",
    token0: {
      symbol: "MXX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc1c191fee3e903ba5fcf3a467145978254a67079",
    token0: {
      symbol: "CPD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x448b0f9f45526e64ae8516c56479697a91ee255a",
    token0: {
      symbol: "CUR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbb8a43724de8bc071d7278baccb19363545fe758",
    token0: {
      symbol: "STBU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x147312b3cb31f81b805d30b4dcf3a13f63814432",
    token0: {
      symbol: "AUTZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbaa3a4eb65d46bfc94d21dd30228ad7a94d708dd",
    token0: {
      symbol: "EXED",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x8a16e7b40624066ede8c8762ed7c76e3b5a5f1cc",
    token0: {
      symbol: "BOAINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa6f4eae7fdaa20e632c45d4cd39e4f3961892322",
    token0: {
      symbol: "HBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d1fc20e91c89831d7361596fe9cac88a189edea",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "INFI",
    },
  },
  {
    id: "0x1e986d4814a958b5b4ddef106023fd9ee0e89794",
    token0: {
      symbol: "EVI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x026c271f5bc9b7fa0ab571c36275adbe33cbdd53",
    token0: {
      symbol: "MEGACOSM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2872b0b0c85b63078f220b60f941c6f61f990fc",
    token0: {
      symbol: "DanteInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe144a096cf4770278ff2250a9ca8e8f38a2a72c6",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "MOON",
    },
  },
  {
    id: "0x0145a6424d5933248b71880f0a544d408ff49a18",
    token0: {
      symbol: "uApe",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x619aaa52a10f196e521f823aed4cdea30d45d366",
    token0: {
      symbol: "XVIX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5522c339d35a6c3e5f328c8746bdf88f599dab83",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "REQ",
    },
  },
  {
    id: "0x3201ed3ca1057bd6d595fe87dc1fbcb9cdfaad30",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FI",
    },
  },
  {
    id: "0xa6cf904beb194cbe1b7a5300f6e3f2eebdd73b43",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CBIX7",
    },
  },
  {
    id: "0x9b0d4323c32b5d9a87409b435adf7e23cc5f835c",
    token0: {
      symbol: "PULSE",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xe316f3b6716ab2b80a1cd7061b1c317a752f203e",
    token0: {
      symbol: "PWQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf3c28163ec575658277d0994a335062d1531196e",
    token0: {
      symbol: "EULTRA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ddbd30ef67cda8004e3c742d55d51faf6837adf",
    token0: {
      symbol: "KOMBAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9866103b576bc362e934b8e96115e72413b6a8c2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ONIGIRI",
    },
  },
  {
    id: "0xb835752feb00c278484c464b697e03b03c53e11b",
    token0: {
      symbol: "TINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x22756f5e39a464795faf6eb82ee2f28016571e92",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "JANGLE",
    },
  },
  {
    id: "0xb7a48277ac6517f3f19e3b4c380b1eb5c7b01a07",
    token0: {
      symbol: "pcatv2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb836969acaaa7ed9505d650aaea16d07488fe6c0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VERA",
    },
  },
  {
    id: "0x3127bbbc05f343192855ea40b54a34831ce72e04",
    token0: {
      symbol: "WAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeec16330c4a3a05bc8a1c3cc9435dd28a53bf539",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SAKATA",
    },
  },
  {
    id: "0xebee0cf6ab1bf5b9e9be1a9348632c79089d3b6a",
    token0: {
      symbol: "NEWINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf58d2bacbc68c587730ea0ce5131f6ae7c622a5d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ORCL5",
    },
  },
  {
    id: "0xcbde90a6abfb904d61a3c5f46a35b736c3a3d68f",
    token0: {
      symbol: "KWIK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x514906fc121c7878424a5c928cad1852cc545892",
    token0: {
      symbol: "FARM",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x68bb61c2021eb3ea84f2b561c5d04d6f93fa1279",
    token0: {
      symbol: "SHIBRAMEN🍜",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5741a1ceff6148c8aaca0f0456c03c88817e05f5",
    token0: {
      symbol: "XIOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e7ac3dfe933d3027a5968be23c624f1309b1b02",
    token0: {
      symbol: "KRL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x100889cc9f9321ef0931d0986da279835201afde",
    token0: {
      symbol: "StartamaGo",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfd9e7aa7d4bf4c0338c9a194373bab02cc2e92b6",
    token0: {
      symbol: "BKING",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3dede786ddd44b8eb5879a774cd29d6af01cc052",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ETA",
    },
  },
  {
    id: "0x8f73a0ece66f27758e2e51928003618cb35ddc09",
    token0: {
      symbol: "SMC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ddcda72833e8cbc4f94c24bc7a1baf14853e76e",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "GLM",
    },
  },
  {
    id: "0xaa736ca527252cf9f65abed23c21f5ac46af27e3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$GOLD",
    },
  },
  {
    id: "0xd037b5856c563907df737931ae7c484da02f6c13",
    token0: {
      symbol: "MDT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6202c72733adf560b6f052d302f606ba58ef8d78",
    token0: {
      symbol: "TAIYAKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x63e7aa05b78144013cfa4b23c9b61599d0a29023",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "2KEY",
    },
  },
  {
    id: "0x75a9d7ef9eeb3370e20df491c4153ac2b89a6afe",
    token0: {
      symbol: "Bone",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9415f7660dbfa992900d8dcbe5bd08f245a671da",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YMI",
    },
  },
  {
    id: "0x8d553f9ca5fe1b749b1e2a5d9999dc2ab59e6ef7",
    token0: {
      symbol: "DSA",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x6be8b276d12d5600c2d74dc1993f9a8600c849cd",
    token0: {
      symbol: "KAWA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ae4ba350148c5e45a36a1a59c061d7d8964f8b8",
    token0: {
      symbol: "JACY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbbad8e98fc67fec396e40dab5ed83730a3d99bc8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VINSMOKESANJI",
    },
  },
  {
    id: "0x063271fdac84b94e9283557f748594dc84092bf3",
    token0: {
      symbol: "PROPHET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf8f2ac05e7056fd83668bf395ba78a363a3d00b5",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "ORO",
    },
  },
  {
    id: "0xa14c40b83885e1f8d516e0e43a7361f31eca6854",
    token0: {
      symbol: "BAEPAY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05b0c1d8839ef3a989b33b6b63d3aa96cb7ec142",
    token0: {
      symbol: "FUN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7745f204ae91ab1e5155906f4bf77836a658aef9",
    token0: {
      symbol: "NIP-2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7fa6b5d81b27ed9d89f29c2425d1224b2307ac6d",
    token0: {
      symbol: "Neko",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x28722780eff9a69d13cfd957e2019bc3684813d9",
    token0: {
      symbol: "MOCHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbee12364ecc0450a663da84ecba39fbf9e74600a",
    token0: {
      symbol: "1MIL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x92c2fc5f306405eab0ff0958f6d85d7f8892cf4d",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "HOPR",
    },
  },
  {
    id: "0x3460f270dcef87dd4ce81d3275f1ceda7a5f5752",
    token0: {
      symbol: "EVAPE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8a46861c5fd74de09705f6932a7888c7f545cc76",
    token0: {
      symbol: "TROY",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x0fbf9ea7283bebf0d64552f151c311631f484355",
    token0: {
      symbol: "DEFLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ef67ee504a60de5f558b5302bdba9f5da11dfad",
    token0: {
      symbol: "LIBERTAS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xac350eefccdae050614070e5040e17759cebb3e9",
    token0: {
      symbol: "PRIA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1f07f8e712659087914b96db4d6f6e4fee32285e",
    token0: {
      symbol: "BITE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe43aad43e9b53ff4b0f1f6d214371214c1021514",
    token0: {
      symbol: "PRVS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x79dd6c06a0bcf6458a7b4ab83527cfbfadd36f24",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AFTRBRN",
    },
  },
  {
    id: "0xec262c480b8917db5c5c0502281a73dae7b009a7",
    token0: {
      symbol: "JOYS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x079e43b3b26e1f86df43ba7ec584755456aa6311",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ADX-LOYALTY",
    },
  },
  {
    id: "0x39ab42bc2d3141aa11f892a9499985809726d878",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UNCK",
    },
  },
  {
    id: "0xd7708e11d465e8f7b3fbfb4526dfecf078c85685",
    token0: {
      symbol: "BERRIES",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2f7a4083d3a86685227166a06a0bb1f3db878ed0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BORED",
    },
  },
  {
    id: "0x04914cb01eec94e320e3a88b3c7a7e9b1609d13c",
    token0: {
      symbol: "DUDES20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd89f1ef41a40db980883c4518387e682cdf83c7d",
    token0: {
      symbol: "AGRS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x925e52c14102fde8f2ea6e0d43d14cb31d81e919",
    token0: {
      symbol: "PRO",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xfc79d781e17faf8247b31a65ba046ed0345f5882",
    token0: {
      symbol: "CKC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7772612549f27aa49c83fa59ab726f4799e4ecdc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BUCC",
    },
  },
  {
    id: "0xf898301c2807e99abaa39396a696d1202122d23e",
    token0: {
      symbol: "UCO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x950182897e43436b37f04d1fe36fc5628d1ee3fb",
    token0: {
      symbol: "wXTZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c70724d2f72847174c2f7bbea25b36d883defe8",
    token0: {
      symbol: "PEANUTS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x88712c242ef56587bdca0de7fe1afe88a56d6ca3",
    token0: {
      symbol: "BORUTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c7c61ad6dc3a3687d22f224af2ac1c60dcc103f",
    token0: {
      symbol: "BONK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3f7093ee8993f677fdf11ed9d964dca8bd985401",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SIM",
    },
  },
  {
    id: "0x32f7c5376c637194d40ab951867b548bde646d8c",
    token0: {
      symbol: "PPB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1bfc259b4d3828d3745dfeec51afe57cc91d2552",
    token0: {
      symbol: "BSB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x436b56d0c933a4660594fc774a3e904c2c21b22a",
    token0: {
      symbol: "DES",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xada9ae35410dd1b36ee2361e72a679d046084980",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YFIAG",
    },
  },
  {
    id: "0x4ee49ebf6f8383bdde893be09b2233ddfe254578",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UNI C",
    },
  },
  {
    id: "0x5f49da032defe35489ddb205f3dc66d8a76318b3",
    token0: {
      symbol: "rETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb34633e07f70e51a670f97eeae70ad6f732113a0",
    token0: {
      symbol: "BRN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf2cc151d22a172877dbd5c95bcd44935e496b24d",
    token0: {
      symbol: "YI12",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5c56bf84dcbb1d3f9646528a68520b7e21791ddd",
    token0: {
      symbol: "MYST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a12aa79c5f95ed9fd29faf4273ec7b3f8ca7258",
    token0: {
      symbol: "RFCTR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x927db9797dc13106d6b744de226765e0c0741086",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WELD",
    },
  },
  {
    id: "0x1446214d735726b96689de9154b98c26a831be60",
    token0: {
      symbol: "BSHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c0ba53eee48be3e2a92967bed6227e5b262d7ad",
    token0: {
      symbol: "GOAT 🐐",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed9ca2a60d683c9ba04fd2bc043aad76a0afc59f",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "REL",
    },
  },
  {
    id: "0x51d062408d26fc06dde1e8c0a3789e52febe0730",
    token0: {
      symbol: "SUIKO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x01f2a966b3e015cc217a6c0a0c2c9c1b67221d0b",
    token0: {
      symbol: "UNFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xae53a48680a667187054d8c229d44c435c438f9e",
    token0: {
      symbol: "GSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc4b5b6f221d230be2f45baf5429b64803e0ab13d",
    token0: {
      symbol: "MTGY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x481c830edc1710e06e65c32bd7c05add5516985b",
    token0: {
      symbol: "USDFL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x6b1455e27902ca89ee3abb0673a8aa9ce1609952",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PPDEX",
    },
  },
  {
    id: "0x377db945e1a5d33e86be19be261f01ff12f399d5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CoralSea",
    },
  },
  {
    id: "0xfaad180045fca84b515fd40d3e265dfab6f161a3",
    token0: {
      symbol: "ECHO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9a2fd1e2ac0ce181e409858068b00a9e5e665da8",
    token0: {
      symbol: "PUSSC 💹",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb1432d4a6b6089d4cd198cad4cd7d5b44a0b7111",
    token0: {
      symbol: "eMax",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4a17b7230c4b9b47e6c7b023103d6a11bd498022",
    token0: {
      symbol: "MTHD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3f61171b1297f6e512c750c172ba86026ab0e820",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "FLEX",
    },
  },
  {
    id: "0x0f027d40c80d8f70f77d3884776531f80b21d20e",
    token0: {
      symbol: "RST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8b8d82553f28ca2b74342a1bc6484310feece49e",
    token0: {
      symbol: "DREAM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7acf849214ee36fd4b0a9ebcb2c976667105d887",
    token0: {
      symbol: "EDC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc1fcb41109aaef2f143675729b4249b88a4421db",
    token0: {
      symbol: "STN5",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa7d998f5d5c531b83bcc6d1b56cb4b012f615fec",
    token0: {
      symbol: "FMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x441f9e2c89a343cefb390a8954b3b562f8f91eca",
    token0: {
      symbol: "ALPA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x66e33d2605c5fb25ebb7cd7528e7997b0afa55e8",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "DSD",
    },
  },
  {
    id: "0xf2a97f38be0f3cee882c014c9ba3b985d7fc3c2d",
    token0: {
      symbol: "BERSERK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2964ffaee6fa8f711ad83974b43e1e017de067b8",
    token0: {
      symbol: "APOOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x19185109b695735286d867bcf038df503c78c88d",
    token0: {
      symbol: "SHD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3859b3d01b4eac043a5070d3911a7ccd873ec6ac",
    token0: {
      symbol: "LIEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3a406885fca911e42009f71c0a7868ec4688aca9",
    token0: {
      symbol: "TetoInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x13ad1c5b1740bdc6b5663d58802a6e26c81649ea",
    token0: {
      symbol: "IDTT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f85f6b36355a4b49c49635be49f95ac3f57c14c",
    token0: {
      symbol: "LOTTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe6f51e892046cb5b437e0033d990b527ea4367c8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "B20",
    },
  },
  {
    id: "0x7fe8ed390f6ee71a4685d74de041f9c43c37f9b3",
    token0: {
      symbol: "TROLLS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f7be8cdd826f20d03a70f8a47b63b2dbd4092fd",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "NFTY",
    },
  },
  {
    id: "0x5a66e2b44509817c0271a75e0f48e1693f867ee2",
    token0: {
      symbol: "bDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbaa48ef52fe0cf3a2682c1247b18d4274a988132",
    token0: {
      symbol: "HORD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe94d0f0d7a031c1427aeb567076eb23ccccd47a6",
    token0: {
      symbol: "eminemINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb3cbb2f476edfe8cae2e49d49e3bd0b39095b2f4",
    token0: {
      symbol: "ZIPO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96192cbb073c1656dcbb2bcec083b0baf36271d1",
    token0: {
      symbol: "WINR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xea0ea05d4c3ee43a9eb47f4f2cb7863483a9f140",
    token0: {
      symbol: "SHINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb99c23a9a444ebeb0ce4a67f27dab8d4826b1108",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "KEYFI",
    },
  },
  {
    id: "0x4abf6add3b41231b10b2f56e6bb23486068dd5ed",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GEMS",
    },
  },
  {
    id: "0x3ef9995a4ccce7402d02d92216b394c0c3cc1b1b",
    token0: {
      symbol: "DAOvc",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc3b8d5f4b6ac5177e6058891be50a910ad958716",
    token0: {
      symbol: "PIKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdd361ed4098443a52a542c7a474b676a0d227be6",
    token0: {
      symbol: "GSonic",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa95992d9b1d5a58a53757171d3608f22eba0321f",
    token0: {
      symbol: "FLOAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x321f158dedb9683beb1675cb2bc969fce03a2192",
    token0: {
      symbol: "ONE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaca404571ae8bc9067fcd52cc989869b28a7540c",
    token0: {
      symbol: "SUNI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4a488d7a4f2240e4b1798c750e5bf8106e2acf92",
    token0: {
      symbol: "TENSHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x34ceacde4c709b896567aec84b3b9d7f999f1cc2",
    token0: {
      symbol: "AFTRBCK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8df3d24839d35b56d9330deab9ed1908ac52a6c1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SLAB",
    },
  },
  {
    id: "0x80ddbeeb05788980caa0b1b433b40d4443f4439e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LYM",
    },
  },
  {
    id: "0x4644bcdb84d665b3769d809e8ac11de2510372c0",
    token0: {
      symbol: "EXRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x40f0e70a7d565985b967bcdb0ba5801994fc2e80",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZERO",
    },
  },
  {
    id: "0x79992e6c7536b79a180f2dee91de46c6132cd462",
    token0: {
      symbol: "Hi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xce9f32b72565759d3eea29facb3d511ce45b43c7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EROTICA",
    },
  },
  {
    id: "0x72af4d1d175672d1f99506e68e6e7cff484be4de",
    token0: {
      symbol: "ASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf1ee7348e45ef0e838c705c2eece6d414d4aab3f",
    token0: {
      symbol: "DDX",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x2dc9136ace4077d5060131c0eccd1635897c75dd",
    token0: {
      symbol: "YFTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7c7ca8edb7a4ae0ce458fb0c93c13039c9a10510",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Doge-1",
    },
  },
  {
    id: "0x39f3556d1365f74546954886bd17ecf2572ee095",
    token0: {
      symbol: "EDI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d6432aefeae2c0ff1393120541863822a4e6fa7",
    token0: {
      symbol: "YFL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d8e8eaf2b1a92bc3ccc506911fd2596919bf4de",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "liltk",
    },
  },
  {
    id: "0xacfd23ea7cb0a9142d0f26fb5c7bfd23802a3564",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KIKI",
    },
  },
  {
    id: "0x21496d0396c9382057c12836141ff8161f58f68c",
    token0: {
      symbol: "HACKD 🚓",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7c731ec3e36f4d82387203ff958f9ba4046dd77d",
    token0: {
      symbol: "rUMB1",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x84c3b884a9ff37655dc918d70d99ea8ee9b3f0d3",
    token0: {
      symbol: "DCORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc4da39e646e7f5d233b89ca0f7b75344e7ddb2cc",
    token0: {
      symbol: "KIMCHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5347f9b60de5669197e0b537a7df02092171e71a",
    token0: {
      symbol: "SPARTA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6dd4a1adc8604ccda62c7ba92410d81647b2d61",
    token0: {
      symbol: "QFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xff62b7767104ff2785ca4847b9445fd808516515",
    token0: {
      symbol: "IDRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3f8ab5cbed52973b59533425f476a9f0a0b2b9f8",
    token0: {
      symbol: "CUCKED",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8223fbf5b8ba6ca616256359c78a57895781c66d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MEL",
    },
  },
  {
    id: "0xbb85491ac1d6725b0ff2cbeeade783a3a63428d2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ROCKETSHIB",
    },
  },
  {
    id: "0xca5bdfa726548220e4e4e457d708a76d62dbb474",
    token0: {
      symbol: "eSafe",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeaf612651fc0e6f591ec39597ef65d78db442def",
    token0: {
      symbol: "XIPOOH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x99517aa4cad4e667b50cad020df6daf5199a6805",
    token0: {
      symbol: "GRPL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4a3fbad5ce3f23a7594f462b0970e46b0ef9cf13",
    token0: {
      symbol: "AWC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8c56ca4f7eb12a7c217bbe36cc427a9dcb66f590",
    token0: {
      symbol: "MAGIC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe16096e1f5b78743220185ef177d70b1bf57154f",
    token0: {
      symbol: "NAKA",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x7fdeb46b3a0916630f36e886d675602b1007fcbb",
    token0: {
      symbol: "VOW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e43ef03de9dab937b4408c0d39f14dc09a3d505",
    token0: {
      symbol: "WIZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b4b26c9017c2ee84ad1809611c7d9064711f84b",
    token0: {
      symbol: "YYF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2f00eb73599e404f44a25dd98ffbc4261612c4c",
    token0: {
      symbol: "UNCLE",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x092eda662a3e87b3616412e3feedaaf2906d1ef9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GFSHIB",
    },
  },
  {
    id: "0x3cda0f4d951013fa0bb1210cc73c2ade3a1ce3f5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DFI",
    },
  },
  {
    id: "0x0f55b1d0db4fdc147eacd26f3c7d386d17538787",
    token0: {
      symbol: "FIRE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x89cd52c4d6d24197bc3279a6cf358a695ee4a552",
    token0: {
      symbol: "vRISE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x25b9105cd8972f4e5df4b8ebcd06eb470794891f",
    token0: {
      symbol: "TONCOIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd5b1523b48d41c46e5d1091a9b068159353ff3d7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "IND",
    },
  },
  {
    id: "0xde5c78902ef9249acf596e56ac7425e51cc3d80e",
    token0: {
      symbol: "NIGGA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaf3cbb910b2356a56e2e550430f35b5764e5adb8",
    token0: {
      symbol: "POGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x98195a436c46ee53803eda921dc3932073ed7f4d",
    token0: {
      symbol: "BTSG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4106e5d21441902f04c796f64112ff3cbf6ca62c",
    token0: {
      symbol: "SHIBTACO🌮",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3613227a8fe10ca51323b9d0bb31f6959c050412",
    token0: {
      symbol: "HAPPY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f6538bc478b46fb4ee8e99a52d1bd04502d7490",
    token0: {
      symbol: "INU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2824629e6ecaad805d0fe18daf30f0a849e9455",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "OWO",
    },
  },
  {
    id: "0x5fec4b8a905ac4755f425bacab4202694c0af00f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BBMUSK",
    },
  },
  {
    id: "0xa6d26fa27f989df8da84c6f19af8378b70baede9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BEAST",
    },
  },
  {
    id: "0xd325774441083c87608745ced2cc16b4462b9d79",
    token0: {
      symbol: "TUP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9707274d1f5780997053903f507ab78cc3f08c30",
    token0: {
      symbol: "NAUINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4896938404e0af7b694076329013bf5973c01a93",
    token0: {
      symbol: "SAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3006c0d2a6e54d3590a44384c6f066c9cf9a4cea",
    token0: {
      symbol: "MATH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6c8565d070f29bdf50ac886b4074a191c930c113",
    token0: {
      symbol: "W3RLD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ad8fb8c6ac8fa7446fd00bd53cefa8e03fc01d3",
    token0: {
      symbol: "DEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x306d9c4c195cb49d48599a773e18ab79469811e3",
    token0: {
      symbol: "RARE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8217a6602baf82dcee696386355a22db6df77578",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$CASECLOSED",
    },
  },
  {
    id: "0xd1ff2ab0d9b9478ea9283f39215215f4260fa0b6",
    token0: {
      symbol: "BLL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3d2c5514344834b35df1587657caf22df74367ae",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PAPER",
    },
  },
  {
    id: "0x8bd78ad73ee85dfc1395a0ce3e90ef061ae6017c",
    token0: {
      symbol: "ISLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8cc02fc0548d970d88db5b34b02a39f3d6c184eb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "aETHb",
    },
  },
  {
    id: "0xf2d7415a7f3ff377db416ca544751ff1973650fd",
    token0: {
      symbol: "AUF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b7c2f100dd432cfa3268e0e4674e9e1954e48ce",
    token0: {
      symbol: "NASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb039f945deca4b4ec44c28083f91f37e6d2a27a6",
    token0: {
      symbol: "PBX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x06e95b9fb71e3b406c617d71224d650d3f688ca2",
    token0: {
      symbol: "MYTH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc275ca6e45da9ce8f479b28eea64ef9f5d1ea7f4",
    token0: {
      symbol: "Misty",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c787c50ca72760d167c37206ac483a0da5b35ee",
    token0: {
      symbol: "IDV",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x778439499111b12a2d91cd09ecf7bc68dcef614c",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "RZRV",
    },
  },
  {
    id: "0x163e3cd213327d9a121655341b56226d06be3636",
    token0: {
      symbol: "HATAKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c413f3dfc886c30d7eeb83ab9e92dfe7f880888",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PMD",
    },
  },
  {
    id: "0xfa93db946a60c8b81a450719be4a1b287263539e",
    token0: {
      symbol: "SHR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4b4e8855dc4992ac6710a094b4b33acdbeb19f5c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHIBAONI🍙",
    },
  },
  {
    id: "0xed7d4ba9e9d1a4171463d7014cdfefb7004ae0d1",
    token0: {
      symbol: "ETHEREAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xccf1c3f73b04bfc1874f08197b69fe5edaaba73d",
    token0: {
      symbol: "BTPP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x04d42f3bc1566341bf6253a4c0ded60d2faf47b1",
    token0: {
      symbol: "mwBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x678b2fa6af093e62f521cc0980572d1e6fc97a7e",
    token0: {
      symbol: "DXS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8ca2beb6321998f1852c65682d3ca9e3b805f728",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TANKZ",
    },
  },
  {
    id: "0x2b4909ac8aed7a7b582591a01ac067939cd96908",
    token0: {
      symbol: "BUSY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3425e777f7b0c3759b45f9ddae949c6230718606",
    token0: {
      symbol: "MOZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x234e2cb788a0c5532827a7790d5e80c9c888d545",
    token0: {
      symbol: "FLASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x10065a63254dd429935f4b6ca96e81812bcac2b8",
    token0: {
      symbol: "PAKK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x91c50625cda40a3e81dc3a7f09f9aab887989b82",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SINU",
    },
  },
  {
    id: "0x27047611eae58a3961cd05d23684b078d689c5b7",
    token0: {
      symbol: "LILFLOKICEO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1adac7de5c5d9894a4f6a80868ade96f8a2ed0eb",
    token0: {
      symbol: "BT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x228c3132d9f59967fbdf1e025cfd80675e8ffba4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GOLD 🟡",
    },
  },
  {
    id: "0x386c98653e536fba33d1263adbcaf8e5d6f635fb",
    token0: {
      symbol: "yRise",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeb8195bd9ac4ffd3be2056db1a8e8c66b2708028",
    token0: {
      symbol: "BNF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x07c824a850a08f6e00a39dd6fb4d9573f99879d0",
    token0: {
      symbol: "GINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x496ab075f43991dd794baf982dc3d9817a49b33a",
    token0: {
      symbol: "RARE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x705d1e8c0d7f9101082854f33bdd6402282b1bf0",
    token0: {
      symbol: "MASON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x849a9a65b810e6363b5223e080f5c282a0437f9a",
    token0: {
      symbol: "BMAX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0928592f80d63d474257a7b797120e301ba2d987",
    token0: {
      symbol: "TRB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa2074f8857972ce0049ec8348ac2e75e7a32b821",
    token0: {
      symbol: "CMERGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x54f7cd0b73d2a55815f2e35a7e2cd223ea7d3ca1",
    token0: {
      symbol: "TEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9a6ef76504b719bc11b29ef1b9f0e82f64582f76",
    token0: {
      symbol: "PEKC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x843abcb2b94e96db754cdeba03509e84e41cdf5c",
    token0: {
      symbol: "STAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8cbc50d2f99f2048dc886ff29c43e92dadd001a1",
    token0: {
      symbol: "NLIFE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x32e63f190dc91fa4fc8501f2c4f48852a169b66b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SYIELD",
    },
  },
  {
    id: "0x34997ab4cb7ff8c0552b74bb712bfbfbb24af7fe",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KISHU INU",
    },
  },
  {
    id: "0x2e0721e6c951710725997928dcaaa05daafa031b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ENCORE",
    },
  },
  {
    id: "0xcbfa63418755fee3bd08e70a586e6cb4625d05a9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BCP",
    },
  },
  {
    id: "0x5277c3195801fd4acc92ebfd939024f08cfb697a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PUSSC 💹",
    },
  },
  {
    id: "0x7c285cd47ec87c1e5d18a80f2496760d59ac319f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "QQQF",
    },
  },
  {
    id: "0x2cb6067bfffe2344d5062090bdd93045398e0f8e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GRN",
    },
  },
  {
    id: "0xf32bb4cd7a206e3acd9dd1dca730d70499de8f21",
    token0: {
      symbol: "CATE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x99853ea879b8f621efde2a78cb45965646719df2",
    token0: {
      symbol: "ASUKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3ced277332b1c070285578fe0920d4ae27ca530c",
    token0: {
      symbol: "IMPACT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xee802b312a957e00dd7bbc08eec8bb93d40e981d",
    token0: {
      symbol: "MILK2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3cd1c0b98be4451ca51265bbaeb76cf7b31e1c02",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WBCB",
    },
  },
  {
    id: "0x48fe6cf122ceda86c793ca37b43a764e3a062647",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XTF.YYYWR1",
    },
  },
  {
    id: "0x19851b8639dba25929e036e0d9885b8c86317060",
    token0: {
      symbol: "DINT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1985b987c21d896080ebdbb69dafe82b0f9eb207",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FIDA",
    },
  },
  {
    id: "0x0f2156fbe6142c72c150d30c2522a5988110b013",
    token0: {
      symbol: "KEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb2f591f42619bfe67e6a5231cbb24960a0e80a09",
    token0: {
      symbol: "ITADORI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf22645743415d8c06d78c8a4f0ea214041b4544f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GCAC",
    },
  },
  {
    id: "0xb7227b962d5ef72f60d1a62fd0e0785e1147fa5f",
    token0: {
      symbol: "PEPELON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb94f0dfd1b54af0fc8dd0997a8ddde59bad47dfe",
    token0: {
      symbol: "PIE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa3bc32ccc6edacc429a577572b51a118c3a4c562",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BTMX",
    },
  },
  {
    id: "0x1a97b84db7554a0fc710c6c5bbf1bdb72b6cb45e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHINY",
    },
  },
  {
    id: "0x855c2e5134bdd91e9d6d8b88916f53479942ae6a",
    token0: {
      symbol: "ECT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x148c6661cb13789fda84988d8af469518b7848bd",
    token0: {
      symbol: "ELON'S ROCKETS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b8bc6cebaa266429f387125d433e46f59cdb499",
    token0: {
      symbol: "CHIZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd19887e8b0401a65d04a6eedf0e80edf08a8e64d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MMI",
    },
  },
  {
    id: "0xf5b92789f6cdf1b7c0d7252696433cbe34b61354",
    token0: {
      symbol: "ISLE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b81f9b009270f2b57ae7d107199ff567d852064",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ANON",
    },
  },
  {
    id: "0xc352e35a7e5364e53073b4670d5f622438774a41",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FIRU",
    },
  },
  {
    id: "0x80eac0b5954d861849824e21dba32c3b3b90ef96",
    token0: {
      symbol: "$CPHX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0f74c81c67531146290bc34bd85516e2f9891d2c",
    token0: {
      symbol: "BITTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29a6732abd54681f27f6f73600d8d0077528513a",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "GROW",
    },
  },
  {
    id: "0x23a6d948d94da7b3ca5d0e80cf0525a25101caa2",
    token0: {
      symbol: "TRUDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x80f52e9d4905d660ce44419cddef2502bc99dc65",
    token0: {
      symbol: "LUCO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96b5ae8ce47554dd2604618d358a408c129272c0",
    token0: {
      symbol: "PDCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7d3ba7c3188cab8a02a68b369dbddc3f405b5bf5",
    token0: {
      symbol: "KGW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a07160ab59a9a868e2957f394bf6bdd28e91192",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Totoro",
    },
  },
  {
    id: "0x2174e6d76fe8fa6602db6af86f5e17840bdb0760",
    token0: {
      symbol: "WCK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb54cd8e0bb687d24fc1b288d2c8d437d17d35f88",
    token0: {
      symbol: "VIKINGSINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd9913f73ae2cd1c4709ed18cff9d8e7a141f7c00",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Lucy",
    },
  },
  {
    id: "0xc006edd309edb27245fe4d536264aa5a3d48bb4f",
    token0: {
      symbol: "TYC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x065098fba71bb5c10c04338f0bab212f393a2a57",
    token0: {
      symbol: "CTR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb41c91bf896b0ef30454ab10271e7c8fe9a74c2f",
    token0: {
      symbol: "TROP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c1e80d790bb7edb6c4efee080d9806f453cb5ea",
    token0: {
      symbol: "$LOOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x324f1ec9cf397c669a48ee9511835a9f593e38c0",
    token0: {
      symbol: "ECL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5e64cd6f84d0ee2ad2a84cadc464184e36274e0c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UNC",
    },
  },
  {
    id: "0xcf14858f05f86c4b33a57e5ace5cc9804d0f8513",
    token0: {
      symbol: "YGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a92ea66b8b416f01192567fd475ec331085462b",
    token0: {
      symbol: "CROP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x79e8314c2065e67c1c35ddd3acfa621fa12b0878",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MAK",
    },
  },
  {
    id: "0x2e571b6495a9e0cb52667a89bc7bbf77110c2802",
    token0: {
      symbol: "SIFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa10ab368c9dd28b3dfd88a2870e180b809533c95",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ErenYeagerInu",
    },
  },
  {
    id: "0x1353b949c7f6eaf228da059fac0ee034cc70ffbc",
    token0: {
      symbol: "CF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x088973076bb0612c895c835e7ff73e18a1bdf969",
    token0: {
      symbol: "HONEY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x24e20c4bab903f07f8baee0a99c2055ed9fc70ca",
    token0: {
      symbol: "OBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb4f0fc85ccf4c81384d25fae72b4610c18c1e7c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WWish",
    },
  },
  {
    id: "0x9d0ddb5b36218c3446f6c6fd532fa414e399ed36",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DXC",
    },
  },
  {
    id: "0xb4d0d9df2738abe81b87b66c80851292492d1404",
    token0: {
      symbol: "TUSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7bd24d43c0d6531a8fd3766e121b469c9175b890",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AstroLion",
    },
  },
  {
    id: "0xa097af648a916ceb96af700d1958c222bfe630ef",
    token0: {
      symbol: "AVAK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b9d2d38a43e29223e4716f49b48547820760a6a",
    token0: {
      symbol: "CENT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9e0f4648d2cc986196580184ed9459aba16262bf",
    token0: {
      symbol: "SOTU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xefbac12d7bce214a44554ba495fb5cd4297f279a",
    token0: {
      symbol: "BEER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x116660e3844c22da4270bbdd0a9b0264c538c6a2",
    token0: {
      symbol: "CLISTING",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x24a9b5bc7e6862abc362b42c43c356e660e7f340",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZST",
    },
  },
  {
    id: "0x43ab679ebb3739d1e22a73f48ef658bb2bb0109c",
    token0: {
      symbol: "Koinu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbe55c87dff2a9f5c95cb5c07572c51fd91fe0732",
    token0: {
      symbol: "ROOM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc95a97a914c9e51c1a8ba67ef20296eaaf167776",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FFF",
    },
  },
  {
    id: "0x2b05228ad224a6a3c8a027ef670490ea4a482137",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MIYUKI",
    },
  },
  {
    id: "0x1107b6081231d7f256269ad014bf92e041cb08df",
    token0: {
      symbol: "YAX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9e251daeb17981477509779612dc2ffa8075aa8e",
    token0: {
      symbol: "DFI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x346b641bc63c49e6906c3cb65fa37a9b9fb6fe82",
    token0: {
      symbol: "MOON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbd39b1f24b8960d3d7cd2c5471d0493496888185",
    token0: {
      symbol: "UNIUSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xabfd00280dbf596cc5dc6601f82387d0298aab3c",
    token0: {
      symbol: "YFIEC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc7c0edf0b5f89eff96af0e31643bd588ad63ea23",
    token0: {
      symbol: "aDAO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x428bc363a7d743425863d6e5699683a69cacedc8",
    token0: {
      symbol: "JINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaa0df198837dc8e7eb67fbe21a14531671cf516e",
    token0: {
      symbol: "CTI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbf55ae8c281aa732d2ab33bdf464ddcb709cb9d1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "eRise",
    },
  },
  {
    id: "0x820d30dfb86edef782a0310f0e8f41ce37b82c40",
    token0: {
      symbol: "uDOO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29a9777da2bacd8c4a28b6fd8247c4ca4f098f12",
    token0: {
      symbol: "IDLE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9f4aa9b4661f0c55b61fc12b1944f006a71c773f",
    token0: {
      symbol: "NCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3ba3d86acb711030d31db5b82621099e052bdd93",
    token0: {
      symbol: "ESON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0641d94e5392519f10d7545ec8f322b289f11304",
    token0: {
      symbol: "GHOUL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf2ecb7740dc01a16db0ecc0af12ba8e32511bebf",
    token0: {
      symbol: "MEEBITS20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x66fb76221d2fea3ae13d83c72050147bb5063e3a",
    token0: {
      symbol: "GOAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5dd5fc5aea9ebe67db1d1782b058ce2d33384840",
    token0: {
      symbol: "THOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x26f60069286ed0b2a69b6cf52ff750242728a9ec",
    token0: {
      symbol: "ERZA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf8fe6bca539742cf91d7e1cae81c8c41fe65cf29",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "LISHIB",
    },
  },
  {
    id: "0x52d7033d4a1dca715c5b308c697c3533b162568d",
    token0: {
      symbol: "KOF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe92a453f43dcf314c123ea141683742941bc74bc",
    token0: {
      symbol: "AKIRA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb14319a9290ef515931ed5dd83ff87d315750b05",
    token0: {
      symbol: "Bas4r",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5100392d0aa541dec1036ca607fec7ff47fcc3b7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHITZUINU",
    },
  },
  {
    id: "0x7f79fbc833dc9cfb393e025377ada480e82d3315",
    token0: {
      symbol: "WSB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa7d707118c02dcd2bea94ff05664db51363c47bd",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "METRIC",
    },
  },
  {
    id: "0x177ba6390e3434801529724019e1eaecc7130655",
    token0: {
      symbol: "WSB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29859f0f6c187894e946233a1e9ff3865b078e83",
    token0: {
      symbol: "PPN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4971e8bbd26cf72275b30d019f777318c441199c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CZDOGE",
    },
  },
  {
    id: "0x63dcc0898eb54f5595379388e59e7b094cbfc61b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CAKE",
    },
  },
  {
    id: "0xa70e6425c1ae1e070be3fc270cac8c3d4e11c27c",
    token0: {
      symbol: "EDC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6f56fe9857b435590a691964070930005d3446a2",
    token0: {
      symbol: "TONCOIN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x19fe9531ae963cb24125b8119bc96f581d95b3cb",
    token0: {
      symbol: "EFLAM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x94d5937ebe41f85c20aef13ac365085d0aa42638",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRA",
    },
  },
  {
    id: "0x5b155ea384905485fde4b24ef1cd63a7d2398100",
    token0: {
      symbol: "BILL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xca96653bebe79a3ba8bf3c4e2198f20fb5bd047f",
    token0: {
      symbol: "IOEN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xdce573864151accfeb317b5f99983024418695c9",
    token0: {
      symbol: "GameOne",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd5cbfa59e127b18e6c530d4e76c685ade9d7ee08",
    token0: {
      symbol: "LIL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7f0f5439c3e07970ce25c8c03e1d48d08af78c62",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ACAB",
    },
  },
  {
    id: "0x33e813bc4f7f5df5a689c23044e39c7d4f1be07b",
    token0: {
      symbol: "DOGER",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9c5fd4596f910cdd4fdd2ffd64b9f0e2d87ec624",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UPR",
    },
  },
  {
    id: "0x481e881b32f0173cd090fb04266073173964ec70",
    token0: {
      symbol: "MRS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xca0b3fcbb1347997239b38ee044fa15e4b7b5434",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$UP",
    },
  },
  {
    id: "0x5ff4798ebf4502fe779dd10b137723344e570ede",
    token0: {
      symbol: "BBOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5f0944e0eb92f7dfff7974f8b848b5312c65ac37",
    token0: {
      symbol: "WOZX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x31c507636a4cab752a8a069b865099924bd5f1a9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MCAT20",
    },
  },
  {
    id: "0xeb18b071b2f25e3ecba42f14074818eef42dade4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHIBELON",
    },
  },
  {
    id: "0x73bb0374ff7a5cce866c9d74e9b468b06953b39f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHO",
    },
  },
  {
    id: "0xaadce879e9e286a2a6559cf2907c73c4995e01d9",
    token0: {
      symbol: "ON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9c4a6aa47e0f4439ba0388c987f2ac5a74273323",
    token0: {
      symbol: "DSBTC",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9414d373b476229be6cec84f6e4843a9f9407fe8",
    token0: {
      symbol: "ALEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a9510978070073eae9f50cd1c04e141c1fa9ceb",
    token0: {
      symbol: "Nimbus",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6bcc0429eb49751eecea15e3f17433715f50c3a5",
    token0: {
      symbol: "PBN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc54ecd1339d17ac2f1859edee070e25e16773f89",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "STD",
    },
  },
  {
    id: "0xa0bdc79f28502d49d9c90d098dfb38db390fe3de",
    token0: {
      symbol: "SHIBAO🥟",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec736f21bea3d34f222ba101af231b57699760f3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "rFIS",
    },
  },
  {
    id: "0xe6eaa6946602a6f7aa1d4e242ed0f752e43f69b2",
    token0: {
      symbol: "SADINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbd07a2b43c90fa86786d07a09d665adf9d3a343e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LKING",
    },
  },
  {
    id: "0x5100392d0aa541dec1036ca607fec7ff47fcc3b7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHITZUINU",
    },
  },
  {
    id: "0x8b44051d998ecb022005aa30b88166116094e2d4",
    token0: {
      symbol: "Elon Night",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc0cb62f0b5c9574cc88907dc0712f27b4a6a60c1",
    token0: {
      symbol: "DTH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd4be0f30530cbf0707a3958e646da38647048e1c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KHLOE 🔥",
    },
  },
  {
    id: "0x8c88ba99099f54b50977ccd9805ed8dd175d58a5",
    token0: {
      symbol: "JAC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7bbe4e44cd5b4e3c53b7d2e90fb525e5614fe031",
    token0: {
      symbol: "MOON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x67638994e73c5b1b23f8c82d3590dcd58e0be045",
    token0: {
      symbol: "OOKS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8e5ebc66b2f1bf6de4007f564fb9fd03a48501c2",
    token0: {
      symbol: "GIL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x646cd0554719b440c25ac096236e9a69af6b09a1",
    token0: {
      symbol: "AUT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x184225f78cff8266dea2ec9d0968ab4f475878a5",
    token0: {
      symbol: "yUMA21",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9fd9f939ba8b2fd0c627c9ffe57b6b7f142511e9",
    token0: {
      symbol: "TATSUYA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b6a25f7c54f43c71c743e627f5663232586c39f",
    token0: {
      symbol: "JRT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcf3d945b8614554f8be9abcb7e94aec6b40b3621",
    token0: {
      symbol: "MARUINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd96e1fd60bdbc556bf3881130e5b67b3a5d6503c",
    token0: {
      symbol: "FLOKIPUP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd9bbadde07a3c4abe27e403e682bb10fa80762c5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LFG",
    },
  },
  {
    id: "0x3a7f5430f12becfe7a6876d748f53d771a3cec1a",
    token0: {
      symbol: "ADR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec2d2240d02a8cf63c3fa0b7d2c5a3169a319496",
    token0: {
      symbol: "REP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0dacb47e00aed6abade32c7b398e029393e0d848",
    token0: {
      symbol: "SOCKS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc574213172847efd56c3802082f3cb22106d4447",
    token0: {
      symbol: "QUAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x86d330e94d1339b283316ea2c151a4dbb1b8da6f",
    token0: {
      symbol: "EARN$",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7490eecee4e3a468fa79a2f21b4b0a5fd13fe275",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TANKS",
    },
  },
  {
    id: "0xd3ff34fe9692c563bafcb58c9a085c8c89c2f180",
    token0: {
      symbol: "FLy",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd996686a13da9cc82f51a95d732aa6fef4863e11",
    token0: {
      symbol: "NOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x171ffa8158936267407b8e8aeb73299f0736ed8c",
    token0: {
      symbol: "B21",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc5955929f847b60220a1511699180783e58bacb0",
    token0: {
      symbol: "BAKT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e9b04c0a11fc801335b0c436a3ae3dea0dc2188",
    token0: {
      symbol: "KOIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf37ed742819ec006b0802df5c2b0e9132f22c625",
    token0: {
      symbol: "GEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xefa2e1e46b83d572d01521c4c64845b0227b6314",
    token0: {
      symbol: "KAPPA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb81be6f200de9cf5bfe5a6361073e6a8bb8d1f0d",
    token0: {
      symbol: "FMT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe46456153cf0e767528f4a4cd3b613d5c4101e48",
    token0: {
      symbol: "GAMMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x72942c39c7852ed3fe1dbe7f49b961714e08966c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BABYSHIB",
    },
  },
  {
    id: "0xb7363cf4d676bbf01d78b63bbf3eff30d5d1d485",
    token0: {
      symbol: "GAMI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x43ba86ecaa855ef23c7692847197539e46796222",
    token0: {
      symbol: "PINK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2b0964ca46a4f3401ef65bbf9c616ed2f43f01b",
    token0: {
      symbol: "DERC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0a05e2e9d6333387d4f634b08fff5210292f5561",
    token0: {
      symbol: "QSP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2ce84de055ccb4ea93fc7ec7c9c0d0244ec4664",
    token0: {
      symbol: "GUM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfc6f3e19d82868a9386acd23c7118552d04d41e8",
    token0: {
      symbol: "BISHU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9776a214272ab452f8c88c7576dcd0c6ffbfee14",
    token0: {
      symbol: "GOF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc301f34fbfc16b9b35483db582e15bb06a45e267",
    token0: {
      symbol: "BITT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb5d352ee3ccab078d2ef6ebd8327da604569f6fe",
    token0: {
      symbol: "RUSH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1816327b28e73c67604532a81158fd356302b775",
    token0: {
      symbol: "STONK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa78ccdd0ede4079d0d8a6747555d7baf7c33931b",
    token0: {
      symbol: "CHY",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc4fa9fd2e51e41c2be2c3a77c53710b224e1b31d",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "GYEN",
    },
  },
  {
    id: "0xd0f15bd0bd6e59cd2f8ca6b207fc0eaa70f38ef5",
    token0: {
      symbol: "WVG0",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6edecd8c12bd3e611f6f2bc7e0218e96f5615196",
    token0: {
      symbol: "BNF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x819de42d3ab832eaf7111a222a8a5a7419f13b48",
    token0: {
      symbol: "ROUTE",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x15e9c628929e6046d124c9ffc375d1baac83f80a",
    token0: {
      symbol: "SHIBASTA🍝",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ae9c9fe1cf7df90c7ba5864680cf4a9512b019c",
    token0: {
      symbol: "WAND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xadf1ede0a8363386173ec57394a3b633515290e6",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CZO",
    },
  },
  {
    id: "0xbf452277b8af4084fb8a0472ec808f2ded51f1c1",
    token0: {
      symbol: "SLP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x78b0c16b8d85ac6fde7e9c3faa9ad832406f6928",
    token0: {
      symbol: "TME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6f91e2b74d0332daac6ea552d7fe99e1a94a119",
    token0: {
      symbol: "BINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2bfb44db07576a3736dfa554750a81ff67cbde2",
    token0: {
      symbol: "KOL",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xaaa002b4fba93390f2c011555d33d224fea67773",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GXS",
    },
  },
  {
    id: "0xe85cb84569db3f6c09d143741f90a33c9d8a061a",
    token0: {
      symbol: "ElonBirthday",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x87364df3036481b91f19cc01614cf7a0d81d1c01",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RAGE",
    },
  },
  {
    id: "0x2729dbde598d54ce4fa5cee1098306438bd4ed90",
    token0: {
      symbol: "NFTFY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6516d1a1237e0180cdfcfc85f98a06ce6dbd2223",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BRA",
    },
  },
  {
    id: "0x41e36ff62c4025f98239a85be2e77edc0b0709f5",
    token0: {
      symbol: "GEMS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa8208da95869060cfd40a23eb11f2158639c829b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "QTN",
    },
  },
  {
    id: "0xb4ba1175120db9877e3a28c3e7964abda634c50a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "POL",
    },
  },
  {
    id: "0xb33f1b38955b622c5ddae2ff0443d6e0d25ebe6b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YOT",
    },
  },
  {
    id: "0xc7e2556ae12a27721e894cde31f2abec253a03d3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Genos",
    },
  },
  {
    id: "0x5a11b697767eab7c6948619f375491e2f7d0b99c",
    token0: {
      symbol: "KASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x02d7703097c9bdf0d973470239df3b9cc1589b01",
    token0: {
      symbol: "RARE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8927616110cf23c4e87dc98614eb9fbaae95216c",
    token0: {
      symbol: "MOON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x504ba1cdaf38057d629924b5ad40a6f3998d49cc",
    token0: {
      symbol: "ShibAsia",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe3b2d2eae80cd8eadb72bf3f14e23c0a621b4f05",
    token0: {
      symbol: "SafeBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb57a7eac6ad4ba80e48edea2cb426d6576ab681",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "ICAP",
    },
  },
  {
    id: "0xb13201b48b1e61593df055576964d0b3aab66ea3",
    token0: {
      symbol: "LQTY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3d2d3c4446e8a82445418523b9b5b376765e55a8",
    token0: {
      symbol: "AGI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf9446f3fca6db27aacfb15479ab11469fd7fe292",
    token0: {
      symbol: "SHUSKY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x02346c6d7dcdcbfa511eb72bf61f7545f7bd2527",
    token0: {
      symbol: "SRSC20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbb1565072fb4f3244ebce5bc8dfeda6baeb78ad3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GPUNKS20",
    },
  },
  {
    id: "0x4eca408ce8f3e509e8f0029e6981860f15e661b2",
    token0: {
      symbol: "ZXC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0f935ff8a97e7d47c8aa478ea8ab737eded25cad",
    token0: {
      symbol: "mimi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x462e369608d78bd8702112d5ea8f20cdbbfded98",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "REDBULL 🐂",
    },
  },
  {
    id: "0x7048ed16c268797952fc5b2545a8ef842a2ffde8",
    token0: {
      symbol: "ONIZUKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0eaa5631acddec5f00ef6cc5a50eb71b98310a19",
    token0: {
      symbol: "FLOKELON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xda719d067948e5855eb362b495f5a82648a15207",
    token0: {
      symbol: "ABY*",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5b351c6439d6ff1354190f70765914d445367a58",
    token0: {
      symbol: "OOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2605811337f68a500665cf5e21f8fe145d207ac9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MELIODAS",
    },
  },
  {
    id: "0x01f12e66c1da28802f84f069defdbc2450d27657",
    token0: {
      symbol: "🍖TREATS🦴",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xacb2fab50a7ebcdb0157b85b1637cf1a928af4ab",
    token0: {
      symbol: "Appa",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ba13077d5bd37aa5a1a6bd53cf60ca0de6e3375",
    token0: {
      symbol: "RR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b3d12ee33fd1fa0c4a418bc0400f4260090b3f8",
    token0: {
      symbol: "Bas3r",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x221b585e9643f6094934199991cf2ffaae50c4ba",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CKTL",
    },
  },
  {
    id: "0x23bfedb92a5e5b8571650c975f9553c1113e75cb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NFTI",
    },
  },
  {
    id: "0x1eb0ad0abf4b6535fbe43fb586399d837849ec6e",
    token0: {
      symbol: "CORX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf1b34c3a3ae8edc1890d0f5c37d5feb7d3138afb",
    token0: {
      symbol: "QQQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc7e5e86e23a37b982d25fcab7cae105d7cff62cf",
    token0: {
      symbol: "HVND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcfed8029de7b3723242ac1bcf6468dc3d5a56a46",
    token0: {
      symbol: "OCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d9731c19d69cb42ee5f8b3992eb614336d396ae",
    token0: {
      symbol: "LEAP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd07b5667f6a0034ab5cafc8c9d134fb52da55101",
    token0: {
      symbol: "CO2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x07d4d6845e2c713de83a42bd56b0efcb2302c533",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AstroLion",
    },
  },
  {
    id: "0x5101fe0f44a099da68ef26157573c4b58661fb7f",
    token0: {
      symbol: "bSATOSHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5d2c95651e0ee953b9abd8ec47ce2a165c852ae9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Pikachu",
    },
  },
  {
    id: "0x826190dbbf7908a64cc3d39968ac626db076641c",
    token0: {
      symbol: "MGAMES",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x65919fb3446b400dcf1211a791349a786a9434b9",
    token0: {
      symbol: "NWORDPASS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa39ce99cc323472a27602017eeec4f2ea828a737",
    token0: {
      symbol: "BAYC20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9a25d21e204f10177738edb0c3345bd88478aaa2",
    token0: {
      symbol: "PAGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x88aff90151b312c1ac610e904416c6910ba8b86f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LeviInu",
    },
  },
  {
    id: "0x5ed7d3b704d692938ee25fa2c7e75a1e10670b33",
    token0: {
      symbol: "pSAFEMOON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc03c6f5d6c5bf2959a4e74e10fd916b5b50bf102",
    token0: {
      symbol: "POLY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa6f6489aed8d50c438752bbcc0df5c487615eff8",
    token0: {
      symbol: "uDICC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2d703d5c1924f5791f1b889a58c25b04d878a39d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TABS",
    },
  },
  {
    id: "0x59b8c20ca527ff18e2515b68f28939d6dd3e867b",
    token0: {
      symbol: "BULL",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xd89fbe528f16f7d8286b84df7741a71f633e88f0",
    token0: {
      symbol: "bast",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfd381b49ce9b38defdebbf67faa70179294d9160",
    token0: {
      symbol: "PicoDoge",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2dc2f9a47cdb5d7c4e3c2b751c7d9e313b3e6fc7",
    token0: {
      symbol: "NAS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x42018c3d79c63232da1450d2fedc2b73e3069c8d",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "scUSD",
    },
  },
  {
    id: "0x91d655b1603421528bb624b8ede7434569b55733",
    token0: {
      symbol: "RICKMORTY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x454f11d58e27858926d7a4ece8bfea2c33e97b13",
    token0: {
      symbol: "LDO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf48865687dfd57593bd44afd6a04517646ecb37f",
    token0: {
      symbol: "CAMI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd7ad27fa15872fd35e5c3b3b383127e334ce5eeb",
    token0: {
      symbol: "BARBARA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x100bb4d1573649d7c09028b1770f49ca14f4ca32",
    token0: {
      symbol: "MOB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8433ddc4c633184bdee17daadcceea28e1903fcf",
    token0: {
      symbol: "SpaceDoge",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa3742f3740c5c112f9dd0a9858aefe875cea13e2",
    token0: {
      symbol: "GOLD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa6890ac41e3a99a427bef68398bf06119fb5e211",
    token0: {
      symbol: "ZCN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d301439be2301ce46cef80b7b8923cd757b8da8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "META",
    },
  },
  {
    id: "0x7a09c21034d404707cb3c38cf9356e9693f6c52c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEGEN20",
    },
  },
  {
    id: "0xbd1e03e01d685dfe73cf9c3f9a7cf410ba724a41",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NIUB",
    },
  },
  {
    id: "0x966dd46d9f09986bb79e6f6d7d4ba4a3eec22052",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EXRN",
    },
  },
  {
    id: "0x27e93cb2559b39aa2267d368a7a241aacb39973d",
    token0: {
      symbol: "SHIBBOO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc139781401858c7f09b6297877e4eba99ced1ea3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PRADA",
    },
  },
  {
    id: "0x1b8a4191f16711726c04017b8154d49e7ccac009",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "OIN",
    },
  },
  {
    id: "0x786c62294a2ab6c7c84f11c7a8aead69bc0f9104",
    token0: {
      symbol: "🦐",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b25f85a9c915d0ca6a55cae9564930d3af9faec",
    token0: {
      symbol: "BDO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f839e991bb8c66b7066e2d4d753f47613f4d558",
    token0: {
      symbol: "TBB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4a7d044d7cf7117e9d106818526aebd9543a74a",
    token0: {
      symbol: "LYNC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3435bacbb79baa5c4019419dc21db790d47595d8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TABOY20",
    },
  },
  {
    id: "0x66bf2cbc2bebb9d0f69843cf4c4d55bd7209a86e",
    token0: {
      symbol: "FREL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfc23f8b2fa5124c9446361c00b90cdca708b3d68",
    token0: {
      symbol: "BLL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xfea5521ea47d5b8211683dfab9318be1b50ca292",
    token0: {
      symbol: "AIRx",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6d41fccfc4783abb9ef13ce297b341499e3f0f6",
    token0: {
      symbol: "USD",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x0cf48a464bf5fad40dc76727a2c7ff66ef233d7e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "THANOS",
    },
  },
  {
    id: "0x1b3da661651fda796870685fddbf4723a9f80b3d",
    token0: {
      symbol: "TFBX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1d3bf90cd2a176d04e74cce9415379661548f417",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "IRS",
    },
  },
  {
    id: "0x69f1b88b4fcecfa05c7db29d7bec6f2746159b1d",
    token0: {
      symbol: "TICK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5a265315520696299fa1ece0701c3a1ba961b888",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ROT",
    },
  },
  {
    id: "0xa63239da919c0da0ce49710ca350cb72d3a3549f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PUNKDOGE💸",
    },
  },
  {
    id: "0x27538ac584daddaa62cee13a90de969ac35c2845",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AQUA",
    },
  },
  {
    id: "0x93f6a87eb364bf59b95a1f523a2c23e33c0eebda",
    token0: {
      symbol: "G-CRE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe108fdab8b03f6bd4c35b8e7a2249b120bf91a87",
    token0: {
      symbol: "BOOKS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcd6f65a972551ffac9b52fa2d4a561d9b7ab4741",
    token0: {
      symbol: "MPS",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x8a46eb07ed7c3d6f883990d32aad0f8231901a64",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "RCN",
    },
  },
  {
    id: "0xbcee2657b37db70f9052637a5d801e87c260068f",
    token0: {
      symbol: "bBETA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c9052e823b5f4611ef7d5fb4153995b040ccbf5",
    token0: {
      symbol: "DXD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x76d629ebad7fdf703ed5923f41f20c472e8f23e3",
    token0: {
      symbol: "MCDC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc38a433ca0a143a0dc3389ea527aef8349178f44",
    token0: {
      symbol: "PRQBOOST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa5bd4a268edf1d808bc0cd0591613f998a2193ad",
    token0: {
      symbol: "GLM",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x429d2daabf4d281e8d768f6c08a316e90957ddec",
    token0: {
      symbol: "METH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5a82b487db5a55a9dc88a3bc2b984d5aab455783",
    token0: {
      symbol: "SPEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x24d0753e0b1db16ae4acc6456b83a43af142495b",
    token0: {
      symbol: "Penguin",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc5d3c66133a6264b0f2e712b8e10ef96efb93eb2",
    token0: {
      symbol: "LUA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ee1d2ae2c8412d2cbbc46d49306bbdb73b32c9e",
    token0: {
      symbol: "DEC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9804ae2ec3ee32a05460e5e72c29a20f54b70452",
    token0: {
      symbol: "DAISY",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc034656349ff8dfdd8ba2cc38cac690f7b69e47d",
    token0: {
      symbol: "SHIBERUS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x28f8edeedfff5814b566ec8e2673d28051e2da5f",
    token0: {
      symbol: "AST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa975acf5d4ab3efcca573cb85a80275a1fc0bc42",
    token0: {
      symbol: "GPUNKS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0e7732a5bf967ac4c537c8677ade432a3ba529a",
    token0: {
      symbol: "XLSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29884de56d8ca737b50c84b4538e2b80f7f8f199",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SET",
    },
  },
  {
    id: "0x96fbe9f3b2305f38f7f26264cec6f2e7eefe0234",
    token0: {
      symbol: "SWSH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d09c9050c6c4bd6b810609b8bfafbe574df52be",
    token0: {
      symbol: "VEGI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc037ee929764f93d7a41fe8eb01e22a7b2927a2e",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "STFI",
    },
  },
  {
    id: "0x0778908a7d5503d8b8e35f63e25a349e663242d7",
    token0: {
      symbol: "TESTA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5f5b3fe267c131f1680f3f64f835484d591a6d55",
    token0: {
      symbol: "PerpMoon",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3abde8ef619cd7b5bc75e54a032906fd2c89b61d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "X3",
    },
  },
  {
    id: "0x81f7a4c2184a8b9cab5fe45cd6d3821aa3c06d76",
    token0: {
      symbol: "PHAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf800e9bf2dcb89ca03917cd549e23c2c436d5649",
    token0: {
      symbol: "OFC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x307148757db13e68b341b041072a07d93ce831de",
    token0: {
      symbol: "AUTH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b4a0bd2eee3ca06652f758844937daf91ea8422",
    token0: {
      symbol: "BOOST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x858acdda41fe241154ade3df4ae6b141aa47c4ae",
    token0: {
      symbol: "UPI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xefc05dccb3b140dcdf41d05487c6e9969ac5288d",
    token0: {
      symbol: "TRANSPARENT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd153dd04852bb07b8e8a8f4d9955ae353bd0827e",
    token0: {
      symbol: "OnCS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5c89674c4ad1ccd10a29bcc9aabc303cd5f2da1d",
    token0: {
      symbol: "TOMOE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9161088a47d1ca8c77ec781ec059c7b4bfefdc10",
    token0: {
      symbol: "ROBIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0a3c6020c337808cbd3e1befc250084b9da8d11",
    token0: {
      symbol: "YODA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8a390f95d5afaa9f6307be48b84816ba4b1d9cc7",
    token0: {
      symbol: "PSHP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd9f91070371987eee3e500e90de5333e0c43d031",
    token0: {
      symbol: "MXC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd18d5ecd196f4a641fb5f61cdf2c4769b28d0ff0",
    token0: {
      symbol: "CNJ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x43a0a7de70cb0a1c83fcfd2f5a8ed1793649d26e",
    token0: {
      symbol: "INT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9755dae9466287f0c55f9040561bb94a2bf2e6d5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DAMN",
    },
  },
  {
    id: "0xb929ab35830ebe61a7edb8f3191b56fef5460d42",
    token0: {
      symbol: "TITS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9a60f0a46c1485d4bda7750adb0db1b17aa48a33",
    token0: {
      symbol: "FFF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x260e069dead76baac587b5141bb606ef8b9bab6c",
    token0: {
      symbol: "SHUF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5102f3762f1f68d6be9dd5415556466cfb1de6c0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRND",
    },
  },
  {
    id: "0xf881324db0dc940a8701b025ffd4ed84653fd54f",
    token0: {
      symbol: "RDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x895324433d8026fad0531428ccfbac7a6b32fbf8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RAINI",
    },
  },
  {
    id: "0x8c8f6735c64c14a5dc88d55b7d7c1b594ba1c321",
    token0: {
      symbol: "LEAFTY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x60b2cc2c6ecd3dd89b4fd76818ef83186e2f2931",
    token0: {
      symbol: "ALPHA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x57fc8adbf7b583b929c51df0da16008651c1de78",
    token0: {
      symbol: "XAUt",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa27bb6a407b8cad886c7b9b8fbca097e1029648f",
    token0: {
      symbol: "JEM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x49ccd8bc525db122eca54111e113598fb67c4e12",
    token0: {
      symbol: "BOOKIE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa9477fec87992d3f14a676da94467a9359faeb25",
    token0: {
      symbol: "miniSHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xad1fcadace3aa8dd994d39751235be41691aaed3",
    token0: {
      symbol: "TLOS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xac523eb684be6e3fc5ef20a8b2328256b27d36e4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YFIIG",
    },
  },
  {
    id: "0xf781acbec4ff4b46a8c8f8a53976fcc314957d4b",
    token0: {
      symbol: "BATTINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2084c8115d97a12114a70a27198c3591b6df7d3e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MFT",
    },
  },
  {
    id: "0x2a1e1548a4b93b5d746e96799ec25625154cfb8a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BARNEY",
    },
  },
  {
    id: "0x24717ce1c12f399e57fc3ae1420832eb6acb17a3",
    token0: {
      symbol: "cSWOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b2760bda7526c1ba9df3d58008d61ba5b38e8a9",
    token0: {
      symbol: "HBR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa703f8d610369088f14f2a9954cd1cb394032c03",
    token0: {
      symbol: "TKX",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x0f627512be79cdd24937caa131c3042226288421",
    token0: {
      symbol: "TSLA-APR22",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x57db2a0d2231fe522ed5d1cb40458ac152b41e01",
    token0: {
      symbol: "KCAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7b49e2c4764b14a5d8306aa7c12e1d111f04ca6e",
    token0: {
      symbol: "PAYT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7cba7a381428ea915d1fb2efeba646aca3830bf4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FST",
    },
  },
  {
    id: "0xd8c9b8a84946d3c96a322a02de96e04ee4354b4b",
    token0: {
      symbol: "OPT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x360bb0c0c8451095f65568e77d04b4ee970c6ec1",
    token0: {
      symbol: "BUGG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3b28c2f84b3a9b1731669cfe5241ed8449502e27",
    token0: {
      symbol: "ISLD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8afda1b3234d4cf15010b2f528e6034dc4526455",
    token0: {
      symbol: "AAH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd905a0fac1d874e03efa19f0e3ee5bae58e6ccaa",
    token0: {
      symbol: "TWE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe6bbc807cb59b5f280b835135d01d077657d4550",
    token0: {
      symbol: "MDF",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc585a87bd3de4e5528d3c07b281406086fb8e6de",
    token0: {
      symbol: "$NOOB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7e02eb1c6cc7b817891d5fbbdd567f6435dd31ee",
    token0: {
      symbol: "UCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x581fa23b7de257c579ed139dae145a42849ef9d8",
    token0: {
      symbol: "CORLIBRI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x36cbfa3bdf26ddcfcee6efb383775b29e0da95dd",
    token0: {
      symbol: "RajaInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb7f78a079b5fc387c80b93be79d40309c27a237",
    token0: {
      symbol: "RAIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7d2b169cf0a0211b934dae0a46c0802eda1a9b0a",
    token0: {
      symbol: "ELONBUNNY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5c5764bd20d0a7ba99330f330217c39d95827705",
    token0: {
      symbol: "SXHC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x823fba08e52d82a61aeaa822b5d9b73ecbf131c6",
    token0: {
      symbol: "SHIBRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe14f1283059afa8d3c9c52eff76fe91854f5d1b3",
    token0: {
      symbol: "MEME20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0a3f32116f4889a453168015f076727e32dd3cc9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EVADE",
    },
  },
  {
    id: "0xdb8c25b309df6bd93d361ad19ef1c5ce5a667d6a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NIP",
    },
  },
  {
    id: "0xec855b0afd704172c71ec0ab400004c56d53264b",
    token0: {
      symbol: "TEXAS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9123d8b233fa8e10fb51aa81486acd33166544e1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "UFI",
    },
  },
  {
    id: "0x8a7ffbd2c895e07f81a01d30827b93da0391f928",
    token0: {
      symbol: "TCS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb61680ef4ea45a749e6e2baef4238a7eade781b9",
    token0: {
      symbol: "CSM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x04840eaa3497e4c3934698ff88050ceb9893f78f",
    token0: {
      symbol: "UniFi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4f1c4dc25157936c01e900ebd4de8f318c2e208",
    token0: {
      symbol: "ANINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8fbf692e5feef0c456ffa9be296e69e35521873d",
    token0: {
      symbol: "Revy",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa440baf25ac41b26a6ea40f864542b54a76ce530",
    token0: {
      symbol: "MYOBU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2c1564290f52206bc396131ba5a5cf4cd2343a28",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "unknown",
    },
  },
  {
    id: "0x99b1db3318aa3040f336fb65c55400e164ddcd7f",
    token0: {
      symbol: "OM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4401849dcd747673002ddfa97d37028e934e80ce",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YANSH",
    },
  },
  {
    id: "0x1936561ec763fc042a4cff94e76812f8c0ce43a5",
    token0: {
      symbol: "SafeCat",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29377725393edb2077533a58f6846cd6700069c8",
    token0: {
      symbol: "GOJO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x53da137e8bf6369f01f398ba47c35dab2b0e74d3",
    token0: {
      symbol: "WAE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x842fb809467b6d2d0af87fd18e1767334e6490d3",
    token0: {
      symbol: "FKEmax",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3db52da9aecdbe33ebc682399d75006c9b21d87a",
    token0: {
      symbol: "Shibchina",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd329d43715aa7b13f6d8aab5746fd824e7b643de",
    token0: {
      symbol: "COLLAR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1fcddaa612efe21b59033d8226f1477f85400b0f",
    token0: {
      symbol: "LPup",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x55e7f1b4cf23ae1ca95b415c93cc2109fae280c0",
    token0: {
      symbol: "FZut",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbe31323aad7f74b8345385940d22eb2cb03f2689",
    token0: {
      symbol: "SHOOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x70de7480365c98e61195bdb858af37905b767977",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BRRR",
    },
  },
  {
    id: "0x0a15b674f347f4952370f2c5596ba8012bc95f38",
    token0: {
      symbol: "KIRBY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd4192ee224e111dc39098f93e5d62f9469d8842c",
    token0: {
      symbol: "DBS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0c73f700dc7eead3f62e81fdbacf71205117beb1",
    token0: {
      symbol: "PAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xff26d4af42a586e7ebd10b8783d9e64cd9ae9231",
    token0: {
      symbol: "AXUS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe9cb4a706eebfc1e93be4952c8c78aa4b460457e",
    token0: {
      symbol: "BAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe2a782234d7aacf9e575e61545091b2965538a51",
    token0: {
      symbol: "ibETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd225d64ae6c0784413e9054b832c9a52a19fbfe5",
    token0: {
      symbol: "dART",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaa9cd48110ab4f3c1703a9b81faf4d84fe81bbd1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GCG",
    },
  },
  {
    id: "0xc6f8f18e8a188eccb0ce8291f35b00ffd17ddbec",
    token0: {
      symbol: "LML",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x0e8d2aad60caf0df59fa897934cf8929a14b3b39",
    token0: {
      symbol: "PUBLX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4955c08677095a02a4d2dcef35849d9585b31b4",
    token0: {
      symbol: "SHAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc12c4c3e0008b838f75189bfb39283467cf6e5b3",
    token0: {
      symbol: "0xBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf5bb54af516890d564643ba16c09117fda5a98d3",
    token0: {
      symbol: "AGLD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x303ffcd201831db88422b76f633458e94e05c33e",
    token0: {
      symbol: "sUSD",
    },
    token1: {
      symbol: "DHT",
    },
  },
  {
    id: "0x2071f8864b270bd1f0567c14ab7f00543699a1c5",
    token0: {
      symbol: "GEM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d180c1baf1de69e9b922625284e1a2211a6ebea",
    token0: {
      symbol: "TLR",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0xf94757b881a7abe7fa1392318990153a38fc92ac",
    token0: {
      symbol: "NOTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d051fe6f3f53dce2981757b480c468c22e91983",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DCMC",
    },
  },
  {
    id: "0x984e4ba4c4033b2e665a505c0ca780018a16e5aa",
    token0: {
      symbol: "DEADFELLAZ20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdd2eb90a24d388f9d4069293fa9a698dcae15391",
    token0: {
      symbol: "NIST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb55f56a14b285cc6adf842b185b1ed30a34e36d2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GSHIBA",
    },
  },
  {
    id: "0xeab59cdd581e532a910b53f7396cd8fc27e49d6f",
    token0: {
      symbol: "OPT",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xb239d022f12ec0d8a53733833ffd726e7f27dfd1",
    token0: {
      symbol: "SCHRODINGER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x19fa8d8945b43b0e90b287ec535bf948641c8881",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "3s3",
    },
  },
  {
    id: "0x87d34302549a5a187525dae22395f8a08b4c1d54",
    token0: {
      symbol: "ePay",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd5d68e1be3b01bf295c24b293978cce77bc13339",
    token0: {
      symbol: "BOBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x582413a98333df92cc2f4506d90621d0b421fedc",
    token0: {
      symbol: "MILF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x65ed041fea638ae3794a276c9a72b974bbaa84ff",
    token0: {
      symbol: "XOT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x92ad5f399a278754637d84e9cba7cf405c901b95",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BOLT",
    },
  },
  {
    id: "0xe2fc84874678a0c0171866cd33bbad8471928c51",
    token0: {
      symbol: "GARF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x09889f28cd5cdb5597035976bbd2c28dee0ccc35",
    token0: {
      symbol: "MALLY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x971c98d61f5c90f50acdbe2333a1c72ce0dd2b09",
    token0: {
      symbol: "KITSUNE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf84f1b2ac55dc07cac951754cd559e86efc98d17",
    token0: {
      symbol: "ZEROTWO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7b1d093eb1faf6adbdb859cead801401d369426b",
    token0: {
      symbol: "AMZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2eee485ce02eef7259e58c20362a3a3a040ed83",
    token0: {
      symbol: "FRMS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x189c2540059c8a5784d5b3d4050799a7a7ef6944",
    token0: {
      symbol: "OUT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x34bc3061d241acfc7abc06a4f9ed6b5454761643",
    token0: {
      symbol: "PHOENIX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe644ae0d7640ed2838e97a3a0689e9bf50627eab",
    token0: {
      symbol: "3Cs",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb062fcbb48154fd385f104b38a2f9f3ffd82ffe0",
    token0: {
      symbol: "DNT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbafa2d6db3256c7b2478f130d511759046ce7a9a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VTD",
    },
  },
  {
    id: "0xa47585458d2324657d03292b10fb31dd6ad69437",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CYBINU",
    },
  },
  {
    id: "0xac8b37113b378fac01f0ccc6036d0ae877d5fcd1",
    token0: {
      symbol: "DEVO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd1f8c7a079e616752f93c544c6eabc0b5c231cc0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FYDER",
    },
  },
  {
    id: "0xeb4a65c059598a1806df543d9ec47f6add092efb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CHEEZ",
    },
  },
  {
    id: "0x205dafc62e189edb386745360d6cddc9411aa35d",
    token0: {
      symbol: "HY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4983c171031589a162dcd547c2a264895ad04792",
    token0: {
      symbol: "ePlus",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd20f8a8248d4e3d2974a68514e600ad5b7768a5d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SPY",
    },
  },
  {
    id: "0xa0c3645077b6ea895dbf83a2a6bcedce44f1322d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HallowInu",
    },
  },
  {
    id: "0xa7e570d3bd204951cc30a83df985875da35b0fc0",
    token0: {
      symbol: "DDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc134841c510b5aab9ae7d28b039dc94984682f2f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KITSUNE",
    },
  },
  {
    id: "0x2c2b8623c8110c276fb304291fdc634bf93db54e",
    token0: {
      symbol: "KIGGAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdcd8af1addb04179628956f9c086db1ff0d77522",
    token0: {
      symbol: "GVT",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x0157070e253bae6bb2c59a8a0a84dff606307b1d",
    token0: {
      symbol: "LIMONAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa82ef4684d7cd0bc0f77370ab1bdd78b893a1a95",
    token0: {
      symbol: "Gvy",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2cda371f367208c15390727839172941f48f532d",
    token0: {
      symbol: "YZY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcd765189a31a7134eb52866dbe1f8a84a98ffa52",
    token0: {
      symbol: "SSINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x899b77d4a2d0b3cab07c3a69cc78604a72754247",
    token0: {
      symbol: "GAL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x234443a181b3656552037927e42aeffcf4f77127",
    token0: {
      symbol: "SEED",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7524c27965b26d13152835349bd10cc75f4643f1",
    token0: {
      symbol: "SLINK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf5cc38c0053c55190fcf13d2759a5a4466dc23d6",
    token0: {
      symbol: "⛩️",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xccffb3311f7fdff09be571ec6e04c51ba4abda89",
    token0: {
      symbol: "OUT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x493539cde9d852282b86c984bbbd93972616681a",
    token0: {
      symbol: "ALBEDO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7bc727377e6c61d98fd9fa7d4f3c3daeb384fb33",
    token0: {
      symbol: "PEARL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x810ac665146e0b6d00d04c7b2ec5e39661e4725f",
    token0: {
      symbol: "Kill Willy",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1de2a7cdd2c2dc53f57cbfde523c5452592ef606",
    token0: {
      symbol: "GRINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa07030378b3348c157d0ef5ae2970bd5e52fdc8a",
    token0: {
      symbol: "EBULL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdaf843423e46a8c68e7d3f7fc73d3d5aed7e1175",
    token0: {
      symbol: "ANDROT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa723f829bff2cc3f56731b56897cb1ac83555259",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KNUCKLES",
    },
  },
  {
    id: "0x0043c06ef1a707fde07953ea59d233bf0fa58b05",
    token0: {
      symbol: "STEEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xda6ffcf93fa12c182b5e3577ab60df8cb2834a03",
    token0: {
      symbol: "NOTINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3800ee9e50f080196fd632edd6cd445dc636dc58",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CYBERWOLF",
    },
  },
  {
    id: "0xd244f5d9bd7405ecb0068e69c4b6040298c576fa",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ARTINU",
    },
  },
  {
    id: "0x423e8642242ea75f9f8b39526a9dfc185ff5c7a3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "REAPER",
    },
  },
  {
    id: "0x1acba73121d5f63d8ea40bdc64edb594bd88ed09",
    token0: {
      symbol: "GRUMPY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5538549d33a09c8be4f25c4a9d0de89b50a58bcd",
    token0: {
      symbol: "eGOAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa0af27b9489f49afeb94c4780f3c1aa29abefe3b",
    token0: {
      symbol: "SPRAY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x05f529bf6d8b593b8f871158eb55c535ffe49bd8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VEG",
    },
  },
  {
    id: "0x62f0de82eddf7e6046ed6e4f05eb998139aed705",
    token0: {
      symbol: "DVOTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x033c37edb64b4bb5aa90efa0afc2f145315feb3e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MINATO",
    },
  },
  {
    id: "0xecba967d84fcf0405f6b32bc45f4d36bfdbb2e81",
    token0: {
      symbol: "FXS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xda357b48f37bc0e7eca53cc2c2f4cf20f1d97869",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RGAME",
    },
  },
  {
    id: "0x7ca9928a25f1ac5b4e2fb817043dad564e5b3b96",
    token0: {
      symbol: "eVAULT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x881bee9754694c8d1de038d65c6b65c89d3a8566",
    token0: {
      symbol: "XRGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3343d8fd46ba0469db160a82386a826214cefcb6",
    token0: {
      symbol: "aETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd07d430db20d2d7e0c4c11759256adbcc355b20c",
    token0: {
      symbol: "ICHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc20ba61fc27ecc91a20cf17d4ad485b779607ab7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SCORPINU",
    },
  },
  {
    id: "0x391ef5e7bd32ea7d721ee305d80159310279691e",
    token0: {
      symbol: "ShibaETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x24b34098f6950a5d5b6bbe1358ad79b609b924fb",
    token0: {
      symbol: "fWETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ae683767de602354f394a6bc0439d86669beaaf",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "APED",
    },
  },
  {
    id: "0xe5e16b31a49b666cbd5ef52d72fce283cca6fbd8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BECKY",
    },
  },
  {
    id: "0x71766176766bf82578192a17cf8271c14b79787d",
    token0: {
      symbol: "KungFuInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x91a1d9f7715f2a7ec86260d2f588bbdbad93e582",
    token0: {
      symbol: "PRTL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x98b78441287ceffbc1dcc30ab3ad84b3a370a065",
    token0: {
      symbol: "ETHINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa13d2b67f3a15da4fd50ebb1d28db638d338905f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "eINU",
    },
  },
  {
    id: "0xe93558366f9e69ca5a33ea4f250e8549686d0249",
    token0: {
      symbol: "Shibank",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6cc77142f4da3c8e00f0c3383a648f8488ebc937",
    token0: {
      symbol: "USE",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x6579d4d60efbcbda1009e6d1b3c57485dfbc2c1b",
    token0: {
      symbol: "MYSTERIO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x731a5948bfa84a7a40d2fd3c263b75d09cf14de1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WPSL",
    },
  },
  {
    id: "0x596a92f8d8b8906fae8e3dad346284f354830e1a",
    token0: {
      symbol: "AMN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0e4410dca13d85411bb9281ff0571064493da483",
    token0: {
      symbol: "renBCH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x196301078e03fcf270027606151202838451210d",
    token0: {
      symbol: "USKISHU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x33b9166c456cbe66e68a856f972680f68d5615d9",
    token0: {
      symbol: "ATH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf29dc81a21d4c32781702b2b8b191de664314904",
    token0: {
      symbol: "BANKBTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xee98e1fa29f794b961e8011127a806629e3ebe41",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "PWRD",
    },
  },
  {
    id: "0x5222b346f24605d467c8febf490f0ad98af19b2d",
    token0: {
      symbol: "NOTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xce2d45688ca4b3554b6586656b81e2189ce9b7bd",
    token0: {
      symbol: "DHS",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x22f38a4b51a14e5d32153455adb79036d4e81da5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BLOON",
    },
  },
  {
    id: "0xcdc477f2ccff2d8883067c9f23cf489f2b994d00",
    token0: {
      symbol: "DIRTY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x72c04b478045f1a8702630ec15f119a1c08b94c6",
    token0: {
      symbol: "TREE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xde0e40ae5f44e8f6c7fedbc122378bf9e00d3b43",
    token0: {
      symbol: "LEGS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3ce07fe4304ed11c92aa1a75644b8425c2f3837a",
    token0: {
      symbol: "RWI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x63607de7ae773638d012561a01383ab8ac321371",
    token0: {
      symbol: "NIF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x816579230a4c61670eba15486c8357bf87ec307e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "xBTC",
    },
  },
  {
    id: "0x8adefc4c3a92ecdfbf71e2715bdf365724083b63",
    token0: {
      symbol: "EGOD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b043366b46d252be6c1f2b7922fd78fbaee66df",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PEPEINU",
    },
  },
  {
    id: "0xbb8a1873c709f3acea0200e98cf7b5536a65002e",
    token0: {
      symbol: "XCORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf7224b945c42030c7250e534d007422ca762ae1e",
    token0: {
      symbol: "Kyūbi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ad41a736f5c10d9b5b5e60d26008b52ce68e038",
    token0: {
      symbol: "AWF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8e6fb6409c42077d28b23b636fe3be18e1964690",
    token0: {
      symbol: "DENDE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa8ef4df1577be1a1b4e884eb67aed494f39dc36d",
    token0: {
      symbol: "ACR",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xc03ac1e9c6946fed9e36732cebbcd73b0c7a0637",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TT",
    },
  },
  {
    id: "0x548887ba4daa5d0763a9ec8fdc6d76d462b4ddb2",
    token0: {
      symbol: "WAXG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d879dc4973061c9fc7e248f7d999836ceef7268",
    token0: {
      symbol: "E.T",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d92bd60f56edd48901b49b2b16b3c7a3e5f2e6b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AANG",
    },
  },
  {
    id: "0x1e3a3c050902e24fcc8d50585a177e8177605875",
    token0: {
      symbol: "WHIS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeff7872f2cf239bff7ebf53d95179b0ba69f5141",
    token0: {
      symbol: "ABEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x958db6e53d1c2bc18daa0ec86a05eb2244dd4e94",
    token0: {
      symbol: "TACO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xafd88ed9906ef1c7d46189314452aa4b3d665b8e",
    token0: {
      symbol: "FKX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe51f06106b920485819cadb5673876b5eb504abd",
    token0: {
      symbol: "DEBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa57cd81dd005686bac356228e355ebeeeff61db9",
    token0: {
      symbol: "UT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x53403c0c3c960dc20ab8b1dc2fc370b556c23254",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ENS",
    },
  },
  {
    id: "0xecfbe9b182f6477a93065c1c11271232147838e5",
    token0: {
      symbol: "DOLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec5786549a8d8ded2aa5b154e207af9c568ce467",
    token0: {
      symbol: "MIKASA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfe6f77be9f145f9ce68eeacb4981181f53b27a6e",
    token0: {
      symbol: "GANJA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeab7e907e01203bf0b823dbe135b151921b74568",
    token0: {
      symbol: "NUG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ab582589cab948ea3668fbdaf75894a93893c0e",
    token0: {
      symbol: "STRIP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd09e0774785c1328d782242cc551f0a04c5aaa3f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BULLFIGHT",
    },
  },
  {
    id: "0x273a5cf7b9ea9a2dfe4f45726d706c81ed0873aa",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RUSH",
    },
  },
  {
    id: "0x22aafd2930871eed6eb66bfa15d0935d78214e14",
    token0: {
      symbol: "BIOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x86917f13e0424b5b3b2da319bd215750a1615570",
    token0: {
      symbol: "COYOTE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xed2b9a53e8de3f621aef9c80dc17d57e56d94c7c",
    token0: {
      symbol: "ASS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc7a1cb6edc22e94f17c80eb5b959f2ad28511d4e",
    token0: {
      symbol: "HBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb4cbc07c5d79e69567323a316ac3b92d7073d02a",
    token0: {
      symbol: "Shibvegas",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xde465adeda3dc61d19970b27b19e4e7fae16744e",
    token0: {
      symbol: "ETH2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x16a07649152c893a66ee85ee18de74016ca6cff6",
    token0: {
      symbol: "MM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe0b2cff1f90a82ed77c8338c9b365852c660bbb4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SAW",
    },
  },
  {
    id: "0xadb0c5509a10bdc800dca56bdb037602577be89f",
    token0: {
      symbol: "MUSUBI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3203d789bfdb222bfdd629b8de7c5dc38e8241ec",
    token0: {
      symbol: "ISLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb63c2f390803119a98ac63a371bcc657e366df0f",
    token0: {
      symbol: "XPR",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x3bf1b837ccc1f62114a3e74ced4fcfb121d7e52a",
    token0: {
      symbol: "Coval",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2dda09fb929c576a6ab6c1d1ee62e8af72b2f6a7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NEC",
    },
  },
  {
    id: "0x7bfd383a83a2e67f6eb29673b512bd01ecfbf8c0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MCX",
    },
  },
  {
    id: "0x0f641efbeff4be14762a276d4d3744ce40526653",
    token0: {
      symbol: "CXO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b8d45301102ded092be78e883dcb5d7f8733ff0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VAL",
    },
  },
  {
    id: "0xd1c2905d8965af2939a3060cb896b45a5a8db322",
    token0: {
      symbol: "AMC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x811f8c60ee1805db7ece0fa3c7b064feba887053",
    token0: {
      symbol: "PAPER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe6ea6c60fa0e7f5cf91008ad7dde869554dff1a2",
    token0: {
      symbol: "WIZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x505060e23fa82f39b211c1db26b78e8f5d5ab24e",
    token0: {
      symbol: "YSD",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x3eb113e0f84d82d98309df03ab1c50f5ea97f4ac",
    token0: {
      symbol: "DOGEZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x060946fa940d225c921c6efd28950986955c9bbc",
    token0: {
      symbol: "MORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfde42a9422cb0ee84ede728ab503487b382d135e",
    token0: {
      symbol: "RTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb870e6879c525def56b81846e52aad45739ab394",
    token0: {
      symbol: "YFIP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1a87c7aef99dd41462ebbc0ad364506dcf38efc4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CBSHIB",
    },
  },
  {
    id: "0xa27c56b3969cfb8fbce427337d98e3bd794ec688",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbf0f79932e3e136a0a948fd6a8aa4ca8ccfe0ee1",
    token0: {
      symbol: "SCooBi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd873f9187ed9166118b10f61ff85c5005709670e",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "MTL",
    },
  },
  {
    id: "0x9be3a8e24f757371e9ff8baec6138732ee1c1c3a",
    token0: {
      symbol: "AOX",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xf3a4b52bf0d1fcb8a81123f44933edbc35af4da0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ESS",
    },
  },
  {
    id: "0x5a32f72af005313479cf282366fdc45904e7a108",
    token0: {
      symbol: "HCANE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5a236498dabc1f13791a8d7f25422d4bfe9cdf90",
    token0: {
      symbol: "POW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd23ab8e8caa48215596db24fe84465f92bd8d95d",
    token0: {
      symbol: "NFTA",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9926285361acf7461105b464ae9ea683dfb06b83",
    token0: {
      symbol: "FMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7e93437d831309fef03c869831f1af0b578ca115",
    token0: {
      symbol: "KKB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5a5a7b8a3ea0b61395c5c1ac584fe657b849bd78",
    token0: {
      symbol: "RayquazaInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcd670b9cd89954ef29d9dfb60e60ef2c94d6276e",
    token0: {
      symbol: "FLOKIFS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x87f424afe68d6cef8141342f485cff01ee69ea24",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TORRO",
    },
  },
  {
    id: "0xd91c72da93288f00385e3c2ead75623ebedf9272",
    token0: {
      symbol: "EL",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x7606f5a4f9e3b2d97dcf361ad8013f0f46c3c75c",
    token0: {
      symbol: "MGN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1fecb1fb15c0be7be7e099657b6f3353499d4de7",
    token0: {
      symbol: "TKMN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf2b5bb521c84dafa83374053536d535db06cab86",
    token0: {
      symbol: "LIQX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96ce73f50e8e08d9cf10a38f0cc4029b03d94f3a",
    token0: {
      symbol: "MAKIMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x00030110a7053083a7a160449a0e8f1adce9438d",
    token0: {
      symbol: "SOMEE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9adefc2a22e135be233ea0b0b06c4f43ffec1cb5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LAIKA",
    },
  },
  {
    id: "0x4a8b977a0098b9ac8f6c8dc4c0e81596b1d67bc1",
    token0: {
      symbol: "META",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe04c1a564d8b42a589f25dba20c2a210fb875c17",
    token0: {
      symbol: "VOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x31ca4b5e5ddca54b29e365fc80dadfd8500d290b",
    token0: {
      symbol: "SPN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x114e40ba90e9d8b002bc6936e3299daa393017bb",
    token0: {
      symbol: "DPL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd563809827023e5b1160b554b86fe47f50cf9c44",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CORGI",
    },
  },
  {
    id: "0xab81fff5862bf095b42941b71c6c80521aa28da4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHIBENTO🍱",
    },
  },
  {
    id: "0xdb312a0952705484f3c685074f547c877eaa244b",
    token0: {
      symbol: "ETHC",
    },
    token1: {
      symbol: "DAI",
    },
  },
  {
    id: "0x2d2a62eaa0e124ae7dffa348323e1b6a3f15e4a8",
    token0: {
      symbol: "TESLARATI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x44db937d83f2e480aac453f851caf373b607054d",
    token0: {
      symbol: "BELON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb8342778bf84774556f162a6bcad1993d04fb398",
    token0: {
      symbol: "RSV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdffe63e20da07dce94257940fb3c437da2f61bf3",
    token0: {
      symbol: "FIBO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe9a9c5f2a9919d9a8f176cdf6679ba2bf8f2896f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VAPE",
    },
  },
  {
    id: "0xc139d8450177c0b8c3788608518687b585f7ae5a",
    token0: {
      symbol: "SWRV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbd1cf6a945ef8be797738103867dbef89aadf57a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHOKK",
    },
  },
  {
    id: "0xade3c07b918fc93e3dc3864e601501db9fac75d9",
    token0: {
      symbol: "VEST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb2c8b1b0e27e74f70345bca867c416bd41885581",
    token0: {
      symbol: "CBR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x941f5fd8a83b0d78d49d2fb53b8eb40985436f64",
    token0: {
      symbol: "DPInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe41ca68a146a9598e88cea57b95317d6082372ad",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "ANTC",
    },
  },
  {
    id: "0x5decc091709eb109bab4f1d8d8dcfe249e03573f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHEP",
    },
  },
  {
    id: "0x4b5b1334902439cd2cfbb19f63aad59e03ff83da",
    token0: {
      symbol: "RONALDH-INU ⚽️ 🏃🏽",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xea37e022c018b3bb28cc447152f92393cf61d699",
    token0: {
      symbol: "HAI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x925b9276527a184265a4eeeeb9bf04fbd68a7ab2",
    token0: {
      symbol: "CTAWMINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa478a97dc8345345dc761b3f666c5cf00de2fd6a",
    token0: {
      symbol: "DEGENINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x58d5fc5e122e094d1ce14efe56d9bbd8259b1041",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MINU",
    },
  },
  {
    id: "0x55098109be0e7840b45d8cddb361665f983fbba7",
    token0: {
      symbol: "SCOOBY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe41e01a3231c0f19bacb9baee26a8554e0796391",
    token0: {
      symbol: "HGET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xebfb684dd2b01e698ca6c14f10e4f289934a54d6",
    token0: {
      symbol: "UNI",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xfeb1d3b299477bacfe5583d6979386f5a50cdd7c",
    token0: {
      symbol: "CPSHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xba8ed112c5ceed4b3d770d602c2f29b78d8ec201",
    token0: {
      symbol: "CORN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x94d24895045190e623997b0e25034c4d0ab32381",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HUE",
    },
  },
  {
    id: "0x0d1474853aae16a2225b7eccebb2e57953a7974b",
    token0: {
      symbol: "MSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaf09f8660fe8493b2c63fa13586793a4b06aba8e",
    token0: {
      symbol: "Nappa",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x39314ac39a667ab5a449f6c08f3c54840b4ceea5",
    token0: {
      symbol: "2020",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1b67afde9f800c86e0c27bcae4bde1ce5ddf5883",
    token0: {
      symbol: "KAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x056bd5a0edee2bd5ba0b1a1671cf53aa22e03916",
    token0: {
      symbol: "RTK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d1d4caf69bea15015361b222afce7c75c5070e8",
    token0: {
      symbol: "SPIRITED",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb551cefd310aed805b091d0e397780fcd4e92691",
    token0: {
      symbol: "SPACED",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6a920af7398d1c9a8a6930543220727233fb0cab",
    token0: {
      symbol: "BRNG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb1637be0173330664adecb343faf112ca837da06",
    token0: {
      symbol: "🐟",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4cb57a0b9298cb43b21cea7eed1cdb8f05e60131",
    token0: {
      symbol: "MOONPUG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdc1056c6ed3b56595a05251a835269700f0cc33d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHIBUNCLE",
    },
  },
  {
    id: "0xf83d45f241a1413e9431f77849e23d43b9d81d3c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PXT",
    },
  },
  {
    id: "0xeb197bde5ac4128f4ebf8a78baa23593022459e8",
    token0: {
      symbol: "SIMPSONS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x11cb424e72e5929f3c3dc1f637800e697fd8c072",
    token0: {
      symbol: "DRC",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xb269d5b202596aed836da504661b749b98104758",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Punk Inu",
    },
  },
  {
    id: "0x97e4a80335cb605beb7c3866ebc9e1f81acc16dc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NFT",
    },
  },
  {
    id: "0xedf1fa564a91a5664f172470c47450af17724757",
    token0: {
      symbol: "OCC",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xaadb00551312a3c2a8b46597a39ef1105afb2c08",
    token0: {
      symbol: "AXN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x85788388a42c0f16533c0b84d2bcb2f4662c6a0b",
    token0: {
      symbol: "WSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb7aeeddaffef037dc95aee8f9e3658fe7c38eaa6",
    token0: {
      symbol: "Fatshi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0d54157df3af7d292d9226b4d7e6505b20ea8df",
    token0: {
      symbol: "TheOfficeInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbd39d3822755c20a7173354f5087309ca7b80ab0",
    token0: {
      symbol: "UAX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc6bc9b105a37d11b44654ccc3ba5f76098f2ca38",
    token0: {
      symbol: "PSWAP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb2479047528fe453eae9cfbf86c1ed1fb05e0d15",
    token0: {
      symbol: "CROPS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd4981ed8892cacc135192385de05b19684231e74",
    token0: {
      symbol: "SST",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa29586ddb3ca156be1aba63d4d0b0a9db44060fd",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FLOKIPUP",
    },
  },
  {
    id: "0x2ad6b441031d94704281122c84f8a2f01b7806fc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MetaUniverse",
    },
  },
  {
    id: "0x78bf78ac09c891a6538b93cb90b0b2496a0746f8",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "ZUSD",
    },
  },
  {
    id: "0x55350f984476a5e9f49c0db4fb5ace12a4407c09",
    token0: {
      symbol: "USDN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x465a9f01aad291dcef3d2a02b7de9608ae152da2",
    token0: {
      symbol: "MTR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x44078c6785764aede03a5d0bdf3faa5c015f274b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HASHP",
    },
  },
  {
    id: "0xd42e338a6fcf2e343afffd4eca59e8eca64bad39",
    token0: {
      symbol: "SRK",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xb2370da908708cacc2c8a5ce903d023f525ffde7",
    token0: {
      symbol: "YCATT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8aa34c7866da901b3b55d162821ef3dae87851f3",
    token0: {
      symbol: "TRSH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x97ae32f530a68a097c5587101854fd8c4789f09c",
    token0: {
      symbol: "COOL20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7650a5ec2fc9d1457e6c0899c52e5cc31d59df50",
    token0: {
      symbol: "POKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5519956ac7127abd1e917606749a9c7fa34d8dd2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PINU",
    },
  },
  {
    id: "0x57cf96505ef9ea5d01e14172e7a13caaaac82a44",
    token0: {
      symbol: "GST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xead8b1d22de2e7c366da4a526806236acd651192",
    token0: {
      symbol: "uSWEETS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2659ee0871952116b47da21c02ff154c22712bfa",
    token0: {
      symbol: "MaxxBurn",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdaad4c9a94c15475ad3eef3d5e26ea573311b467",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PACMAN",
    },
  },
  {
    id: "0x7290454b64cc7869bd18890ec759d1902b777e53",
    token0: {
      symbol: "ACX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1c572228cb6590b69ae53f2814cfe44a114a1af4",
    token0: {
      symbol: "CATS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c3c158fec9adc51390f8986e904bc6ca24b95e0",
    token0: {
      symbol: "KOMBAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6a41dde98df46702788f048b1f7c732dd110fcd5",
    token0: {
      symbol: "BOKU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6b1c69edcd1024ea9a61a074178f1aa95a531c3c",
    token0: {
      symbol: "SHOCO 🍫",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb17dfa9a36f17767b9e5dbdefb3caa8a696c72e2",
    token0: {
      symbol: "UE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x082109085ecf28fdf7c861780a45a32180b46663",
    token0: {
      symbol: "MNTP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x58e79c4ad815b5343478f11933f5956134861b5f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "GENGAR",
    },
  },
  {
    id: "0x18b0ab1d4d27b29c08003395c2a0fe652a25dd1c",
    token0: {
      symbol: "ELONDUCK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9945b3526d47440299a28ef4e0c90ae176c4c200",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EEVEE",
    },
  },
  {
    id: "0x8db137c518d7135972699728f794cb553a43c7fc",
    token0: {
      symbol: "GRD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3ba2f9c0dcba4bf9599a698960204187286666b4",
    token0: {
      symbol: "LYN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x96ec87e11b230f6c16027e1ec34999b4ba0732a2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BED",
    },
  },
  {
    id: "0x49e58b32cdbe1350b80af6255578c2a00634d48f",
    token0: {
      symbol: "sTLP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf77d2998d99bea23335c58d696bf75c4b13344ac",
    token0: {
      symbol: "SETS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0dac156ecad13d05bf727c2a31eac270d235c000",
    token0: {
      symbol: "NWSET",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcc359e1142ebd9c0abba0dd8018a7fb10f441114",
    token0: {
      symbol: "MSF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x46763687604bfcfc5642dad3460e64a4fd6a2445",
    token0: {
      symbol: "PETRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb8ff1a7b1a505da18b3f877ac0c83f6d909d5021",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "INTOXINU🥃",
    },
  },
  {
    id: "0xc62856e7acec82f67a1c1c812e1b560affb6ce87",
    token0: {
      symbol: "Shibachef",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf956cdc8f43637f34f4be368fa1cb7da01d622be",
    token0: {
      symbol: "AIOZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x650e8b9d20293a276f76be24da4ce25f2d0090fb",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "FMTA",
    },
  },
  {
    id: "0x3bea3393143f015a4d8454ec1aa3d26cfa2c6c2a",
    token0: {
      symbol: "OFD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf67d918d13cedbf0c4c1f45f970fc82017fe13f8",
    token0: {
      symbol: "LUCKY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ec4eea2b0b1c6aa05743e30389ce4c20e1ff41a",
    token0: {
      symbol: "EPayMe",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdc3e94ddf605864b79fce18c7cf974e579001e7b",
    token0: {
      symbol: "QUICK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc7fe3e6bb510708462168258dcb2a369ed0759e5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VIDT",
    },
  },
  {
    id: "0x55eadd52b08801ac7eb2135dd2435b13db86ba66",
    token0: {
      symbol: "STRIP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa0e92b7af5e4d5800a93c80ddfb709263cf8d121",
    token0: {
      symbol: "MUSIC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x45dc775cbaf9b148ede53e2702bf525d97254faa",
    token0: {
      symbol: "VDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x09539705838eea6661633d568f77bc10a02cf375",
    token0: {
      symbol: "WAS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6758ec2996b238bdb17a4b6fc84f2987b1f0b74",
    token0: {
      symbol: "BabyFlokiPup",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xeb590c0f7b99dd997be81b2a163154459d5815d6",
    token0: {
      symbol: "ESHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd02ac36f729b867174e7361d5f272c542c71ad73",
    token0: {
      symbol: "CSM",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xf8c76def7b1aebd08b5ddf0e43e1cec9f9bae999",
    token0: {
      symbol: "SUP8EME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6788e46d7c04c8dd6999065ebb71837cc8c6eb81",
    token0: {
      symbol: "SCINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xad4e4954b2f22525f5c9d7e7182fff9cf251d0f7",
    token0: {
      symbol: "MUSKITO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc049c2e62b8861b7f8842e41f4246b2e9ba18741",
    token0: {
      symbol: "WOOINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5603169b3da83dd1f7799e716bf82d24207dd933",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DORB",
    },
  },
  {
    id: "0x00f5e5b8cbb3c91a82fe82eb5fbb023543723093",
    token0: {
      symbol: "GNBU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x37e8e9fa75c78d55ab3a3849879ffaed0fb3a2b2",
    token0: {
      symbol: "LBD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x927a4aae0c92cdd84b3bb6a2034a299eccb27f7f",
    token0: {
      symbol: "MXX",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x98d5ed061afd0a1f9ab6e965867571df1f4665ae",
    token0: {
      symbol: "LionIsland",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x75ef598c229c24c7ce6fe17fa2b7eedcad1035b5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EMOJI",
    },
  },
  {
    id: "0x5ca3ec07fbf4e2d84224274dc52f2d494eaff1d6",
    token0: {
      symbol: "spSHIB🦸",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd76314797e3b7614de24229c94e116b112205b70",
    token0: {
      symbol: "AKA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x34a2820ccbfde886b1a502ee9a85fc151b34dfc5",
    token0: {
      symbol: "KOTH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa005d93252b6d9d40432a69e278168e2be947dae",
    token0: {
      symbol: "BDOG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4fd46419ee4f7f0d84aae6144ebc90e30ae639ba",
    token0: {
      symbol: "YFFII",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8a5dc20ba6e82dfa31d9dd073538c6443bf0f978",
    token0: {
      symbol: "KILLKENNY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcdc1122c631ecab7a6f50c82c33b39267e97824e",
    token0: {
      symbol: "PDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x524847c615639e76fe7d0fe0b16be8c4eac9cf3c",
    token0: {
      symbol: "BUSD",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x7429d733cd96bffc7474ec9b8c838420701b6b18",
    token0: {
      symbol: "TCT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ec9b867b701c1e5ce9a6567ecc4b71838497c27",
    token0: {
      symbol: "BiFi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x08eeed38253af4c0a86fba4fb48051c823827454",
    token0: {
      symbol: "PEECH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d45495f97a9d81571958608c939672c197f2a65",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RAC",
    },
  },
  {
    id: "0x403c44db8818a26527f0d36782418193a269283d",
    token0: {
      symbol: "MEVE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5fa9569b0ed6aa01e234468e6a15b77988b950df",
    token0: {
      symbol: "BLZ",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x6af1becb78701f5919adb6f6932965abe4547763",
    token0: {
      symbol: "KELPIE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x212dae2d4283b26aeb879a81274285265a8a560d",
    token0: {
      symbol: "TANJIROUINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0555f052da0a50d39369b0f634855edc858baa18",
    token0: {
      symbol: "DEXG",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x18217fce741498f47127903c15d615b958405a01",
    token0: {
      symbol: "APUSSY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa959a6a902bb6b9abe8267e9c205d7aaed134d50",
    token0: {
      symbol: "JIGGLY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa12aefc8d46015385294222a49519c6f0b69ed70",
    token0: {
      symbol: "Metanaut",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x29845ca426e74f815a2482ad2dd7b0c79b4db3ce",
    token0: {
      symbol: "GOLDEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8349fbbd8f229b0b6298e7c14b3778eadf4426dd",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HXY",
    },
  },
  {
    id: "0xba3d533d9bf6532f66a90c14a57407e1cd7f300d",
    token0: {
      symbol: "PPC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd85a3c333570151e78416ad494d872e8aa9b54eb",
    token0: {
      symbol: "TAIL☘️",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd37805fac3b599e24395169b29c809fc7096cee8",
    token0: {
      symbol: "TRUE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9e402a723de15635f34474d311b30674a25e84fe",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BLUORG",
    },
  },
  {
    id: "0xa7601459b1afdc78ebabcd6e7f7305dd8ae07650",
    token0: {
      symbol: "BPOP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe0a08fd1366b5b4cf256db1a85b6eb0e01aacbce",
    token0: {
      symbol: "STONK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xabbcae34df06c9b530a49082d5a4616467d3460e",
    token0: {
      symbol: "CATS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9b2662dc8b80b0fe79310ad316b943cb5bb15e8b",
    token0: {
      symbol: "UNI",
    },
    token1: {
      symbol: "LINK",
    },
  },
  {
    id: "0x402a1cde58b1273dfc5bfb26a6f83f87177f6650",
    token0: {
      symbol: "MSC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1964cf3d1d95965eeceaee11debed99223524f48",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "WWGR",
    },
  },
  {
    id: "0xf06045cc376e4d0ba55237b22210fdb81d6d617b",
    token0: {
      symbol: "$DBTS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xab659dee3030602c1af8c29d146facd4aed6ec85",
    token0: {
      symbol: "GHST",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4b618087dae7765823bc47ffbf38c8ee8489f5ca",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SASHIMI",
    },
  },
  {
    id: "0xed66641b26b0d64ed0759b2e6682275f84e4fb73",
    token0: {
      symbol: "IPM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x38eb983d7916def523ef089f3fd6e04ebd200abd",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MetaIce",
    },
  },
  {
    id: "0xa6f3ef841d371a82ca757fad08efc0dee2f1f5e2",
    token0: {
      symbol: "CHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdfea1870f3b3841de553cf271e5653a48d5f31af",
    token0: {
      symbol: "GOON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe92346d9369fe03b735ed9bdeb6bdc2591b8227e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PASTA",
    },
  },
  {
    id: "0xe9c1281aae66801fa35ec404d5f2aea393ff6988",
    token0: {
      symbol: "R3P",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f129f06d805a856f3b48d6e9871af841534c8eb",
    token0: {
      symbol: "LAVA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb9648d4ed92747e76dbfc5bedea64607970cb7a",
    token0: {
      symbol: "GOLDUCK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x31de7146b3a309782e080fedf9829dd67dd6c76a",
    token0: {
      symbol: "bPENG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb380be9091a7427bee9757e91f56bd26bf2901a7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PINKI",
    },
  },
  {
    id: "0xad1d73d9d8c5126e37832cc593a3636abb471acb",
    token0: {
      symbol: "FEVR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcc7bea194e6d4ffe964af0ece2d00c5af00f260d",
    token0: {
      symbol: "SHURGER 🍔",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x006d3b48cae4a7ecfb50bd96ec590b3f6b6a3be2",
    token0: {
      symbol: "SHUBH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf84b793e3e3a6498d0f1d266397ed1172f5b585c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RUBY",
    },
  },
  {
    id: "0x8e1a035566f45909c7492d28bd4069bb2ec7c422",
    token0: {
      symbol: "BRS ☀️🐂",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x107462b7dd40055dc6a76b2486ba45e0ef7b0dc2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MARIO",
    },
  },
  {
    id: "0xa85dc4255ba1ba6c72fb59f7e903970d42c7cd07",
    token0: {
      symbol: "OUTTASPACE🛸",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xff58711683be66dad6e0e20e0043af46fc7f5f49",
    token0: {
      symbol: "CHZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb99050581975adf1747b0f92b90fd885d097246b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SCORSO",
    },
  },
  {
    id: "0x457ca8a5e156ab696b208f493c8a850167d15811",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SOS",
    },
  },
  {
    id: "0x7217b0797197d22d60deec4da736a1067a8a0318",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MOONELON",
    },
  },
  {
    id: "0xec43f9940517d018e09577b8ec7629983c643124",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CANDL",
    },
  },
  {
    id: "0xa02b22703bbd60ca2145b64ea55dd2cdd0bc2a65",
    token0: {
      symbol: "PEAK",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x24db20f4bb91b42b07eabd5087cded033e17d400",
    token0: {
      symbol: "DUEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb22b6c218df8b489f8f13f9acc76c44038783418",
    token0: {
      symbol: "KYUBI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf8af77ab50ed2331749897942401fe3663d03b38",
    token0: {
      symbol: "PKD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x149a2d4562ac97c8842d9542d6ad23ea91480292",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LGBC",
    },
  },
  {
    id: "0x3d153b610cc21a569f80a87c9f914203d5ed4f07",
    token0: {
      symbol: "WSQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa60fa9a27232cd73a591372d72ecbbbf7e9e0711",
    token0: {
      symbol: "MODEX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x20ceb2665356e9b78c4dad7aa8e38aab5251626a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KINGSHIB",
    },
  },
  {
    id: "0x3263a53d31428ea23388c384070ff5aeeafd18a7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "StarDoge",
    },
  },
  {
    id: "0xb61ad96a6ad55b7d782a1ef12be08a2a080ddf3e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "NIFTY",
    },
  },
  {
    id: "0x1902c5f73c28f6ed40dc15432c862f95affed25d",
    token0: {
      symbol: "SENPAI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3d52401f08dc655b7bbf468bf9f6bdee40c77a2b",
    token0: {
      symbol: "TAP",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xa4b063c9e5f372d800d11bd9a245f0d4fdcca379",
    token0: {
      symbol: "SHINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x35a1f588dbd86446a4eb8133ccc96e3db0e65be4",
    token0: {
      symbol: "DOGZ",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x81addf7f8b5903427ff3f493eb7a421cfedc0a37",
    token0: {
      symbol: "ELONM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x845653ea33c045f9819b89e687f753296c49c16f",
    token0: {
      symbol: "JEDI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe4bfef5320f3daeb09273be56fe7fb39e6bf2d3d",
    token0: {
      symbol: "NPX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x506276d09f18db8d3ba93e39e9a1175fcc61c89d",
    token0: {
      symbol: "SQUEEZE TOKEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x412df40a180cf61cee937bc37e8f1e0462ed5f4d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ROYALC",
    },
  },
  {
    id: "0xf0c0dabc00b675c93209e48136d8138cb03e04e7",
    token0: {
      symbol: "dNYAN-2",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x307f60a2955b69f727c77b6ce41eae6192e3763a",
    token0: {
      symbol: "BONINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3c3334317fd76bdc896de45d97a14d6d121eea25",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "JT",
    },
  },
  {
    id: "0x95c893e6b5f81067cac4d46ffd453617e31a7d9a",
    token0: {
      symbol: "CORGIB🍑",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2c4e356752cf52acbcc0413eab8320d29f219745",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BULL",
    },
  },
  {
    id: "0xea0445461740124fb188e58ee26f893e583b3f8c",
    token0: {
      symbol: "COREkiller",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xff40805f099e74716d72c4ad03a8a8713c8b1940",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "xDOT",
    },
  },
  {
    id: "0xd7df451a1e09ca890a43ffcb163fcc52c268f5e2",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHERLOCKSHIB",
    },
  },
  {
    id: "0x06ad23978f67ae8cc76c54b74993b31a816bac2b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CONV",
    },
  },
  {
    id: "0x659a9a43b32bea6c113c393930a45c7634a242d5",
    token0: {
      symbol: "erowan",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x69464a0d1a206d02d1fb514595b08ddeb028abd0",
    token0: {
      symbol: "SONGOKU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x87cbd73db17d2222d4f3a1a26f9e10a99c375957",
    token0: {
      symbol: "RAKUDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x637b9a04c2802b1e2bb073886c531bad9a2a9fb3",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "PCHS",
    },
  },
  {
    id: "0x1e8703458ad891fbf78c9320cd78a343fb2f73b3",
    token0: {
      symbol: "CAT20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x20e2d42a516d603e5528b81fbc7459f3a9147c00",
    token0: {
      symbol: "LILELON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9d7a50e8193b3a2a7feb697d92baa1915ed462ce",
    token0: {
      symbol: "SITH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa0eb9b10d9e24ed8e0910f204118f44af7bf7cb9",
    token0: {
      symbol: "MOMAT",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x9e98466ba15ad5ecdcb5e061e7906ca5c0a327a1",
    token0: {
      symbol: "EVDC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4b4de2a7be0aba13e0270a96fd8bfa6669880f21",
    token0: {
      symbol: "JEFF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9125c73070f3b68c841924b3f1ca5e12922eb01c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRII",
    },
  },
  {
    id: "0x7820fa98cca35142992eadf8a3c5044e1a82ac34",
    token0: {
      symbol: "JPYC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x080b0ecc3f4115258c7a8241459eae26e7a9de32",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Shibarista☕",
    },
  },
  {
    id: "0x01d39ba3bda3df8b8a7cb1627f56eee91bce0c0d",
    token0: {
      symbol: "LMY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xade52c395ecd7486f9e1a9535acc48c8518a6c13",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LUCKY",
    },
  },
  {
    id: "0xd83f7fb5e42e27a9ebe2cf42d0c418d03dffa763",
    token0: {
      symbol: "HODO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4247b114c9d597be18a7a2426e86d3ffbb06ef32",
    token0: {
      symbol: "ISHMAEL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x371963925b23e39d783a462121762e1395c9ea63",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "BLEM",
    },
  },
  {
    id: "0xf91bb6c13f0709fc2845602625809cd61940ac81",
    token0: {
      symbol: "PRICE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd0319dbeec8d0799cc89abc74e37fc6403fbca0e",
    token0: {
      symbol: "BLW",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x03778cbf81dcc155c38d5ed88e46d3cbfbcb0076",
    token0: {
      symbol: "FrunkPuppy",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8dcba0b75c1038c4babbdc0ff3bd9a8f6979dd13",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEFI5",
    },
  },
  {
    id: "0xeef4d071152281ab7cfdb3e7fe47cf6c3a1d5937",
    token0: {
      symbol: "MATPAD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x26e49a269b144e458edaf4707d41cd3ca825f81e",
    token0: {
      symbol: "FRDM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x83a870bce7a8aa9416f13c4d209145fc5685c1a5",
    token0: {
      symbol: "MYRT",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x94e5f94e515aab2dc7a58ecc73a958cbe7beb822",
    token0: {
      symbol: "MINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5655b582d90e0359d0217a1a7761de0715748c51",
    token0: {
      symbol: "PING",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xf1e4af05bacc0190bdf14bbf809621fe8e03c095",
    token0: {
      symbol: "DOGEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcd23c4893db25c8a3490561194f80ff3f63d6b55",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "F4",
    },
  },
  {
    id: "0x6f784ebaa025a68a67317c24f557dc40859d23dd",
    token0: {
      symbol: "BOOB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd6487be0cdb6331187db638f433907e34854c557",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEFIN",
    },
  },
  {
    id: "0x6decf7f1e40f51260784ed5c2667f61ca84ca1c5",
    token0: {
      symbol: "ELITE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf5f0fe6c303904cc2772516ee64c52ff4cab900d",
    token0: {
      symbol: "SNORE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1ade8e753ac0016d8fbf9b0c7a04669a710c2e14",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SAITAMARELOADED",
    },
  },
  {
    id: "0x1b60697f6b7aae81ad69a6440210f70a2d40be2b",
    token0: {
      symbol: "EGIVE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3322af94315bb7b2cb468e7290452807bcf9154e",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MIS",
    },
  },
  {
    id: "0xe0d4a70d23b866ffc6ead27b0c3e990d087b9f11",
    token0: {
      symbol: "SPAGINU🍝",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd9b1f83c6325d0f29c8604ec7e8e8588b1d33e67",
    token0: {
      symbol: "LTC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfa7ebac013432242bdd688523f1f35627caa512c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "$JINDOINU",
    },
  },
  {
    id: "0xcbf00c846d3c28babfe65e7dadfd48eb92ee85e6",
    token0: {
      symbol: "DRF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x90aac07a8c5f4a050e2cd4fac987a47949145172",
    token0: {
      symbol: "VAULTZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6f62a87ffb72e2f8c435efb2a6696b8a191d9067",
    token0: {
      symbol: "FROGGIES",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf55db1ee16fa5be86335688d2a1a6f4d439ca4bb",
    token0: {
      symbol: "CRE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xab5c6b6c37b78268d38ea2fcd1463914fdb334e0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AOGE",
    },
  },
  {
    id: "0x00291e2f1839ba80ccdbc1c0e45245946908e0c4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "vMAX",
    },
  },
  {
    id: "0x7787aa9fec7cdb3e20d92fd5105c1f195690cead",
    token0: {
      symbol: "STARMETA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5379b9d2b7a873d220ddcacb1930fe2d51c98a94",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "RAIJIN",
    },
  },
  {
    id: "0xdf8d63ba1227b3cef95df534fe6f153f571619d8",
    token0: {
      symbol: "LOG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x62008a04401662689467f5ee5d57c4863adabfc0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FR",
    },
  },
  {
    id: "0xfac08a488f366f245f65781305b7c1ce204761f1",
    token0: {
      symbol: "SOME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x90704ac59e7e54632b0cc9d22573aecd7eb094ad",
    token0: {
      symbol: "CRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2d95db119fdad46a1fc5b73d940507a074c0396a",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "OSAKA",
    },
  },
  {
    id: "0x46af8ac1b82f73db6aacc1645d40c56191ab787b",
    token0: {
      symbol: "NDX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7ce01885a13c652241ae02ea7369ee8d466802eb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "TRIBE",
    },
  },
  {
    id: "0x394481b3d4ec4fa6d22579148a2f609ae8256fde",
    token0: {
      symbol: "QASH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x526914ce1611849b9e1133ff8f8b03a8faa295cb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CRD",
    },
  },
  {
    id: "0xe818dd41fec180de8ee1faa09b6e0850541d4def",
    token0: {
      symbol: "CTUR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6308bd9afc3b00f31e5fe84edd8b4cd5392da1c8",
    token0: {
      symbol: "Shibeuro",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5fe4d1596d3e9c8eee1abe8aa6847874dc7077bb",
    token0: {
      symbol: "CATZILLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0ed2484dd400b860cb70ecb43ff8bf20b7dcf0c3",
    token0: {
      symbol: "PNZR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x76d3142ac9891aa69bdb1a96eabb907561596ad3",
    token0: {
      symbol: "DINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x426fd0d2f1e7ded9d9d04833f72171aabcc013b1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SPIDER MAN",
    },
  },
  {
    id: "0x93b26a26eb039b5538df7378b6258eb4310776b4",
    token0: {
      symbol: "DFK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf334f85f1e8302fda29e6fe91f5791c354e369bb",
    token0: {
      symbol: "MIMETIC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe13d315a73e52f04198bb7fca57b4b937f75eb25",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Key7.net",
    },
  },
  {
    id: "0x6160573a4349490bcedebeb0da91e04e772199b4",
    token0: {
      symbol: "EGOD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xafbbe9a309ffd2dcb835766a067028572883966a",
    token0: {
      symbol: "SMETA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0878619782678bbd52a4fea4ea38df837dc94e48",
    token0: {
      symbol: "PFID",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x909d7b4a93480d73d8af49c7e2ed07eabddd0738",
    token0: {
      symbol: "SPUMP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcc776600dcdc7d2d147e5156e27983acfde5b039",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DACC",
    },
  },
  {
    id: "0x48f4a6c65abb4b209823771b0d2c0f156ee6268b",
    token0: {
      symbol: "CAMO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8a5d5864ccca335ec997bdf42dbd32ccec0b1d5e",
    token0: {
      symbol: "TUSD",
    },
    token1: {
      symbol: "QRX",
    },
  },
  {
    id: "0xcd1d5ff929e2b69bbd351cf31057e9a70ec76291",
    token0: {
      symbol: "FRY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2957215d0473d2c811a075725da3c31d2af075f1",
    token0: {
      symbol: "ORDR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x59b7fd5e8cd76f15555b051a5b6d5fb708ac5b9b",
    token0: {
      symbol: "ALUCARD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb581024be52e86466dad4c7cb193e7481439b0d7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "🦍APESS",
    },
  },
  {
    id: "0xedf187890af846bd59f560827ebd2091c49b75df",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "uSTONKS_APR21",
    },
  },
  {
    id: "0x9791ad4f7272b773017f3cc05c0b23451a5b9fe5",
    token0: {
      symbol: "Miyazaki ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x24aa2fd76ee60ce25e9918e7ef180f8d68a14124",
    token0: {
      symbol: "GBI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x775031aebfe75396296a5ff4272e3036683787f5",
    token0: {
      symbol: "TKNV",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x5da0cd9bf632d096b0e9b01e4c225d1a1785451a",
    token0: {
      symbol: "PumpkinInuToken",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb6a0d0406772ac3472dc3d9b7a2ba4ab04286891",
    token0: {
      symbol: "AFI",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x794b480fa8cea055eabd8d551ce2c1c5e5fe2add",
    token0: {
      symbol: "Solare",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfb7cb766d5e06a60f756c27582ce05704b3ab496",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FREN",
    },
  },
  {
    id: "0xf5c33107c7697afd67cef88342aee417a9d614c0",
    token0: {
      symbol: "AVO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x96a3293cd829f2305caa40f04ee90d74c7b7426f",
    token0: {
      symbol: "SASUKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf926ded9e8b730430adf096cefb85b0f4801d2ff",
    token0: {
      symbol: "PBULL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x876f513e9f9109926e88d7609caea9c45e527c0f",
    token0: {
      symbol: "dNYAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2a18e0a9cd83962c9bad282c2a88eee7f751406",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YFIC",
    },
  },
  {
    id: "0x06ff81adde99f150392b3c942a5abe60cc693356",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BANK",
    },
  },
  {
    id: "0xb6326cf9ca32bd13e93debb9a90b7afb49872f90",
    token0: {
      symbol: "KINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8651cc8ef61e13896c060643d778e5ade55d4115",
    token0: {
      symbol: "PLE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf1ff4c672dabf9aea4813dda6de66b860b0970b4",
    token0: {
      symbol: "BLT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xecf9dc556c0d7b3500cdfd6fb69fd9a200e2c0ff",
    token0: {
      symbol: "MITTENS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb63d5be4b3fcc085f2e3a18103deedd3d46d635d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ONE PUNCH",
    },
  },
  {
    id: "0x4c5689c4ff7d6dbae85a4eeed9423bd477c45b0f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "iBAN",
    },
  },
  {
    id: "0xe221948fd2cb35b7cb6669df5352899e9a2b1ca3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "eTESLA",
    },
  },
  {
    id: "0xb5cfb14bb224db5c69dcb48c38dca8112aebe5f5",
    token0: {
      symbol: "FENRIR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6ca22111b54cd07226f7863d3ddbb4763911d254",
    token0: {
      symbol: "SPACECAT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe62b65488c69025befb4c8d03eeee2f534878752",
    token0: {
      symbol: "everlinkcoin.io",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd124502c72563f25ba96e7d8c9fa48efe62fb095",
    token0: {
      symbol: "GREEN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1f5d35f0f7db218992771866d2a22c2295687a40",
    token0: {
      symbol: "DXCD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1fa0e1ba4be417145b8cef9b3d299b8b41d8c983",
    token0: {
      symbol: "USDC",
    },
    token1: {
      symbol: "MTL",
    },
  },
  {
    id: "0x81d83e2b5fa6d58e61d44dc8945cd5d1ee094982",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHIBCO",
    },
  },
  {
    id: "0x31aa90e40bb9a9b2a7e84e56b4174d193e8627b1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HMBE",
    },
  },
  {
    id: "0xc37072cc14f55704170900cf63a216e5ff58d387",
    token0: {
      symbol: "YZUT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4fd2cb2677f8515a10151a008a79d4aadfaea357",
    token0: {
      symbol: "EZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7990518c5547d30c07717bd362829c26b227ab21",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ORNG",
    },
  },
  {
    id: "0x8303f220b13196d3b5833e973c4062368087d681",
    token0: {
      symbol: "BNFI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x17575e988bc7b45567bb18d67bd8fb6aa647f7f6",
    token0: {
      symbol: "BANGK🐾",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x099f5f0d4fc3bea3c0aa77813ea21b15b6427188",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BET",
    },
  },
  {
    id: "0x4175ab713f5088fa3d5324f84b46f09c9ac8587c",
    token0: {
      symbol: "eSafe",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7dd3d476dd248014e38fa3ab4792d807ed9dd117",
    token0: {
      symbol: "SSWIM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0efb613d70c056a514876391f5e2a918e166c27f",
    token0: {
      symbol: "CMI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x12c740bc4f0c99912ff8bef028270e2fb23adead",
    token0: {
      symbol: "POO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xea2dd9badcb871153971ea4fd95db8a4d9d5c608",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ONETAIL",
    },
  },
  {
    id: "0x39e67d5ad0cba708d30fa28e2090ae8aaed35789",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KabosuInu",
    },
  },
  {
    id: "0xfd1aab13d3f48abd7bc6604e0980ee390410a5be",
    token0: {
      symbol: "EVENTHEMOON",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x178f1a72172a99f7f44e125de6413ea808713e7c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "XCUR",
    },
  },
  {
    id: "0x99c5c0f3acd7ad506e3877a76980c30a8988bb57",
    token0: {
      symbol: "FUCKVB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x91c155a1a2f9ebc90eb7546766b9bfbda1aadf22",
    token0: {
      symbol: "JUICE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc5a7f9c72f33dfbf9b3f2e2dfc8b40bd0499e92f",
    token0: {
      symbol: "CYCL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c95840bb3ce1d717138b3376473f2c021d7bc64",
    token0: {
      symbol: "RDN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf4d3c3ff3d7b2d27ca573b86981bb67e5a609a62",
    token0: {
      symbol: "FES",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0bef610a31b0af66b11dc8dd55f5ad0dda54c9ad",
    token0: {
      symbol: "DFR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x51695bbc8c08b8b56c8e6ab3231227bded241070",
    token0: {
      symbol: "SKT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbb12d6020e80e9f329f72f9d2209807d2e49d3f8",
    token0: {
      symbol: "EVA",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x185c8c3713fcbedfed3bd4881d8b9ca21590aae3",
    token0: {
      symbol: "NOBU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x114dd71371b7632a5da20d187afe736ab9929ae3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SMOLU",
    },
  },
  {
    id: "0xfb5c79aa89eec9d55e2392d268cc2a03fab356b0",
    token0: {
      symbol: "STRY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcc06a8f299df24578b6f2d142610b84bbf87c331",
    token0: {
      symbol: "HOUND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2aeb4cb9a9bff48cdeef591af1d63d8ee0b8bb6d",
    token0: {
      symbol: "PBAYC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x39acd49fd3c74c2f3f14ffb1894fd8032dd239c7",
    token0: {
      symbol: "miniSAITAMA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x69e89f97a053f4f28aef7807cb02012aac596acf",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FIRE",
    },
  },
  {
    id: "0xbc6ce71643204a2bc0090fdb21c71cd39645b519",
    token0: {
      symbol: "TWM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x005e5840fd5a4b47a4ac6acbcd887cf414a94944",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SEEN",
    },
  },
  {
    id: "0xe50b8c5ebe3b856bfcf72babc9e8e1106da4908d",
    token0: {
      symbol: "VMC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x554778e029880cf61cde3d89d746980c4d51591d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CESHIB",
    },
  },
  {
    id: "0x8b2803a71670644b87e22fa92d725b314977e44f",
    token0: {
      symbol: "MoonFloki",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x76325772f4fc2644e5ba627d6add48e7229e61a4",
    token0: {
      symbol: "HTG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9f77348a9ca3dc9f3090ca455e81613e3d856f70",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HUMANKIND",
    },
  },
  {
    id: "0x6bcacdf4145f02ba27dc32e7002b2a6d1b9fbf17",
    token0: {
      symbol: "DOnePiece",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfd376d56f442109861aa79f3aff462bbc970fb63",
    token0: {
      symbol: "BLND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd10fbeb5a461350ab48869c7d6d496051ee3bcb5",
    token0: {
      symbol: "FIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x78467084b9edc2672c28c5cd8f076dc6f2ec1a66",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KARMA",
    },
  },
  {
    id: "0xb62a703feafd53ba5d08105fa541e0bd885c541e",
    token0: {
      symbol: "MIKEJ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x362e36b48d2bb759db9a02cce6579ec46f21e4be",
    token0: {
      symbol: "GPSHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8955e507b78dd20ea0b901e87e16cb0e3a215dde",
    token0: {
      symbol: "Shib Floki",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe4e7af60340ece02cb6b1a2713b3730353cdbcd1",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YNI",
    },
  },
  {
    id: "0x04129464e030efe9ed7cac420f675810dbcc36b8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Shibrewards",
    },
  },
  {
    id: "0x7660881d3124a831c90a3f96777f4255f16bd920",
    token0: {
      symbol: "CINO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x36e07d820173b9941643b656b949d14e25333558",
    token0: {
      symbol: "JFI",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x86956e8056626d451b27271c8dedc5bc3df33b49",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YFIII",
    },
  },
  {
    id: "0xca24cf0ae6e854962c50d91e098115ec7ddd939e",
    token0: {
      symbol: "BABYJESUS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x44daa6247da5109f74e6fbe51d329146e5f85411",
    token0: {
      symbol: "ETO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x513f6bb1d10b06315cf130e452fcc7da51a9318f",
    token0: {
      symbol: "FUZZY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xffd22b33859874b2af6b99f4eff5d120b72caa99",
    token0: {
      symbol: "BB",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x9c60e3ba78adf6ae9d51fe72f803c7e8e517fa6a",
    token0: {
      symbol: "KEFLA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x91d9cc79efef98737f36aa6514898767274c1bfc",
    token0: {
      symbol: "ABFi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x32c7d193d40dafb0049a5fb385af4300c3aa1b07",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ZORO",
    },
  },
  {
    id: "0xd65ad7b9c4bf52e9c55b03a9b84881714de784d6",
    token0: {
      symbol: "SALEM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x51d287c63301d574eef7c7615bf02a19e9549b8a",
    token0: {
      symbol: "PROS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0e914bf7176f9608fdba21947e4bcebec12024a8",
    token0: {
      symbol: "JGN",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xc50642b65cb7ed3b36423f127c9f4f43fcd087e3",
    token0: {
      symbol: "AFRO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xad8770b89b56944e50cd7cece15fea6779992ff6",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PUNKINU",
    },
  },
  {
    id: "0x026512bab3ec9b0a71e40ee1d8414ba6d6a519d2",
    token0: {
      symbol: "CP0X",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x242d289b3eeb6842ce0fcc0d87932402299ae5b3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YLD",
    },
  },
  {
    id: "0x9c88f9e647d66c6797514a0f584c9215244afea4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KanekiKenInu",
    },
  },
  {
    id: "0xfecf0bf0359f90498441096962f8f38950bc2503",
    token0: {
      symbol: "$SCREAM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3b4efb68ab5243289936093b1bd5b130d351574d",
    token0: {
      symbol: "DOJO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe0eab06dd0e1ac197d20c452bcaa14e2d9d8bbb0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Utopia Inu",
    },
  },
  {
    id: "0x95251f98c45e283cd40aa7b42eee1c0a599c4d1d",
    token0: {
      symbol: "ROOBEE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9a780c8da67533614d6f1c5e8f19af0b03ad429b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "YLION",
    },
  },
  {
    id: "0xb17b1342579e4bce6b6e9a426092ea57d33843d9",
    token0: {
      symbol: "BOND",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6851980b723b4c02dc67e65dd438f35111a7eedf",
    token0: {
      symbol: "BabyPika",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdb976fc563bdb66fa9618f26ade6a4a0526e1373",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CHADOGE",
    },
  },
  {
    id: "0xae904569686346ebb0aa92e07934189f14c2f656",
    token0: {
      symbol: "DEP",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4849bb3f7fcad49437f3107a578e063677424302",
    token0: {
      symbol: "BETA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb62efb2fa5075e7526276615283cbd9a973f9e6f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DEF",
    },
  },
  {
    id: "0x577a872b3dc916963a7525f1e693677fa5c576d6",
    token0: {
      symbol: "THUN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8d00f9340ea945376bfc849b3913704e6e97082d",
    token0: {
      symbol: "CALCIFER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xbf119015b6c6f3d6e9681e20eaa2c7e877f06f69",
    token0: {
      symbol: "LICKnRORY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcb3dea96161ec997d4564b735cc3b5dd43ee80e5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ApMoney.org",
    },
  },
  {
    id: "0x29650fce92acb595bb13cdc5140ab053c10a4d7b",
    token0: {
      symbol: "MUSKETS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfb9bfeae382060bcf8d3fb8e87f38ddc434ac0a5",
    token0: {
      symbol: "SNOOPY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1917efb13cea34ce69683db2201ebe47f6f532aa",
    token0: {
      symbol: "FLOTTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4c4f05f0876592829b3caf81d394353183ed2b18",
    token0: {
      symbol: "SHFL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfe483ad4b58f1b9aeb6acc0a4568eeecc0c1fc92",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CMALL",
    },
  },
  {
    id: "0xe4fa0ae0bff44540515f38c36cacb38d9797bbd8",
    token0: {
      symbol: "MINTY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x44854f55a2407521444cfefce278eafdf74e0323",
    token0: {
      symbol: "NEKO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x54e9984a859f2618f4da3485654fbe484a3d3b58",
    token0: {
      symbol: "XYX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x79d605fbd3984489a335e8e3a48d20199b647617",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "CROP",
    },
  },
  {
    id: "0x5e072bbdcb4ed704763d8c9208179e05a7ca5943",
    token0: {
      symbol: "TANGO",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0xbd8061776584f4e790cdb282973c03a321d96e69",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BOA",
    },
  },
  {
    id: "0x86eef186e891d1b8d3e95f9633cce83bb63441a3",
    token0: {
      symbol: "HATE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30fae28c2e6b1cf6e1c3198fcb3710f164885949",
    token0: {
      symbol: "SANJI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2fa989eddf146537bc7e9872df221e2878e393bb",
    token0: {
      symbol: "GINYU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdf6b861b4fbcfaffb62dd1906fcd3a863955704b",
    token0: {
      symbol: "BUILD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x529530ed6b6be7cf8a1ef9b189cf8bc22ca5818f",
    token0: {
      symbol: "MacroShiba",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd366ed22f5b2262a2da4c32d8a4607c93690134a",
    token0: {
      symbol: "CHR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4e02a0695525c81fe467ce1f9b5388e3049b59e8",
    token0: {
      symbol: "BGK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe8edd9968245873176e30548147efdd13e0b22f4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BOSON",
    },
  },
  {
    id: "0x9a632cd9cb44f9383bf6f3117056c2455b30a6e0",
    token0: {
      symbol: "DENT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x502031a708821fedb31fac989cb174ad1ef520cc",
    token0: {
      symbol: "AURE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1a4154aa3fc63888a4181064e0a91f6e3382594d",
    token0: {
      symbol: "PumpETH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x826f02836d5a87c33e454461bf105dc12ad0ef49",
    token0: {
      symbol: "VikingsMoon",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2eec1a6f9762d45ca6f1aec36ff14ac53d4ada1c",
    token0: {
      symbol: "CBG",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x0b63f11eb665bf3ca35552ca8c48dd6f0a79460e",
    token0: {
      symbol: "MMMY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x334a8c120e045b3d506739e75cf43bae1827fdb5",
    token0: {
      symbol: "SONICINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x323d1e915b2d7b6773ba40b37c0661e5a5f9b626",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "VIKINGS INU",
    },
  },
  {
    id: "0xf295b0fa1a89c8a06109fb2d2c860a96fb39dca5",
    token0: {
      symbol: "7-11",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc2be5ac16d18891224819e7f2976f3c505bfc164",
    token0: {
      symbol: "SWG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8aa2ae38b3faf540425c9cf22fc1412f6779482a",
    token0: {
      symbol: "eStar ★",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x572785cbe7662c79dd3b508497905d31a3a1a5e5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Bulma",
    },
  },
  {
    id: "0x278fd401240b47692dd483c050377fa3ac6f6ba4",
    token0: {
      symbol: "EZ",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x7a2c8103a9c478cc2567e295d36eaa249d65e470",
    token0: {
      symbol: "DRAK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb200de2c4ac44bd469d2da62c9cbc425552ea832",
    token0: {
      symbol: "RINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf20ef17b889b437c151eb5ba15a47bfc62bff469",
    token0: {
      symbol: "LUSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0165b0fc62cf1a0fdf50ced97321430fd1693ddb",
    token0: {
      symbol: "AMBER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc91343f901403093054f388fd25e6b44b55636a7",
    token0: {
      symbol: "NONUT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8952471f83f531da9ba0f8367a5ce9ace64d7a3e",
    token0: {
      symbol: "SBJesus",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x87c9524237a19338be7dbcac01d6d208ff31136f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PLU",
    },
  },
  {
    id: "0x0e0ec655bd945f59991ebf0598f22bcf30801945",
    token0: {
      symbol: "BEONE",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xc7b1c938ddc2acb93d008478ebfc1719cfc9b3a7",
    token0: {
      symbol: "METAFLOKI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa498a0b7bd19200524b9da51e1c9c7d360acdd7a",
    token0: {
      symbol: "Kumo Inu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x563169052dc24a932b7b0f3823546a6de3b55f7c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PINU",
    },
  },
  {
    id: "0xd0ca4e2ecfa23803241127854bf48b00f3b433bb",
    token0: {
      symbol: "VEGETAINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf5bbc7643552cbb60393d5217be47fe39b63f01c",
    token0: {
      symbol: "GGT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4f5c36afd36debbb2069db11d5d64d7aff3bb5bc",
    token0: {
      symbol: "BB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf3d8bb941c105cc747f19d01f8915b43cd0090bb",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BALLBAG",
    },
  },
  {
    id: "0xcf69db37abbb43f9e84daf1f0622d4ce91e6d0da",
    token0: {
      symbol: "BASX",
    },
    token1: {
      symbol: "sUSD",
    },
  },
  {
    id: "0x6f965ac0af33ff4b40c25d9bfd5c877f0ffd3f73",
    token0: {
      symbol: "METABERG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x78a57095222aeb32febe226569ada3d68f989986",
    token0: {
      symbol: "rfx",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0fb35cc576034b01bed6f4d0333b1bd3859615c",
    token0: {
      symbol: "buidl",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1740f68a6d4348181fadd98ec3cae09d03b5c2dc",
    token0: {
      symbol: "SAKURA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd6054455ca2e1aef02178e0462d9ab953bea4e23",
    token0: {
      symbol: "DATA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xba16559b801a78840385309031001a7e1e33cc40",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "Kittae",
    },
  },
  {
    id: "0x98904add2880c06e7a9ba444dc463d034f29ecf4",
    token0: {
      symbol: "SNOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd764dbe318c67ee9f2315763731300eb3c8b15ae",
    token0: {
      symbol: "TRGA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x3e4664a8db3d9230315831f36fd13e0ef73003f1",
    token0: {
      symbol: "PANU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0b1fb4a9a35f50c31b3744bc636549d4caaef42",
    token0: {
      symbol: "SHIH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa2efe2551becd712bcc208fe5b33c89f6f7589b8",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DGNT",
    },
  },
  {
    id: "0xc09e50b5bb24a40f01633fda343e88dfe055e3f0",
    token0: {
      symbol: "pSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc41eab3a9329962142bd9b7364f3c9f5154bee4d",
    token0: {
      symbol: "TokyoInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe738ab9eb0641c16301ca36558d7296eef6c5bec",
    token0: {
      symbol: "PUFF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfdbc0da4c26bbe12aec6b8fd9c3b026f4974edd8",
    token0: {
      symbol: "DEVIL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b9b618d8bc1c7b9aa969954a503a1c98f3c92fc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KEY",
    },
  },
  {
    id: "0xaf0e7b8d8e6dea04677603c337725539f4d4073e",
    token0: {
      symbol: "LUIGI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd2ba2af89026ba8f474da229ea1a3e46f3531217",
    token0: {
      symbol: "XRA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x51e41ee0a868eb77fde20b98ebb200e44a08f3fd",
    token0: {
      symbol: "YGT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfbbb2f9560b3d1269cc92c0aaaff109f46e57b78",
    token0: {
      symbol: "ANDROTTWEILER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x03a4160e377fee6bd0bc422b995ab5371e13cb4b",
    token0: {
      symbol: "Kyuubi",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb0b25aa7131c459ef55c74dbc0673eaeebb702ac",
    token0: {
      symbol: "DBL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfdc5088412e5f7187e3ee8619542f33ed01a8f05",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "LEC",
    },
  },
  {
    id: "0x64b314351d62e7f5df3427bee1368a7e0aca6fb4",
    token0: {
      symbol: "PAUL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc3f0c01a6b03eeee4f9a6eae62a9a24c01775bb4",
    token0: {
      symbol: "deApy.org",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe2d56db513382bc58b4938a47450e9c0d94bf0ff",
    token0: {
      symbol: "LOSER",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9129f9efae46ef8a5102076315ce996cb64295cc",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SSI",
    },
  },
  {
    id: "0x9eaa644489a728f7923da985df1dbecf9a2ebe17",
    token0: {
      symbol: "LUDUS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa7b0d77e322f7643f6eb7c8bb4ff83e49c6bdee8",
    token0: {
      symbol: "USDT",
    },
    token1: {
      symbol: "BAMBOO",
    },
  },
  {
    id: "0x4ce78b0c8324a0d3782a17ee8989485864c07866",
    token0: {
      symbol: "DRF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6548166be1dbbac83b6faf7770b9a907bb92e46b",
    token0: {
      symbol: "HALLOW",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7e889b530612bc54e97436a9809f8258944c9ac5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "1MT",
    },
  },
  {
    id: "0x9a5b572200f75054bf0d17feffa2907af5100375",
    token0: {
      symbol: "PUG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x080cf470ea91532bf5e313acc60c4b0d029409d4",
    token0: {
      symbol: "XBT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6736992851a436326021fb78ad6e5bf72844536f",
    token0: {
      symbol: "EDH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x28d053dc60e7481d1acde98894fa41039e9f15cb",
    token0: {
      symbol: "Shibshiny",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe7ec53f495cc554e636db1bcfbb2d81e808d92c5",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "DNA",
    },
  },
  {
    id: "0x6e50777c8a7a91d899f83eaee4ec37f18173ca1d",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FDOGE",
    },
  },
  {
    id: "0x2eccad8c2b54df26811094f299b88759ecf5056b",
    token0: {
      symbol: "GONS20",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe25f58b2d1a64b879d7dcb45bb42a186bc1d8b45",
    token0: {
      symbol: "WINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x75fa63112dae79773ce25ab37f77649721465e84",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "gDOGE💸",
    },
  },
  {
    id: "0x74bf81f43b04d5d181b3bb90912f73b046c48bd9",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FRT",
    },
  },
  {
    id: "0x7844c04b043b51dc45bdf59ee2de53e7686865ff",
    token0: {
      symbol: "TOB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xa5dc0d32ba2c3165a3de710840d4df2ed06da1e8",
    token0: {
      symbol: "WENSIMPY",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x806e128faea66172e77ceb86821e0a1fcaf5a669",
    token0: {
      symbol: "GME",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x928cf5622ad954ca1857af85916d445bbd657909",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "KGR",
    },
  },
  {
    id: "0x600cf1c039e1fd31bc4762a39d322dd8977dd1ab",
    token0: {
      symbol: "SMOL",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb099e3c97f90faeab9ac78d31a222ac7d0b09d73",
    token0: {
      symbol: "IQQ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xc16951413afb874de6a75191e76bc48050386dcc",
    token0: {
      symbol: "BelleButt",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a386e1e3bc0921ad4b51204ed6d5bd8ba23d06b",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHUGA",
    },
  },
  {
    id: "0x01240e91b0f2b56e570a5681846721434519ff9a",
    token0: {
      symbol: "WRK",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x9d549079669d382e9556ef2f4e8a7e1a616dae49",
    token0: {
      symbol: "JEJUDOGE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xb5397043600b173c34625200912a539815e5b722",
    token0: {
      symbol: "AGF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x486792bcdb13f8aacf85288d98850fa2804f95c7",
    token0: {
      symbol: "FIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x883b56b9e8bdd1c8b8e29566260528b4a50cda5c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "EINU",
    },
  },
  {
    id: "0x323e054a6dd8762011d60993f51e23e2096b221f",
    token0: {
      symbol: "DAI",
    },
    token1: {
      symbol: "ZAI",
    },
  },
  {
    id: "0x6ffe92a41b89c73c6a60e10276c9faa29052a5e7",
    token0: {
      symbol: "CHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcfdca9c33e61ce28570b63ef88f304d5e01c5d84",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "SHINU",
    },
  },
  {
    id: "0x020e6d0e80d08567ecb14f942fa326748407a845",
    token0: {
      symbol: "UNQT",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1def8b22302e04389b67d95658a044e7445dad3e",
    token0: {
      symbol: "YANG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x58ba13a212ff57150f1e9baf50ae3eae891ae7ed",
    token0: {
      symbol: "AINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xec7fe0d0fd0f597acfc2e8e4659684416587db3c",
    token0: {
      symbol: "WICK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xadafb7ecc4fa0794c7a895da0a53b153871e59b6",
    token0: {
      symbol: "arte",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x606549f2bb08e541cc9353be4d5e0071ce7257ca",
    token0: {
      symbol: "FIVE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x30b07446fc9d8a2a4dc0f9019387382ed6f346d2",
    token0: {
      symbol: "ZEKE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1961f58d5df0e414d939f7c5a032b0e58671a0d7",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "PSI",
    },
  },
  {
    id: "0xfe1f249f3be17dd6231ec0c665dd60cec0ebd6a8",
    token0: {
      symbol: "BabyMono",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0919bbfa00f8c6e2131bd48c47e0534664a019fb",
    token0: {
      symbol: "LDN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x304c3a01926fb82163b12716d149c90ec70c7368",
    token0: {
      symbol: "AOX",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4bdec632797d8c8c339ef73b24d0fd5b576c8ee6",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "LIGHT",
    },
  },
  {
    id: "0x750b8c4e90774e95ce47445645616c3e6bcad473",
    token0: {
      symbol: "invBTCDOM-SEP22",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0x3576f92a88cbfdd48fdb4d7e909519b4606efbe3",
    token0: {
      symbol: "BOINK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdd21a37f1cd7f1454ad36ec7653ffd45581ae133",
    token0: {
      symbol: "IRONMAN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xda4365d01375dad8d6a35bbd442c4f04ac8452c6",
    token0: {
      symbol: "VIKINGS",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcf7908525535361be857c6bd8e2bdd02b5fe85f7",
    token0: {
      symbol: "Elon Tusk",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x9aff4144aacca5a2883e2c03adebf5fa574ba9c2",
    token0: {
      symbol: "FLOKINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x8beb1d95be9004bd139bc74c4d44156909890982",
    token0: {
      symbol: "COOM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2a7a6616c24f3b67990bd953ad1dbeaf644bdee0",
    token0: {
      symbol: "HxH",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xdf19bda5e3268d3c6d629ea3d68bee12abc2310e",
    token0: {
      symbol: "MAIR",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x64fe8ead2a4b54fc731489ef5267e997e8e1b7e2",
    token0: {
      symbol: "SINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x90120b27ac084de32a21ed337140a9cbab36dce3",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "ATS",
    },
  },
  {
    id: "0xfac2c7bc156c2c764ea21def2262ec2131100ab1",
    token0: {
      symbol: "RAKUC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x0cc0f89cd9333151b77e44eccefe91842693b277",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BIS",
    },
  },
  {
    id: "0xac8d8dfae157009efd41c5e7ddcd6cc24d1c38cc",
    token0: {
      symbol: "MDOG",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6148695d14e42267f9677fff485607fbae8d07a0",
    token0: {
      symbol: "QILIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x68688beb6f1eac7ea5041a367b0939b17931c17b",
    token0: {
      symbol: "UFARM",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x2b66e247772a35b3c15b96f7a645d9186a02289f",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BEYBLADE",
    },
  },
  {
    id: "0x25f761b9cba0af4e23e75d4693d9f081ed4c009e",
    token0: {
      symbol: "SAMJACK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xee09ee3c25923e4033b5a220800e8817a887853b",
    token0: {
      symbol: "SHIBACHI",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe9d6de22ddeefda405fea20026cf2e3f92745b97",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "USKITA",
    },
  },
  {
    id: "0xff8adbcf49264adca2ad6bdd323eae1f7b040089",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "AWOO",
    },
  },
  {
    id: "0x6b06a5f7153c5f33ee7a5941a57efb7998208e14",
    token0: {
      symbol: "EUMax",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x7d7698b3fe2e3214be920c72dcf66f4ae363fac4",
    token0: {
      symbol: "E💎🙌",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4d4ec04fd3c42cde4620c09305859d2913ea3839",
    token0: {
      symbol: "S16",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x45d57fb9185cad6b315bcb2c3cebf6c016860419",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "HONSHU",
    },
  },
  {
    id: "0x7a7ec8f63c12f2dccc08e4eb013c4023b4a050ae",
    token0: {
      symbol: "AJRC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xd06b49243b3b0a873b51b8636cc138832532d7fa",
    token0: {
      symbol: "YFIN",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x4dd30da8f1d82ba77892f848c058939209d488cf",
    token0: {
      symbol: "KIMOCHINU",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x684b305407bb3cad61bb2b70ba8fcbef64ffa67c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MFS",
    },
  },
  {
    id: "0x7be1fc65b19533c731415e57fe3cdc8d787bea86",
    token0: {
      symbol: "RYUK",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x6d375119d4010b92023e472c579f674a516dd4a1",
    token0: {
      symbol: "KYOTO",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcd4ad3fb997b3db639ab2189c6a6e879533c0e31",
    token0: {
      symbol: "FLOOF",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x36fcfffea6f27af72292fdc3688239dd516751c5",
    token0: {
      symbol: "Ros",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x702567004a1098681b430da7194b8d65d12cf0e9",
    token0: {
      symbol: "TOMOE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x123fca7e8272a8e9c3bb7113c259abc4901e792b",
    token0: {
      symbol: "CVC",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xf3ba881a47492d8db054b5d9ea97f3c75a8bf155",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "MeeboInu",
    },
  },
  {
    id: "0x025420c311af551150471456197ea0d183a0996c",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BURN",
    },
  },
  {
    id: "0xa896f041a2b18e58e7fbc513cd371de1348596de",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "mETH",
    },
  },
  {
    id: "0x785797ae5a987ba31805d31ff5762a6910d523dc",
    token0: {
      symbol: "CSHIB",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x1faac12d55369ee4125c2bb8860ff27b6b8095ff",
    token0: {
      symbol: "$GSHIBA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x31ac548e59565fdd78604a47e1571ef68c80e9f5",
    token0: {
      symbol: "CHZ",
    },
    token1: {
      symbol: "USDT",
    },
  },
  {
    id: "0x2ea2eb8f9a1bf17bcbf2555536c9d1e24e45ebc0",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "FRONT",
    },
  },
  {
    id: "0x4002f45e4ddfef2b94a4eb6aa10bfc813486ea9c",
    token0: {
      symbol: "KILLUA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xde44031f37c3ead706aacbead61864ef6404007f",
    token0: {
      symbol: "ArnoldInu",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0x641c927a4321b5e6c30b0ca395686684bf79411e",
    token0: {
      symbol: "monkeyinu.com",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xba6329eae69707d6a0f273bd082f4a0807a6b011",
    token0: {
      symbol: "OWL",
    },
    token1: {
      symbol: "USDC",
    },
  },
  {
    id: "0xd66eea8d9cab30ed4cf451d97ff3bfc3b3930d83",
    token0: {
      symbol: "yUSD",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xcea20ebfc77a2d3af056e9b6c4e45f132bfb6be4",
    token0: {
      symbol: "WETH",
    },
    token1: {
      symbol: "BALTO",
    },
  },
  {
    id: "0x23df7258fb693b86d730a141343c880341918814",
    token0: {
      symbol: "Shibkorea",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xfaab5238f5d2163e25518b0c1af205da0f783dd0",
    token0: {
      symbol: "$ROPE",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xe5dd774776911ec5f4acb129b3a6f22bc6f56f29",
    token0: {
      symbol: "BARBARA",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xaf2b483708d540c2785b978733467fbbbcf0647b",
    token0: {
      symbol: "YFZ",
    },
    token1: {
      symbol: "WETH",
    },
  },
  {
    id: "0xca76b9440f26fd30a31387029108f62abc3b2516",
    token0: {
      symbol: "DEFT",
    },
    token1: {
      symbol: "WETH",
    },
  },
];

const adjustModel = () => {
  pairs = pairs.map((item) => ({
    assetA: item.token0.symbol,
    assetB: item.token1.symbol,
    key: `${item.token0.symbol}:${item.token1.symbol}`,
    address: item.id,
  }));
  const dictstring = JSON.stringify(pairs);
  fs.writeFile("pairs.json", dictstring, function (err) {
    if (err) console.log("error", err);
  });
  console.log(pairs);
};

adjustModel();
