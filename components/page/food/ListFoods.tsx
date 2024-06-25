'use client';

import { useQuery } from '@tanstack/react-query';

import { IFood } from '@/types/food';
import { getFoods } from '@/api/food';
import FoodItem from './FoodItem';

export default function ListFoods() {
  const { data } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods
  });

  if (data)
    return (
      <>
        {data.elements.map((food: IFood) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </>
    );
}
