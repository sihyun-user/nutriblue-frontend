'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createFood as createFoodApi } from '@/api/food';

export default function useCreateFood() {
  const queryClient = useQueryClient();
  const { mutate: createFood, isPending } = useMutation({
    mutationFn: createFoodApi,
    onSuccess: () => {
      toast.success('新增食品成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
      queryClient.invalidateQueries({ queryKey: ['lookups'] });
    },
    onError: () => {
      toast.error('新增食品失敗，請稍後再試');
    }
  });

  return { createFood, isPending };
}
