'use client';

import { useQuery } from '@tanstack/react-query';

import { IFood } from '@/types/food';
import { getFoods } from '@/api/food';
import FoodCard from './FoodCard';

export default function ListFoods() {
  const { data } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods
  });

  if (data)
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.elements.map((food: IFood) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    );
}
