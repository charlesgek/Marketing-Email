import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export async function saveCampaign(campaign: any) {
  const { data, error } = await supabase
    .from('campaigns')
    .upsert(campaign)
    .select();

  if (error) throw error;
  return data;
}