'use client';

import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import {
  Input,
  RadioGroup,
  Radio,
  Checkbox,
  Field,
  Label
} from '@headlessui/react';
import { PlusIcon, CheckIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import { createFood } from '@/api/food';
import { IFormValues } from '@/types/food';
import BaseButton from '../BaseButton';
import Modal from '../Modal';

import FormRow from './FormRow';

const inputStyle = clsx(
  'w-full rounded-lg border border-primary-200 bg-white px-3 py-2.5 text-sm text-primary-800',
  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-200'
);

const radioStyle = clsx(
  'flex size-[40px] cursor-pointer items-center justify-center rounded-lg border border-primary-200 bg-primary-200 text-sm font-medium text-primary-800',
  'data-[checked]:bg-blue-400 data-[checked]:text-white'
);

export default function FoodModal() {
  const { register, reset, control, handleSubmit } = useForm<IFormValues>();
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = new QueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createFood,
    onSuccess: () => {
      toast.success('新增食品成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
      reset();
    },
    onError: () => {
      toast.error('新增食品失敗，請稍後再試');
    }
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => mutate(data);

  return (
    <>
      <BaseButton onClick={() => setIsOpen(true)}>
        <PlusIcon className="size-5" />
        新增食品
      </BaseButton>
      <Modal title="建立食品" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormRow label="食品名稱">
                <Input
                  className={inputStyle}
                  type="text"
                  id="name"
                  {...register('name')}
                />
              </FormRow>
              <FormRow label="其他名稱">
                <Input
                  className={inputStyle}
                  type="text"
                  id="common_name"
                  {...register('common_name')}
                />
              </FormRow>
              <FormRow label="品牌名稱">
                <Input
                  className={inputStyle}
                  type="text"
                  id="brand_name"
                  {...register('brand_name')}
                />
              </FormRow>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormRow label="每一份量含">
                <Input
                  className={inputStyle}
                  type="text"
                  id="value"
                  defaultValue={0}
                  {...register('serving_size.value', {
                    valueAsNumber: true
                  })}
                />
              </FormRow>
              <FormRow label="單位">
                <Controller
                  control={control}
                  defaultValue="g"
                  name="serving_size.unit"
                  render={({ field: { value, onChange } }) => (
                    <RadioGroup
                      value={value}
                      onChange={onChange}
                      className="flex items-center gap-4"
                    >
                      <Radio value="g" className={radioStyle}>
                        g
                      </Radio>
                      <Radio value="ml" className={radioStyle}>
                        ml
                      </Radio>
                    </RadioGroup>
                  )}
                />
              </FormRow>
            </div>
            <div>
              <h6 className="mb-3 text-lg font-semibold">營養成分</h6>
              <div className="grid grid-cols-2 gap-4">
                <FormRow label="熱量" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="calories"
                    defaultValue={0}
                    {...register('nutritions.calories', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="蛋白質" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="protein"
                    defaultValue={0}
                    {...register('nutritions.protein', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="碳水化合物" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="carbohydrates"
                    defaultValue={0}
                    {...register('nutritions.carbohydrates', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="糖" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="sugar"
                    defaultValue={0}
                    {...register('nutritions.sugar', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="脂肪" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="fat"
                    defaultValue={0}
                    {...register('nutritions.fat', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="飽和脂肪" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="saturated_fat"
                    defaultValue={0}
                    {...register('nutritions.saturated_fat', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="反式脂肪" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="trans_fat"
                    defaultValue={0}
                    {...register('nutritions.trans_fat', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="納" unit="毫克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="sodium"
                    defaultValue={0}
                    {...register('nutritions.sodium', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="鉀" unit="毫克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="potassium"
                    defaultValue={0}
                    {...register('nutritions.potassium', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="膽固醇" unit="毫克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="cholesterol"
                    defaultValue={0}
                    {...register('nutritions.cholesterol', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="鈣" unit="%">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="calcium"
                    defaultValue={0}
                    {...register('nutritions.calcium', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
                <FormRow label="鐵" unit="%">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="iron"
                    defaultValue={0}
                    {...register('nutritions.iron', {
                      valueAsNumber: true
                    })}
                  />
                </FormRow>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-lg font-semibold">
                協助我們增加食品資料庫內容
              </h6>
              <Controller
                control={control}
                name="publiced"
                defaultValue={false}
                render={({ field: { value, onChange } }) => (
                  <Field className="flex items-center gap-3">
                    <Checkbox
                      checked={value}
                      onChange={onChange}
                      className="group size-6 rounded-md bg-primary-200 p-1 data-[checked]:bg-cyan-400"
                    >
                      <CheckIcon className="hidden size-4 font-bold text-white group-data-[checked]:block" />
                    </Checkbox>
                    <Label>是，我同意讓其他會員使用此食品。</Label>
                  </Field>
                )}
              />
            </div>
          </div>
          <div className="mt-9 flex gap-4">
            <BaseButton variation="gray" type="reset">
              重置
            </BaseButton>
            <BaseButton type="submit" disabled={isPending}>
              確認
            </BaseButton>
          </div>
        </form>
      </Modal>
    </>
  );
}
