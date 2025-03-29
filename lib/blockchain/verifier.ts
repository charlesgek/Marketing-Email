import { ethers } from 'ethers';
import { supabase } from '@/config/supabase';

export async function verifyCampaign(campaignId: string): Promise<boolean> {
  // 1. Get campaign data
  const { data: campaign } = await supabase
    .from('campaigns')
    .select('content, blockchain_tx_hash')
    .eq('id', campaignId)
    .single();

  if (!campaign?.blockchain_tx_hash) return false;

  // 2. Verify on blockchain
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.POLYGON_RPC!
  );
  
  const receipt = await provider.getTransactionReceipt(
    campaign.blockchain_tx_hash
  );
  
  // 3. Validate contract interaction
  const contract = new ethers.Contract(
    receipt.to!,
    ['event ContentHashed(address indexed sender, bytes32 indexed contentHash, uint256 timestamp)'],
    provider
  );

  const log = contract.interface.parseLog(receipt.logs[0]);
  const storedHash = log.args.contentHash;
  const calculatedHash = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(campaign.content)
  );

  return storedHash === calculatedHash;
}