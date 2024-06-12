import {
  UserIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="flex h-16 flex-row items-center justify-between border-b border-b-primary-200 px-4 py-3">
      <div>Logo</div>
      <div className="flex">
        <form className="relative w-full">
          <div className="flex h-12 w-full max-w-96 items-center justify-center rounded-2xl border-primary-200 bg-primary-50 px-3 py-1 focus-within:border focus-within:shadow-1">
            <MagnifyingGlassIcon className="mr-3 size-7 text-primary-400" />
            <input
              type="text"
              className="bg-primary-50 placeholder:text-primary-500 focus:outline-none"
              placeholder="搜尋"
            />
            ctrl + k
          </div>
        </form>
      </div>
      <div className="flex items-center gap-3">
        <UserIcon className="size-6 cursor-pointer text-primary-600" />
        <MoonIcon className="size-6 cursor-pointer text-primary-600" />
        <ArrowRightStartOnRectangleIcon className="size-6 cursor-pointer text-primary-600" />
      </div>
    </header>
  );
}
