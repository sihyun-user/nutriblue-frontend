import axios from '@/lib/axios';

import {
  type ProfileSchemaType,
  type SecuritySchemaType
} from '@/schemas/user';

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

export async function updatePassword(payload: SecuritySchemaType) {
  const { data } = await axios.patch('/user/password', payload);

  if (!data.status) throw new Error(data.message);

  return data.data;
}
