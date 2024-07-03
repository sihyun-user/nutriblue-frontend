import { SparklesIcon } from '@heroicons/react/24/solid';

export default function EmptyFood() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <SparklesIcon className="size-[70px] text-blue-400" />
      <h2 className="text-2xl">準備好探索了嗎？</h2>
      <span>開始搜尋以探索食品營養的世界。</span>
    </div>
  );
}
