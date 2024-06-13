// interface props {
//   children: React.ReactNode;
// }

export default function BaseCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-primary-200 bg-blue-50 p-4 shadow-md">
      <h3 className="mb-4 text-xl font-bold">芹菜(黃梗)</h3>
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
