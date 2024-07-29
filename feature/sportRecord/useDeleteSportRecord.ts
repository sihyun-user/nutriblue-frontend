'use cleint';

import { useParams } from 'next/navigation';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { deleteSportRecord as deleteSportRecordApi } from '@/api/sportRecord';

export default function useDeleteSportRecord() {
  const { dateId } = useParams() as { dateId: string };
  const queryClient = useQueryClient();

  const { mutate: deleteSportRecord, isPending } = useMutation({
    mutationFn: deleteSportRecordApi,
    onSuccess: () => {
      toast.success('刪除健康紀錄成功');
      const [year, month] = dateId.split('-');
      const calendarId = `${year}-${month}`;
      queryClient.invalidateQueries({ queryKey: ['records', dateId] });
      queryClient.invalidateQueries({ queryKey: ['sportRecords', dateId] });
      queryClient.invalidateQueries({ queryKey: ['healthyReport'] });
      queryClient.invalidateQueries({ queryKey: ['calendars', calendarId] });
    },
    onError: () => {
      toast.error('刪除健康失敗，請稍後再試');
    }
  });

  return { deleteSportRecord, isPending };
}
