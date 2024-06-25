import {
  PlusIcon,
  MinusIcon,
  Bars2Icon,
  FolderPlusIcon,
  ArrowPathIcon,
  Bars3BottomLeftIcon
} from '@heroicons/react/20/solid';

import BaseButton from '@/components/ui/BaseButton';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="mb-4 ml-4 font-semibold">摘要</h3>
        <div className="overflow-hidden rounded-lg shadow-md">
          <div className="flex items-center justify-between bg-blue-300 px-4 py-2 text-sm font-bold text-blue-600 shadow-orange-50">
            <span>每日健康紀錄</span>
            <div>
              <span className="mr-2 text-2xl">1</span>連續天數
            </div>
          </div>
          <div className="flex h-[230px] gap-12 bg-primary-50 px-4 py-3">
            <div className="flex flex-col items-center">
              <div className="flex size-[140px] flex-col items-center">
                <span className="text-sm text-primary-600">尚可攝取</span>
                <div className="py-2 text-4xl font-bold text-blue-500">
                  2000
                </div>
                <span className="text-sm text-primary-600">Kcal</span>
              </div>
              <div className="flex gap-5">
                <div>
                  <span className="mr-1 text-3xl font-bold text-blue-400">
                    2
                  </span>
                  <span>kg</span>
                  <p className="mt-1 text-sm">減輕</p>
                </div>
                <FolderPlusIcon className="mt-1 size-7 text-blue-400" />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-7">
              <div className="flex justify-end gap-3">
                <BaseButton variation="secondary">
                  <PlusIcon className="size-5" />
                  新增運動
                </BaseButton>
                <BaseButton variation="secondary">
                  <PlusIcon className="size-5" />
                  新增食品
                </BaseButton>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl">1200</span>
                  <span className="text-sm">目標</span>
                </div>
                <span className="border-r-2 border-primary-300" />
                <div className="flex gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl">0</span>
                    <span className="text-sm">食品</span>
                  </div>
                  <MinusIcon className="mt-2 size-4" />
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl">0</span>
                    <span className="text-sm">運動</span>
                  </div>
                  <Bars2Icon className="mt-2 size-4" />
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl">0</span>
                    <span className="text-sm">剩餘額度</span>
                  </div>
                </div>
              </div>
              <div className="h-3 rounded-full bg-primary-200">
                <div
                  className="relative h-3 rounded-full bg-blue-400"
                  style={{ width: `${20}%` }}
                >
                  <span className="absolute right-0 top-6 flex size-7 translate-x-3 items-center justify-center rounded-md bg-blue-400 text-xs font-medium text-white">
                    {0}
                    <div className="absolute -top-1 left-1/2 size-2 translate-x-[-4px] rotate-45 bg-blue-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <header className="mb-4 ml-4 flex items-center justify-between">
          <h3 className="font-semibold">日記</h3>
          <div className="flex gap-2">
            <ArrowPathIcon className="size-5" />
            <Bars3BottomLeftIcon className="size-5" />
          </div>
        </header>
        <div className="flex flex-col gap-4">
          <div className="min-h-[100px] rounded-lg bg-blue-200 px-4 py-3">
            <time className="font-bold text-primary-900">
              June 12, 2024 at 8:40 PM
            </time>
            <p className="mt-3 text-primary-600">我的每日營養日記</p>
          </div>
          <div className="min-h-[100px] rounded-lg bg-blue-200 px-4 py-3">
            <time className="font-bold text-primary-900">
              June 12, 2024 at 8:40 PM
            </time>
            <p className="mt-3 text-primary-600">我的每日營養日記</p>
          </div>
        </div>
      </div>
    </div>
  );
}
