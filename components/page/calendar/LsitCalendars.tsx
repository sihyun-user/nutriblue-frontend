'use client';

import { useState, useEffect, useRef, createRef } from 'react';
import { format } from 'date-fns';

import EventCalendar from '@/components/page/calendar/EventCalendar';
import useCalendar from '@/feature/calendar/useCalendar';

interface Calendars {
  dateId: string;
}

export default function ListCalendars() {
  const { calendarData, getCalendar, isPending } = useCalendar();
  const [calendars, setCalendars] = useState<Calendars[]>([]);
  const calendarRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({});
  const isFetching = useRef(false);

  useEffect(() => {
    const year = new Date().getFullYear();
    const initialCalendars = Array.from({ length: 12 }).map((_, index) => {
      const monthDate = new Date(year, index, 1);
      const dateId = format(monthDate, 'yyyy-MM');
      return { dateId };
    });

    initialCalendars.forEach((calendar) => {
      calendarRefs.current[calendar.dateId] = createRef();
    });

    setCalendars(initialCalendars);
  }, []);

  useEffect(() => {
    const currentDateId = format(new Date(), 'yyyy-MM');
    const currentMonthRef = calendarRefs.current[currentDateId];
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
          if (entry.isIntersecting && !isFetching.current) {
            const dateId = entry.target.id;
            isFetching.current = true;
            getCalendar(dateId, {
              onSettled: () => {
                isFetching.current = false;
              }
            });
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
  }, [calendars, calendarData, getCalendar]);

  return (
    <div className="mx-auto mt-14 w-full max-w-2xl">
      {calendars.map(({ dateId }) => (
        <EventCalendar
          key={dateId}
          ref={calendarRefs.current[dateId]}
          dateId={dateId}
          isPending={isPending}
          events={calendarData[dateId] || []}
        />
      ))}
    </div>
  );
}
