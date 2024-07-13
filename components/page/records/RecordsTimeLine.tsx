'use client';

import { useState, useEffect } from 'react';
import { format, subDays, addDays, eachDayOfInterval } from 'date-fns';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  dateId: string;
}

export const getCurrentDate = (dateId: string) => {
  const [year, month, date] = dateId.split('-');

  return new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(date, 10)
  );
};

export default function RecordsTimeLine({ dateId }: Props) {
  const [daysOffset, setDaysOffset] = useState(5);
  const currentDate = getCurrentDate(dateId);
  const firstDayOfTimeLine = subDays(currentDate, daysOffset);
  const lastDaysOfTimeLine = addDays(currentDate, daysOffset);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDaysOffset(5);
      } else {
        setDaysOffset(2);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const daysInTimeLine = eachDayOfInterval({
    start: firstDayOfTimeLine,
    end: lastDaysOfTimeLine
  });

  return (
    <div className="mx-auto w-full max-w-screen-md">
      <div className="mask-image mt-0 flex justify-between gap-2 overflow-hidden py-4 md:mt-4">
        {daysInTimeLine.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd');
          const [year, month, date] = dateKey.split('-');

          return (
            <Link
              href={`/calendar/${dateKey}`}
              key={dateKey}
              className={clsx(
                'flex h-[80px] min-w-16 flex-col items-center justify-between rounded-lg p-2 shadow-md',
                dateKey === dateId
                  ? 'bg-blue-600'
                  : 'bg-blue-300 hover:bg-blue-400'
              )}
            >
              <span className="font-semibold text-white">{date}日</span>
              <span className="text-xs font-medium text-slate-100">
                {month}月
              </span>
              <span className="text-xs font-medium text-slate-100">
                {year}年
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
