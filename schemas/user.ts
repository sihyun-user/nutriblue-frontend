import { z } from 'zod';

import { requiredString, requiredNumber, numValidator } from './index';

export const profileSchema = z.object({
  name: requiredString(),
  gender: requiredNumber(),
  birthday: requiredString(),
  height: numValidator('欄位'),
  weight: numValidator('欄位'),
  sport_level: requiredString(),
  fitness_level: requiredString()
});
export type ProfileSchemaType = z.infer<typeof profileSchema>;

export const securitySchema = z
  .object({
    password: z.string().min(6, '密碼長度需大於 6 個字元'),
    confirm_password: z.string()
  })
  .refine((data) => data.password === data.confirm_password, {
    message: '密碼和確認密碼必須相同',
    path: ['confirm_password']
  });
export type SecuritySchemaType = z.infer<typeof securitySchema>;
