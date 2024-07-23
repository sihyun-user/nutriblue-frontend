'use client';

import clsx from 'clsx';

import useAnalyzeResults from '@/feature/user/useAnalyzeResults';

export default function AnalyzeResults() {
  const { data, isPending } = useAnalyzeResults();

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div className="flex h-[48px] items-center justify-between bg-gray-300 px-4 py-2 text-sm font-bold text-blue-600 shadow-orange-50">
        <span>每日營養分析</span>
        {isPending && (
          <div className="flex items-center gap-2">
            <div className="spinner-mini" />
            <span className="text-xs">取得每日營養分析中...</span>
          </div>
        )}
      </div>
      <div className="flex h-full min-h-[300px] flex-col justify-center gap-10 bg-primary-50 px-4 py-3 pb-10">
        <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
          <div className="space-y-2">
            <div className="flex items-end justify-between text-sm">
              <span className="font-medium">蛋白質(G)</span>
              <span>{data ? data.dateIntake.protein : 0} / 額度</span>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full bg-blue-400',
                  data && data.dateCurrentTake.protein > 0 ? 'px-1' : ''
                )}
                style={{ width: `${data ? data.datePercents.protein : 0}%` }}
              >
                <span className="absolute -right-2 top-3 text-lg font-medium text-blue-400">
                  {data ? data.dateCurrentTake.protein : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-end justify-between text-sm">
              <span className="font-medium">脂肪(G)</span>
              <span>{data ? data.dateIntake.fat : 0} / 額度</span>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full bg-blue-400',
                  data && data.dateCurrentTake.fat > 0 ? 'px-1' : ''
                )}
                style={{ width: `${data ? data.datePercents.fat : 0}%` }}
              >
                <span className="absolute -right-2 top-3 text-lg font-medium text-blue-400">
                  {data ? data.dateCurrentTake.fat : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
          <div className="space-y-2">
            <div className="flex items-end justify-between text-sm">
              <span className="font-medium">碳水化合物(G)</span>
              <span>{data ? data.dateIntake.carbohydrates : 0} / 額度</span>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full bg-blue-400',
                  data && data.dateCurrentTake.carbohydrates > 0 ? 'px-1' : ''
                )}
                style={{
                  width: `${data ? data.datePercents.carbohydrates : 0}%`
                }}
              >
                <span className="absolute -right-2 top-3 text-lg font-medium text-blue-400">
                  {data ? data.dateCurrentTake.carbohydrates : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2 md:w-72 md:justify-self-end">
            <div className="flex items-end justify-between text-sm">
              <span className="font-medium">飽和脂肪(G)</span>
              <span>{data ? data.dateIntake.saturatedFat : 0} / 額度</span>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full bg-cyan-400',
                  data && data.dateCurrentTake.saturatedFat > 0 ? 'px-1' : ''
                )}
                style={{
                  width: `${data ? data.datePercents.saturatedFat : 0}%`
                }}
              >
                <span className="absolute -right-2 top-3 text-lg font-medium text-cyan-400">
                  {data ? data.dateCurrentTake.saturatedFat : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
          <div className="space-y-2 md:w-72 md:justify-self-end">
            <div className="flex items-end justify-between text-sm">
              <span className="font-medium">糖(G)</span>
              <span>{data ? data.dateIntake.sugar : 0} / 額度</span>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full bg-cyan-400',
                  data && data.dateCurrentTake.sugar > 0 ? 'px-1' : ''
                )}
                style={{ width: `${data ? data.datePercents.sugar : 0}%` }}
              >
                <span className="absolute -right-2 top-3 text-lg font-medium text-cyan-400">
                  {data ? data.dateCurrentTake.sugar : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2 md:w-72 md:justify-self-end">
            <div className="flex items-end justify-between text-sm">
              <span className="font-medium">反式脂肪(G)</span>
              <span>{data ? data.dateIntake.transFat : 0} / 額度</span>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full bg-cyan-400',
                  data && data.dateCurrentTake.transFat > 0 ? 'px-1' : ''
                )}
                style={{ width: `${data ? data.datePercents.transFat : 0}%` }}
              >
                <span className="absolute -right-2 top-3 text-lg font-medium text-cyan-400">
                  {data ? data.dateCurrentTake.transFat : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid flex-1 gap-x-14 gap-y-10 md:grid-cols-2 md:gap-y-0">
          <div className="space-y-2 md:col-start-2">
            <div className="flex items-end justify-between text-sm">
              <span className="font-medium">納(MG)</span>
              <span>{data ? data.dateIntake.sodium : 0} / 額度</span>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full bg-gray-400',
                  data && data.dateCurrentTake.sodium > 0 ? 'px-1' : ''
                )}
                style={{
                  width: `${data ? data.datePercents.sodium : 0}%`
                }}
              >
                <span className="absolute -right-2 top-3 text-lg font-medium text-gray-400">
                  {data ? data.dateCurrentTake.sodium : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
