import axios from '@/lib/axios';

import { NewRecordSchemaType } from '@/schemas/record';

export async function getRecordsByDate(dateId: string) {
  try {
    const { data } = await axios.post('/record/date', { dateId });

    if (!data.status) throw new Error(data.message);

    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createRecord(newRecord: NewRecordSchemaType) {
  const { data } = await axios.post(`/record`, newRecord);

  if (!data.status) throw new Error(data.message);
}

export async function getCalendar(dateId: string) {
  const { data } = await axios.post('/record/calendar', { dateId });

  if (!data.status) throw new Error(data.message);

  return data.data;
}
