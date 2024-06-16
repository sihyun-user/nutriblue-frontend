import FoodCard from '@/components/FoodCard';

export default function Page() {
  return (
    // mx-auto max-w-6xl
    <div className="">
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
