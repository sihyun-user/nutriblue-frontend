import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { getSportRecordsByDate } from '@/api/sportRecord';

export default function useSportRecordsByDate() {
  const { dateId } = useParams() as { dateId: string };

  const { data: sportRecordsData, isPending: isPendingSportRecords } = useQuery(
    {
      queryKey: ['sportRecords', dateId],
      queryFn: () => getSportRecordsByDate(dateId)
    }
  );

  return { sportRecordsData, isPendingSportRecords };
}
