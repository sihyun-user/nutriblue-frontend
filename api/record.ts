import axios from '@/lib/axios';

import { NewRecordSchemaType } from '@/schemas/record';

export async function getRecords() {
  const { data } = await axios.get('/record');

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createRecord(newRecord: NewRecordSchemaType) {
  const { data } = await axios.post(`/record`, newRecord);

  if (!data.status) throw new Error(data.message);
}

export async function getCalendar(payload: { dateId: string }) {
  const { data } = await axios.post('/record/calendar', payload);

  if (!data.status) throw new Error(data.message);

  return data.data;
}
