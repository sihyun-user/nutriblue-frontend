import { PlusIcon } from '@heroicons/react/20/solid';

import Button from '@/components/Button';

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between rounded-t-lg bg-blue-200 px-4 py-2 text-sm font-bold text-blue-600">
        <span>每日健康紀錄</span>
        <div>
          <span className="mr-2 text-2xl">1</span>連續天數
        </div>
      </div>
      <div className="flex h-[200px] gap-8 rounded-b-lg bg-primary-50 px-4 py-3">
        <div className="flex flex-col items-center">
          <span className="text-sm text-primary-600">尚可攝取</span>
          <div className="py-2 text-4xl font-bold text-blue-600">2000</div>
          <span className="text-sm text-primary-600">Kcal</span>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex justify-end gap-3">
            <Button variation="primary">
              <PlusIcon className="size-5" />
              新增運動
            </Button>
            <Button variation="primary">
              <PlusIcon className="size-5" />
              新增飲食
            </Button>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-2xl">1200</span>
              <span className="text-sm">目標</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl">0</span>
              <span className="text-sm">食品</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
