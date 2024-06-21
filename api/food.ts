'use server';

import { IFood } from '@/types/food';
import { formatNutritions } from '@/lib/utils';
import getApi from '.';

export async function getFoods() {
  const data = await getApi('food');

  const formattedElements = data.data.elements.map((item: IFood) =>
    formatNutritions(item)
  );

  const result = {
    ...data.data,
    elements: formattedElements
  };

  return result;
}

export async function createFood(newFood: IFood) {
  const data = await getApi('food', newFood);

  return data;
}
