import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import clsx from 'clsx';

const radioStyle = clsx(
  'flex size-[40px] cursor-pointer items-center justify-center rounded-lg border border-primary-200 bg-primary-200 text-sm font-medium text-primary-800',
  'data-[checked]:bg-blue-400 data-[checked]:text-white'
);

const plans = ['g', 'ml'];

export default function SelectedUnit({ control }: { control: Control }) {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <Field>
      <Label>單位</Label>
      <Controller
        control={control}
        name="serving_size.unit"
        defaultValue={selected}
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              setSelected(value);
            }}
            className="mt-3 flex items-center gap-4"
          >
            {plans.map((plan) => (
              <Field key={plan}>
                <Radio value={plan} className={radioStyle}>
                  {plan}
                </Radio>
              </Field>
            ))}
          </RadioGroup>
        )}
      />
    </Field>
  );
}
