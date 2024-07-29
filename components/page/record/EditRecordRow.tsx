'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { IRecord } from '@/types';
import {
  updateRecordSchema,
  type UpdateRecordSchemaType
} from '@/schemas/record';
import useUpdateRecord from '@/feature/record/useUpdateRecord';
import BaseButton from '@/components/ui/BaseButton';
import InputRow from '@/components/ui/InputRow';
import SelectRows from '@/components/ui/SelectRows';
import DateSelector from '@/components/ui/DateSelector';

const mealList = [
  { id: 'breakfast', name: '早餐' },
  { id: 'lunch', name: '午餐' },
  { id: 'dinner', name: '晚餐' },
  { id: 'dessert', name: '點心' }
];

interface Props {
  record: IRecord;
  handleClose: () => void;
  handleMultiplier: (value: number) => void;
}

export default function EditRecordRow({
  record,
  handleClose,
  handleMultiplier
}: Props) {
  const { id: recordId, food, multiplier, mealName, recordDate } = record;
  const {
    servingSize: { value, unit, container }
  } = food;

  const [containerValue, setContainerValue] = useState(0);

  const { updateRecord, isPending } = useUpdateRecord();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    control,
    formState: { errors }
  } = useForm<UpdateRecordSchemaType>({
    resolver: zodResolver(updateRecordSchema),
    mode: 'onChange',
    defaultValues: {
      recordId,
      multiplier,
      mealName,
      recordDate
    }
  });

  const newMultiplier = watch('multiplier');

  useEffect(() => {
    const newValue = value * container * newMultiplier;
    const calculatedValue = Math.round(newValue);
    setContainerValue(calculatedValue);

    handleMultiplier(newMultiplier);
  }, [newMultiplier, handleMultiplier, value, container]);

  const onSubmit: SubmitHandler<UpdateRecordSchemaType> = (data) => {
    updateRecord(data, {
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
      {record && (
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
            <BaseButton variation="gray" onClick={() => handleClose()}>
              取消修改
            </BaseButton>
            <BaseButton type="submit" disabled={isPending}>
              確認修改
            </BaseButton>
          </div>
        </>
      )}
    </form>
  );
}
