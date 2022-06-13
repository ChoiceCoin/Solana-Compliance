// Copyright Fortior Blockchain, LP 2022
// Open Source Software | Apache License
// Script for sending a transaction on Solana using the Javascript-SDK

const web3 =  require("@solana/web3.js");
(async () => {
  // Connect to cluster
  console.log(web3.clusterApiUrl('devnet'))
  const connection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
    'confirmed',
  );
  // Using the secretkey to generate the keypair
  const secretkey = Uint8Array.from([''])
  const from = web3.Keypair.fromSecretKey(secretkey);  
  //If you already have enough test sol in your account you can comment this out
  const airdropSignature = await connection.requestAirdrop(
    from.publicKey,
    web3.LAMPORTS_PER_SOL,
  );
  await connection.confirmTransaction(airdropSignature);
  // Add transfer instruction to transaction
  // Lamports define the amount
  const transaction = new web3.Transaction().add(
    web3.SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: '',
      lamports: web3.LAMPORTS_PER_SOL / 100,
    }),
  );
  // Sign transaction, broadcast, and confirm
  const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [from],
  );
  console.log('SIGNATURE', signature);
})();

// SIGNATURE 36bvGs1ddyfYJeGudoDKm4fFW7HgULWKRz7vGgWjv3g33NsvQMgKyu9Mb9eGc8VuetVd2BVTyUVt7TeVU8j5dJ6V
