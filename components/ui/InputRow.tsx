'use client';

import { Input } from '@headlessui/react';
import {
  Path,
  FieldValues,
  FieldErrors,
  UseFormRegister
} from 'react-hook-form';
import clsx from 'clsx';

const variations: { [key: string]: string } = {
  primary: clsx(
    'h-[40px] w-full rounded-lg bg-primary-100 px-3 text-sm text-primary-800 outline-none outline-1 -outline-offset-1 outline-primary-100',
    'transition-all duration-200 hover:bg-primary-200 focus:bg-white'
  ),
  secondary: clsx(
    'h-[40px] w-full rounded-lg bg-white px-3 text-sm text-primary-800 outline-none outline-1 -outline-offset-1 outline-primary-200',
    'transition-all duration-200 hover:bg-primary-100 focus:bg-white focus:outline-2 focus:outline-blue-200'
  )
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getValueByPath(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

interface Props<T extends FieldValues> {
  id: Path<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  fixedRight?: string;
  variation?: string;
  disabled?: boolean;
  setValue?: string | number;
  errors?: FieldErrors;
  register?: UseFormRegister<T>;
}

export default function InputRow<T extends FieldValues>({
  id,
  label,
  variation = 'primary',
  type = 'text',
  placeholder,
  disabled = false,
  fixedRight,
  setValue,
  errors,
  register
}: Props<T>) {
  const errorMessage = getValueByPath(errors, id)?.message;

  const registerProps = register
    ? register(id, {
        setValueAs: (value) => {
          if (type === 'number') {
            return value !== '' ? Number(value) : null;
          }
          return value;
        }
      })
    : {};

  return (
    <div className="flex flex-col">
      <label className="mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <Input
          className={variation ? variations[variation] : ''}
          type={type}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
          value={setValue}
          step={type === 'number' ? '0.1' : ''}
          {...registerProps}
        />
        {fixedRight && (
          <span className="absolute inset-y-0 right-2 flex items-center text-sm text-primary-400">
            {fixedRight}
          </span>
        )}
      </div>
      {errorMessage && (
        <span className="pt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}
