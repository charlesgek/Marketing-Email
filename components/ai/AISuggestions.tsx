'use client';
import { useState } from 'react';
import { optimizeEmailContent } from '@/lib/ai/transformers';

export function AISuggestions({ content }: { content: string }) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const optimized = await optimizeEmailContent(content);
      setSuggestions([optimized]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? 'Generating...' : 'Get AI Suggestions'}
      </button>
      
      {suggestions.map((suggestion, i) => (
        <div key={i} className="p-3 bg-gray-100 rounded-lg">
          {suggestion}
        </div>
      ))}
    </div>
  );
}