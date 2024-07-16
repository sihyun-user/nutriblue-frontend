'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';

import { IFood } from '@/types/food';
import { newRecordSchema, type NewRecordSchemaType } from '@/schemas/record';
import BaseButton from '@/components/ui/BaseButton';
import InputRow from '@/components/ui/InputRow';
import SelectRows from '@/components/ui/SelectRows';
import DateSelector from '@/components/ui/DateSelector';
import useCreateRecord from '@/feature/record/useCreateRecord';

const mealList = [
  { id: 'breakfast', name: '早餐' },
  { id: 'lunch', name: '午餐' },
  { id: 'dinner', name: '晚餐' },
  { id: 'dessert', name: '點心' }
];

interface Props {
  food: IFood;
  newRecord: boolean;
  closeNewRecord: () => void;
  handleClose: () => void;
  handleMultiplier: (value: number) => void;
}

export default function NewRecord({
  food,
  newRecord,
  closeNewRecord,
  handleClose,
  handleMultiplier
}: Props) {
  const {
    id,
    servingSize: { value, unit, container }
  } = food;
  const [containerValue, setContainerValue] = useState(0);

  const { createRecord, isPending } = useCreateRecord();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
    control,
    formState: { errors }
  } = useForm<NewRecordSchemaType>({
    resolver: zodResolver(newRecordSchema),
    mode: 'onChange',
    defaultValues: {
      foodId: id,
      multiplier: 1,
      mealName: 'breakfast',
      recordDate: format(new Date(), 'yyyy-MM-dd')
    }
  });

  const multiplier = watch('multiplier');

  useEffect(() => {
    const newValue = value * container * multiplier;
    const calculatedValue = Math.round(newValue);
    setContainerValue(calculatedValue);

    handleMultiplier(multiplier);
  }, [multiplier, handleMultiplier, value, container]);

  useEffect(() => {
    if (!newRecord) reset();
  }, [reset, newRecord]);

  const onSubmit: SubmitHandler<NewRecordSchemaType> = (data) => {
    createRecord(data, {
      onSettled: () => handleClose()
    });
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 items-start gap-4">
        <InputRow
          variation="secondary"
          id="multiplier"
          type="number"
          label="攝取份數"
          register={register}
          errors={errors}
        />
        <InputRow
          variation="secondary"
          id="container"
          label="本包裝含"
          disabled
          setValue={containerValue}
          fixedRight={unit}
        />
      </div>
      {newRecord && (
        <>
          <div className="mt-4 grid grid-cols-2 items-end gap-4">
            <SelectRows
              id="mealName"
              label="餐點名稱"
              list={mealList}
              control={control}
            />
            <DateSelector
              initDate={getValues('recordDate')}
              control={control}
              position="right"
              id="recordDate"
              label="日期"
            />
          </div>
          <div className="mt-8 flex justify-end gap-6">
            <BaseButton variation="gray" onClick={closeNewRecord}>
              取消
            </BaseButton>
            <BaseButton type="submit" disabled={isPending}>
              確定
            </BaseButton>
          </div>
        </>
      )}
    </form>
  );
}
