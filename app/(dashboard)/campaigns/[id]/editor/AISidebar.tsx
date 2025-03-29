'use client';
import { useState } from 'react';
import { AISuggestions } from '@/components/ai/AISuggestions';

export function AISidebar() {
  const [content, setContent] = useState('');

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">AI Assistant</h3>
      
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded-lg"
        placeholder="Paste your email content here..."
        rows={6}
      />
      
      <AISuggestions content={content} />
    </div>
  );
}