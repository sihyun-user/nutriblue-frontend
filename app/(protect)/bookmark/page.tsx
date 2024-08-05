import type { Metadata } from 'next';

import SearchBar from '@/components/ui/SearchBar';
import ListBookmark from '@/components/page/bookmark/ListBookmarks';

export const metadata: Metadata = {
  title: '食品書籤'
};

export default async function Page() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-8 flex items-center justify-center md:block">
        <SearchBar />
      </div>
      <ListBookmark />
    </div>
  );
}
