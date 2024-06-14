import {
  Bars3Icon,
  UserIcon,
  MoonIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="flex h-16 flex-row items-center justify-between border-b border-b-blue-200 px-4 py-3">
      <Bars3Icon className="block size-5 cursor-pointer md:hidden" />
      <div>Logo</div>
      <div className="hidden md:flex">
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
      </div>
      <div className="flex items-center gap-3">
        <UserIcon className="size-6 cursor-pointer text-primary-600" />
        <MoonIcon className="size-6 cursor-pointer text-primary-600" />
      </div>
    </header>
  );
}
