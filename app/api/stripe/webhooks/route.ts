import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { supabase } from '@/config/supabase';

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')!;
  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        await handleSubscriptionUpdate(session);
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }
}

async function handleSubscriptionUpdate(session: any) {
  await supabase
    .from('users')
    .update({ 
      stripe_customer_id: session.customer,
      subscription_status: 'active'
    })
    .eq('email', session.customer_email);
}