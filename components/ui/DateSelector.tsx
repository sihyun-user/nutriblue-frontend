'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import { Path, FieldValues, Control, Controller } from 'react-hook-form';
import { format, getMonth, getYear } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import clsx from 'clsx';

const inputStyle = clsx(
  'flex h-[40px] w-full cursor-pointer items-center justify-start rounded-lg bg-white px-3 text-sm text-primary-800 outline-none outline-1 -outline-offset-1 outline-primary-200',
  'transition-all duration-200 hover:bg-primary-100 focus:bg-white focus:outline-2 focus:outline-blue-200'
);

interface Props<T extends FieldValues> {
  id: Path<T>;
  control: Control<T>;
  initDate: string;
}

export default function DateSelector<T extends FieldValues>({
  id,
  control,
  initDate
}: Props<T>) {
  // const initSetDate = initDate === '' ? new Date() : new Date(initDate);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>('');
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(2024);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleDayPickerSelect = (
    date: Date | undefined,
    fieldOnChange: (value: string) => void
  ) => {
    setSelectedDate(date);
    const formatDate = date ? format(date, 'MM/dd/yyyy') : '';
    setInputValue(formatDate);
    setIsOpen(false);
    fieldOnChange(formatDate); // 更新 useForm 的值
  };

  const initSetDate = useMemo(
    () => (initDate === '' ? new Date() : new Date(initDate)),
    [initDate]
  );

  useEffect(() => {
    setSelectedDate(initSetDate);
    setInputValue(format(initSetDate, 'MM/dd/yyyy'));
    setMonth(getMonth(initSetDate));
    setYear(getYear(initSetDate));
  }, [initSetDate]);

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
      <span className="mb-2">日期</span>
      <div className="relative" ref={wrapperRef}>
        <Controller
          control={control}
          name={id}
          render={({ field }) => (
            <>
              <input {...field} type="hidden" />
              <div onClick={() => setIsOpen(!isOpen)} className={inputStyle}>
                {inputValue}
              </div>
              {isOpen && (
                <DayPicker
                  className="absolute right-0 z-10 rounded-lg border border-gray-200 bg-white shadow-md"
                  mode="single"
                  defaultMonth={new Date(year, month)}
                  selected={selectedDate}
                  onSelect={(date) =>
                    handleDayPickerSelect(date, field.onChange)
                  }
                />
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}
