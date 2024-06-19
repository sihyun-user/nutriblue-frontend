import { QueryClient, HydrationBoundary } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/query-core';

import { getFoods } from '@/api/food';
import SearchBar from '@/components/SearchBar';
import ListFoods from '@/components/Food/ListFoods';

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['foods'],
    queryFn: getFoods
  });

  return (
    <div className="flex flex-col items-center gap-20">
      <SearchBar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListFoods />
      </HydrationBoundary>
    </div>
  );
}
