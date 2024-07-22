'use client';

import { PlusIcon, MinusIcon, Bars2Icon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import BaseButton from '@/components/ui/BaseButton';
import useHealthyReport from '@/feature/user/useHealthyReport';
import Spinner from '@/components/Spinner';
import CircularProgress from './CircularProgress';

export default function HealthyDashboard() {
  const { data, isPending } = useHealthyReport();

  if (isPending) return <Spinner />;

  if (data)
    return (
      <div className="overflow-hidden rounded-lg shadow-md">
        <div className="flex h-[48px] items-center justify-between bg-blue-300 px-4 py-2 text-sm font-bold text-blue-600 shadow-orange-50">
          <span>每日健康紀錄</span>
          <div>
            <span className="mr-2 text-2xl">1</span>連續天數
          </div>
        </div>
        <div className="flex flex-col gap-8 bg-primary-50 px-4 pb-14 pt-3 sm:gap-12 md:flex-row">
          <div className="flex items-center justify-between">
            <CircularProgress percent={data.percent} balance={data.balance} />
            <div className="flex flex-col justify-end gap-3 sm:flex-row md:hidden">
              <BaseButton variation="secondary">
                <PlusIcon className="size-5" />
                新增運動
              </BaseButton>
              <BaseButton variation="secondary">
                <PlusIcon className="size-5" />
                新增食品
              </BaseButton>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-7">
            <div className="hidden justify-end gap-3 md:flex">
              <BaseButton variation="secondary">
                <PlusIcon className="size-5" />
                新增運動
              </BaseButton>
              <BaseButton variation="secondary">
                <PlusIcon className="size-5" />
                新增食品
              </BaseButton>
            </div>
            <div className="flex gap-5 sm:gap-10">
              <div className="flex flex-col gap-1">
                <span className="sm:text-2xl">{data.inTake}</span>
                <span className="text-xs sm:text-sm">目標</span>
              </div>
              <span className="border-r-2 border-primary-300" />
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <span className="sm:text-2xl">{data.foodTake}</span>
                  <span className="text-xs sm:text-sm">食品</span>
                </div>
                <MinusIcon className="mt-2 size-4" />
                <div className="flex flex-col gap-1">
                  <span className="sm:text-2xl">0</span>
                  <span className="text-xs sm:text-sm">運動</span>
                </div>
                <Bars2Icon className="mt-2 size-4" />
                <div className="flex flex-col gap-1">
                  <span className="sm:text-2xl">{data.foodTake - 0}</span>
                  <span className="text-xs sm:text-sm">淨值</span>
                </div>
              </div>
            </div>
            <div className="h-3 rounded-full bg-primary-200">
              <div
                className={clsx(
                  'relative h-3 rounded-full',
                  data.percent > 100 ? 'bg-red-400' : 'bg-blue-400'
                )}
                style={{ width: `${data.percent > 100 ? 100 : data.percent}%` }}
              >
                <span className="absolute right-0 top-6 flex h-7 min-w-7 translate-x-3 items-center justify-center rounded-md bg-blue-400 px-1 text-xs font-medium text-white">
                  {data.foodTake}
                  <div className="absolute -top-1 left-1/2 size-2 translate-x-[-4px] rotate-45 bg-blue-400" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
