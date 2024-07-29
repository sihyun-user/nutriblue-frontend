import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { getRecordsByDate } from '@/api/record';

export default function useRecordsByDate() {
  const { dateId } = useParams() as { dateId: string };

  const { data: recordsData, isPending: isPendingRecords } = useQuery({
    queryKey: ['records', dateId],
    queryFn: () => getRecordsByDate(dateId)
  });

  return { recordsData, isPendingRecords };
}
