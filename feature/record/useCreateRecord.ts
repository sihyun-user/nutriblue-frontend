'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createFood as createFoodApi } from '@/api/food';

export default function useCreateFood() {
  const queryClient = useQueryClient();
  const { mutate: createFood, isPending } = useMutation({
    mutationFn: createFoodApi,
    onSuccess: () => {
      toast.success('新增食品紀錄成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
    },
    onError: () => {
      toast.error('新增食品紀錄失敗，請稍後再試');
    }
  });

  return { createFood, isPending };
}