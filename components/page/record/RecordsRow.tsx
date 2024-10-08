import React from 'react';

import { IRecord } from '@/types';
import { setContainerValue } from '@/utils';
import RecordReviseMenu from '@/components/page/record/RecordReviseMenu';

interface Props {
  records: IRecord[];
}

type MealType = 'breakfast' | 'lunch' | 'dinner';

function groupRecordsByMeal(records: IRecord[]) {
  return records.reduce(
    (acc, record) => {
      const mealType = record.mealName as MealType;
      if (!acc[mealType]) {
        acc[mealType] = [];
      }
      acc[mealType].push(record);
      return acc;
    },
    { breakfast: [], lunch: [], dinner: [] } as Record<MealType, IRecord[]>
  );
}

function emptyRecordRow() {
  return (
    <tr className="border-b bg-white hover:bg-gray-50">
      <td colSpan={10} className="px-6 py-4 text-left">
        尚未新增紀錄
      </td>
    </tr>
  );
}

function generateRecordRow(record: IRecord) {
  const { id, food, multiplier } = record;

  if (!food) {
    return (
      <tr key={id} className="border-b bg-white hover:bg-gray-50">
        <td colSpan={9} className="px-6 py-4 text-left">
          [食品內容已被刪除]
        </td>
        <td className="px-6 py-4">
          <RecordReviseMenu record={record} aria-label="修改紀錄" />
        </td>
      </tr>
    );
  }

  const { name, nutritions } = food;

  return (
    <tr key={record.id} className="border-b bg-white hover:bg-gray-50">
      <th scope="row" className="px-6 py-4 text-left font-medium text-gray-900">
        {name} / {multiplier}份
      </th>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.calories, multiplier)}
      </td>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.protein, multiplier)}
      </td>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.fat, multiplier)}
      </td>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.transFat, multiplier)}
      </td>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.saturatedFat, multiplier)}
      </td>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.sugar, multiplier)}
      </td>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.carbohydrates, multiplier)}
      </td>
      <td className="px-6 py-4">
        {setContainerValue(nutritions.sodium, multiplier)}
      </td>
      <td className="px-6 py-4">
        <RecordReviseMenu record={record} aria-label="修改紀錄" />
      </td>
    </tr>
  );
}

function mealSection(mealName: string, records: IRecord[]) {
  return (
    <>
      <tr>
        <th
          colSpan={10}
          className="bg-white px-4 py-2 text-left font-medium text-blue-600"
        >
          {mealName}
        </th>
      </tr>
      {records.length === 0
        ? emptyRecordRow()
        : records.map((record) => generateRecordRow(record))}
    </>
  );
}

export default function RecorddRow({ records }: Props) {
  const groupedRecords = groupRecordsByMeal(records);
  const mealNames = { breakfast: '早餐', lunch: '午餐', dinner: '晚餐' };

  return (
    <tbody>
      {Object.entries(groupedRecords).map(([mealType, mealRecords]) => (
        <React.Fragment key={mealType}>
          {mealSection(mealNames[mealType as MealType], mealRecords)}
        </React.Fragment>
      ))}
    </tbody>
  );
}
