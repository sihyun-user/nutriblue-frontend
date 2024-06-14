import FoodCard from '@/components/FoodCard';

export default function Page() {
  return (
    <div className="mx-auto lg:max-w-7xl">
      <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
