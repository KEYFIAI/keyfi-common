const contractAddresses = {
  mainnet: {
    RewardPool: "0x087B5469CFf15Ad8Cdb433500a527BD45b65cDe7",
    KEYFIUSDCLP: "0xb99c23a9a444ebeb0ce4a67f27dab8d4826b1108",
    KEY: "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
  },
  ropsten: {
    RewardPool: "0x4A14fd2F00feDC79DF2539ba11B09377d6bf2e0F",
    KEYFIUSDCLP: "0x40402Cc6b02D0cc3E0EBaca6312A4c19f4b13a81",
    KEY: "0xCfEC6722f119240B97effd5Afe04c8a97caA02EE",
  },
};

// const supportedAssets = ['KEYFIETHLP', 'KEY'];
const supportedAssets = ["KEY", "KEYFIUSDCLP"];

const supportedNetworks = {
  1: "mainnet",
  3: "ropsten",
};

export { contractAddresses, supportedAssets, supportedNetworks };
