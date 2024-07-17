import type { Metadata } from 'next';

import AuthClient from '@/components/page/auth/AuthClient';
import SignupClient from '@/components/page/auth/SignupClient';

export const metadata: Metadata = {
  title: '註冊'
};

export default function Page() {
  return (
    <AuthClient>
      <SignupClient />
    </AuthClient>
  );
}
