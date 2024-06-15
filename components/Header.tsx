import { Bars3Icon, UserIcon, MoonIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  onIconClick: () => void;
}

export default function Header({ onIconClick }: HeaderProps) {
  return (
    <header className="flex h-16 flex-row items-center justify-between border-b border-b-blue-200 px-4 py-3">
      <Bars3Icon
        className="block size-6 cursor-pointer"
        onClick={onIconClick}
      />
      <div className="flex justify-center">Logo</div>
      <div className="flex items-center gap-3">
        <UserIcon className="size-6 cursor-pointer text-primary-600" />
        <MoonIcon className="size-6 cursor-pointer text-primary-600" />
      </div>
    </header>
  );
}
