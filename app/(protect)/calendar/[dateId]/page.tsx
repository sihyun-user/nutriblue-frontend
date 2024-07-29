import RecordsTimeLine from '@/components/page/record/RecordsTimeLine';
import RecordsTable from '@/components/page/record/RecordsTable';

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
