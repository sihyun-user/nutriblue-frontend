import { Path, FieldValues, Control, Controller } from 'react-hook-form';
import { RadioGroup, Radio } from '@headlessui/react';
import clsx from 'clsx';

const radioStyle = clsx(
  'flex size-[40px] cursor-pointer items-center justify-center rounded-lg border border-primary-200 bg-primary-200 text-sm text-primary-600',
  'data-[checked]:bg-blue-400 data-[checked]:text-white'
);

interface Props<T extends FieldValues> {
  id: Path<T>;
  label: string;
  type?: string | number;
  list: { [key: string]: string | number };
  control: Control<T>;
}

export default function RadioRow<T extends FieldValues>({
  id,
  label,
  list,
  type = 'string',
  control
}: Props<T>) {
  return (
    <div className="flex flex-col">
      <label className="mb-2" htmlFor={id}>
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        render={({ field }) => (
          <RadioGroup {...field} id={id} className="flex items-center gap-4">
            {Object.entries(list).map(([item, value]) => (
              <Radio
                key={item}
                value={type === 'number' ? +item : item}
                className={radioStyle}
              >
                {value}
              </Radio>
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
}
