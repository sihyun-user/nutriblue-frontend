import axios from '@/lib/axios';

import { type ProfileSchemaType } from '@/schemas/user';

export async function getUser() {
  const { data } = await axios.get('/user');

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function updateUser(payload: ProfileSchemaType) {
  const { data } = await axios.patch('/user/profile', payload);

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function updatePassword(payload: {
  old_password: string;
  new_password: string;
}) {
  const { data } = await axios.patch('/user/password', payload);

  if (!data.status) throw new Error(data.message);

  return data.data;
}
