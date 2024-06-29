'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from '@heroicons/react/20/solid';

import { foodSchema, type FoodType } from '@/schemas/food';
import useCreateFood from '@/feature/food/useCreateFood';
import InputRow from '@/components/ui/InputRow';
import CheckboxRow from '@/components/ui/CheckboxRow';
import RadioRow from '@/components/ui/RadioRow';
import BaseButton from '@/components/ui/BaseButton';
import Dialog from '@/components/dialog/Dialog';

const nutritionList = [
  { id: 'calories', name: '熱量', unit: 'kcal' },
  { id: 'protein', name: '蛋白質', unit: 'g' },
  { id: 'carbohydrates', name: '碳水化合物', unit: 'g' },
  { id: 'sugar', name: '糖', unit: 'g' },
  { id: 'fat', name: '脂肪', unit: 'g' },
  { id: 'saturated_fat', name: '飽和脂肪', unit: 'g' },
  { id: 'trans_fat', name: '反式脂肪', unit: 'g' },
  { id: 'sodium', name: '納', unit: 'mg' },
  { id: 'potassium', name: '鉀', unit: 'mg' },
  { id: 'cholesterol', name: '膽固醇', unit: 'mg' }
];

export default function CreateFood() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FoodType>({
    resolver: zodResolver(foodSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      common_name: '',
      brand_name: '',
      publiced: false,
      serving_size: {
        value: 0,
        unit: 'g',
        container: 1
      },
      nutritions: {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        sugar: 0,
        fat: 0,
        saturated_fat: 0,
        trans_fat: 0,
        sodium: 0,
        potassium: 0,
        cholesterol: 0
      }
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  const { createFood, isPending } = useCreateFood();

  const onSubmit: SubmitHandler<FoodType> = (data) => {
    createFood(data, {
      onSuccess: () => {
        setIsOpen(false);
        reset();
      }
    });
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <InputRow
                variation="secondary"
                register={register}
                label="食品名稱"
                id="name"
                errors={errors}
              />
              <InputRow
                variation="secondary"
                register={register}
                label="其他名稱"
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
                type="number"
                id="serving_size.value"
                errors={errors}
              />
              <RadioRow
                control={control}
                label="單位"
                id="serving_size.unit"
                list={['g', 'ml']}
              />
              <InputRow
                variation="secondary"
                register={register}
                label="每包裝份數"
                type="number"
                id="serving_size.container"
                errors={errors}
              />
            </div>
            <div>
              <div className="mb-3">
                <span className="text-lg font-semibold">營養成分</span>
                <span className="ml-1 text-sm">(每一份量含)</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {nutritionList.map((item) => (
                  <InputRow
                    key={item.id}
                    variation="secondary"
                    register={register}
                    label={item.name}
                    type="number"
                    fixedRight={item.unit}
                    id={`nutritions.${item.id}` as keyof FoodType}
                    errors={errors}
                  />
                ))}
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-lg font-semibold">
                協助我們增加食品資料庫內容
              </h6>
              <CheckboxRow id="publiced" control={control}>
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
