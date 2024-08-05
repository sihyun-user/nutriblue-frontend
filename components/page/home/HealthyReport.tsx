'use client';

import { PlusIcon, MinusIcon, Bars2Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import clsx from 'clsx';

import NewSportRecord from '@/components/page/sportRecord/NewSportRecord';
import BaseButton from '@/components/ui/BaseButton';
import useHealthyReport from '@/feature/user/useHealthyReport';
import CircularProgress from './CircularProgress';

export default function HealthyReport() {
  const { data, isPending } = useHealthyReport();

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div className="flex h-[48px] items-center justify-between bg-blue-300 px-4 py-2 text-sm font-bold text-blue-600 shadow-orange-50">
        <span>每日健康紀錄</span>
        {isPending && (
          <div className="flex items-center gap-2">
            <div className="spinner-mini" />
            <span className="text-xs">取得每日健康紀錄中...</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8 bg-primary-50 px-4 pb-14 pt-3 sm:gap-12 md:flex-row">
        <div className="flex items-start justify-between">
          <CircularProgress
            caloriespercent={data ? data.caloriespercent : 0}
            caloriesBalance={data ? data.caloriesBalance : 0}
          />
          <div className="flex flex-col justify-end gap-3 sm:flex-row md:hidden">
            <Link href="/user/profile">
              <BaseButton variation="gray" className="w-[132px] md:w-auto">
                修改營養目標
              </BaseButton>
            </Link>
            <NewSportRecord />
            <Link href="/food">
              <BaseButton variation="secondary">
                <PlusIcon className="size-5" />
                新增食品紀錄
              </BaseButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-7">
          <div className="hidden justify-end gap-3 md:flex">
            <Link href="/user/profile">
              <BaseButton variation="gray">修改營養目標</BaseButton>
            </Link>
            <NewSportRecord />
            <Link href="/food">
              <BaseButton variation="secondary">
                <PlusIcon className="size-5" />
                新增食品紀錄
              </BaseButton>
            </Link>
          </div>
          <div className="flex gap-5 sm:gap-10">
            <div className="flex flex-col gap-1">
              <span className="sm:text-2xl">
                {data ? data.caloriesInTake : 0}
              </span>
              <span className="text-xs sm:text-sm">目標</span>
            </div>
            <span className="border-r-2 border-primary-300" />
            <div className="flex gap-6">
              <div className="flex flex-col gap-1">
                <span className="sm:text-2xl">
                  {data ? data.foodCaloriesTake : 0}
                </span>
                <span className="text-xs sm:text-sm">食品</span>
              </div>
              <MinusIcon className="mt-2 size-4" />
              <div className="flex flex-col gap-1">
                <span className="sm:text-2xl">
                  {data ? data.sportCaloriesTake : 0}
                </span>
                <span className="text-xs sm:text-sm">運動</span>
              </div>
              <Bars2Icon className="mt-2 size-4" />
              <div className="flex flex-col gap-1">
                <span className="sm:text-2xl">
                  {data ? data.foodCaloriesTake - data.sportCaloriesTake : 0}
                </span>
                <span className="text-xs sm:text-sm">淨值</span>
              </div>
            </div>
          </div>
          <div className="h-3 rounded-full bg-primary-200">
            <div
              className={clsx(
                'relative h-3 rounded-full',
                data && data.caloriespercent >= 100
                  ? 'bg-red-400'
                  : 'bg-blue-400'
              )}
              style={{
                width: `${data ? Math.min(data.caloriespercent || 0, 100) : 0}%`
              }}
            >
              <span className="absolute right-0 top-6 flex h-7 min-w-7 translate-x-4 items-center justify-center rounded-md bg-blue-400 px-1 text-xs font-medium text-white">
                {data ? data.foodCaloriesTake : 0}
                <div className="absolute -top-1 left-1/2 size-2 translate-x-[-4px] rotate-45 bg-blue-400" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
