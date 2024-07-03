import SearchBar from '@/components/ui/SearchBar';
import ListBookmark from '@/components/page/bookmark/ListBookmarks';

export default async function Page() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-8 flex items-center md:block">
        <SearchBar />
      </div>
      <ListBookmark />
    </div>
  );
}
