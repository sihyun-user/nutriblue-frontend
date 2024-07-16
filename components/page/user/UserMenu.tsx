'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useUserInfo } from '@/providers/UserProvider';
import Avatar from '@/components/ui/Avatar';
import { CameraIcon } from '@heroicons/react/20/solid';

const navList = [
  {
    name: '個人資訊',
    url: '/user/profile'
  },
  {
    name: '修改密碼',
    url: '/user/security'
  }
];

export default function UserMenu() {
  const userInfo = useUserInfo();
  const pathname = usePathname();

  if (userInfo)
    return (
      <>
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar size="legend" />
            <CameraIcon className="absolute bottom-2 right-1 size-7 cursor-pointer rounded-full bg-blue-100 p-1 text-blue-400" />
          </div>
          <h4 className="text-xl font-semibold text-blue-400">
            {userInfo.name}
          </h4>
          <h5 className="mb-6 text-blue-400">sihyun@gmail.com</h5>
        </div>
        <div className="flex flex-col items-center gap-4">
          {navList.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className={`flex min-h-12 w-full items-center gap-6 rounded px-2.5 font-semibold text-primary-900 transition-colors hover:bg-gray-200 ${pathname === item.url ? 'bg-gray-200' : 'bg-gray-50'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </>
    );
}
