import type { Metadata } from 'next';

import AuthClient from '@/components/page/auth/AuthClient';
import LoginClient from '@/components/page/auth/LoginClient';

export const metadata: Metadata = {
  title: '登入'
};

export default function Page() {
  return (
    <AuthClient>
      <LoginClient />
    </AuthClient>
  );
}
