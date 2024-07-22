import HealthyDashboard from '@/components/page/home/HealthyDashboard';

export default function DashboardClient() {
  return (
    <>
      <h3 className="mb-4 ml-4 font-semibold">每日摘要</h3>
      <div className="flex flex-col gap-12">
        <HealthyDashboard />
        <div className="overflow-hidden rounded-lg shadow-md">
          <div className="flex h-[48px] items-center bg-gray-300 px-4 py-2 text-sm font-bold text-gray-700 shadow-orange-50">
            每日營養分析
          </div>
          <div className="flex flex-col justify-between gap-10 bg-primary-50 px-4 pb-10 pt-3">
            <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
              <div className="space-y-2">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium">蛋白質(G)</span>
                  <span>100 / 額度</span>
                </div>
                <div className="h-3 rounded-full bg-primary-200">
                  <div
                    className="relative h-3 rounded-full bg-blue-400"
                    style={{ width: `${20}%` }}
                  >
                    <span className="absolute right-0 top-3 text-lg font-medium text-blue-400">
                      {0}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium">脂肪(G)</span>
                  <span>100 / 額度</span>
                </div>
                <div className="h-3 rounded-full bg-primary-200">
                  <div
                    className="relative h-3 rounded-full bg-blue-400"
                    style={{ width: `${20}%` }}
                  >
                    <span className="absolute right-0 top-3 text-lg font-medium text-blue-400">
                      {0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
              <div className="space-y-2">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium">碳水化合物(G)</span>
                  <span>100 / 額度</span>
                </div>
                <div className="h-3 rounded-full bg-primary-200">
                  <div
                    className="relative h-3 rounded-full bg-blue-400"
                    style={{ width: `${20}%` }}
                  >
                    <span className="absolute right-0 top-3 text-lg font-medium text-blue-400">
                      {0}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 md:w-72 md:justify-self-end">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium">飽和脂肪(G)</span>
                  <span>100 / 額度</span>
                </div>
                <div className="h-3 rounded-full bg-primary-200">
                  <div
                    className="relative h-3 rounded-full bg-cyan-400"
                    style={{ width: `${20}%` }}
                  >
                    <span className="absolute right-0 top-3 text-lg font-medium text-cyan-400">
                      {0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
              <div className="space-y-2 md:w-72 md:justify-self-end">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium">糖(G)</span>
                  <span>100 / 額度</span>
                </div>
                <div className="h-3 rounded-full bg-primary-200">
                  <div
                    className="relative h-3 rounded-full bg-cyan-400"
                    style={{ width: `${20}%` }}
                  >
                    <span className="absolute right-0 top-3 text-lg font-medium text-cyan-400">
                      {0}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 md:w-72 md:justify-self-end">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium">反式脂肪(G)</span>
                  <span>100 / 額度</span>
                </div>
                <div className="h-3 rounded-full bg-primary-200">
                  <div
                    className="relative h-3 rounded-full bg-cyan-400"
                    style={{ width: `${20}%` }}
                  >
                    <span className="absolute right-0 top-3 text-lg font-medium text-cyan-400">
                      {0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
              <div className="space-y-2 md:col-start-2">
                <div className="flex items-end justify-between text-sm">
                  <span className="font-medium">納(MG)</span>
                  <span>100 / 額度</span>
                </div>
                <div className="h-3 rounded-full bg-primary-200">
                  <div
                    className="relative h-3 rounded-full bg-gray-400"
                    style={{ width: `${20}%` }}
                  >
                    <span className="absolute right-0 top-3 text-lg font-medium text-gray-400">
                      {0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
