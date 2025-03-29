'use client';
import { useEffect, useState } from 'react';

export function CampaignList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const res = await fetch('/api/campaigns');
      const data = await res.json();
      setCampaigns(data);
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="grid gap-4">
      {campaigns.map(campaign => (
        <div key={campaign.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-medium">{campaign.title}</h3>
          <p className="text-sm text-gray-600">
            {campaign.status} · {campaign.sentCount} sent
          </p>
        </div>
      ))}
    </div>
  );
}