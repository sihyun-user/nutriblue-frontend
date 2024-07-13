import RecordsTimeLine from '@/components/page/records/RecordsTimeLine';
import RecordsTable from '@/components/page/records/RecordsTable';

interface Params {
  dateId: string;
}

export default async function Page({ params }: { params: Params }) {
  const { dateId } = params;

  return (
    <>
      {dateId}
      <RecordsTimeLine dateId={dateId} />
      <RecordsTable dateId={dateId} />
    </>
  );
}
