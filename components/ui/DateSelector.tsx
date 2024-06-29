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
  initDate: string | Date;
}

export default function DateSelector<T extends FieldValues>({
  id,
  control,
  initDate
}: Props<T>) {
  const newDate = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<number>(getMonth(newDate));
  const [year, setYear] = useState<number>(getYear(newDate));
  const [inputValue, setInputValue] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handlePickerSelect = (
    date: Date | undefined,
    fieldOnChange: (value: string) => void
  ) => {
    if (date) {
      const formatDate = format(date, 'MM/dd/yyyy');
      setSelectedDate(date);
      setInputValue(formatDate);
      fieldOnChange(formatDate); // 更新 useForm 的值
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const defaultDate = new Date(initDate);
    setSelectedDate(defaultDate);
    setMonth(getMonth(defaultDate));
    setYear(getYear(defaultDate));
    setInputValue(format(defaultDate, 'MM/dd/yyyy'));
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
                  className="absolute right-0 z-10 rounded-lg border border-gray-200 bg-white p-2 shadow-md"
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
