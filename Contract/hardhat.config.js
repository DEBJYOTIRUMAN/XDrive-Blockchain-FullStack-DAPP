require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/GxA0-iF_T4fQIm1DJX1KVrjBoYcjp_aE",
      accounts: [
        "c107366131f8101aa4bb53fe06c871386b8c137ede2e2a6308da71edba56397a",
      ],
    },
  },
};
