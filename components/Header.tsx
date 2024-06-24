import { Bars3Icon, UserIcon, MoonIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  onIconClick: () => void;
}

export default function Header({ onIconClick }: HeaderProps) {
  return (
    <header className="sticky left-0 top-0 z-20 w-full border-b border-b-blue-200 bg-blue-100 px-4 md:pl-[64px]">
      <div className="ml-auto flex h-16 items-center justify-between">
        <Bars3Icon
          className="block size-6 cursor-pointer md:pointer-events-none md:opacity-0"
          onClick={onIconClick}
        />
        <div className="flex justify-center">Logo</div>
        <div className="flex items-center gap-3">
          <UserIcon className="size-6 cursor-pointer text-primary-600" />
          <MoonIcon className="size-6 cursor-pointer text-primary-600" />
        </div>
      </div>
    </header>
  );
}
