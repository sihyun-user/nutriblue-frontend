import { BookmarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import BaseButton from '@/components/ui/BaseButton';

export default function EmptyBookmark() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <BookmarkIcon className="size-[70px] text-blue-400" />
      <h2 className="text-2xl">你的書籤清單為空。</h2>
      <span>返回食品資料庫新增書籤，你添加書籤的每個食品都將儲存在這裡。</span>
      <Link href="/food" className="mt-8">
        <BaseButton variation="secondary">返回食品資料庫</BaseButton>
      </Link>
    </div>
  );
}
