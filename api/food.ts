import { FoodFormType } from '@/schemas/food';
import axios from '@/lib/axios';

export async function getFoods({
  query,
  pageIndex
}: {
  query: string;
  pageIndex: number;
}) {
  const params = `?query=${query}&pageIndex=${pageIndex}&pageSize=9`;

  const { data } = await axios.get(`/food/guest/${params}`);

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function getUserFoods({
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

export async function createFood(payload: FoodFormType) {
  const { data } = await axios.post('/food', payload);

  if (!data.status) throw new Error(data.message);
}

export async function editFood({
  food_id,
  newFood
}: {
  food_id: string;
  newFood: FoodFormType;
}) {
  const { data } = await axios.patch(`/food/${food_id}`, newFood);

  if (!data.status) throw new Error(data.message);
}

export async function deleteFood(food_id: string) {
  const { data } = await axios.delete(`/food/${food_id}`);

  if (!data.status) throw new Error(data.message);
}
