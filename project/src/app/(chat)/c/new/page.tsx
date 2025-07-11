/**
 * New Chat Page
 *
 * This page allows users to start a new chat conversation.
 * Protected with authentication and proper loading states.
 */

import { ProtectedPageWrapper } from '@/components/auth';

import { NewChatContent } from './NewChatContent';

// Main page component with protection (Server Component)
export default function NewChatPage() {
  return (
    <ProtectedPageWrapper
      requirements={{
        level: 'chat',
        requireVerified: false,
        requireComplete: false,
      }}
      loadingVariant='chat'
      enableErrorBoundary={true}
      enableDevTools={false}
      pageTitle='New Chat'
      pageDescription='Start a new AI conversation'
      className='min-h-screen'
    >
      <NewChatContent />
    </ProtectedPageWrapper>
  );
}

// SEO metadata for new chat page
export const metadata = {
  title: 'New Chat | Aria',
  description: 'Start a new AI conversation with Aria',
};
