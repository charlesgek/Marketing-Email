'use client';

export function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
}