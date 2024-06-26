import { z } from 'zod';

import { requiredString, requiredBoolean, numValidator } from './index';

export const nutritionsValidator = z.object({
  calories: numValidator('熱量'),
  protein: numValidator('蛋白質'),
  fat: numValidator('脂肪'),
  saturated_fat: numValidator('飽和脂肪'),
  trans_fat: numValidator('反式脂肪'),
  carbohydrates: numValidator('碳水化合物'),
  sugar: numValidator('糖'),
  sodium: numValidator('鈉'),
  potassium: numValidator('鉀'),
  cholesterol: numValidator('膽固醇')
});

export const foodSchema = z.object({
  name: requiredString(),
  common_name: z.string(),
  brand_name: z.string(),
  publiced: requiredBoolean(),
  serving_size: z.object({
    unit: requiredString().regex(/^(g|ml)$/, '單位只能為 g 或 ml'),
    value: numValidator('份量值')
  }),
  nutritions: nutritionsValidator
});

export type FoodType = z.infer<typeof foodSchema>;
