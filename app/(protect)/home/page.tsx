import type { Metadata } from 'next';

import DashboardClient from '@/components/page/home/DashboardClient';

export const metadata: Metadata = {
  title: '首頁'
};

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <DashboardClient />
    </div>
  );
}
