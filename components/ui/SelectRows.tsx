import { Field, Label, Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

const selectStyle = clsx(
  'h-[40px] w-full appearance-none rounded-lg border-none bg-white px-3 text-sm text-primary-800 outline-none outline-1 -outline-offset-1 outline-primary-200',
  'transition-all duration-200 hover:bg-primary-100 focus:bg-white focus:outline-2 focus:outline-blue-200'
);

export default function SelectRows({ label }: { label?: string }) {
  return (
    <Field className="flex flex-col">
      {label && <Label className="mb-2">{label}</Label>}
      <div className="relative">
        <Select className={selectStyle}>
          <option value="breakfast">早餐</option>
          <option value="lunch">午餐</option>
          <option value="dinner">晚餐</option>
          <option value="dessert">點心</option>
        </Select>
        <ChevronDownIcon
          className="group pointer-events-none absolute right-2 top-3.5 size-4"
          aria-hidden="true"
        />
      </div>
    </Field>
  );
}
