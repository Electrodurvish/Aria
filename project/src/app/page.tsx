import Link from 'next/link';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'>
      {/* Header with Authentication Status */}
      <header className='border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
            <div className='flex items-center'>
              <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
                Aria
              </h1>
            </div>

            {/* Authentication Section */}
            <div className='flex items-center space-x-4'>
              <SignedOut>
                <Link
                  href='/sign-in'
                  className='border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:shadow-sm hover:text-gray-900 transition-all duration-200 dark:text-gray-300 dark:hover:text-white dark:border-gray-600 dark:hover:bg-gray-800'
                >
                  Sign In
                </Link>
                <Link
                  href='/sign-up'
                  className='rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-all duration-200'
                >
                  Sign Up
                </Link>
              </SignedOut>

              <SignedIn>
                <Link
                  href='/c/new'
                  className='rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700'
                >
                  New Chat
                </Link>
                <UserButton afterSignOutUrl='/' />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Welcome Section for Signed Out Users */}
          <SignedOut>
            <div className='mx-auto max-w-3xl'>
              <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white'>
                Welcome to <span className='text-green-600'>Aria</span>
              </h1>
              <p className='mt-6 text-lg text-gray-600 dark:text-gray-300'>
                Experience the power of AI-driven conversations. Sign up to
                start chatting with our advanced AI assistant.
              </p>

              {/* Features Grid */}
              <div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
                  <div className='mb-4 text-2xl text-green-600'>🤖</div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    AI-Powered
                  </h3>
                  <p className='mt-2 text-gray-600 dark:text-gray-300'>
                    Powered by advanced language models for intelligent
                    conversations
                  </p>
                </div>

                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
                  <div className='mb-4 text-2xl text-green-600'>💬</div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Natural Chat
                  </h3>
                  <p className='mt-2 text-gray-600 dark:text-gray-300'>
                    Engage in natural, flowing conversations on any topic
                  </p>
                </div>

                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
                  <div className='mb-4 text-2xl text-green-600'>🔒</div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Secure
                  </h3>
                  <p className='mt-2 text-gray-600 dark:text-gray-300'>
                    Your conversations are private and securely stored
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className='mt-12 flex flex-col justify-center gap-4 sm:flex-row'>
                <Link
                  href='/sign-up'
                  className='rounded-lg bg-green-600 px-8 py-3 text-lg font-medium text-white hover:bg-green-700 transition-all duration-200'
                >
                  Get Started Free
                </Link>
                <Link
                  href='/sign-in'
                  className='rounded-lg border border-gray-300 px-8 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all duration-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
                >
                  Sign In
                </Link>
              </div>
            </div>
          </SignedOut>

          {/* Welcome Section for Signed In Users */}
          <SignedIn>
            <div className='mx-auto max-w-2xl'>
              <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white'>
                Welcome back!
              </h1>
              <p className='mt-6 text-lg text-gray-600 dark:text-gray-300'>
                Ready to continue your AI conversations? Start a new chat and
                explore the power of AI assistance.
              </p>

              {/* Action Button */}
              <div className='mt-8 flex justify-center'>
                <Link
                  href='/c/new'
                  className='rounded-lg bg-green-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-green-700'
                >
                  Start New Chat
                </Link>
              </div>


            </div>
          </SignedIn>
        </div>
      </main>

      {/* Footer */}
      <footer className='mt-auto border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='text-center text-gray-600 dark:text-gray-400'>
            <p>
              &copy; 2024 Aria. Built with Next.js, Clerk & OpenAI.
            </p>

          </div>
        </div>
      </footer>
    </div>
  );
}
