import { LiveGlobe } from './LiveGlobe';
import { getCampaignAnalytics } from '@/lib/database/analytics';

export default async function AnalyticsPage({ params }: { params: { id: string } }) {
  const data = await getCampaignAnalytics(params.id);
  
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Campaign Analytics</h2>
      <div className="h-[600px] bg-white rounded-xl p-4 shadow-sm">
        <LiveGlobe data={data.opensByLocation} />
      </div>
    </div>
  );
}