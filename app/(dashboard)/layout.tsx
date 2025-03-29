import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col">
      <header className="border-b p-4 flex justify-between items-center bg-white">
        <h1 className="text-2xl font-bold text-gray-800">Email Studio Pro</h1>
        <div className="flex items-center gap-4">
        <SignedIn>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-9 h-9',
                userButtonPopoverCard: 'bg-white shadow-md',
                userButtonPopoverActionButton: 'hover:bg-gray-50',
                userButtonPopoverFooter: 'hidden' // Hides "Manage account" link
              }
            }}
          />
          </SignedIn>
          <SignedOut>
          <SignInButton />
          </SignedOut>
        </div>
      </header>
      <main className="flex-1 overflow-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
      <ClerkProvider>
        <DashboardLayout />
      </ClerkProvider>
      </body>
    </html>
  )
}