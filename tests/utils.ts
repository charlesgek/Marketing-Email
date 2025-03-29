import { supabase } from '@/config/supabase';

export async function resetTestDatabase() {
  await supabase
    .from('campaigns')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');

  await supabase
    .from('blockchain_audit')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
}

export function mockBlockchainTx() {
  return {
    contentHash: '0x123...',
    txHash: '0x456...'
  };
}