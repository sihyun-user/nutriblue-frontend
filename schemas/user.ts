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
