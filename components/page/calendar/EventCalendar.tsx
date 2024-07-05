import { useMemo } from 'react';
import {
  format,
  getDay,
  isToday,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval
} from 'date-fns';
import { zhTW } from 'date-fns/locale';
import clsx from 'clsx';

interface Event {
  date: Date;
}

interface Props {
  events: Event[];
}

export default function EventCalendar({ events }: Props) {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDaysOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDaysOfMonth
  });

  const startingDayIndex = getDay(firstDayOfMonth);
  const endingDayIndex = getDay(lastDaysOfMonth);

  const eventsByDate = useMemo(() => {
    return events.reduce((acc: { [key: string]: Event[] }, event) => {
      const dateKey = format(event.date, 'yyyy-MM-dd');
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {});
  }, [events]);

  return (
    <div className="mb-12 mt-8">
      <div className="mb-3 font-medium text-primary-800 md:text-lg">
        <h2>{format(currentDate, 'M月yyyy年', { locale: zhTW })}</h2>
      </div>
      <div className="grid grid-cols-7">
        {Array.from({ length: startingDayIndex }, (_, index) => (
          <div
            key={`empty-${index}`}
            className="flex aspect-square items-center justify-center border border-blue-100 bg-blue-200"
          />
        ))}
        {daysInMonth.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd');
          const todaysEvents = eventsByDate[dateKey] || [];
          return (
            <div
              key={dateKey}
              className={clsx(
                'relative flex aspect-square items-center justify-center border border-blue-100 font-bold',
                isToday(day) ? 'bg-blue-600 text-white' : 'bg-white'
              )}
            >
              {format(day, 'd')}
              {todaysEvents.map(() => {
                return (
                  <div
                    key={dateKey}
                    className="absolute bottom-1 size-1 rounded-full bg-red-400 md:bottom-2 md:size-2"
                  />
                );
              })}
            </div>
          );
        })}
        {Array.from({ length: endingDayIndex }, (_, index) => (
          <div
            key={`empty-${index}`}
            className="flex aspect-square items-center justify-center border border-blue-100 bg-blue-200"
          />
        ))}
      </div>
    </div>
  );
}
