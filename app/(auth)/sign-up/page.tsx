import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
          }
        }}
      />
    </div>
  );
}