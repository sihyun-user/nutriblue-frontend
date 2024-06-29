import { IFood, INutritions } from '@/types/food';
import InputRow from '@/components/ui/InputRow';

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

interface Props {
  multiplier: number;
  data: INutritions;
}

export default function NutritionRows({ multiplier, data }: Props) {
  return (
    <>
      {nutritionList.map((item) => (
        <InputRow
          key={item.id}
          label={item.name}
          type="number"
          disabled
          fixedRight={item.unit}
          id={`nutritions.${item.id}` as keyof IFood}
          setValue={
            data[item.id] === 0
              ? 0
              : Math.round(data[item.id] * multiplier * 10) / 10
          }
        />
      ))}
    </>
  );
}
