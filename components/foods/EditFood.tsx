'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { IFood } from '@/types';
import { foodFormSchema, type FoodFormType } from '@/schemas/food';
import useEditFood from '@/feature/food/useEditFood';
import InputRow from '@/components/ui/InputRow';
import CheckboxRow from '@/components/ui/CheckboxRow';
import RadioRow from '@/components/ui/RadioRow';
import BaseButton from '@/components/ui/BaseButton';
import Dialog from '@/components/dialog/Dialog';
import nutritionList from '@/utils/nutritionList';

interface Props {
  isSelect: boolean;
  isClose: () => void;
  food: IFood;
}

export default function CreateFood({ isSelect, isClose, food }: Props) {
  const { id: foodId } = food;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FoodFormType>({
    resolver: zodResolver(foodFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: food.name,
      brandName: food.brandName,
      publiced: food.publiced,
      servingSize: {
        value: food.servingSize.value,
        unit: food.servingSize.unit,
        container: food.servingSize.container
      },
      nutritions: {
        calories: food.nutritions.calories,
        protein: food.nutritions.protein,
        carbohydrates: food.nutritions.carbohydrates,
        sugar: food.nutritions.sugar,
        fat: food.nutritions.fat,
        saturatedFat: food.nutritions.saturatedFat,
        transFat: food.nutritions.transFat,
        sodium: food.nutritions.sodium,
        potassium: food.nutritions.potassium,
        cholesterol: food.nutritions.cholesterol
      }
    }
  });

  const { isPending, editFood } = useEditFood();

  const onSubmit: SubmitHandler<FoodFormType> = (newFood) => {
    editFood(
      { foodId, newFood },
      {
        onSettled: () => isClose()
      }
    );
  };

  return (
    <Dialog title="修改食品" isOpen={isSelect} onClose={isClose}>
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
        <div className="mt-8">
          <BaseButton type="submit" disabled={isPending}>
            確認
          </BaseButton>
        </div>
      </form>
    </Dialog>
  );
}
