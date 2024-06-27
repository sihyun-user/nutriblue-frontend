'use client';

import { useState, useRef, useEffect } from 'react';
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
  const newDate = new Date();
  const initSelectedDate =
    initDate === '' ? format(newDate, 'MM/dd/yyyy') : initDate;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState(getMonth(newDate));
  const [year, setYear] = useState(getYear(newDate));
  const [inputValue, setInputValue] = useState(initSelectedDate);
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

  useEffect(() => {
    const date = new Date(initSelectedDate);
    setSelectedDate(date);
    setMonth(getMonth(date));
    setYear(getYear(date));
  }, [initSelectedDate]);

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
