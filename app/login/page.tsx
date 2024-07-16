import type { Metadata } from 'next';

import LoginClient from '@/components/page/auth/LoginClient';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: '登入'
};

export default function Page() {
  return (
    <>
      <header className="absolute top-0 flex h-[80px] w-full items-center justify-center">
        <Logo />
      </header>
      <div className="flex items-center justify-center p-4 pt-[80px] md:min-h-screen">
        <LoginClient />
      </div>
    </>
  );
}
