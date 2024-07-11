import { useQueryClient, useMutation } from '@tanstack/react-query';

import { getCalendar as getCalendarApi } from '@/api/record';

export default function useGetCalendar() {
  const queryClient = useQueryClient();
  const calendarData: Record<string, string[]> =
    queryClient.getQueryData(['calendars']) || {};

  const { mutate: getCalendar, isPending } = useMutation({
    mutationFn: getCalendarApi,
    onSuccess: (data, variables) => {
      const newCalendars = { ...calendarData, [variables]: data };
      queryClient.setQueryData(['calendars'], newCalendars);
    }
  });

  return { calendarData, getCalendar, isPending };
}
