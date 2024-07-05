import EventCalendar from '@/components/page/calendar/EventCalendar';

const weekdays = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

export default async function Page() {
  return (
    <>
      <div className="calendar-weeks fixed left-0 w-full -translate-y-5 bg-blue-200 py-2">
        <div className="mx-auto grid max-w-2xl grid-cols-7">
          {weekdays.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium md:text-sm"
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-2xl">
        <EventCalendar
          events={[
            { date: new Date('2024-7-1') },
            { date: new Date('2024-7-3') },
            { date: new Date('2024-7-6') }
          ]}
        />
      </div>
    </>
  );
}
