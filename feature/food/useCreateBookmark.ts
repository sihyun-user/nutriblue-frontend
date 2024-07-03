'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createFoodBookmark as createFoodBookmarkApi } from '@/api/food';

export default function useCreateFoodBookmark() {
  const queryClient = useQueryClient();
  const { mutate: createFoodBookmark } = useMutation({
    mutationFn: createFoodBookmarkApi,
    onSuccess: () => {
      toast.success('新增食品書籤成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
    },
    onError: () => {
      toast.error('新增食品書籤失敗，請稍後再試');
    }
  });

  return { createFoodBookmark };
}
