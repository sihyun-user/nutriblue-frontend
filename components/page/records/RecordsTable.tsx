'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import useRecordsByDate from '@/feature/calendar/useRecordsByDate';
import BaseButton from '@/components/ui/BaseButton';
import Spinner from '@/components/Spinner';
import RecorddRow from './RecordsRow';

export default function RecordsTable() {
  const { data, isPending } = useRecordsByDate();

  if (isPending) return <Spinner />;

  if (data)
    return (
      <div className="mx-auto mt-6 w-full max-w-[1000px] md:mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-700">營養項目</h1>
          <Link href="/food">
            <BaseButton variation="secondary">
              <PlusIcon className="size-5" />
              新增紀錄
            </BaseButton>
          </Link>
        </div>
        <div className="relative overflow-x-auto rounded-md shadow-md sm:rounded-lg">
          <table className="w-full whitespace-nowrap text-right text-sm text-gray-500">
            <thead className="bg-gray-50 uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  品項 / 份數
                </th>
                <th scope="col" className="px-6 py-3">
                  卡路里<p className="text-xs">(kcal)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  蛋白質<p className="text-xs">(g)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  脂肪<p className="text-xs">(g)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  飽和脂肪<p className="text-xs">(g)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  反式脂肪<p className="text-xs">(g)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  糖<p className="text-xs">(g)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  碳水化合物<p className="text-xs">(g)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  納<p className="text-xs">(mg)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">編輯</span>
                </th>
              </tr>
            </thead>
            <RecorddRow records={data} />
          </table>
        </div>
      </div>
    );
}
