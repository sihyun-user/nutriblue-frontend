import { FoodType } from '@/schemas/food';
import axios from '@/lib/axios';

export async function getFoods({
  pageSize,
  pageIndex
}: {
  pageSize?: number;
  pageIndex?: number;
}) {
  const params = `?${pageSize ? `pageSize=${pageSize}` : ''}${pageSize && pageIndex ? '&' : ''}${pageIndex ? `pageIndex=${pageIndex}` : ''}`;

  const { data } = await axios.get(`/food${params}`);

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createFood(newFood: FoodType) {
  const { data } = await axios.post('/food', newFood);

  if (!data.status) throw new Error(data.message);
}
