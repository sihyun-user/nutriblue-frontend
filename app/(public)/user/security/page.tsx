import type { Metadata } from 'next';

import SecurityForm from '@/components/page/user/SecurityForm';

export const metadata: Metadata = {
  title: '修改密碼'
};

export default function Page() {
  return (
    <div>
      <h1 className="border-y border-gray-200 px-6 py-4 text-xl font-semibold md:border-t-0">
        修改密碼
      </h1>
      <SecurityForm />
    </div>
  );
}
