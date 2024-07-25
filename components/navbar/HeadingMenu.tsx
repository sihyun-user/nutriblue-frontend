import {
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link';
import clsx from 'clsx';

import { useUserInfo } from '@/providers/UserProvider';
import useLogout from '@/feature/ahth/useLogout';
import Avatar from '@/components/ui/Avatar';

const buttonStyle = clsx(
  'flex h-[44px] w-[72px] cursor-pointer items-center justify-center gap-2 rounded-lg text-primary-600',
  'transition duration-300 focus:outline-none data-[active]:bg-black/10 data-[hover]:bg-black/10'
);

const panelStyle = clsx(
  'z-20 flex w-[320px] flex-col rounded-lg bg-white p-2 shadow-xl',
  'origin-top-right transition duration-200 data-[closed]:scale-75 data-[open]:scale-100 data-[closed]:opacity-0 data-[open]:opacity-100'
);

const ItemStyle =
  'flex cursor-pointer items-center gap-8 rounded p-2 text-sm transition duration-200 hover:bg-primary-100';

export default function HeadingMenu() {
  const userInfo = useUserInfo();
  const { logout } = useLogout();

  return (
    <Popover className="group relative">
      {({ close }) => (
        <>
          <PopoverButton className={buttonStyle}>
            <Avatar size={32} />
            <ChevronDownIcon className="size-3" />
          </PopoverButton>
          <PopoverPanel anchor="bottom end" transition className={panelStyle}>
            <div className="p-2">
              {userInfo && (
                <div className="flex items-center gap-4">
                  <Avatar size={40} />
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary-800">
                      {userInfo.name}
                    </span>
                    <span className="text-xs">{userInfo.email}</span>
                  </div>
                </div>
              )}
            </div>
            <hr className="my-2 block text-primary-100" />
            <div className="space-y-2">
              <Link
                href="/user/profile"
                className={ItemStyle}
                onClick={() => close()}
              >
                <UserIcon className="size-6" />
                <span className="font-semibold text-primary-800">會員中心</span>
              </Link>
              <div className={ItemStyle} onClick={() => logout()}>
                <ArrowRightStartOnRectangleIcon className="size-6" />
                <span className="font-semibold text-primary-800">登出</span>
              </div>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
