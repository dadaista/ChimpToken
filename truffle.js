var provider, address;



var providerURL = `https://ropsten.infura.io/ROeiriNDGwCQC0OOochi `
var HDWalletProvider = require('truffle-hdwallet-provider');
// todo: Think about more secure way
var mnemonic = "to be or not to be that is the question";
provider = new HDWalletProvider(mnemonic, providerURL, 0);
address = "0x" + provider.wallet.getAddress().toString("hex");
console.log('Provider address', provider.getAddress());
console.log('Deploying to ', providerURL);



module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
   ropsten: {
    //host: "127.0.0.1", // localhost, have your geth ready
    //port: 8545,
    network_id: 3,        // Ethereum test network
    gas: 4500000,
    gasPrice: 22000000000, //yeah 22Gwei
    from: address,// - default address to use for any transaction Truffle makes during migrations
    provider: provider // - web3 provider instance Truffle should use to talk to the Ethereum network.
    //          - if specified, host and port are ignored.
   }
  }
};
