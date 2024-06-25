'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from '@heroicons/react/20/solid';

import { createFoodSchema, type CreateFoodSchemaType } from '@/utils/schemas';
import useCreateFood from '@/feature/food/useCreateFood';
import InputRow from '@/components/ui/InputRow';
import CheckboxRow from '@/components/ui/CheckboxRow';
import RadioRow from '@/components/ui/RadioRow';
import BaseButton from '@/components/ui/BaseButton';
import Dialog from '@/components/dialog/Dialog';

export default function CreateFood() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<CreateFoodSchemaType>({
    resolver: zodResolver(createFoodSchema)
  });
  const [isOpen, setIsOpen] = useState(false);

  const { createFood, isPending } = useCreateFood();

  const onSubmit: SubmitHandler<CreateFoodSchemaType> = (data) => {
      console.log(data);
    // createFood(data, {
    //   onSuccess: () => {
    //     setIsOpen(false);
    //     reset();
    //   }
    // });
  };

  const onError = (error: unknown) => {
    // eslint-disable-next-line no-console
    console.log(error);
  };

  return (
    <>
      <BaseButton
        onClick={() => {
          setIsOpen(true);
          reset();
        }}
      >
        <PlusIcon className="size-5" />
        新增食品
      </BaseButton>
      <Dialog title="建立食品" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <InputRow
                register={register}
                label="Email"
                id="name"
                errors={errors}
              />
              <InputRow
                variation="secondary"
                register={register}
                label="食品名稱"
                id="common_name"
                errors={errors}
              />
              <InputRow
                variation="secondary"
                register={register}
                label="品牌名稱"
                id="brand_name"
                errors={errors}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputRow
                variation="secondary"
                register={register}
                label="每一份量含"
                id="serving_size.value"
                errors={errors}
              />
              <RadioRow
                control={control}
                label="單位"
                id="serving_size.unit"
                radious={['g', 'ml']}
                defaultValue="g"
              />
            </div>
            <div>
              <h6 className="mb-3 text-lg font-semibold">營養成分</h6>
              <div className="grid grid-cols-2 gap-4">
                <InputRow
                  variation="secondary"
                  register={register}
                  label="熱量"
                  fixedRight="kcal"
                  id="nutritions.calories"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="蛋白質"
                  fixedRight="g"
                  id="nutritions.protein"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="碳水化合物"
                  fixedRight="g"
                  id="nutritions.carbohydrates"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="糖"
                  fixedRight="g"
                  id="nutritions.sugar"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="脂肪"
                  fixedRight="g"
                  id="nutritions.fat"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="飽和脂肪"
                  fixedRight="g"
                  id="nutritions.saturated_fat"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="反式脂肪"
                  fixedRight="g"
                  id="nutritions.trans_fat"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="納"
                  fixedRight="mg"
                  id="nutritions.sodium"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="鉀"
                  fixedRight="mg"
                  id="nutritions.potassium"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="膽固醇"
                  fixedRight="mg"
                  id="nutritions.cholesterol"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="鈣"
                  fixedRight="%"
                  id="nutritions.calcium"
                  defaultValue={0}
                  errors={errors}
                />
                <InputRow
                  variation="secondary"
                  register={register}
                  label="鐵"
                  fixedRight="%"
                  id="nutritions.iron"
                  defaultValue={0}
                  errors={errors}
                />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-lg font-semibold">
                協助我們增加食品資料庫內容
              </h6>
              <CheckboxRow id="publiced" defaultChecked register={register}>
                是，我同意讓其他會員使用此食品。
              </CheckboxRow>
            </div>
          </div>
          <div className="mt-9">
            <BaseButton type="submit" disabled={isPending}>
              確認
            </BaseButton>
          </div>
        </form>
      </Dialog>
    </>
  );
}
