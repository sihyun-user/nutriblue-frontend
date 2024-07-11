import { useQueryClient, useMutation } from '@tanstack/react-query';

import { getCalendar as getCalendarApi } from '@/api/record';

interface ICalendars {
  dateId: string;
}

export default function useGetCalendar() {
  const queryClient = useQueryClient();
  const calendarData: Record<string, string[]> =
    queryClient.getQueryData(['calendars']) || {};

  const { mutate: getCalendar, isPending } = useMutation({
    mutationFn: (data: ICalendars) => getCalendarApi(data),
    onSuccess: (data, variables) => {
      const { dateId } = variables;
      const newCalendars = { ...calendarData, [dateId]: data };
      queryClient.setQueryData(['calendars'], newCalendars);
    }
  });

  return { calendarData, getCalendar, isPending };
}
