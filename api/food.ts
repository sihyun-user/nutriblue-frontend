import { IFood, IFoodForm } from '@/types/food';
import formatNutritions from '@/utils/formatNutritions';
import axios from '@/lib/axios';

export async function getFoods() {
  const res = await axios.get('food');

  const { data } = res.data;

  const formattedElements = data.elements.map((item: IFood) =>
    formatNutritions(item)
  );

  const result = {
    ...data,
    elements: formattedElements
  };

  return result;
}

export async function createFood(newFood: IFoodForm) {
  const res = await axios.post('food', newFood);

  const { data } = res.data;

  if (!data.status) throw new Error(data.message);

  return data;
}
