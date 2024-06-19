import { Suspense } from 'react';

import SearchBar from '@/components/SearchBar';
import FoodList from '@/components/Food/FoodList';
import Loading from '../loading';

export const revalidate = 3600;

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-20">
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <FoodList />
      </Suspense>
    </div>
  );
}
