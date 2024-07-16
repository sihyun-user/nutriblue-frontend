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
  foodId,
  newFood
}: {
  foodId: string;
  newFood: FoodFormType;
}) {
  const { data } = await axios.patch(`/food/${foodId}`, newFood);

  if (!data.status) throw new Error(data.message);
}

export async function deleteFood(foodId: string) {
  const { data } = await axios.delete(`/food/${foodId}`);

  if (!data.status) throw new Error(data.message);
}
