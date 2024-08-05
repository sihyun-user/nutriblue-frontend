'use client';

import { useState } from 'react';

import { IFood } from '@/types';
import useBookmarks from '@/feature/bookmark/useBookmarks';
import Spinner from '@/components/Spinner';
import PageResults from '@/components/PageResults';
import Pagination from '@/components/Pagination';
import FoodCard from '@/components/foods/FoodCard';
import FoodItem from '@/components/foods/FoodItem';
import EmptyBookmark from './EmptyBookmark';

export default function ListBookmarks() {
  const [isSelect, setIsSelect] = useState(false);
  const [selectedFood, setSelectedFood] = useState<IFood | null>(null);
  const { data, isPending, pageSize } = useBookmarks();

  function handleSelect(food: IFood) {
    setIsSelect(true);
    setSelectedFood(food);
  }

  function handleClose() {
    setIsSelect(false);
    setSelectedFood(null);
  }

  if (isPending) return <Spinner />;

  if (!data || data.empty) return <EmptyBookmark />;

  return (
    <>
      <PageResults data={data} pageSize={pageSize} />
      <div className="mt-6 flex min-h-[70vh] flex-col justify-between gap-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.elements.map((food: IFood) => (
            <FoodCard
              food={food}
              key={food.id}
              onFoodClick={() => handleSelect(food)}
            />
          ))}
          <FoodItem
            isSelect={isSelect}
            isClose={() => handleClose()}
            food={selectedFood}
          />
        </div>
        <Pagination data={data} />
      </div>
    </>
  );
}
