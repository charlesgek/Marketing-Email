'use client';
import { useSubscription } from '@/lib/stripe/hooks';

export default function BillingPage() {
  const { subscription, plans } = useSubscription();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Billing & Plans</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {plans.map(plan => (
          <div key={plan.id} className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-4xl font-bold my-4">
              ${plan.price / 100}<span className="text-lg">/{plan.interval}</span>
            </p>
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
              onClick={() => handleSubscribe(plan.id)}
            >
              {subscription?.planId === plan.id ? 'Current Plan' : 'Upgrade'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}