'use client';

import { useState } from 'react';

import LsitCalendars from '@/components/page/calendar/LsitCalendars';
import CalendarAside from '@/components/page/calendar/CalendarAside';

export default function CalendarClient() {
  const [calendarYear, setCalendarYear] = useState<number | null>(null);
  const [calendarMonth, setCalendarMonth] = useState<number | null>(null);

  const handleCalendarYearMonth = (year: number, month: number) => {
    setCalendarYear(year);
    setCalendarMonth(month);
  };

  return (
    <>
      <LsitCalendars
        calendarYear={calendarYear}
        calendarMonth={calendarMonth}
      />
      <CalendarAside onCalendarYearMonth={handleCalendarYearMonth} />
    </>
  );
}
