import { QueryClient, HydrationBoundary } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/query-core';

import { getFoods } from '@/api/food';
import SearchBar from '@/components/ui/SearchBar';
import ListFoods from '@/components/page/food/ListFoods';
import FoodForm from '@/components/page/food/FoodForm';

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['foods'],
    queryFn: getFoods
  });

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="relative mb-8 flex items-center justify-between gap-4 md:block">
        <SearchBar />
        <div className="md:absolute md:right-0 md:top-[4px]">
          <FoodForm />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ListFoods />
        </HydrationBoundary>
      </div>
    </div>
  );
}
