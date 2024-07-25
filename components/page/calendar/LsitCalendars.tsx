'use client';

import { useState, useEffect, useRef, createRef } from 'react';
import { format } from 'date-fns';

import EventCalendar from '@/components/page/calendar/EventCalendar';
import useCalendar from '@/feature/calendar/useCalendar';

interface Props {
  calendarYear: number | null;
  calendarMonth: number | null;
}

type Calendars = {
  calendarId: string;
};

export default function ListCalendars({ calendarYear, calendarMonth }: Props) {
  const [calendars, setCalendars] = useState<Calendars[]>([]);
  const [currentCalendarId, setCurrentCalendarId] = useState<string>('');
  const { calendarData, isPending, isLoading } = useCalendar(currentCalendarId);

  const calendarRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({});

  useEffect(() => {
    const year = calendarYear || new Date().getFullYear();
    const initialCalendars = Array.from({ length: 12 }).map((_, index) => {
      const monthDate = new Date(year, index, 1);
      const calendarId = format(monthDate, 'yyyy-MM');
      return { calendarId };
    });

    initialCalendars.forEach((calendar) => {
      calendarRefs.current[calendar.calendarId] = createRef();
    });

    setCalendars(initialCalendars);
  }, [calendarYear]);

  useEffect(() => {
    const initCalendarId =
      calendarYear && calendarMonth
        ? `${calendarYear}-${String(calendarMonth).padStart(2, '0')}`
        : format(new Date(), 'yyyy-MM');
    const currentMonthRef = calendarRefs.current[initCalendarId];
    if (currentMonthRef && currentMonthRef.current) {
      const elementPosition =
        currentMonthRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 120;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto'
      });
    }
  }, [calendars, calendarYear, calendarMonth]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading) {
            const calendarId = entry.target.id;
            setCurrentCalendarId(calendarId);
          }
        });
      },
      { threshold: 0 }
    );

    Object.values(calendarRefs.current).forEach((ref) => {
      if (ref.current && !(ref.current.id in calendarData)) {
        observer.observe(ref.current); // 只有當數據不存在時才觀察
      }
    });

    return () => observer.disconnect();
  }, [calendars, calendarData, isLoading]);

  return (
    <div className="mx-auto mt-14 w-full max-w-2xl">
      {calendars.map(({ calendarId }) => (
        <EventCalendar
          key={calendarId}
          ref={calendarRefs.current[calendarId]}
          calendarId={calendarId}
          isPending={isPending}
          events={calendarData[calendarId] || []}
        />
      ))}
    </div>
  );
}
