'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { deleteFoodBookmark as deleteFoodBookmarkApi } from '@/api/food';

export default function useDeleteFoodBookmark() {
  const queryClient = useQueryClient();
  const { mutate: deleteFoodBookmark } = useMutation({
    mutationFn: deleteFoodBookmarkApi,
    onSuccess: () => {
      toast.success('刪除食品書籤成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
    },
    onError: () => {
      toast.error('刪除食品書籤失敗，請稍後再試');
    }
  });

  return { deleteFoodBookmark };
}
