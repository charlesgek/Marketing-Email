import { useEffect, useState } from 'react';
import { Campaign } from '@/types';

export function useCampaign(campaignId: string) {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      const res = await fetch(`/api/campaigns/${campaignId}`);
      const data = await res.json();
      setCampaign(data);
      setLoading(false);
    };

    fetchCampaign();
  }, [campaignId]);

  return { campaign, loading };
}