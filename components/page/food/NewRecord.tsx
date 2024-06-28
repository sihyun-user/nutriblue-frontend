'use client';

import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { newRecordSchema, type NewRecordSchemaType } from '@/schemas/record';
import BaseButton from '@/components/ui/BaseButton';
import InputRow from '@/components/ui/InputRow';
import SelectRows from '@/components/ui/SelectRows';
import DateSelector from '@/components/ui/DateSelector';

interface Props {
  newRecord: boolean;
  closeNewRecord: () => void;
  serving_size: {
    value: number;
    unit: string;
    container: number;
  };
}

export default function NewRecord({
  newRecord,
  closeNewRecord,
  serving_size
}: Props) {
  const { unit, value, container } = serving_size;
  const containerVlaue = `${value * container}`;

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    control,
    formState: { errors }
  } = useForm<NewRecordSchemaType>({
    resolver: zodResolver(newRecordSchema),
    defaultValues: {
      multiplier: 1,
      meal_name: 'breakfast',
      record_date: '06/27/2024'
    }
  });

  const onSubmit: SubmitHandler<NewRecordSchemaType> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (!newRecord) reset();
  }, [reset, newRecord]);

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 items-start gap-4">
        <InputRow
          variation="secondary"
          id="multiplier"
          type="number"
          label="份數"
          register={register}
          errors={errors}
        />
        <InputRow
          variation="secondary"
          id="container"
          label="本包裝含"
          disabled
          defaultValue={containerVlaue}
          fixedRight={unit}
        />
      </div>
      {newRecord && (
        <>
          <div className="mt-4 grid grid-cols-2 items-end gap-4">
            <SelectRows label="餐點名稱" />
            <DateSelector
              initDate={getValues().record_date}
              control={control}
              id="record_date"
            />
          </div>
          <div className="mt-8 flex justify-end gap-6">
            <BaseButton variation="gray" onClick={closeNewRecord}>
              取消
            </BaseButton>
            <BaseButton type="submit">確定</BaseButton>
          </div>
        </>
      )}
    </form>
  );
}
