import { useEffect, useRef, useState } from 'react';
import { getYear, getMonth } from 'date-fns';

interface Props {
  onYearMonthChange: (year: number, month: number) => void;
}

function yearList() {
  const years = [];
  const currentYear = getYear(new Date());

  for (let year = 1990; year <= currentYear + 10; year += 1) {
    years.push(year);
  }

  return years;
}

function scrollToElement(element: HTMLElement, isFirstScroll: boolean) {
  return new Promise<void>((resolve) => {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (isFirstScroll) {
      setTimeout(() => resolve(), 600);
    } else {
      setTimeout(() => resolve(), 50);
    }
  });
}

const currentYear = getYear(new Date());
const currentMonth = getMonth(new Date()) + 1;

export default function YearMonthSelector({ onYearMonthChange }: Props) {
  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const firstScroll = useRef(true);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  useEffect(() => {
    const scrollElements = async () => {
      if (yearRef.current && monthRef.current) {
        const yearElement = yearRef.current.querySelector(
          `div[data-year="${selectedYear}"]`
        ) as HTMLElement;
        const monthElement = monthRef.current.querySelector(
          `div[data-month="${selectedMonth}"]`
        ) as HTMLElement;

        if (yearElement && monthElement) {
          await scrollToElement(monthElement, firstScroll.current);
          await scrollToElement(yearElement, firstScroll.current);
          firstScroll.current = false;
        }
      }
    };

    scrollElements();
    onYearMonthChange(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth, onYearMonthChange]);

  return (
    <div className="mask-image-col flex h-[120px] gap-4 overflow-hidden text-sm">
      <div
        ref={monthRef}
        className="no-scrollbar flex cursor-pointer flex-col items-center overflow-y-auto"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            data-month={i + 1}
            className={`px-4 py-2 ${selectedMonth === i + 1 ? 'bg-primary-200 font-medium text-primary-800' : ''}`}
            onClick={() => setSelectedMonth(i + 1)}
          >
            {i + 1}月
          </div>
        ))}
      </div>
      <div
        ref={yearRef}
        className="no-scrollbar flex cursor-pointer flex-col items-center overflow-y-auto"
      >
        {yearList().map((year) => (
          <div
            key={year}
            data-year={year}
            className={`px-4 py-2 ${selectedYear === year ? 'bg-primary-200 font-medium text-primary-800' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}年
          </div>
        ))}
      </div>
    </div>
  );
}
