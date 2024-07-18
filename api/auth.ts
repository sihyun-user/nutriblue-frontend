import Cookies from 'js-cookie';

import axios from '@/lib/axios';

export async function login(payload: { email: string; password: string }) {
  const { data } = await axios.post('/auth/login', payload);

  if (!data.status) throw new Error(data.message);

  const { token, refreshToken } = data.data;
  Cookies.set('token', token);
  Cookies.set('refreshToken', refreshToken);
  return data.data;
}

export async function signup(payload: {
  name: string;
  email: string;
  password: string;
}) {
  const { data } = await axios.post('/auth/signup', payload);

  if (!data.status) throw new Error(data.message);

  const { token, refreshToken } = data.data;
  Cookies.set('token', token);
  Cookies.set('refreshToken', refreshToken);
  return data.data;
}

export async function logout() {
  const { data } = await axios.post('/auth/logout');

  if (!data.status) throw new Error(data.message);

  return data;
}
