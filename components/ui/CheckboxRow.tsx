'use client';

import { Path, FieldValues, Control, Controller } from 'react-hook-form';
import { Field, Checkbox, Label } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface Props<T extends FieldValues> {
  id: Path<T>;
  control: Control<T>;
  children: React.ReactNode;
}

export default function CheckboxRow<T extends FieldValues>({
  id,
  control,
  children
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={id}
      render={({ field: { value, onChange } }) => (
        <Field className="flex items-center gap-3">
          <Checkbox
            id={id}
            checked={value}
            onChange={onChange}
            className="group size-6 rounded-md bg-primary-200 p-1 data-[checked]:bg-cyan-400"
          >
            <CheckIcon className="hidden size-4 font-bold text-white group-data-[checked]:block" />
          </Checkbox>
          <Label htmlFor={id}>{children}</Label>
        </Field>
      )}
    />
  );
}
