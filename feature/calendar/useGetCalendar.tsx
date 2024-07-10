import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import { getCalendar as getCalendarApi } from '@/api/record';

interface ICalendars {
  dateId: string;
}

export default function useGetCalendar() {
  const queryClient = useQueryClient();
  const [calendarData, setCalendarData] = useState<{ [key: string]: string[] }>(
    {}
  );

  const { mutate: getCalendar, isPending } = useMutation({
    mutationFn: (data: ICalendars) => getCalendarApi(data),
    onSuccess: (data, variables) => {
      const { dateId } = variables;
      const calendars = queryClient.getQueryData(['calendars']) || {};
      const newCalendars = { ...calendars, [dateId]: data };
      queryClient.setQueryData(['calendars'], newCalendars);

      setCalendarData((prevState) => ({ ...prevState, [dateId]: data }));
    }
  });

  return { calendarData, getCalendar, isPending };
}
