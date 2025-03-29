import { HfInference } from '@huggingface/inference';

export default {
  async fetch(request, env) {
    const hf = new HfInference(env.HF_TOKEN);
    const cachedResponse = await caches.default.match(request);
    
    if (cachedResponse) return cachedResponse;

    const { inputs, model = 'mistralai/Mistral-7B-Instruct-v0.2' } = await request.json();
    const response = await hf.textGeneration({
      inputs,
      model,
      parameters: {
        max_new_tokens: 500,
        temperature: 0.7
      }
    });

    const newResponse = new Response(JSON.stringify(response), {
      headers: { 'Cache-Control': 'public, max-age=300' }
    });
    
    await caches.default.put(request, newResponse.clone());
    return newResponse;
  }
}