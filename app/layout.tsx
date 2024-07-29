import type { Metadata } from 'next';
import { Noto_Sans_TC as notoSansTC } from 'next/font/google';

import Providers from '@/providers/Providers';
import '@/styles/globals.css';

const notoSans = notoSansTC({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASEURL || 'http://localhost:3000'
  ),
  title: {
    default: 'NutriBlue - 飲食日記與全面營養資訊平台',
    template: '%s | NutriBlue - 飲食日記與全面營養資訊平台'
  },
  description:
    'NutriBlue 是您的飲食日記和營養指南的最佳夥伴。通過紀錄每日飲食習慣，了解每餐的營養成分，並查詢大量健康食品資料庫，幫助您做出更明智的飲食選擇，達成健康生活目標。立即加入我們，開啟您的健康飲食之旅！'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
