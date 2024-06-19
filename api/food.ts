import { IFood } from '@/types/food';
import { formatNutritions } from '@/utils';
import getApi from '.';

export async function getFood() {
  const data = await getApi('food');

  const formattedElements = data.data.elements.map((item: IFood) =>
    formatNutritions(item)
  );

  const result = {
    ...data.data,
    elements: formattedElements
  };

  return result;
}
