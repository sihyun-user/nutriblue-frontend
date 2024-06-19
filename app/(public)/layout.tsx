import type { Metadata } from 'next';
import { Noto_Sans_TC as notoSansTC } from 'next/font/google';

import Provider from '@/lib/provider';
import SetNavigation from '@/components/Navigation/SetNavigation';
import '@/styles/globals.css';

const notoSans = notoSansTC({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'orangeLife App',
  description: 'Generated by orangeLife app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} relative flex min-h-screen flex-col bg-blue-100 text-primary-700`}
      >
        <Provider>
          <SetNavigation />
          <main className="layout-padding mx-auto w-full max-w-2xl pt-10 lg:max-w-4xl xl:max-w-5xl">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
