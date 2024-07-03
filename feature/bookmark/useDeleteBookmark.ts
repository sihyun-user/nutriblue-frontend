'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { deleteBookmark as deleteBookmarkApi } from '@/api/bookmark';

export default function useDeleteBookmark() {
  const queryClient = useQueryClient();
  const { mutate: deleteBookmark } = useMutation({
    mutationFn: deleteBookmarkApi,
    onSuccess: () => {
      toast.success('刪除食品書籤成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
    },
    onError: () => {
      toast.error('刪除食品書籤失敗，請稍後再試');
    }
  });

  return { deleteBookmark };
}
