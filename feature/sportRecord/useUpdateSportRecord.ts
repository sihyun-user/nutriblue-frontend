'use cleint';

import { useParams } from 'next/navigation';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateSportRecord as updateSportRecordApi } from '@/api/sportRecord';

export default function useUpdateSportRecord() {
  const { dateId } = useParams() as { dateId: string };
  const queryClient = useQueryClient();

  const { mutate: updateSportRecord, isPending } = useMutation({
    mutationFn: updateSportRecordApi,
    onSuccess: () => {
      toast.success('更新健康紀錄成功');
      const [year, month] = dateId.split('-');
      const calendarId = `${year}-${month}`;
      queryClient.invalidateQueries({ queryKey: ['records', dateId] });
      queryClient.invalidateQueries({ queryKey: ['sportRecords', dateId] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      queryClient.invalidateQueries({ queryKey: ['calendars', calendarId] });
    },
    onError: () => {
      toast.error('更新健康紀錄失敗，請稍後再試');
    }
  });

  return { updateSportRecord, isPending };
}
