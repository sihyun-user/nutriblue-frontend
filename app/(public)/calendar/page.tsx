import HeadingWeekdays from '@/components/page/calendar/HeadingWeekdays';
import LsitCalendars from '@/components/page/calendar/LsitCalendars';
import CalendarAside from '@/components/page/calendar/CalendarAside';

export default async function Page() {
  return (
    <>
      <HeadingWeekdays />
      <LsitCalendars />
      <CalendarAside />
    </>
  );
}
