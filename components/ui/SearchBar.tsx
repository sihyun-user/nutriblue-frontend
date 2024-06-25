import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBar() {
  return (
    <form className="relative">
      <div className="m-auto flex h-12 w-full max-w-96 items-center justify-center rounded-2xl border-primary-200 bg-white px-3 py-1 text-primary-500 focus-within:border focus-within:shadow-1">
        <MagnifyingGlassIcon className="mr-3 size-7" />
        <input
          type="text"
          className="w-full bg-white placeholder:text-primary-500 focus:outline-none"
          placeholder="搜尋"
        />
        <span className="whitespace-nowrap">ctrl + k</span>
      </div>
    </form>
  );
}
