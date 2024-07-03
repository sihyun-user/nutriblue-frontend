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

export async function getFoodBookmarks() {
  const { data } = await axios.get('/food/bookmark');

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createFoodBookmark({ food_id }: { food_id: string }) {
  const { data } = await axios.post(`/food/bookmark/${food_id}`);

  if (!data.status) throw new Error(data.message);
}

export async function deleteFoodBookmark({ food_id }: { food_id: string }) {
  const { data } = await axios.delete(`/food/bookmark/${food_id}`);

  if (!data.status) throw new Error(data.message);
}
