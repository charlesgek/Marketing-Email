import { NextResponse } from 'next/server';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HF_TOKEN);

export async function POST(req: Request) {
  const { content } = await req.json();
  
  try {
    const optimized = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      inputs: `Optimize this email for higher engagement while maintaining a professional tone:\n\n${content}`,
      parameters: {
        max_new_tokens: 500,
        temperature: 0.7,
        repetition_penalty: 1.2
      }
    });

    return NextResponse.json({
      original: content,
      optimized: optimized.generated_text
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to optimize content' },
      { status: 500 }
    );
  }
}