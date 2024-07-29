import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function VerifyFood() {
  return (
    <div className="group relative flex cursor-pointer items-center gap-1">
      <CheckCircleIcon className="size-5 text-green-600" />
      <span className="text-xs font-medium text-green-600 group-hover:text-green-700">
        了解更多
      </span>
      <div className="absolute left-0 top-4 mt-2 hidden rounded border bg-blue-600 p-2 text-xs text-white group-hover:block">
        經過政府資料開放平台的食品營養驗證
      </div>
    </div>
  );
}
