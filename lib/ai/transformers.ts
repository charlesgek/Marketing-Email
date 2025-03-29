import { pipeline } from 'transformers.js';

export async function optimizeEmailContent(content: string) {
  const generator = await pipeline('text-generation', 'Xenova/tiny-llama');
  return generator(content, {
    max_new_tokens: 500,
    temperature: 0.7
  })[0].generated_text;
}