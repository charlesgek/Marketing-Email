import { optimizeEmailContent } from '@/lib/ai/optimizer';

describe('AI Optimization', () => {
  it('should return optimized content', async () => {
    const original = 'Buy our product now!';
    const optimized = await optimizeEmailContent(original);
    expect(optimized).toContain('purchase');
    expect(optimized.length).toBeGreaterThan(original.length);
  });
});