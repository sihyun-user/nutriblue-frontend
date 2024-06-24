import { QueryClient, HydrationBoundary } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/query-core';

import { getFoods } from '@/api/food';
import SearchBar from '@/components/SearchBar';
import ListFoods from '@/components/Food/ListFoods';
import FoodModal from '@/components/Food/FoodModal';

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['foods'],
    queryFn: getFoods
  });

  return (
    <>
      <div className="relative flex items-center justify-between gap-4 md:block">
        <SearchBar />
        <div className="md:absolute md:right-0 md:top-[4px]">
          <FoodModal />
        </div>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ListFoods />
        </div>
      </HydrationBoundary>
    </>
  );
}
