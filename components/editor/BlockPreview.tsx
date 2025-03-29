'use client';
export function BlockPreview({ block }: { block: EmailBlock }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform scale-105">
      <h3 className="font-medium mb-2 text-blue-600">{block.type}</h3>
      <div dangerouslySetInnerHTML={{ __html: block.content }} />
    </div>
  );
}