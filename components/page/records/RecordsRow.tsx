import React from 'react';
import { IRecord } from '@/types/record';
import ReviseMenu from '@/components/page/records/ReviseMenu';

interface Props {
  records: IRecord[];
}

type MealType = 'breakfast' | 'lunch' | 'dinner';

function groupRecordsByMeal(records: IRecord[]) {
  return records.reduce(
    (acc, record) => {
      const mealType = record.meal_name as MealType;
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
  const {
    food,
    multiplier,
    food: { nutritions }
  } = record;

  return (
    <tr key={record.id} className="border-b bg-white hover:bg-gray-50">
      <th scope="row" className="px-6 py-4 text-left font-medium text-gray-900">
        {food.name} / {multiplier}份
      </th>
      <td className="px-6 py-4">{nutritions.calories}</td>
      <td className="px-6 py-4">{nutritions.protein}</td>
      <td className="px-6 py-4">{nutritions.fat}</td>
      <td className="px-6 py-4">{nutritions.trans_fat}</td>
      <td className="px-6 py-4">{nutritions.saturated_fat}</td>
      <td className="px-6 py-4">{nutritions.sugar}</td>
      <td className="px-6 py-4">{nutritions.carbohydrates}</td>
      <td className="px-6 py-4">{nutritions.sodium}</td>
      <td className="px-6 py-4">
        <ReviseMenu aria-label="修改紀錄" />
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
