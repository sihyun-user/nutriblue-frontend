import { useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getFoods } from '@/api/food';

export default function useFoods() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const pageIndex = !searchParams.get('pageIndex')
    ? 1
    : Number(searchParams.get('pageIndex'));

  const pageSize = !searchParams.get('pageSize')
    ? 9
    : Number(searchParams.get('pageSize'));

  const query = searchParams.get('query') as string;

  const { data, isLoading, isPending } = useQuery({
    queryKey: ['foods', query, pageIndex],
    queryFn: () => getFoods({ query, pageIndex }),
    enabled: !!query
  });

  // 預取資料
  const totalPages = data?.totalPages;
  if (pageIndex < totalPages) {
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
