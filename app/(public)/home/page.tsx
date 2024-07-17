import type { Metadata } from 'next';

import Dashboard from '@/components/Dashboard';

export const metadata: Metadata = {
  title: '首頁'
};

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <Dashboard />
    </div>
  );
}
