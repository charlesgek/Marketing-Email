import { polygonProvider, contractABI } from '@/config/blockchain';

export default {
  async fetch(request, env) {
    const signer = new ethers.Wallet(env.PRIVATE_KEY, polygonProvider);
    const contract = new ethers.Contract(env.CONTRACT_ADDRESS, contractABI, signer);
    
    const { contents } = await request.json();
    const hashes = contents.map(c => ethers.utils.id(c));
    
    const tx = await contract.bulkStoreHash(hashes, {
      gasLimit: 300000,
      gasPrice: ethers.utils.parseUnits('30', 'gwei')
    });
    
    return new Response(JSON.stringify({
      txHash: tx.hash,
      contentHashes: hashes
    }));
  }
}