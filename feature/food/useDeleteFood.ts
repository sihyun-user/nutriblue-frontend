'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { deleteFood as deleteFoodApi } from '@/api/food';

export default function useDeleteFood() {
  const queryClient = useQueryClient();

  const { mutate: deleteFood, isPending } = useMutation({
    mutationFn: deleteFoodApi,
    onSuccess: () => {
      toast.success('刪除食品成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
      queryClient.invalidateQueries({ queryKey: ['lookups'] });
    },
    onError: () => {
      toast.error('刪除食品失敗，請稍後再試');
    }
  });

  return { deleteFood, isPending };
}
