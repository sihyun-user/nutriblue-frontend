import { FoodType } from '@/schemas/food';
import axios from '@/lib/axios';

export async function getFoods({
  query,
  pageIndex
}: {
  query: string;
  pageIndex: number;
}) {
  const params = `?query=${query}&pageIndex=${pageIndex}&pageSize=9`;

  const { data } = await axios.get(`/food${params}`);

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createFood(newFood: FoodType) {
  const { data } = await axios.post('/food', newFood);

  if (!data.status) throw new Error(data.message);
}
