import { z } from 'zod';

export const newRecordSchema = z.object({
  foodId: z.string(),
  multiplier: z.number({ message: '請輸入攝取份數' }),
  mealName: z.string(),
  recordDate: z.string()
});
export type NewRecordSchemaType = z.infer<typeof newRecordSchema>;

export const updateRecordSchema = z.object({
  multiplier: z.number({ message: '請輸入攝取份數' }),
  mealName: z.string(),
  recordDate: z.string()
});
export type UpdateRecordSchemaType = z.infer<typeof updateRecordSchema>;
