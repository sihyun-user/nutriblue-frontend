import axios from '@/lib/axios';

import { NewRecordSchemaType } from '@/schemas/record';

export async function getRecordsByDate(dateId: string) {
  const { data } = await axios.post('/record/date', { dateId });

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createRecord(newRecord: NewRecordSchemaType) {
  const { data } = await axios.post(`/record`, newRecord);

  if (!data.status) throw new Error(data.message);
}

export async function getCalendar(calendarId: string) {
  const { data } = await axios.post('/record/calendar', { calendarId });

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function updateRecord(recordId: string) {
  const { data } = await axios.patch(`/record/${recordId}`);

  if (!data.status) throw new Error(data.message);
}

export async function deleteRecord(recordId: string) {
  const { data } = await axios.delete(`/record/${recordId}`);

  if (!data.status) throw new Error(data.message);
}
