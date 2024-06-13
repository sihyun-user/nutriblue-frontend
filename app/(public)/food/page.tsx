import BaseCard from '@/components/BaseCard';

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <ul className="grid grid-cols-3 gap-8">
        <li>
          <BaseCard />
        </li>
        <li>
          <BaseCard />
        </li>
        <li>
          <BaseCard />
        </li>
      </ul>
    </div>
  );
}
