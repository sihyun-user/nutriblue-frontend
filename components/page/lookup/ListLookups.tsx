'use client';

import { useState } from 'react';

import { IFood } from '@/types/food';
import useUserFoods from '@/feature/food/useUserFoods';
import Spinner from '@/components/Spinner';
import PageResults from '@/components/PageResults';
import Pagination from '@/components/Pagination';
import FoodCard from '@/components/foods/FoodCard';
import FoodItem from '@/components/foods/FoodItem';
import EmptyLookup from './EmptyLookup';

export default function ListFoods() {
  const [isSelect, setIsSelect] = useState(false);
  const [selectedFood, setSelectedFood] = useState<IFood | null>(null);
  const { data, isLoading, pageSize } = useUserFoods();

  function handleSelect(food: IFood) {
    setIsSelect(true);
    setSelectedFood(food);
  }

  function handleClose() {
    setIsSelect(false);
    setSelectedFood(null);
  }

  if (isLoading) return <Spinner />;

  if (!data || data.empty) return <EmptyLookup />;

  return (
    <>
      <PageResults data={data} pageSize={pageSize} />
      <div className="mt-6 flex min-h-[72vh] flex-col justify-between gap-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.elements.map((food: IFood) => (
            <FoodCard
              food={food}
              key={food.id}
              selectMenu
              isPubliced
              onFoodClick={() => handleSelect(food)}
            />
          ))}
          <FoodItem
            isSelect={isSelect}
            isClose={() => handleClose()}
            data={selectedFood}
          />
        </div>
        <Pagination data={data} />
      </div>
    </>
  );
}
