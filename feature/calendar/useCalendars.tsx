import { useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { formatedDate } from '@/utils';
import { getRecordForCalendar } from '@/api/record';
import useSetParams from '@/hooks/useSetParams';

export default function useCalendars() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const { handleSetParams } = useSetParams();

  const date = searchParams.get('date') || formatedDate(new Date());

  // useEffect(() => {
  //   if (query !== prevQuery) {
  //     handleSetParams('pageIndex', 1);
  //     setPrevQuery(query);
  //   }
  // }, [query, prevQuery, handleSetParams]);

  const { data, isLoading, isPending } = useQuery({
    queryKey: ['calendars', date],
    queryFn: () => getRecordForCalendar(date)
  });

  // 預取資料
  // if (pageIndex < data?.totalPages) {
  //   queryClient.prefetchQuery({
  //     queryKey: ['bookmarks', query, pageIndex + 1],
  //     queryFn: () => getRecordForCalendar({ query, pageIndex: pageIndex + 1 })
  //   });
  // }
  // if (pageIndex > 1) {
  //   queryClient.prefetchQuery({
  //     queryKey: ['bookmarks', query, pageIndex - 1],
  //     queryFn: () => getRecordForCalendar({ query, pageIndex: pageIndex - 1 })
  //   });
  // }

  return { data, isLoading, isPending };
}
