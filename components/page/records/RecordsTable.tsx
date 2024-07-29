'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import useRecordsByDate from '@/feature/record/useRecordsByDate';
import useSportRecordsByDate from '@/feature/sportRecord/useSportRecordsByDate';
import NewSportRecord from '@/components/page/sportRecord/NewSportRecord';
import SportRecordRow from '@/components/page/sportRecord/SportRecordRow';
import BaseButton from '@/components/ui/BaseButton';
import Spinner from '@/components/Spinner';
import RecorddRow from './RecordsRow';

export default function RecordsTable() {
  const { recordsData, isPendingRecords } = useRecordsByDate();
  const { sportRecordsData, isPendingSportRecords } = useSportRecordsByDate();

  if (isPendingRecords || isPendingSportRecords) return <Spinner />;

  return (
    <div className="mx-auto mt-6 w-full max-w-[1000px] space-y-10 md:mt-12">
      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-xl font-semibold text-gray-700">營養項目</h1>
          <Link href="/food">
            <BaseButton variation="secondary">
              <PlusIcon className="size-5" />
              新增食品紀錄
            </BaseButton>
          </Link>
        </div>
        <div className="relative overflow-x-auto rounded-md shadow-md sm:rounded-lg">
          <table className="w-full whitespace-nowrap text-right text-sm text-gray-500">
            <thead className="bg-gray-50 uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
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
            <RecorddRow records={recordsData} />
          </table>
        </div>
      </div>
      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-xl font-semibold text-gray-700">運動項目</h1>
          <NewSportRecord />
        </div>
        <div className="relative overflow-x-auto rounded-md shadow-md sm:rounded-lg">
          <table className="w-full whitespace-nowrap text-right text-sm text-gray-500">
            <thead className="bg-gray-50 uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  運動項目
                </th>
                <th scope="col" className="px-6 py-3">
                  運動時間
                </th>
                <th scope="col" className="px-6 py-3">
                  運動消耗量<p className="text-xs">(kcal)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">編輯</span>
                </th>
              </tr>
            </thead>
            <SportRecordRow sportRecords={sportRecordsData} />
          </table>
        </div>
      </div>
    </div>
  );
}
