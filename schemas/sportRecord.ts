import { z } from 'zod';
import { requiredString, numValidator } from './index';

export const newSportRecordSchema = z.object({
  sportName: requiredString(),
  sportTime: requiredString(),
  sportValue: numValidator('運動消耗量', 0),
  recordDate: requiredString()
});
export type NewSportRecordSchemaType = z.infer<typeof newSportRecordSchema>;

export const updateSportRecordSchema = z.object({
  sportRecordId: z.string(),
  sportName: z.string(),
  sportTime: z.string(),
  sportValue: z.number(),
  recordDate: z.string()
});
export type UpdateSportRecordSchemaType = z.infer<
  typeof updateSportRecordSchema
>;
