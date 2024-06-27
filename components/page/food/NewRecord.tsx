'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import BaseButton from '@/components/ui/BaseButton';
import InputRow from '@/components/ui/InputRow';
import SelectRows from '@/components/ui/SelectRows';
import DateSelector from '@/components/ui/DateSelector';

export default function NewRecord({
  newRecord,
  closeNewRecord
}: {
  newRecord: boolean;
  closeNewRecord: () => void;
}) {
  const { register, handleSubmit, getValues, reset, control } = useForm({
    defaultValues: {
      multiplier: 1,
      meal_name: 'breakfast',
      record_date: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (!newRecord) reset();
  }, [reset, newRecord]);

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 items-end gap-4">
        <InputRow
          variation="secondary"
          id="multiplier"
          type="number"
          label="份數"
          register={register}
        />
        <InputRow
          variation="secondary"
          id="container"
          label="本包裝含2份"
          disabled
          fixedRight="ml"
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
