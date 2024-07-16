import type { Metadata } from 'next';

import { UserProvider } from '@/providers/UserProvider';
import NavBar from '@/components/navbar/NavBar';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASEURL || 'http://localhost:5173'
  ),
  title: {
    default: 'NutriBlue - 飲食日記與全面營養資訊平台',
    template: '%s | NutriBlue - 飲食日記與全面營養資訊平台'
  },
  description:
    'NutriBlue 是您的飲食日記和營養指南的最佳夥伴。通過記錄每日飲食習慣，了解每餐的營養成分，並查詢大量健康食品資料庫，幫助您做出更明智的飲食選擇，達成健康生活目標。立即加入我們，開啟您的健康飲食之旅！'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <NavBar />
      <section className="container-page">{children}</section>
    </UserProvider>
  );
}
