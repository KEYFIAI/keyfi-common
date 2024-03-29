import { getNetwork, processWeb3OrNetworkArgument } from "../../common";
import LendingPoolAddressProviderABI from "../abi/LendingPoolAddressesProviderv2.abi.json";

export const addresses = {
  mainnet: {
    ProtocolData: "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d",
    LendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    WETHGateway: "0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04",
    PriceOracle: "0xA50ba011c48153De246E5192C8f9258A2ba79Ca9",
    reserves: {
      USDT: {
        aTokenAddress: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
        aTokenSymbol: "aUSDT",
        stableDebtTokenAddress: "0xe91D55AB2240594855aBd11b3faAE801Fd4c4687",
        variableDebtTokenAddress: "0x531842cEbbdD378f8ee36D171d6cC9C4fcf475Ec",
        symbol: "USDT",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        decimals: 6,
      },
      WBTC: {
        aTokenAddress: "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
        aTokenSymbol: "aWBTC",
        stableDebtTokenAddress: "0x51B039b9AFE64B78758f8Ef091211b5387eA717c",
        variableDebtTokenAddress: "0x9c39809Dec7F95F5e0713634a4D0701329B3b4d2",
        symbol: "WBTC",
        address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        decimals: 8,
      },
      WETH: {
        aTokenAddress: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
        aTokenSymbol: "aWETH",
        stableDebtTokenAddress: "0x4e977830ba4bd783C0BB7F15d3e243f73FF57121",
        variableDebtTokenAddress: "0xF63B34710400CAd3e044cFfDcAb00a0f32E33eCf",
        symbol: "WETH",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        decimals: 18,
      },
      YFI: {
        aTokenAddress: "0x5165d24277cD063F5ac44Efd447B27025e888f37",
        aTokenSymbol: "aYFI",
        stableDebtTokenAddress: "0xca823F78C2Dd38993284bb42Ba9b14152082F7BD",
        variableDebtTokenAddress: "0x7EbD09022Be45AD993BAA1CEc61166Fcc8644d97",
        symbol: "YFI",
        address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
        decimals: 18,
      },
      ZRX: {
        aTokenAddress: "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
        aTokenSymbol: "aZRX",
        stableDebtTokenAddress: "0x071B4323a24E73A5afeEbe34118Cd21B8FAAF7C3",
        variableDebtTokenAddress: "0x85791D117A392097590bDeD3bD5abB8d5A20491A",
        symbol: "ZRX",
        address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        decimals: 18,
      },
      UNI: {
        aTokenAddress: "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
        aTokenSymbol: "aUNI",
        stableDebtTokenAddress: "0xD939F7430dC8D5a427f156dE1012A56C18AcB6Aa",
        variableDebtTokenAddress: "0x5BdB050A92CADcCfCDcCCBFC17204a1C9cC0Ab73",
        symbol: "UNI",
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        decimals: 18,
      },
      AAVE: {
        aTokenAddress: "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B",
        aTokenSymbol: "aAAVE",
        stableDebtTokenAddress: "0x079D6a3E844BcECf5720478A718Edb6575362C5f",
        variableDebtTokenAddress: "0xF7DBA49d571745D9d7fcb56225B05BEA803EBf3C",
        symbol: "AAVE",
        address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        decimals: 18,
      },
      BAT: {
        aTokenAddress: "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
        aTokenSymbol: "aBAT",
        stableDebtTokenAddress: "0x277f8676FAcf4dAA5a6EA38ba511B7F65AA02f9F",
        variableDebtTokenAddress: "0xfc218A6Dfe6901CB34B1a5281FC6f1b8e7E56877",
        symbol: "BAT",
        address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
        decimals: 18,
      },
      BUSD: {
        aTokenAddress: "0xA361718326c15715591c299427c62086F69923D9",
        aTokenSymbol: "aBUSD",
        stableDebtTokenAddress: "0x4A7A63909A72D268b1D8a93a9395d098688e0e5C",
        variableDebtTokenAddress: "0xbA429f7011c9fa04cDd46a2Da24dc0FF0aC6099c",
        symbol: "BUSD",
        address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        decimals: 18,
      },
      DAI: {
        aTokenAddress: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
        aTokenSymbol: "aDAI",
        stableDebtTokenAddress: "0x778A13D3eeb110A4f7bb6529F99c000119a08E92",
        variableDebtTokenAddress: "0x6C3c78838c761c6Ac7bE9F59fe808ea2A6E4379d",
        symbol: "DAI",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        decimals: 18,
      },
      ENJ: {
        aTokenAddress: "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef",
        aTokenSymbol: "aENJ",
        stableDebtTokenAddress: "0x943DcCA156b5312Aa24c1a08769D67FEce4ac14C",
        variableDebtTokenAddress: "0x38995F292a6E31b78203254fE1cdd5Ca1010A446",
        symbol: "ENJ",
        address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
        decimals: 18,
      },
      KNC: {
        aTokenAddress: "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA",
        aTokenSymbol: "aKNC",
        stableDebtTokenAddress: "0x9915dfb872778B2890a117DA1F35F335eb06B54f",
        variableDebtTokenAddress: "0x6B05D1c608015Ccb8e205A690cB86773A96F39f1",
        symbol: "KNC",
        address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
        decimals: 18,
      },
      LINK: {
        aTokenAddress: "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
        aTokenSymbol: "aLINK",
        stableDebtTokenAddress: "0xFB4AEc4Cc858F2539EBd3D37f2a43eAe5b15b98a",
        variableDebtTokenAddress: "0x0b8f12b1788BFdE65Aa1ca52E3e9F3Ba401be16D",
        symbol: "LINK",
        address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        decimals: 18,
      },
      MANA: {
        aTokenAddress: "0xa685a61171bb30d4072B338c80Cb7b2c865c873E",
        aTokenSymbol: "aMANA",
        stableDebtTokenAddress: "0xD86C74eA2224f4B8591560652b50035E4e5c0a3b",
        variableDebtTokenAddress: "0x0A68976301e46Ca6Ce7410DB28883E309EA0D352",
        symbol: "MANA",
        address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
        decimals: 18,
      },
      MKR: {
        aTokenAddress: "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
        aTokenSymbol: "aMKR",
        stableDebtTokenAddress: "0xC01C8E4b12a89456a9fD4e4e75B72546Bf53f0B5",
        variableDebtTokenAddress: "0xba728eAd5e496BE00DCF66F650b6d7758eCB50f8",
        symbol: "MKR",
        address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
        decimals: 18,
      },
      REN: {
        aTokenAddress: "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a",
        aTokenSymbol: "aREN",
        stableDebtTokenAddress: "0x3356Ec1eFA75d9D150Da1EC7d944D9EDf73703B7",
        variableDebtTokenAddress: "0xcd9D82d33bd737De215cDac57FE2F7f04DF77FE0",
        symbol: "REN",
        address: "0x408e41876cCCDC0F92210600ef50372656052a38",
        decimals: 18,
      },
      SNX: {
        aTokenAddress: "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2",
        aTokenSymbol: "aSNX",
        stableDebtTokenAddress: "0x8575c8ae70bDB71606A53AeA1c6789cB0fBF3166",
        variableDebtTokenAddress: "0x267EB8Cf715455517F9BD5834AeAE3CeA1EBdbD8",
        symbol: "SNX",
        address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
        decimals: 18,
      },
      sUSD: {
        aTokenAddress: "0x6C5024Cd4F8A59110119C56f8933403A539555EB",
        aTokenSymbol: "aSUSD",
        stableDebtTokenAddress: "0x30B0f7324feDF89d8eff397275F8983397eFe4af",
        variableDebtTokenAddress: "0xdC6a3Ab17299D9C2A412B0e0a4C1f55446AE0817",
        symbol: "sUSD",
        address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
        decimals: 18,
      },
      TUSD: {
        aTokenAddress: "0x101cc05f4A51C0319f570d5E146a8C625198e636",
        aTokenSymbol: "aTUSD",
        stableDebtTokenAddress: "0x7f38d60D94652072b2C44a18c0e14A481EC3C0dd",
        variableDebtTokenAddress: "0x01C0eb1f8c6F1C1bF74ae028697ce7AA2a8b0E92",
        symbol: "TUSD",
        address: "0x0000000000085d4780B73119b644AE5ecd22b376",
        decimals: 18,
      },
      USDC: {
        aTokenAddress: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
        aTokenSymbol: "aUSDC",
        stableDebtTokenAddress: "0xE4922afAB0BbaDd8ab2a88E0C79d884Ad337fcA6",
        variableDebtTokenAddress: "0x619beb58998eD2278e08620f97007e1116D5D25b",
        symbol: "USDC",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
      },
      CRV: {
        aTokenAddress: "0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1",
        aTokenSymbol: "aCRV",
        stableDebtTokenAddress: "0x9288059a74f589C919c7Cf1Db433251CdFEB874B",
        variableDebtTokenAddress: "0x00ad8eBF64F141f1C81e9f8f792d3d1631c6c684",
        symbol: "CRV",
        address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
        decimals: 18,
      },
      GUSD: {
        aTokenAddress: "0xD37EE7e4f452C6638c96536e68090De8cBcdb583",
        aTokenSymbol: "aGUSD",
        stableDebtTokenAddress: "0xf8aC64ec6Ff8E0028b37EB89772d21865321bCe0",
        variableDebtTokenAddress: "0x279AF5b99540c1A3A7E3CDd326e19659401eF99e",
        symbol: "GUSD",
        address: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
        decimals: 2,
      },
      BAL: {
        aTokenAddress: "0x272F97b7a56a387aE942350bBC7Df5700f8a4576",
        aTokenSymbol: "aBAL",
        stableDebtTokenAddress: "0xe569d31590307d05DA3812964F1eDd551D665a0b",
        variableDebtTokenAddress: "0x13210D4Fe0d5402bd7Ecbc4B5bC5cFcA3b71adB0",
        symbol: "BAL",
        address: "0xba100000625a3754423978a60c9317c58a424e3D",
        decimals: 18,
      },
      xSUSHI: {
        aTokenAddress: "0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a",
        aTokenSymbol: "aXSUSHI",
        stableDebtTokenAddress: "0x73Bfb81D7dbA75C904f430eA8BAe82DB0D41187B",
        variableDebtTokenAddress: "0xfAFEDF95E21184E3d880bd56D4806c4b8d31c69A",
        symbol: "xSUSHI",
        address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
        decimals: 18,
      },
      renFIL: {
        aTokenAddress: "0x514cd6756CCBe28772d4Cb81bC3156BA9d1744aa",
        aTokenSymbol: "aRENFIL",
        stableDebtTokenAddress: "0xcAad05C49E14075077915cB5C820EB3245aFb950",
        variableDebtTokenAddress: "0x348e2eBD5E962854871874E444F4122399c02755",
        symbol: "renFIL",
        address: "0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5",
        decimals: 18,
      },
    },
  },
  kovan: {
    ProtocolData: "0x3c73A5E5785cAC854D468F727c606C07488a29D6",
    LendingPoolAddressesProvider: "0x88757f2f99175387ab4c6a4b3067c77a695b0349",
    WETHGateway: "0xA61ca04DF33B72b235a8A28CfB535bb7A5271B70",
    PriceOracle: "0xb8be51e6563bb312cbb2aa26e352516c25c26ac1",
    reserves: [
      {
        aTokenAddress: "0x6d93ef8093F067f19d33C2360cE17b20a8c45CD7",
        aTokenSymbol: "aAAVE",
        stableDebtTokenAddress: "0x72d2Aea8aCcD3277D90093a974eFf3e1945871D7",
        variableDebtTokenAddress: "0x5aF7bAC415D9c249176ea233E92646E5c9288b92",
        symbol: "AAVE",
        address: "0xB597cd8D3217ea6477232F9217fa70837ff667Af",
        decimals: 18,
      },
      {
        aTokenAddress: "0x28f92b4c8Bdab37AF6C4422927158560b4bB446e",
        aTokenSymbol: "aBAT",
        stableDebtTokenAddress: "0x07a0B32983ab8203E8C3493F0AbE5bFe784fAa15",
        variableDebtTokenAddress: "0xcE271C229576605bdabD0A3D664685cbC383f3a6",
        symbol: "BAT",
        address: "0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738",
        decimals: 18,
      },
      {
        aTokenAddress: "0xfe3E41Db9071458e39104711eF1Fa668bae44e85",
        aTokenSymbol: "aBUSD",
        stableDebtTokenAddress: "0x597c5d0390E7e995d36F2e49F9eD979697723bE9",
        variableDebtTokenAddress: "0xB85eCAd7a9C9F09749CeCF84122189A7908eC934",
        symbol: "BUSD",
        address: "0x4c6E1EFC12FDfD568186b7BAEc0A43fFfb4bCcCf",
        decimals: 18,
      },
      {
        aTokenAddress: "0xdCf0aF9e59C002FA3AA091a46196b37530FD48a8",
        aTokenSymbol: "aDAI",
        stableDebtTokenAddress: "0x3B91257Fe5CA63b4114ac41A0d467D25E2F747F3",
        variableDebtTokenAddress: "0xEAbBDBe7aaD7d5A278da40967E62C8c8Fe5fAec8",
        symbol: "DAI",
        address: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
        decimals: 18,
      },
      {
        aTokenAddress: "0x1d1F2Cb9ED46A8d5bf0254E5CE400514D62d55F0",
        aTokenSymbol: "aENJ",
        stableDebtTokenAddress: "0x8af08B5874380E1F1816e30bE12d773f4EB70e67",
        variableDebtTokenAddress: "0xc11e09B03634144a1862E14ef7569DbEb4b7F3a2",
        symbol: "ENJ",
        address: "0xC64f90Cd7B564D3ab580eb20a102A8238E218be2",
        decimals: 18,
      },
      {
        aTokenAddress: "0xdDdEC78e29f3b579402C42ca1fd633DE00D23940",
        aTokenSymbol: "aKNC",
        stableDebtTokenAddress: "0x7f4E5bA1eE5dCAa4440371ec521cBc130De12E5e",
        variableDebtTokenAddress: "0x196d717b2D8a5694572C2742343C333EA27B8288",
        symbol: "KNC",
        address: "0x3F80c39c0b96A0945f9F0E9f55d8A8891c5671A8",
        decimals: 18,
      },
      {
        aTokenAddress: "0xeD9044cA8F7caCe8eACcD40367cF2bee39eD1b04",
        aTokenSymbol: "aLINK",
        stableDebtTokenAddress: "0x0DBEE55AB73e3C14421d3f437a218ea99A520556",
        variableDebtTokenAddress: "0xcCead10A3BA54b1FA6D107b63B7D5e5e2f9888D8",
        symbol: "LINK",
        address: "0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789",
        decimals: 18,
      },
      {
        aTokenAddress: "0xA288B1767C91Aa9d8A14a65dC6B2E7ce68c02DFd",
        aTokenSymbol: "aMANA",
        stableDebtTokenAddress: "0xd4aEcF57cbcfeA373565DE75537aAc911EAF1759",
        variableDebtTokenAddress: "0xaEE5AA094B55b6538388A4E8CBAe9E81Bfe815e6",
        symbol: "MANA",
        address: "0x738Dc6380157429e957d223e6333Dc385c85Fec7",
        decimals: 18,
      },
      {
        aTokenAddress: "0x9d9DaBEae6BcBa881404A9e499B13B2B3C1F329E",
        aTokenSymbol: "aMKR",
        stableDebtTokenAddress: "0xC37AadA7758e10a49bdECb9078753d5D096A4649",
        variableDebtTokenAddress: "0xB86a93aA1325e4F58E3dbA7CE9DA251D83374fA2",
        symbol: "MKR",
        address: "0x61e4CAE3DA7FD189e52a4879C7B8067D7C2Cc0FA",
        decimals: 18,
      },
      {
        aTokenAddress: "0x01875ee883B32f5f961A92eC597DcEe2dB7589c1",
        aTokenSymbol: "aREN",
        stableDebtTokenAddress: "0xc66a5fd3Bd3D0329895ceE5755e161FD89c2EecD",
        variableDebtTokenAddress: "0x75f318b9B40c5bEb0EEAdab5294C4108A376a22d",
        symbol: "REN",
        address: "0x5eebf65A6746eed38042353Ba84c8e37eD58Ac6f",
        decimals: 18,
      },
      {
        aTokenAddress: "0xAA74AdA92dE4AbC0371b75eeA7b1bd790a69C9e1",
        aTokenSymbol: "aSNX",
        stableDebtTokenAddress: "0x14B7a7Ab57190aEc3210303ef1cF29088535B329",
        variableDebtTokenAddress: "0x7dF2a710751cb9f1FD392107187e4Aed0Ae867b0",
        symbol: "SNX",
        address: "0x7FDb81B0b8a010dd4FFc57C3fecbf145BA8Bd947",
        decimals: 18,
      },
      {
        aTokenAddress: "0x9488fF6F29ff75bfdF8cd5a95C6aa679bc7Cd65c",
        aTokenSymbol: "aSUSD",
        stableDebtTokenAddress: "0xB155258d3c18dd5D41e8838c8b45CaE1B17a11D9",
        variableDebtTokenAddress: "0xf3B942441Bd9d335E64413BeA6b76a49A5853C54",
        symbol: "sUSD",
        address: "0x99b267b9D96616f906D53c26dECf3C5672401282",
        decimals: 18,
      },
      {
        aTokenAddress: "0x39914AdBe5fDbC2b9ADeedE8Bcd444b20B039204",
        aTokenSymbol: "aTUSD",
        stableDebtTokenAddress: "0x082576C4CfC2eE1e0b8088B84d50CEb97CD84E49",
        variableDebtTokenAddress: "0xC0cFab5E4A9D8DA2Bc98D0a2b3f9dc20f7eec19C",
        symbol: "TUSD",
        address: "0x016750AC630F711882812f24Dba6c95b9D35856d",
        decimals: 18,
      },
      {
        aTokenAddress: "0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0",
        aTokenSymbol: "aUSDC",
        stableDebtTokenAddress: "0x252C017036b144A812b53BC122d0E67cBB451aD4",
        variableDebtTokenAddress: "0xBE9B058a0f2840130372a81eBb3181dcE02BE957",
        symbol: "USDC",
        address: "0xe22da380ee6B445bb8273C81944ADEB6E8450422",
        decimals: 6,
      },
      {
        aTokenAddress: "0xFF3c8bc103682FA918c954E84F5056aB4DD5189d",
        aTokenSymbol: "aUSDT",
        stableDebtTokenAddress: "0xf3DCeaDf668607bFCF565E84d9644c42eea518cd",
        variableDebtTokenAddress: "0xa6EfAF3B1C6c8E2be44818dB64E4DEC7416983a1",
        symbol: "USDT",
        address: "0x13512979ADE267AB5100878E2e0f485B568328a4",
        decimals: 6,
      },
      {
        aTokenAddress: "0x62538022242513971478fcC7Fb27ae304AB5C29F",
        aTokenSymbol: "aWBTC",
        stableDebtTokenAddress: "0x45b85733E2609B9Eb18DbF1315765ddB8431e0B6",
        variableDebtTokenAddress: "0x9b8107B86A3cD6c8d766B30d3aDD046348bf8dB4",
        symbol: "WBTC",
        address: "0xD1B98B6607330172f1D991521145A22BCe793277",
        decimals: 8,
      },
      {
        aTokenAddress: "0x87b1f4cf9BD63f7BBD3eE1aD04E8F52540349347",
        aTokenSymbol: "aWETH",
        stableDebtTokenAddress: "0x1F85D0dc45332D00aead98D26db0735350F80D18",
        variableDebtTokenAddress: "0xDD13CE9DE795E7faCB6fEC90E346C7F3abe342E2",
        symbol: "WETH",
        address: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        decimals: 18,
      },
      {
        aTokenAddress: "0xF6c7282943Beac96f6C70252EF35501a6c1148Fe",
        aTokenSymbol: "aYFI",
        stableDebtTokenAddress: "0x7417855ed88C62e610e612Be52AeE510703Dff04",
        variableDebtTokenAddress: "0xfF682fF79FEb2C057eC3Ff1e083eFdC66f9b37FB",
        symbol: "YFI",
        address: "0xb7c325266ec274fEb1354021D27FA3E3379D840d",
        decimals: 18,
      },
      {
        aTokenAddress: "0xf02D7C23948c9178C68f5294748EB778Ab5e5D9c",
        aTokenSymbol: "aZRX",
        stableDebtTokenAddress: "0x7488Eb7fce7e31b91eB9cA4158d54D92e4BB03D7",
        variableDebtTokenAddress: "0x7a1C28e06bcb4b1fF4768BC2CB9cd33b7622cD62",
        symbol: "ZRX",
        address: "0xD0d76886cF8D952ca26177EB7CfDf83bad08C00C",
        decimals: 18,
      },
      {
        aTokenAddress: "0x601FFc9b7309bdb0132a02a569FBd57d6D1740f2",
        aTokenSymbol: "aUNI",
        stableDebtTokenAddress: "0x7A43B2653FF42BDE048e3b14fB42028956a7B6b1",
        variableDebtTokenAddress: "0x10339d6562e8867bB93506572fF8Aea94B2fF656",
        symbol: "UNI",
        address: "0x075A36BA8846C6B6F53644fDd3bf17E5151789DC",
        decimals: 18,
      },
      {
        aTokenAddress: "0xb8a16bbab34FA7A5C09Ec7679EAfb8fEC06897bc",
        aTokenSymbol: "aAMPL",
        stableDebtTokenAddress: "0x9157d57DC97A7AFFC7b0a78E78fe25e1401B1dCc",
        variableDebtTokenAddress: "0xb7b7AF565495670713C92B8848fC8A650a968F81",
        symbol: "AMPL",
        address: "0x3E0437898a5667a4769B1Ca5A34aAB1ae7E81377",
        decimals: 9,
      },
    ],
  },
};

export const getATokenAddress = async (tokenSymbol) => {
  return addresses.mainnet.reserves[tokenSymbol].aTokenAddress;
};

export const fetchContractDynamicAddress = async (web3, contractName) => {
  const network = await getNetwork(web3);

  const addressProviderContract = new web3.eth.Contract(
    LendingPoolAddressProviderABI,
    addresses[network.name]["LendingPoolAddressesProvider"]
  );

  switch (contractName) {
    case "LendingPool":
      return addressProviderContract.methods.getLendingPool().call();

    default:
      throw new Error(`Unknown contractName = ${contractName}`);
  }
};

export const getContractAddress = async (assetOrContractName, web3) => {
  if (addresses.mainnet[assetOrContractName]) {
    return addresses.mainnet[assetOrContractName];
  }

  if (addresses.mainnet.reserves[assetOrContractName]) {
    return addresses.mainnet.reserves[assetOrContractName].address;
  }

  if (assetOrContractName === "LendingPool") {
    return await fetchContractDynamicAddress(web3, assetOrContractName);
  }
};

export const isSupportedNetwork = async (web3orNetwork) => {
  const { name } = await processWeb3OrNetworkArgument(web3orNetwork);
  return Boolean(addresses[name]);
};

export const getReserves = async (web3) => {
  const { name } = await getNetwork(web3);
  const networkAddresses = addresses[name];

  if (!networkAddresses) {
    throw new Error(`Network with name=${name} is not supported!`);
  }

  return networkAddresses.reserves;
};

export const getReserveAddress = async (asset) => {
  asset = asset === "ETH" ? "WETH" : asset;
  const address = addresses.mainnet.reserves[asset].address;
  if (!address) {
    throw new Error("Address not found");
  }
  return address;
};
