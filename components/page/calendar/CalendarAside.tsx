'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { PlusIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import BaseButton from '@/components/ui/BaseButton';
import DialogSmall from '@/components/dialog/DialogSmall';
import DateSelector from '@/components/ui/DateSelector';

interface CalendarForm {
  select_date: string;
}

export default function CalendarAside() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { reset, getValues, handleSubmit, control } = useForm<CalendarForm>({
    defaultValues: {
      select_date: format(new Date(), 'yyyy-MM-dd')
    }
  });

  const onSubmit: SubmitHandler<CalendarForm> = (data) => {
    router.push(`${pathname}/${data.select_date}`);
  };

  function handleClose() {
    reset();
    setIsOpen(false);
  }

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
            新增紀錄
          </BaseButton>
        </Link>
      </div>
      <DialogSmall isOpen={isOpen} onClose={() => handleClose()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-2 p-6">
            <CalendarDaysIcon className="size-6" />
            <h3 className="mb-2 font-medium text-primary-800">選擇日期</h3>
            <DateSelector
              initDate={getValues('select_date')}
              control={control}
              position="center"
              id="select_date"
            />
          </div>
          <div className="flex w-full justify-end gap-4 border-t border-primary-300 p-2">
            <BaseButton
              onClick={() => handleClose()}
              className="w-16"
              rounded
              variation="gray"
            >
              取消
            </BaseButton>
            <BaseButton type="submit" className="w-16" rounded variation="cyan">
              確認
            </BaseButton>
          </div>
        </form>
      </DialogSmall>
    </>
  );
}
