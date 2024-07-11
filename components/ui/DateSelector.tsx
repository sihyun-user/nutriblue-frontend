'use client';

import { useState, useRef, useEffect } from 'react';
import { Path, FieldValues, Control, Controller } from 'react-hook-form';
import { format, getMonth, getYear } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import clsx from 'clsx';

const inputStyle = clsx(
  'flex h-[40px] w-full cursor-pointer items-center justify-start rounded-lg bg-white px-3 text-sm text-primary-800 outline-none outline-1 -outline-offset-1 outline-primary-200',
  'transition-all duration-200 hover:bg-primary-100 focus:bg-white focus:outline-2 focus:outline-blue-200'
);

interface Props<T extends FieldValues> {
  id: Path<T>;
  label?: string;
  initDate: string;
  control: Control<T>;
  position?: 'right' | 'center';
}

export default function DateSelector<T extends FieldValues>({
  id,
  label,
  initDate,
  position,
  control
}: Props<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [dateValue, setDateValue] = useState<string>('');
  const [month, setMonth] = useState<number>(2024);
  const [year, setYear] = useState<number>(1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handlePickerSelect = (
    date: Date | undefined,
    fieldOnChange: (value: string) => void
  ) => {
    if (date) {
      const formatDate = format(date, 'yyyy-MM-dd');
      setDateValue(formatDate);
      fieldOnChange(formatDate); // 更新 useForm 的值
      setSelectedDate(date);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const currentDate = new Date(initDate);
    setSelectedDate(currentDate);
    setMonth(getMonth(currentDate));
    setYear(getYear(currentDate));
    setDateValue(format(currentDate, 'yyyy-MM-dd'));
  }, [initDate]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="flex flex-col">
      {label && <span className="mb-2">{label}</span>}
      <div className="relative" ref={wrapperRef}>
        <Controller
          control={control}
          name={id}
          render={({ field }) => (
            <>
              <input {...field} type="hidden" />
              <div onClick={() => setIsOpen(!isOpen)} className={inputStyle}>
                {dateValue}
              </div>
              {isOpen && (
                <DayPicker
                  locale={zhTW}
                  className={clsx(
                    'absolute z-10 rounded-lg border border-gray-200 bg-white p-2 shadow-md',
                    {
                      'right-0': position === 'right',
                      'left-1/2 -translate-x-1/2': position === 'center'
                    }
                  )}
                  mode="single"
                  defaultMonth={new Date(year, month)}
                  selected={selectedDate}
                  onSelect={(date) => handlePickerSelect(date, field.onChange)}
                />
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}
