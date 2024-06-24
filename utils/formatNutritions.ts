import { IFood } from '@/types/food';

export default function formatNutritions(
  foods: IFood[] | IFood
): IFood[] | IFood {
  const inputIsArray = Array.isArray(foods);
  const foodArray = inputIsArray ? (foods as IFood[]) : [foods as IFood];

  const result = foodArray.map((food: IFood) => {
    const newFood = { ...food, nutritions: { ...food.nutritions } };

    Object.keys(food.nutritions).forEach((key) => {
      if (typeof food.nutritions[key] === 'number') {
        if (key === 'calories') {
          newFood.nutritions[key] = +newFood.nutritions[key].toFixed(0);
        } else {
          newFood.nutritions[key] = +newFood.nutritions[key].toFixed(1);
        }
      }
    });
    return newFood;
  });

  return inputIsArray ? result : result[0];
}
