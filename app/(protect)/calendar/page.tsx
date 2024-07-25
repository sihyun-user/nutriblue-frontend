import type { Metadata } from 'next';

import HeadingWeekdays from '@/components/page/calendar/HeadingWeekdays';
import CalendarClient from '@/components/page/calendar/CalendarClient';

export const metadata: Metadata = {
  title: '營養日誌'
};

export default async function Page() {
  return (
    <>
      <HeadingWeekdays />
      <CalendarClient />
    </>
  );
}
