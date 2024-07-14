'use client';

import { useState, useEffect, useRef, createRef } from 'react';
import { format } from 'date-fns';

import EventCalendar from '@/components/page/calendar/EventCalendar';
import useCalendar from '@/feature/calendar/useCalendar';

interface Calendars {
  calendarId: string;
}

export default function ListCalendars() {
  const [calendars, setCalendars] = useState<Calendars[]>([]);
  const [currentCalendarId, setCurrentCalendarId] = useState<string>('');
  const { calendarData, getCalendar, isPending } =
    useCalendar(currentCalendarId);
  const isFetched = useRef(false);

  const calendarRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({});

  useEffect(() => {
    const year = new Date().getFullYear();
    const initialCalendars = Array.from({ length: 12 }).map((_, index) => {
      const monthDate = new Date(year, index, 1);
      const calendarId = format(monthDate, 'yyyy-MM');
      return { calendarId };
    });

    initialCalendars.forEach((calendar) => {
      calendarRefs.current[calendar.calendarId] = createRef();
    });

    setCalendars(initialCalendars);
  }, []);

  useEffect(() => {
    const initCalendarId = format(new Date(), 'yyyy-MM');
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
  }, [calendars]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !(entry.target.id in calendarData)) {
            const calendarId = entry.target.id;
            setCurrentCalendarId(calendarId);
            getCalendar(calendarId);
          }
        });
      },
      { threshold: 0 }
    );

    Object.values(calendarRefs.current).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current); // 只有當數據不存在時才觀察
      }
    });

    return () => observer.disconnect();
  }, [calendars, calendarData, getCalendar]);

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
