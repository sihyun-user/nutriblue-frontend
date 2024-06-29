import { Path, FieldValues, Control, Controller } from 'react-hook-form';
import { Field, Label, Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

const selectStyle = clsx(
  'h-[40px] w-full appearance-none rounded-lg border-none bg-white px-3 text-sm text-primary-800 outline-none outline-1 -outline-offset-1 outline-primary-200',
  'transition-all duration-200 hover:bg-primary-100 focus:bg-white focus:outline-2 focus:outline-blue-200'
);

interface Props<T extends FieldValues> {
  id: Path<T>;
  label: string;
  list: {
    id: string;
    name: string;
  }[];
  control: Control<T>;
}

export default function SelectRows<T extends FieldValues>({
  id,
  label,
  list,
  control
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={id}
      render={({ field }) => (
        <Field className="flex flex-col">
          {label && <Label className="mb-2">{label}</Label>}
          <div className="relative">
            <Select {...field} className={selectStyle}>
              {list.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
            <ChevronDownIcon
              className="group pointer-events-none absolute right-2 top-3.5 size-4"
              aria-hidden="true"
            />
          </div>
        </Field>
      )}
    />
  );
}
