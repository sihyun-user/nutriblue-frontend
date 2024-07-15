import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getCalendar } from '@/api/record';

export default function useRecordsByDate(calendarId: string) {
  const queryClient = useQueryClient();
  const currentData: Record<string, string[]> =
    queryClient.getQueryData(['calendars', calendarId]) || {};
  const [calendarData, setCalendarData] =
    useState<Record<string, string[]>>(currentData);

  const { data, isPending, isLoading } = useQuery({
    queryKey: ['calendars', calendarId],
    queryFn: () => getCalendar(calendarId),
    enabled: !!calendarId
  });

  useEffect(() => {
    if (data) {
      setCalendarData((prevCalendar) => ({
        ...prevCalendar,
        [calendarId]: data
      }));
    }
  }, [data, calendarId]);

  return { calendarData, isPending, isLoading };
}
