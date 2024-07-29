import axios from '@/lib/axios';

import { NewRecordSchemaType, UpdateRecordSchemaType } from '@/schemas/record';

export async function getRecordsByDate(dateId: string) {
  const { data } = await axios.post('/record/date', { dateId });

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createRecord(payload: NewRecordSchemaType) {
  const { data } = await axios.post('/record', payload);

  if (!data.status) throw new Error(data.message);
}

export async function updateRecord(payload: UpdateRecordSchemaType) {
  const { recordId, ...paramData } = payload;

  const { data } = await axios.patch(`/record/${recordId}`, paramData);

  if (!data.status) throw new Error(data.message);
}

export async function deleteRecord(recordId: string) {
  const { data } = await axios.delete(`/record/${recordId}`);

  if (!data.status) throw new Error(data.message);
}
