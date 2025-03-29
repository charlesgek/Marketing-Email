import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { saveCampaign } from '@/lib/database/campaigns';

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  const { title, content } = await req.json();
  const campaign = await saveCampaign({
    user_id: user.id,
    title,
    content,
    status: 'draft'
  });

  return NextResponse.json(campaign);
}