const weekdays = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

export default function HeadingWeekdays() {
  return (
    <div className="calendar-weeks fixed left-0 top-[65px] z-10 w-full bg-blue-400 py-2 text-white shadow-sm">
      <div className="mx-auto grid max-w-2xl grid-cols-7">
        {weekdays.map((day) => (
          <div key={day} className="text-center text-xs font-medium md:text-sm">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
