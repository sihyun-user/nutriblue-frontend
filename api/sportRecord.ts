import axios from '@/lib/axios';

import {
  NewSportRecordSchemaType,
  UpdateSportRecordSchemaType
} from '@/schemas/sportRecord';

export async function getSportRecordsByDate(dateId: string) {
  const { data } = await axios.post('/sportRecord/date', { dateId });

  if (!data.status) throw new Error(data.message);

  return data.data;
}

export async function createSportRecord(payload: NewSportRecordSchemaType) {
  const { data } = await axios.post('/sportRecord', payload);

  if (!data.status) throw new Error(data.message);
}

export async function updateSportRecord(payload: UpdateSportRecordSchemaType) {
  const { sportRecordId, ...paramData } = payload;

  const { data } = await axios.patch(
    `/sportRecord/${sportRecordId}`,
    paramData
  );

  if (!data.status) throw new Error(data.message);
}

export async function deleteSportRecord(sportRecordId: string) {
  const { data } = await axios.delete(`/sportRecord/${sportRecordId}`);

  if (!data.status) throw new Error(data.message);
}
