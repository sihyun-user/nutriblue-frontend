'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { IFood } from '@/types/food';
import { getFoods } from '@/api/food';
import FoodItem from './FoodItem';
import AddFood from './AddFood';

export default function ListFoods() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<IFood | null>(null);

  const { data } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods
  });

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
        {data.elements.map((food: IFood) => (
          <div onClick={() => handleOpen(food)} key={food.id}>
            <FoodItem food={food} />
          </div>
        ))}
        <AddFood
          isOpen={isOpen}
          onClose={() => handleClose()}
          data={selectedFood}
        />
      </>
    );
}
