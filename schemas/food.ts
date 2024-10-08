import { z } from 'zod';

import { requiredString, requiredBoolean, numValidator } from './index';

export const nutritionsValidator = z.object({
  calories: numValidator('熱量'),
  protein: numValidator('蛋白質'),
  fat: numValidator('脂肪'),
  saturatedFat: numValidator('飽和脂肪'),
  transFat: numValidator('反式脂肪'),
  carbohydrates: numValidator('碳水化合物'),
  sugar: numValidator('糖'),
  sodium: numValidator('鈉'),
  potassium: numValidator('鉀'),
  cholesterol: numValidator('膽固醇')
});

export const foodFormSchema = z.object({
  name: requiredString(),
  brandName: z.string(),
  publiced: requiredBoolean(),
  servingSize: z.object({
    value: numValidator('每一份量含'), // 每一份量數值
    unit: z.string(), // 每一份量單位
    container: numValidator('每包裝份數') // 每包裝份數
  }),
  nutritions: nutritionsValidator
});

export type FoodFormType = z.infer<typeof foodFormSchema>;
