import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getBookmarks } from '@/api/bookmark';
import useSetParams from '@/hooks/useSetParams';

export default function useBookmarks() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const { handleSetParams } = useSetParams();

  const [prevQuery, setPrevQuery] = useState('');

  const query = searchParams.get('query') || '';
  const pageIndex = Number(searchParams.get('pageIndex')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 9;

  useEffect(() => {
    if (query !== prevQuery) {
      handleSetParams('pageIndex', 1);
      setPrevQuery(query);
    }
  }, [query, prevQuery, handleSetParams]);

  const { data, isPending } = useQuery({
    queryKey: ['bookmarks', query, pageIndex],
    queryFn: () => getBookmarks({ query, pageIndex })
  });

  // 預取資料
  if (pageIndex < data?.totalPages) {
    queryClient.prefetchQuery({
      queryKey: ['bookmarks', query, pageIndex + 1],
      queryFn: () => getBookmarks({ query, pageIndex: pageIndex + 1 })
    });
  }
  if (pageIndex > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookmarks', query, pageIndex - 1],
      queryFn: () => getBookmarks({ query, pageIndex: pageIndex - 1 })
    });
  }

  return { data, isPending, pageSize };
}
