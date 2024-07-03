'use client';

import { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';

import { IFood } from '@/types/food';
import useFoods from '@/feature/food/useFoods';
import Spinner from '@/components/Spinner';
import PageResults from '@/components/PageResults';
import Pagination from '@/components/Pagination';
import FoodCard from './FoodCard';
import FoodItem from './FoodItem';

export default function ListFoods() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<IFood | null>(null);
  const { data, isLoading, pageSize } = useFoods();

  function handleOpen(food: IFood) {
    setIsOpen(true);
    setSelectedFood(food);
  }

  function handleClose() {
    setIsOpen(false);
    setSelectedFood(null);
  }

  if (isLoading) return <Spinner />;

  if (!data) {
    return (
      <div className="flex flex-col items-center gap-4 p-6">
        <SparklesIcon className="size-[70px] text-blue-400" />
        <h2 className="text-2xl">準備好探索了嗎？</h2>
        <span>開始搜尋以探索食品營養的世界。</span>
      </div>
    );
  }

  return (
    <>
      <PageResults data={data} pageSize={pageSize} />
      <div className="mt-6 flex min-h-[72vh] flex-col justify-between gap-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.elements.map((food: IFood) => (
            <FoodCard
              food={food}
              key={food.id}
              onFoodClick={() => handleOpen(food)}
            />
          ))}
          <FoodItem
            isOpen={isOpen}
            onClose={() => handleClose()}
            data={selectedFood}
          />
        </div>
        <Pagination data={data} />
      </div>
    </>
  );
}
