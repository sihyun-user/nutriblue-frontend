import { IFood } from '@/types/food';
import { getFood } from '@/api/food';
import FoodCard from './FoodCard';

export default async function FoodList() {
  const data = await getFood();

  if (!data) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.elements.map((food: IFood) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
