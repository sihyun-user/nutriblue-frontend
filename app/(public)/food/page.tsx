import SearchBar from '@/components/ui/SearchBar';
import ListFoods from '@/components/page/food/ListFoods';
import CreateFood from '@/components/page/food/CreateFood';

export default async function Page() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="relative mb-8 flex items-center justify-between gap-4 md:block">
        <SearchBar />
        <div className="md:absolute md:right-0 md:top-[4px]">
          <CreateFood />
        </div>
      </div>
      <ListFoods />
    </div>
  );
}
