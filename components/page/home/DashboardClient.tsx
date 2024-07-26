'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import HealthyReport from '@/components/page/home/HealthyReport';
import AnalyzeResults from '@/components/page/home/AnalyzeResults';
import DialogCreateGoal from '@/components/dialog/DialogCreateGoal';

export default function DashboardClient() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const showDialogQuery = searchParams.get('showDialog');

  useEffect(() => {
    if (showDialogQuery) {
      setIsOpen(true);
    }
  }, [showDialogQuery]);

  return (
    <>
      <h3 className="mb-4 ml-4 font-semibold">每日摘要</h3>
      <div className="flex flex-col gap-12">
        <HealthyReport />
        <AnalyzeResults />
      </div>
      <DialogCreateGoal isOpen={isOpen} />
    </>
  );
}
