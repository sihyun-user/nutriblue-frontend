import { z } from 'zod';

export const newRecordSchema = z.object({
  food_id: z.string(),
  multiplier: z
    .number({
      message: '請輸入份數'
    })
    .min(1, { message: '份數必須大於 0' })
    .refine((value) => !/^0/.test(value.toString()), {
      message: '不得是0開頭的數字'
    }),
  meal_name: z.string(),
  record_date: z.string()
});

export type NewRecordSchemaType = z.infer<typeof newRecordSchema>;
