var provider, address;


var providerURL = `https://ropsten.infura.io/ROeiriNDGwCQC0OOochi `
var HDWalletProvider = require('truffle-hdwallet-provider');

// todo: Think about more secure way
var mnemonic = "to be or not to be that is the question whether tis";
provider = new HDWalletProvider(mnemonic, providerURL, 0);
address = "0x" + provider.wallet.getAddress().toString("hex");
console.log('Provider address', provider.getAddress());
console.log('Deploying to ', providerURL);



module.exports = {
  networks: {

    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },

    mainnet: {
      host: "127.0.0.1", 
      port: 8545,
      network_id: 1, // Ethereum network
      // optional config values:
      gas: 800000,
      gasPrice: 25000000000,
      // from - default address to use for any transaction Truffle makes during migrations
      from: "0x9A7794Bf679C299AC2469b6396Cd47bdfDF49f70"
     
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - if specified, host and port are ignored.
    },

     ropsten: {
        host: "127.0.0.1", // localhost, have your geth ready
        port: 8545,
        network_id: 3,        // Ethereum test network
        gas: 800000,
        gasPrice: 22000000000, //yeah 22Gwei
        from: address,// - default address to use for any transaction Truffle makes during migrations
        //provider: provider // - web3 provider instance Truffle should use to talk to the Ethereum network.
        //          - if specified, host and port are ignored.
     },

     infuraRopsten: {
      network_id: 3,// Ethereum test network
      gas: 15e5,//CHECK GAS USED BY TESTRPC
      gasPrice: 20e9,//check gasPrice in etherscan
      from: address,
      provider: provider
     }
  }
};
