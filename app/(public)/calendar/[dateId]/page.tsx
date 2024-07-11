import DateCalendar from 'components/page/calendar/DateCalendar';

export default async function Page({ params }: { params: { dateId: string } }) {
  const { dateId } = params;

  return (
    <div className="mx-auto w-full max-w-screen-md">
      <DateCalendar dateId={dateId} />
    </div>
  );
}
