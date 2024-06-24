import axios from '@/lib/axios';

export async function login(payload: { email: string; password: string }) {
  const { data } = await axios.post('/auth/login', payload);

  if (!data.status) throw new Error(data.message);

  const { token, refreshToken } = data.data;
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
}

export async function signup(payload: {
  name: string;
  email: string;
  password: string;
}) {
  const { data } = await axios.post('/auth/signup', payload);

  if (!data.status) throw new Error(data.message);

  const { token, refreshToken } = data.data;
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
}
