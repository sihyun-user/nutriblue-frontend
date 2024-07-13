import RecordsTimeLine from '@/components/page/records/RecordsTimeLine';
import RecordsTable from '@/components/page/records/RecordsTable';

export default async function Page() {
  return (
    <>
      <RecordsTimeLine />
      <RecordsTable />
    </>
  );
}
