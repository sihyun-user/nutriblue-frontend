import HealthyReport from '@/components/page/home/HealthyReport';
import AnalyzeResults from '@/components/page/home/AnalyzeResults';

export default function DashboardClient() {
  return (
    <>
      <h3 className="mb-4 ml-4 font-semibold">每日摘要</h3>
      <div className="flex flex-col gap-12">
        <HealthyReport />
        <AnalyzeResults />
      </div>
    </>
  );
}
