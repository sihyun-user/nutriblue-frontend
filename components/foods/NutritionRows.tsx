import { IFood, INutritions } from '@/types';
import InputRow from '@/components/ui/InputRow';
import nutritionList from '@/utils/nutritionList';

import { setContainerValue } from '@/utils';

interface Props {
  container: number;
  multiplier: number;
  data: INutritions;
}

export default function NutritionRows({ container, multiplier, data }: Props) {
  const containerValue = (value: number) =>
    setContainerValue(value * container, multiplier);

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
          setValue={containerValue(data[item.id]) || 0}
        />
      ))}
    </>
  );
}
