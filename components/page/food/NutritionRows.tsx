import { IFood, INutritions } from '@/types/food';
import InputRow from '@/components/ui/InputRow';
import nutritionList from '@/utils/nutritionList';

interface Props {
  multiplier: number;
  data: INutritions;
}

export default function NutritionRows({ multiplier, data }: Props) {
  const setMultiplierValue = (value: number) =>
    Math.round(value * multiplier * 10) / 10;

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
          setValue={setMultiplierValue(data[item.id]) || 0}
        />
      ))}
    </>
  );
}
