'use client';

import { Input } from '@headlessui/react';
import clsx from 'clsx';

import FormRow from '@/components/FormRow';
import BaseButton from '@/components/BaseButton';

const inputStyle = clsx(
  'w-full rounded-lg border border-primary-200 bg-white px-3 py-2.5 text-sm text-primary-800',
  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-200'
);

export default function Auth() {
  return (
    <div className="mx-auto w-full max-w-[470px] rounded-lg bg-white p-8">
      <h1 className="mb-4 text-2xl font-medium">登入</h1>
      <div className="space-y-3">
        <FormRow label="Email">
          <Input className={inputStyle} type="text" id="name" />
        </FormRow>
        <FormRow label="密碼">
          <Input className={inputStyle} type="text" id="name" />
        </FormRow>
      </div>
      <div className="mb-6 mt-2 flex justify-end text-sm">忘記密碼?</div>
      <BaseButton full>登入</BaseButton>
    </div>
  );
}
