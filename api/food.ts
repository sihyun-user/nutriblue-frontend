import { IFood } from '@/types/food';
import { FoodType } from '@/schemas/food';
import formatNutritions from '@/utils/formatNutritions';
import axios from '@/lib/axios';

export async function getFoods() {
  const { data } = await axios.get('/food');

  if (!data.status) throw new Error(data.message);

  const formattedElements = data.data.elements.map((item: IFood) =>
    formatNutritions(item)
  );

  const result = {
    ...data,
    elements: formattedElements
  };

  return result;
}

export async function createFood(newFood: FoodType) {
  const { data } = await axios.post('/food', newFood);

  if (!data.status) throw new Error(data.message);
}
