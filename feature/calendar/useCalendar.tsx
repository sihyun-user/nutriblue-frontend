import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getCalendar } from '@/api/user';

interface CalendarData {
  recordsData: string[];
  sportRecordsData: string[];
}

export default function useCalendar(calendarId: string) {
  const queryClient = useQueryClient();
  const currentData: Record<string, CalendarData> =
    queryClient.getQueryData(['calendars', calendarId]) || {};
  const [calendarData, setCalendarData] =
    useState<Record<string, CalendarData>>(currentData);

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
