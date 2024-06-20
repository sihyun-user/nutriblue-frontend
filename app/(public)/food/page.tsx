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
    <div className="relative flex flex-col items-center gap-10">
      <SearchBar />
      <div className="absolute right-0 top-[7px]">
        <FoodModal />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListFoods />
      </HydrationBoundary>
    </div>
  );
}
