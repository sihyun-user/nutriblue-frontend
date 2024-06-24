import type { Metadata } from 'next';

import SetNavigation from '@/components/Navigation/SetNavigation';

export const metadata: Metadata = {
  title: {
    absolute: ''
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetNavigation />
      <section className="container-page">{children}</section>
    </>
  );
}
