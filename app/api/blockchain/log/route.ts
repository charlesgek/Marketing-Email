import { NextResponse } from 'next/server';
import { supabase } from '@/config/supabase';
import { verifyContentHash } from '@/lib/blockchain/verifier';

export async function POST(req: Request) {
  const { content, txHash } = await req.json();
  
  const isValid = await verifyContentHash(content, txHash);
  if (!isValid) return NextResponse.json(
    { error: 'Invalid content hash' }, 
    { status: 400 }
  );

  const { error } = await supabase
    .from('blockchain_audit')
    .insert({ content, tx_hash: txHash });

  if (error) return NextResponse.json(
    { error: 'Database error' }, 
    { status: 500 }
  );

  return NextResponse.json({ success: true });
}