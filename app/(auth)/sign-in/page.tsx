import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <SignIn 
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
          }
        }}
      />
    </div>
  );
}