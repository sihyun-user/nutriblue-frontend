import { BookmarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// interface props {
//   children: React.ReactNode;
// }

export default function FoodCard() {
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-white bg-white p-4 shadow-md hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-xl font-bold">芹菜(黃梗)</h3>
        <CheckCircleIcon className="size-6 text-green-600" />
      </div>
      <div className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-xl hover:bg-cyan-100">
        <BookmarkIcon className="size-7 text-cyan-500" />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <div className="text-blue-400">
          <span className="text-xl font-bold">3.5</span> kcal
        </div>
        <div className="text-sm">/</div>
        <div className="text-sm">27g</div>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        <li className="flex gap-2">
          碳水化合物<span>0.8g</span>
        </li>
        <li className="flex gap-2">
          蛋白質 <span>0.2g</span>
        </li>
        <li className="flex gap-2">
          脂肪 <span>0g</span>
        </li>
        <li className="flex gap-2">
          糖 <span>0g</span>
        </li>
        <li className="flex gap-2">
          納 <span>17.6g</span>
        </li>
      </ul>
    </div>
  );
}
