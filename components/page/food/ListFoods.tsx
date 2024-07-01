'use client';

import { useState } from 'react';

import { IFood } from '@/types/food';
import useFoods from '@/feature/food/useFoods';
import PageResults from '@/components/PageResults';
import Pagination from '@/components/ui/Pagination';
import FoodCard from './FoodCard';
import FoodItem from './FoodItem';

export default function ListFoods() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<IFood | null>(null);
  const { data, pageSize } = useFoods();

  function handleOpen(food: IFood) {
    setIsOpen(true);
    setSelectedFood(food);
  }

  function handleClose() {
    setIsOpen(false);
    setSelectedFood(null);
  }

  if (data)
    return (
      <>
        <PageResults data={data} pageSize={pageSize} />
        <div className="mt-6 flex min-h-[72vh] flex-col justify-between gap-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.elements.map((food: IFood) => (
              <div onClick={() => handleOpen(food)} key={food.id}>
                <FoodCard food={food} />
              </div>
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
