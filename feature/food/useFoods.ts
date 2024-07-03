import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import useSetParams from '@/hooks/useSetParams';

import { getFoods } from '@/api/food';

export default function useFoods() {
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
    queryKey: ['foods', query, pageIndex],
    queryFn: () => getFoods({ query, pageIndex }),
    enabled: !!query
  });

  // 預取資料
  if (pageIndex < data?.totalPages) {
    queryClient.prefetchQuery({
      queryKey: ['foods', query, pageIndex + 1],
      queryFn: () => getFoods({ query, pageIndex: pageIndex + 1 })
    });
  }
  if (pageIndex > 1) {
    queryClient.prefetchQuery({
      queryKey: ['foods', query, pageIndex - 1],
      queryFn: () => getFoods({ query, pageIndex: pageIndex - 1 })
    });
  }

  return { data, isLoading, isPending, pageSize };
}
