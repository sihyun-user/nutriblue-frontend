'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { type NewSportRecordSchemaType } from '@/schemas/sportRecord';
import { createSportRecord as createSportRecordApi } from '@/api/sportRecord';

export default function useCreateSportRecord() {
  const queryClient = useQueryClient();

  const { mutate: createSportRecord, isPending } = useMutation({
    mutationFn: createSportRecordApi,
    onSuccess: (variables, context) => {
      const { recordDate } = context as NewSportRecordSchemaType;
      const [year, month] = recordDate.split('-');
      const calendarId = `${year}-${month}`;

      toast.success('新增健康紀錄成功');
      queryClient.invalidateQueries({ queryKey: ['records'] });
      queryClient.invalidateQueries({ queryKey: ['sportRecords'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      queryClient.invalidateQueries({ queryKey: ['calendars', calendarId] });
    },
    onError: () => {
      toast.error('新增健康紀錄失敗，請稍後再試');
    }
  });

  return { createSportRecord, isPending };
}
