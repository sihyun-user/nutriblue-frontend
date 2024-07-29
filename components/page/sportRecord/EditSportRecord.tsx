import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  updateSportRecordSchema,
  type UpdateSportRecordSchemaType
} from '@/schemas/sportRecord';
import { ISportRecord } from '@/types';
import useUpdateSportRecord from '@/feature/sportRecord/useUpdateSportRecord';
import Dialog from '@/components/dialog/Dialog';
import BaseButton from '../../ui/BaseButton';
import InputRow from '../../ui/InputRow';
import DateSelector from '../../ui/DateSelector';

interface Props {
  isEdit: boolean;
  isClose: () => void;
  sportRecord: ISportRecord;
}

export default function EditSportRecord({
  isEdit,
  isClose,
  sportRecord
}: Props) {
  const { id, sportName, sportTime, sportValue, recordDate } = sportRecord;

  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors }
  } = useForm<UpdateSportRecordSchemaType>({
    resolver: zodResolver(updateSportRecordSchema),
    mode: 'onChange',
    defaultValues: {
      sportRecordId: id,
      sportName,
      sportValue,
      sportTime,
      recordDate
    }
  });

  const { updateSportRecord, isPending } = useUpdateSportRecord();

  const onSubmit: SubmitHandler<UpdateSportRecordSchemaType> = (data) => {
    updateSportRecord(data, {
      onSuccess: () => {
        isClose();
      }
    });
  };

  return (
    <Dialog title="修改運動紀錄" isOpen={isEdit} onClose={isClose}>
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
          <BaseButton variation="gray" onClick={isClose}>
            取消修改
          </BaseButton>
          <BaseButton type="submit" disabled={isPending}>
            確認修改
          </BaseButton>
        </div>
      </form>
    </Dialog>
  );
}
