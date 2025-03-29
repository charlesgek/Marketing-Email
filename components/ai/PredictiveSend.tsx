'use client';
import { useState } from 'react';
import { predictOptimalTime } from '@/lib/ai/onnx';

export function PredictiveSend({ campaignId }: { campaignId: string }) {
  const [bestTime, setBestTime] = useState<string | null>(null);

  const calculateTime = async () => {
    const optimal = await predictOptimalTime(campaignId);
    setBestTime(new Date(optimal).toLocaleString());
  };

  return (
    <div className="space-y-2">
      <button 
        onClick={calculateTime}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Calculate Best Send Time
      </button>
      {bestTime && <p className="text-sm">Optimal: {bestTime}</p>}
    </div>
  );
}