import RecordsTimeLine from '@/components/page/records/RecordsTimeLine';
import RecordsTable from '@/components/page/records/RecordsTable';

export async function generateMetadata({
  params
}: {
  params: { dateId: string };
}) {
  return { title: `營養日誌: ${params.dateId}` };
}

export default async function Page() {
  return (
    <>
      <RecordsTimeLine />
      <RecordsTable />
    </>
  );
}
