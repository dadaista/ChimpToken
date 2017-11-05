module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
   ropsten: {
    host: "127.0.0.1", // localhost, have your geth ready
    port: 8545,
    network_id: 3,        // Ethereum test network
    gas: 4500000,
    gasPrice: 22000000000, //yeah 22Gwei
    // from - default address to use for any transaction Truffle makes during migrations
    // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
    //          - if specified, host and port are ignored.
   }
  }
};
