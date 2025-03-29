import { CampaignList } from '@/components/dashboard/CampaignList';

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Your Campaigns</h2>
      <CampaignList />
    </div>
  );
}