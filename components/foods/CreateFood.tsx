'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from '@heroicons/react/24/solid';

import { foodFormSchema, type FoodFormType } from '@/schemas/food';
import useCreateFood from '@/feature/food/useCreateFood';
import InputRow from '@/components/ui/InputRow';
import CheckboxRow from '@/components/ui/CheckboxRow';
import RadioRow from '@/components/ui/RadioRow';
import BaseButton from '@/components/ui/BaseButton';
import Dialog from '@/components/dialog/Dialog';
import nutritionList from '@/utils/nutritionList';

export default function CreateFood() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FoodFormType>({
    resolver: zodResolver(foodFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      brandName: '',
      publiced: false,
      servingSize: {
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
        saturatedFat: 0,
        transFat: 0,
        sodium: 0,
        potassium: 0,
        cholesterol: 0
      }
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  const { createFood, isPending } = useCreateFood();

  const onSubmit: SubmitHandler<FoodFormType> = (data) => {
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
                label="品牌名稱"
                id="brandName"
                errors={errors}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputRow
                variation="secondary"
                register={register}
                label="每一份量含"
                type="number"
                id="servingSize.value"
                errors={errors}
              />
              <RadioRow
                control={control}
                label="單位"
                id="servingSize.unit"
                list={{ g: '克', ml: '毫升' }}
              />
              <InputRow
                variation="secondary"
                register={register}
                label="每包裝份數"
                type="number"
                id="servingSize.container"
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
                    id={`nutritions.${item.id}` as keyof FoodFormType}
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
