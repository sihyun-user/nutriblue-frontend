import axios from '@/lib/axios';

export async function login(payload: { email: string; password: string }) {
  const res = await axios.post('auth/login', payload);

  const { data } = res.data;

  if (!data.status) throw new Error(data.message);

  return data;
}

export async function register(payload: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await axios.post('auth/register', payload);

  const { data } = res.data;

  return data;
}
