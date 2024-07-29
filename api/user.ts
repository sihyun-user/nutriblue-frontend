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

export async function updateAvatar(avatar: string) {
  const { data } = await axios.post('/user/avatar', { avatar });

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await axios.post('/user/upload-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function getHealthyReportByDate() {
  const { data } = await axios.get('/user/healthy-report');

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function getAnalyzeResultsByDate() {
  const { data } = await axios.get('/user/analyze-results');

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function getCalendar(calendarId: string) {
  const { data } = await axios.post('/user/calendar', { calendarId });

  if (!data.status) throw new Error(data.message);

  return data.data;
}
