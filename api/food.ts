import { IFood, IFormValues } from '@/types/food';
import { formatNutritions } from '@/lib/utils';
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

export async function createFood(newFood: IFormValues) {
  const res = await axios.post('food', newFood);

  const { data } = res.data;

  if (!data.status) throw new Error(data.message);

  return data;
}
