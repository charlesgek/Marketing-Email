import { 
    GoogleButton,
    GitHubButton 
  } from '@clerk/nextjs';
  
  export function SocialLogins() {
    return (
      <div className="space-y-4">
        <GoogleButton 
          className="w-full bg-white border text-gray-700 hover:bg-gray-50"
          redirectUrl="/dashboard"
        />
        <GitHubButton
          className="w-full bg-gray-800 text-white hover:bg-gray-900"
          redirectUrl="/dashboard"
        />
      </div>
    );
  }