import FoodCard from '@/components/FoodCard';

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <ul className="grid grid-cols-3 gap-8">
        <li>
          <FoodCard />
        </li>
        <li>
          <FoodCard />
        </li>
        <li>
          <FoodCard />
        </li>
      </ul>
    </div>
  );
}
