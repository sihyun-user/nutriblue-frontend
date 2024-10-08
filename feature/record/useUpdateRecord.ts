'use cleint';

import { useParams } from 'next/navigation';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateRecord as updateRecordApi } from '@/api/record';

export default function useUpdateRecord() {
  const { dateId } = useParams() as { dateId: string };
  const queryClient = useQueryClient();

  const { mutate: updateRecord, isPending } = useMutation({
    mutationFn: updateRecordApi,
    onSuccess: () => {
      toast.success('更新食品紀錄成功');
      const [year, month] = dateId.split('-');
      const calendarId = `${year}-${month}`;
      queryClient.invalidateQueries({ queryKey: ['records', dateId] });
      queryClient.invalidateQueries({ queryKey: ['sportRecords', dateId] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      queryClient.invalidateQueries({ queryKey: ['calendars', calendarId] });
    },
    onError: () => {
      toast.error('更新食品紀錄失敗，請稍後再試');
    }
  });

  return { updateRecord, isPending };
}
