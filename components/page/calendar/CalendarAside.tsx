'use client';

import { useState } from 'react';
import { PlusIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import BaseButton from '@/components/ui/BaseButton';
import DialogSmall from '@/components/dialog/DialogSmall';
import YearMonthSelector from './YearMonthSelector';

interface Props {
  onCalendarYearMonth: (year: number, month: number) => void;
}

export default function CalendarAside({ onCalendarYearMonth }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const handleYearMonthChange = (year: number, month: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
  };

  const handleConfirm = () => {
    if (selectedYear && selectedMonth) {
      onCalendarYearMonth(selectedYear, selectedMonth);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 m-4 flex flex-col items-end gap-4">
        <BaseButton
          onClick={() => setIsOpen(true)}
          className="w-[60px] shadow"
          rounded
          variation="cyan"
        >
          <CalendarDaysIcon className="size-5" />
        </BaseButton>
        <Link href="/food">
          <BaseButton className="shadow" rounded variation="secondary">
            <PlusIcon className="size-5" />
            新增食品紀錄
          </BaseButton>
        </Link>
      </div>
      <DialogSmall isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center gap-2 p-6">
          <CalendarDaysIcon className="size-6" />
          <h3 className="mb-2 font-medium text-primary-800">選擇日期</h3>
          <YearMonthSelector onYearMonthChange={handleYearMonthChange} />
        </div>
        <div className="flex w-full justify-end gap-4 border-t border-primary-300 p-2">
          <BaseButton
            onClick={() => setIsOpen(false)}
            className="w-16"
            rounded
            variation="gray"
          >
            取消
          </BaseButton>
          <BaseButton
            className="w-16"
            rounded
            variation="cyan"
            onClick={handleConfirm}
          >
            確認
          </BaseButton>
        </div>
      </DialogSmall>
    </>
  );
}
