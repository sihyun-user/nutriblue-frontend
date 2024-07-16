import type { Metadata } from 'next';

import SignupClient from '@/components/page/auth/SignupClient';

export const metadata: Metadata = {
  title: '註冊'
};

export default function Page() {
  return (
    <>
      <header className="absolute top-0 flex h-[80px] w-full items-center justify-center">
        LOGO
      </header>
      <div className="flex items-center justify-center p-4 pt-[80px] md:min-h-screen">
        <SignupClient />
      </div>
    </>
  );
}
