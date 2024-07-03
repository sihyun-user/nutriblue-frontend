import { FolderIcon } from '@heroicons/react/24/outline';

export default function EmptyLookup() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <FolderIcon className="size-[70px] text-blue-400" />
      <h2 className="text-2xl">你的食品資料庫為空。</h2>
      <span>你添加的每個食品都將儲存在這裡。</span>
    </div>
  );
}
