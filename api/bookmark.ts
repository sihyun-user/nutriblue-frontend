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

export async function createBookmark({ foodId }: { foodId: string }) {
  const { data } = await axios.post(`/bookmark/${foodId}`);

  if (!data.status) throw new Error(data.message);
}

export async function deleteBookmark({ foodId }: { foodId: string }) {
  const { data } = await axios.delete(`/bookmark/${foodId}`);

  if (!data.status) throw new Error(data.message);
}
