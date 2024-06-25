import type { Metadata } from 'next';

import NavBar from '@/components/navbar/NavBar';

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
      <NavBar />
      <section className="container-page">{children}</section>
    </>
  );
}
