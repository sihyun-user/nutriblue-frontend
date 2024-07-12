import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import { getCalendar as getCalendarApi } from '@/api/record';

export default function useCalendar() {
  const queryClient = useQueryClient();
  const [calendarData, setCalendarData] = useState<Record<string, string[]>>(
    {}
  );

  const { mutate: getCalendar, isPending } = useMutation({
    mutationFn: getCalendarApi,
    onSuccess: (data, variables) => {
      const currentCalendars: Record<string, string[]> =
        queryClient.getQueryData(['calendars']) || {};

      const newCalendars = { ...currentCalendars, [variables]: data };
      queryClient.setQueryData(['calendars'], newCalendars);
      setCalendarData(newCalendars);
    }
  });

  return { calendarData, getCalendar, isPending };
}
