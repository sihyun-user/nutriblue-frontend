import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBar() {
  return (
    <form className="relative w-full">
      <div className="flex h-12 w-full max-w-96 items-center justify-center rounded-2xl border-primary-200 bg-white px-3 py-1 text-primary-500 focus-within:border focus-within:shadow-1">
        <MagnifyingGlassIcon className="mr-3 size-7" />
        <input
          type="text"
          className="bg-white placeholder:text-primary-500 focus:outline-none"
          placeholder="搜尋"
        />
        ctrl + k
      </div>
    </form>
  );
}
