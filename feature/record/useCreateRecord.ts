'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createRecord as createRecordApi } from '@/api/record';

export default function useCreateRecord() {
  const queryClient = useQueryClient();

  const { mutate: createRecord, isPending } = useMutation({
    mutationFn: createRecordApi,
    onSuccess: () => {
      toast.success('新增食品紀錄成功');
      queryClient.invalidateQueries({ queryKey: ['records'] });
      queryClient.invalidateQueries({ queryKey: ['calendars'] });
    },
    onError: () => {
      toast.error('新增食品紀錄失敗，請稍後再試');
    }
  });

  return { createRecord, isPending };
}
