import {
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import clsx from 'clsx';

import { useUserInfo } from '@/providers/UserProvider';
import Avatar from '../ui/Avatar';

const buttonStyle = clsx(
  'flex h-[44px] w-[72px] cursor-pointer items-center justify-center gap-2 rounded-lg text-primary-600',
  'transition duration-300 focus:outline-none data-[active]:bg-black/10 data-[hover]:bg-black/10'
);

const panelStyle = clsx(
  'z-20 flex w-[320px] flex-col rounded-lg bg-white p-2 shadow-xl',
  'origin-top-right transition duration-150 ease-out data-[closed]:scale-75 data-[open]:scale-100 data-[closed]:opacity-0 data-[open]:opacity-100'
);

const ItemStyle =
  'flex cursor-pointer items-center gap-8 rounded p-2 text-sm transition duration-200 hover:bg-primary-100';

export default function UserMenu() {
  const user = useUserInfo();

  return (
    <Popover className="group relative">
      <PopoverButton className={buttonStyle}>
        <Avatar />
        <ChevronDownIcon className="size-3" />
      </PopoverButton>
      <PopoverPanel anchor="bottom end" transition className={panelStyle}>
        <div className="p-2">
          {user && (
            <div className="flex items-center gap-4">
              <Avatar isLegend />
              <div className="flex flex-col">
                <span className="font-semibold text-primary-800">
                  {user.name}
                </span>
                <span className="text-xs">{user.email}</span>
              </div>
            </div>
          )}
        </div>
        <hr className="my-2 block text-primary-100" />
        <div className="space-y-2">
          <div className={ItemStyle}>
            <UserIcon className="size-6" />
            <span className="font-semibold text-primary-800">會員中心</span>
          </div>
          <div className={ItemStyle}>
            <ArrowRightStartOnRectangleIcon className="size-6" />
            <span className="font-semibold text-primary-800">登出</span>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
