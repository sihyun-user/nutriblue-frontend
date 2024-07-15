'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { type NewRecordSchemaType } from '@/schemas/record';
import { createRecord as createRecordApi } from '@/api/record';

export default function useCreateRecord() {
  const queryClient = useQueryClient();

  const { mutate: createRecord, isPending } = useMutation({
    mutationFn: createRecordApi,
    onSuccess: (variables, context) => {
      const { record_date } = context as NewRecordSchemaType;
      const [year, month] = record_date.split('-');
      const calendarId = `${year}-${month}`;

      toast.success('新增食品紀錄成功');
      queryClient.invalidateQueries({ queryKey: ['records'] });
      queryClient.invalidateQueries({ queryKey: ['calendars', calendarId] });
    },
    onError: () => {
      toast.error('新增食品紀錄失敗，請稍後再試');
    }
  });

  return { createRecord, isPending };
}
