# SOLANA TRANSACTION

Send transaction from a keypair address to another using solana javascript sdk

fromKeypair: Generated keypair
toKeypair: Generated Keypair

# Setup and Installation

- Install dependencies

```sh
$ npm install
```

or

```sh
$ yarn
```

## Run Step

This script enables a user make transaction from a solana address to another. By default the scripts generate two accounts for transaction.

After the transaction a link will be created where you can view your transaction on the solana explorer.

```sh
$ npm start
```

or

```sh
$ yarn start
```

## To add a from address and a to address

- To add a from address insert your exported private key from your wallet address to the secretKey variable e.g `secretKey = "iafdfafafErMXS4PZEUcb6h8mHqHoVsdfsfgwfjjnjdQmAHu6L1MM9twCtcR9kKjaprqiCMqnsgZUyp9qLYxZgsffdfsdfo"`

- To add a recievers address add your wallet address to the recieversAddress variable e.g `recieversAddress = "7M3wALfDojntjDU2Yn1sxcnBixnJHBJC435BXnDU4TaH"`

## TechStack

- Node.js
