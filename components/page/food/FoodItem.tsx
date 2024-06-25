import { BookmarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

import { IFood } from '@/types/food';

export default function FoodItem({ food }: { food: IFood }) {
  const { name, verified, serving_size, nutritions } = food;

  return (
    <div className="relative cursor-pointer overflow-hidden rounded-lg border-2 border-white bg-white p-4 shadow-md hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-xl font-bold">{name}</h3>
        {verified && <CheckCircleIcon className="size-6 text-green-600" />}
      </div>
      <div className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-xl hover:bg-cyan-100">
        <BookmarkIcon className="size-7 text-cyan-500" />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <div className="text-blue-400">
          <span className="text-xl font-bold">{nutritions.calories}</span> kcal
        </div>
        <div className="text-sm">/</div>
        <div className="text-sm">
          {serving_size.value}
          {serving_size.unit}
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        <li className="flex gap-2">
          碳水化合物<span>{nutritions.carbohydrates}g</span>
        </li>
        <li className="flex gap-2">
          蛋白質 <span>{nutritions.protein}g</span>
        </li>
        <li className="flex gap-2">
          脂肪 <span>{nutritions.protein}g</span>
        </li>
        <li className="flex gap-2">
          糖 <span>{nutritions.sugar}g</span>
        </li>
        <li className="flex gap-2">
          納 <span>{nutritions.sodium}g</span>
        </li>
      </ul>
    </div>
  );
}
