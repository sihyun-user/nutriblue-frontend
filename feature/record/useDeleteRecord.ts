'use cleint';

import { useParams } from 'next/navigation';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { deleteRecord as deleteRecordApi } from '@/api/record';

export default function useDeleteRecord() {
  const { dateId } = useParams() as { dateId: string };
  const queryClient = useQueryClient();

  const { mutate: deleteRecord, isPending } = useMutation({
    mutationFn: deleteRecordApi,
    onSuccess: () => {
      toast.success('刪除紀錄成功');
      const [year, month] = dateId.split('-');
      const calendarId = `${year}-${month}`;
      queryClient.invalidateQueries({ queryKey: ['records', dateId] });
      queryClient.invalidateQueries({ queryKey: ['calendars', calendarId] });
    },
    onError: () => {
      toast.error('刪除紀錄失敗，請稍後再試');
    }
  });

  return { deleteRecord, isPending };
}
