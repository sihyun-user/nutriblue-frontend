import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { getRecordsByDate } from '@/api/record';

export default function useRecordsByDate() {
  const { dateId } = useParams() as { dateId: string };

  const { data, isPending } = useQuery({
    queryKey: ['records', dateId],
    queryFn: () => getRecordsByDate(dateId)
  });

  return { data, isPending };
}
