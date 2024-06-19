import { Bars3Icon, UserIcon, MoonIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  onIconClick: () => void;
}

export default function Header({ onIconClick }: HeaderProps) {
  return (
    <header className="layout-padding sticky top-0 z-20 flex h-16 flex-row items-center justify-between border-b border-b-blue-200 bg-blue-100 py-3">
      <Bars3Icon
        className="block size-6 cursor-pointer md:pointer-events-none md:opacity-0"
        onClick={onIconClick}
      />
      <div className="flex justify-center">Logo</div>
      <div className="flex items-center gap-3 pr-0 md:pr-4">
        <UserIcon className="size-6 cursor-pointer text-primary-600" />
        <MoonIcon className="size-6 cursor-pointer text-primary-600" />
      </div>
    </header>
  );
}
