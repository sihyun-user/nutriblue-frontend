import { z } from 'zod';

export const requiredString = () =>
  z
    .string({
      required_error: '此欄位為必填欄位',
      invalid_type_error: '欄位未填寫正確'
    })
    .min(1, { message: '不可為空值' });
export const requiredNumber = () =>
  z.number({
    required_error: '此欄位為必填欄位',
    invalid_type_error: '欄位未填寫正確'
  });
export const requiredBoolean = () =>
  z.boolean({ required_error: '欄位未填寫正確' });

export const numValidator = (field: string, minLength = 0) =>
  requiredNumber().refine(
    (value) => value >= minLength,
    `${field}不可小於${minLength}`
  );
