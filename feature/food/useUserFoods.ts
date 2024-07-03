import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import useSetParams from '@/hooks/useSetParams';

import { getUserFoods } from '@/api/food';

export default function useUserFood() {
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

  const { data, isLoading, isPending } = useQuery({
    queryKey: ['lookup', query, pageIndex],
    queryFn: () => getUserFoods({ query, pageIndex })
  });

  // 預取資料
  if (pageIndex < data?.totalPages) {
    queryClient.prefetchQuery({
      queryKey: ['lookup', query, pageIndex + 1],
      queryFn: () => getUserFoods({ query, pageIndex: pageIndex + 1 })
    });
  }
  if (pageIndex > 1) {
    queryClient.prefetchQuery({
      queryKey: ['lookup', query, pageIndex - 1],
      queryFn: () => getUserFoods({ query, pageIndex: pageIndex - 1 })
    });
  }

  return { data, isLoading, isPending, pageSize };
}
