'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Input } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import { createFood } from '@/api/food';
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
  const queryClient = new QueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createFood,
    onSuccess: () => {
      toast.success('新增食品成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
    },
    onError: () => {
      toast.error('新增食品失敗，請稍後再試');
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    // mutate(data);
  }

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
                  {...register('serving_size.value')}
                />
              </FormRow>
              {/* <FormRow label="單位">
                <Radio className={radioStyle} value="ml"></Radio>
              </FormRow> */}
            </div>
            <div>
              <h6 className="mb-2 text-lg font-semibold">營養成分</h6>
              <div className="grid grid-cols-2 gap-4">
                <FormRow label="熱量" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="calories"
                    defaultValue={0}
                    {...register('nutritions.calories')}
                  />
                </FormRow>
                <FormRow label="蛋白質" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="protein"
                    defaultValue={0}
                    {...register('nutritions.protein')}
                  />
                </FormRow>
                <FormRow label="碳水化合物" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="carbohydrates"
                    defaultValue={0}
                    {...register('nutritions.carbohydrates')}
                  />
                </FormRow>
                <FormRow label="糖" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="sugar"
                    defaultValue={0}
                    {...register('nutritions.sugar')}
                  />
                </FormRow>
                <FormRow label="脂肪" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="fat"
                    defaultValue={0}
                    {...register('nutritions.fat')}
                  />
                </FormRow>
                <FormRow label="飽和脂肪" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="saturated_fat"
                    defaultValue={0}
                    {...register('nutritions.saturated_fat')}
                  />
                </FormRow>
                <FormRow label="反式脂肪" unit="克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="trans_fat"
                    defaultValue={0}
                    {...register('nutritions.trans_fat')}
                  />
                </FormRow>
                <FormRow label="納" unit="毫克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="sodium"
                    defaultValue={0}
                    {...register('nutritions.sodium')}
                  />
                </FormRow>
                <FormRow label="鉀" unit="毫克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="potassium"
                    defaultValue={0}
                    {...register('nutritions.potassium')}
                  />
                </FormRow>
                <FormRow label="膽固醇" unit="毫克">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="cholesterol"
                    defaultValue={0}
                    {...register('nutritions.cholesterol')}
                  />
                </FormRow>
                <FormRow label="鈣" unit="%">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="calcium"
                    defaultValue={0}
                    {...register('nutritions.calcium')}
                  />
                </FormRow>
                <FormRow label="鐵" unit="%">
                  <Input
                    className={inputStyle}
                    type="text"
                    id="iron"
                    defaultValue={0}
                    {...register('nutritions.iron')}
                  />
                </FormRow>
              </div>
            </div>
          </div>
          <div className="mt-9 flex gap-4">
            <BaseButton variation="gray" type="reset">
              重置
            </BaseButton>
            <BaseButton type="submit">確認</BaseButton>
          </div>
        </form>
      </Modal>
    </>
  );
}
