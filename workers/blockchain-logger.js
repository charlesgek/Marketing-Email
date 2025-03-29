import { ethers } from 'ethers';

export default {
  async fetch(request, env) {
    const provider = new ethers.providers.JsonRpcProvider(env.POLYGON_RPC);
    const signer = new ethers.Wallet(env.PRIVATE_KEY, provider);
    const contract = new ethers.Contract(
      env.CONTRACT_ADDRESS,
      ['function bulkStoreHash(bytes32[])'],
      signer
    );

    const { contents } = await request.json();
    const hashes = contents.map(c => 
      ethers.utils.keccak256(ethers.utils.toUtf8Bytes(c))
    );

    const tx = await contract.bulkStoreHash(hashes, {
      gasLimit: 1000000,
      gasPrice: ethers.utils.parseUnits('30', 'gwei')
    });

    return new Response(JSON.stringify({
      txHash: tx.hash,
      contentHashes: hashes
    }));
  }
}