'use cleint';

import { useParams } from 'next/navigation';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateRecord as updateRecordApi } from '@/api/record';

export default function useDeleteRecord() {
  const { dateId } = useParams() as { dateId: string };
  const queryClient = useQueryClient();

  const { mutate: updateRecord, isPending } = useMutation({
    mutationFn: updateRecordApi,
    onSuccess: () => {
      toast.success('更新紀錄成功');
      const [year, month] = dateId.split('-');
      const calendarId = `${year}-${month}`;
      queryClient.invalidateQueries({ queryKey: ['records', dateId] });
      queryClient.invalidateQueries({ queryKey: ['calendars', calendarId] });
    },
    onError: () => {
      toast.error('更新紀錄失敗，請稍後再試');
    }
  });

  return { updateRecord, isPending };
}
