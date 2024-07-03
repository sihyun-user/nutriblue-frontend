import axios from '@/lib/axios';

export async function getBookmarks({
  query,
  pageIndex
}: {
  query: string;
  pageIndex: number;
}) {
  const params = `?query=${query}&pageIndex=${pageIndex}&pageSize=9`;

  const { data } = await axios.get(`/bookmark/${params}`);

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createBookmark({ food_id }: { food_id: string }) {
  const { data } = await axios.post(`/bookmark/${food_id}`);

  if (!data.status) throw new Error(data.message);
}

export async function deleteBookmark({ food_id }: { food_id: string }) {
  const { data } = await axios.delete(`/bookmark/${food_id}`);

  if (!data.status) throw new Error(data.message);
}
