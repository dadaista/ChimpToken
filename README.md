# ChimpToken
Yet another eth ERC20 token, yes because all tutorials cover the easy peasy compile and deploy on testrpc but none of them is useful to deploy on a real network. Here we use ropsten.


# Pre-requisites
This has been tested on Ubuntu 14.04, but I'm confident can work on other OS as well.
```
Truffle v3.4.11 (core: 3.4.11) with Solidity v0.4.15 (solc-js)
Open zeppelin 1.3.0
Geth 1.7.2-stable-1db4ecdc
Ethereum Wallet V 0.9.2 (optional, to mess around with transactions and UI)
```

# My stack
I launched Ubuntu 14.04 VM on Parallels/MacOsX. In my MAC I have also Chrome with Metamask as a second wallet to launch payments back and forth.  


# Install openzeppelin

Get into the root and launch

```
npm install zeppelin-solidity
```

# Syncing the chain

geth requires all the chain to be local. This may take time, but you need it. So relax and get your chain in sync.


# How to know when I'm synced

If you're using the Ethereum Wallet it is telling you if it is syncing or it is up to date. If you're syncing with the geth terminal then it is a bit trickier. See console usage below.


# Geth Console usage

This is not a tutorial on geth commands, however let go through a few useful instructions. 
This will launch geth as a rpc server as well. 
```
parallels@ubuntu:~$ geth --testnet --rpc --rpcapi="db,eth,net,web3,personal,web3"
```


Now open a second bash terminal and attach to the running geth node typing
```
geth attach http://127.0.0.1:8545
```

On the attached console, while geth is syncing you can launch commands like:

```
> web3.eth.blockNumber
2003004
```
Important! The outcome must be equal to the block number you see in a block explorer like ropsten.etherscan.io.  This means you're synced.





# Deploying

First of all, create a new account on your geth. Follow the docs to do that. 
No surprise, to deploy on a testnet you need fake ethers, you can sort it out starting with Google and searching ropsten faucet. A clever way is to install Metamask, connect to Ropsten and then click Buy. You'll get 1 ether at a time, not bad for testing your contracts.

In assume you're synced and you filled your address with some ethers. 

Now you must unlock your account, on the geth attached console type:
```
> personal.unlockAccount("your address here","your password here")
true
```

Now go back, or open another bash terminal in the project root and type
```
truffle migrate --network=ropsten --reset
```


Hold your breath, if everything is working fine you should see something like (addresses will differ)
```
Using network 'ropsten'.
Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x11f42c86bd34ef6b40529915b17a70b23c5b7930c8a9c6d0d04be209d175d8d4
  Migrations: 0x3d54ba72dc923c4bebddc7a18edf91c4ba197cb5
Saving successful migration to network...
  ... 0x07eef1de7571937b9580a0b54c5a3029970087d34eef240fe1bf2999d2172212
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying ChimpToken...
  ... 0x6db5932d721192aa227bed58cc217061ccb9243d92bf71e3662b50c06660ef4c
  ChimpToken: 0x88ebe70bc4823fccf101d0c914749cd1d4d194b3
Saving successful migration to network...
  ... 0xafc86aa7c1cbf6c960db81aac60050d44f90825f5599f154836f980177e79b36
Saving artifacts...

```
Otherwise you're in trouble, and *troubles are hard to shoot in Ethereum-land.*



# Why there are no testcases

Well, the code is just subclassing a simple openzeppeling token, it adds nothing really worth test-casing. However, we tested the token manually as asset in ropsten.

# So how can I test

Let's do some token transfer. First, close your geth node and reopen the Ethereum Wallet, let him to sync (should be fast). In the wallet UI you can find how to watch a token, follow the instructions and use your deployed token address, you should see the token in the wallet. Then, you can just send some tokens to another ropsten address (I suggest to use metamask in another machine or in the host OS if you're under a VM). Once you transfer at least a token you can check in ropsten.etherscan.io your token. Just search your token there and you'll get all the goodies.


# What about Parity

We started working with parity but we always got errors while deploying on the ropsten (or even the kovan) testnet. It was impossible for us to figure out what was going wrong. We switched to geth and then we succeeded in deploying and executing contracts on ropsten


