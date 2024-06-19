'use client';

import { Suspense } from 'react';

// import { IFood } from '@/types/food';
import Spinner from '../Spinner';
// import FoodCard from './FoodCard';

export default function SearchList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Suspense fallback={<Spinner />}>
        {/* {data.elements.map((food: IFood) => (
          <FoodCard key={food.id} food={food} />
        ))} */}
      </Suspense>
    </div>
  );
}
