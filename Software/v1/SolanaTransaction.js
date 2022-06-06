// Copyright Fortior Blockchain, LP 2022
// Script for sending a transaction on Solana using the Javascript-SDK

const solanaWeb3 = require('@solana/web3.js');
console.log(solanaWeb3);

const {Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL} = require("@solana/web3.js");

let transaction = new Transaction();

transaction.add(
  SystemProgram.transfer({
    fromPubkey: fromKeypair.publicKey,
    toPubkey: toKeypair.publicKey,
    lamports: LAMPORTS_PER_SOL
  })
);
