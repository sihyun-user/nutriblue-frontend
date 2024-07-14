// import { useState, useEffect } from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';

// import { getCalendar } from '@/api/record';

// export default function useRecordsByDate(calendarId: string) {
//   const queryClient = useQueryClient();
//   const currentData: Record<string, string[]> =
//     queryClient.getQueryData(['calendars', calendarId]) || {};
//   const [calendarData, setCalendarData] =
//     useState<Record<string, string[]>>(currentData);

//   const { data, isPending, isFetched } = useQuery({
//     queryKey: ['calendars', calendarId],
//     queryFn: () => getCalendar(calendarId),
//     enabled: !!calendarId
//   });

//   useEffect(() => {
//     if (data && isFetched) {
//       setCalendarData((prevCalendar) => ({
//         ...prevCalendar,
//         [calendarId]: data
//       }));
//     }
//   }, [data, calendarId, isFetched]);

//   return { calendarData, isPending };
// }

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getCalendar as getCalendarApi } from '@/api/record';

export default function useRecordsByDate(calendarId: string) {
  const queryClient = useQueryClient();
  const currentData: Record<string, string[]> =
    queryClient.getQueryData(['calendars', calendarId]) || {};
  const [calendarData, setCalendarData] =
    useState<Record<string, string[]>>(currentData);

  const { mutate: getCalendar, isPending } = useMutation({
    mutationFn: getCalendarApi,
    onSuccess: (data) => {
      // setCalendarData((prevCalendar) => ({
      //   ...prevCalendar,
      //   [calendarId]: data
      // }));
      const newCalendars = { ...calendarData, [calendarId]: data };
      queryClient.setQueryData(['calendars'], newCalendars);
      setCalendarData(newCalendars);
    }
  });

  return { calendarData, getCalendar, isPending };
}
