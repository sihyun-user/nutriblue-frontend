import { z } from 'zod';

export const newRecordSchema = z.object({
  food_id: z.string(),
  multiplier: z.number({ message: '請輸入攝取份數' }),
  meal_name: z.string(),
  record_date: z.string()
});

export type NewRecordSchemaType = z.infer<typeof newRecordSchema>;
