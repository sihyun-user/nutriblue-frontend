'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createBookmark as createBookmarkApi } from '@/api/bookmark';

export default function useCreateBookmark() {
  const queryClient = useQueryClient();

  const { mutate: createBookmark } = useMutation({
    mutationFn: createBookmarkApi,
    onSuccess: () => {
      toast.success('新增食品書籤成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
    },
    onError: () => {
      toast.error('新增食品書籤失敗，請稍後再試');
    }
  });

  return { createBookmark };
}
