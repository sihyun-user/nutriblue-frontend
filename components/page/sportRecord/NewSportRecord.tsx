import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { PlusIcon } from '@heroicons/react/24/solid';

import {
  newSportRecordSchema,
  type NewSportRecordSchemaType
} from '@/schemas/sportRecord';
import useCreateSportRecord from '@/feature/sportRecord/useCreateSportRecord';
import Dialog from '@/components/dialog/Dialog';
import BaseButton from '../../ui/BaseButton';
import InputRow from '../../ui/InputRow';
import DateSelector from '../../ui/DateSelector';

export default function NewSportRecord() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { errors }
  } = useForm<NewSportRecordSchemaType>({
    resolver: zodResolver(newSportRecordSchema),
    mode: 'onChange',
    defaultValues: {
      sportName: '',
      sportValue: 0,
      sportTime: '30分鐘',
      recordDate: format(new Date(), 'yyyy-MM-dd')
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  const { createSportRecord, isPending } = useCreateSportRecord();

  const onSubmit: SubmitHandler<NewSportRecordSchemaType> = (data) => {
    createSportRecord(data, {
      onSettled: () => {
        setIsOpen(false);
      }
    });
  };

  return (
    <>
      <BaseButton
        variation="secondary"
        onClick={() => {
          setIsOpen(true);
          reset();
        }}
      >
        <PlusIcon className="size-5" />
        新增運動紀錄
      </BaseButton>
      <Dialog
        title="新增運動紀錄"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-h-[calc(58vh-48px)] flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <InputRow
                variation="secondary"
                register={register}
                label="運動名稱"
                id="sportName"
                errors={errors}
              />
              <InputRow
                variation="secondary"
                register={register}
                type="number"
                label="運動消耗量(Kcal)"
                fixedRight="Kcal"
                id="sportValue"
                errors={errors}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <DateSelector
                initDate={getValues('recordDate')}
                control={control}
                id="recordDate"
                label="運動日期"
              />
              <InputRow
                variation="secondary"
                register={register}
                label="運動時間(ex: 30分鐘)"
                id="sportTime"
                errors={errors}
              />
            </div>
          </div>
          <div className="flex justify-end gap-6">
            <BaseButton variation="gray" onClick={() => setIsOpen(false)}>
              取消
            </BaseButton>
            <BaseButton type="submit" disabled={isPending}>
              確認
            </BaseButton>
          </div>
        </form>
      </Dialog>
    </>
  );
}
