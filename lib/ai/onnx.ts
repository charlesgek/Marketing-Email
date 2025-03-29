import { InferenceSession } from 'onnxruntime-web';

let session: InferenceSession | null = null;

export async function predictOptimalTime(campaignId: string) {
  if (!session) {
    session = await InferenceSession.create('/models/sendtime-predictor.onnx');
  }
  
  const input = await preprocessData(campaignId);
  const results = await session.run({ input });
  return postprocessOutput(results);
}