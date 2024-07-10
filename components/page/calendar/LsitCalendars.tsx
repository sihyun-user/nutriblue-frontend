'use client';

import { useState, useEffect, useRef, createRef } from 'react';
import { format } from 'date-fns';

import EventCalendar from '@/components/page/calendar/EventCalendar';
import useGetCalendar from '@/feature/calendar/useGetCalendar';

interface Calendar {
  dateId: string;
}

export default function ListCalendars() {
  const { calendarData, getCalendar, isPending } = useGetCalendar();
  const [calendars, setCalendars] = useState<Calendar[]>([]);
  const calendarRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({});

  useEffect(() => {
    const year = new Date().getFullYear();
    const initialCalendars = Array.from({ length: 12 }).map((_, index) => {
      const monthDate = new Date(year, index, 1);
      const dateId = format(monthDate, 'yyyy-MM');
      return { dateId };
    });

    setCalendars(initialCalendars);

    initialCalendars.forEach((calendar) => {
      calendarRefs.current[calendar.dateId] = createRef();
    });
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
      async (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dateId = entry.target.id;
            if (dateId in calendarData) return;
            getCalendar({ dateId });
          }
        });
      },
      { threshold: 0 }
    );

    // 註冊所有月曆元素到 observer
    Object.values(calendarRefs.current).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // 解除 observer
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
