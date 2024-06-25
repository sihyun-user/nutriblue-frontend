import { Path, FieldValues, UseFormRegister } from 'react-hook-form';
import { Checkbox, Label, Field } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

interface Props<T extends FieldValues> {
  id: Path<T>;
  defaultChecked?: boolean;
  children: React.ReactNode;
  register: UseFormRegister<T>;
}

export default function CheckboxRow<T extends FieldValues>({
  id,
  defaultChecked,
  register,
  children
}: Props<T>) {
  return (
    <Field className="flex items-center gap-3">
      <Checkbox
        id={id}
        defaultChecked={defaultChecked}
        {...register}
        className="group size-6 rounded-md bg-primary-200 p-1 data-[checked]:bg-cyan-400"
      >
        <CheckIcon className="hidden size-4 font-bold text-white group-data-[checked]:block" />
      </Checkbox>
      <Label htmlFor={id}>{children}</Label>
    </Field>
  );
}
