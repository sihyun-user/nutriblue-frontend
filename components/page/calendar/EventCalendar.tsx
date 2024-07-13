import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  format,
  getDay,
  isToday,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval
} from 'date-fns';
import { zhTW } from 'date-fns/locale';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  calendarId: string;
  isPending: boolean;
  events: string[];
}

function getCurrentDate(calendarId: string) {
  const [year, month] = calendarId.split('-');

  return new Date(parseInt(year, 10), parseInt(month, 10) - 1, 1);
}

const EventCalendar: ForwardRefRenderFunction<HTMLDivElement, Props> =
  function EventCalendar({ calendarId, isPending, events }: Props, ref) {
    const currentDate = getCurrentDate(calendarId);
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDaysOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
      start: firstDayOfMonth,
      end: lastDaysOfMonth
    });

    const startingSlots = getDay(firstDayOfMonth);

    const totalSlots = 42; // 7*6
    const filledSlots = startingSlots + daysInMonth.length;
    const endingSlots = totalSlots - filledSlots;

    return (
      <div className="mb-12 mt-8">
        <div
          id={calendarId}
          ref={ref}
          className="mb-3 flex items-center justify-between"
        >
          <h2 className="font-bold text-blue-600 md:text-lg">
            {format(currentDate, 'M月yyyy年', { locale: zhTW })}
          </h2>
          {isPending && (
            <div className="spinner-mini border-blue-300 border-r-blue-600" />
          )}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: startingSlots }, (_, index) => (
            <div
              key={`empty-${index}`}
              className="flex aspect-square items-center justify-center border border-blue-100 bg-blue-50"
            />
          ))}
          {daysInMonth.map((day) => {
            const dateKey = format(day, 'yyyy-MM-dd');
            return (
              <Link
                href={`/calendar/${dateKey}`}
                key={dateKey}
                className={clsx(
                  'relative flex aspect-square items-center justify-center border border-blue-100 font-bold',
                  isToday(day)
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-blue-300 hover:text-white'
                )}
              >
                {format(day, 'd')}
                {events.includes(dateKey) && (
                  <div
                    key={dateKey}
                    className="absolute bottom-1 size-1 rounded-full bg-red-400 md:bottom-2 md:size-2"
                  />
                )}
              </Link>
            );
          })}
          {Array.from({ length: endingSlots }, (_, index) => (
            <div
              key={`empty-${index}`}
              className="flex aspect-square items-center justify-center border border-blue-100 bg-blue-50"
            />
          ))}
        </div>
      </div>
    );
  };

export default forwardRef(EventCalendar);
