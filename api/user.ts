import axios from '@/lib/axios';

export async function getUser() {
  const { data } = await axios.get('/user');

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function updateUser() {
  const { data } = await axios.patch('/user');

  if (!data.status) throw new Error(data.message);

  return data.data;
}
