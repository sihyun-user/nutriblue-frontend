'use client';

import Link from 'next/link';

import {
  HeartIcon,
  HomeIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  FolderIcon
} from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

const navList = [
  {
    navItem: '動態',
    navLinks: [
      {
        name: '首頁',
        href: '/home',
        icon: <HomeIcon />
      },
      {
        name: '營養日誌',
        href: '/calendar',
        icon: <CalendarDaysIcon />
      },
      {
        name: '我的資料庫',
        href: '/lookup',
        icon: <FolderIcon />
      }
    ]
  },
  {
    navItem: '發現',
    navLinks: [
      {
        name: '搜尋營養資料庫',
        href: '/food',
        icon: <MagnifyingGlassIcon />
      }
      // {
      //   name: '營養專欄',
      //   href: '/blog',
      //   icon: <HeartIcon />
      // }
    ]
  },
  {
    navItem: '管理',
    navLinks: [
      {
        name: '食品書籤',
        href: '/bookmark',
        icon: <BookmarkIcon />
      }
    ]
  }
];

interface Props {
  isNavOpen: boolean;
}

export default function Navigation({ isNavOpen }: Props) {
  const pathname = usePathname();
  return (
    <nav
      className={`${isNavOpen ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 z-30 min-h-screen w-64 overflow-hidden border-r border-r-blue-200 bg-primary-50 transition-all duration-300 md:w-16 md:hover:w-64`}
    >
      <div className="flex flex-col gap-3 px-2 pb-2 pt-16">
        {navList.map((item) => (
          <ul
            key={item.navItem}
            className="flex w-full flex-col gap-1 text-lg text-primary-700"
          >
            <li className="mb-1 text-sm">{item.navItem}</li>
            {item.navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  scroll={false}
                  className={`flex min-h-12 w-full items-center gap-6 rounded px-2.5 font-semibold transition-colors hover:bg-primary-100 ${pathname === link.href ? 'bg-primary-200 text-primary-900' : ''}`}
                  href={link.href}
                >
                  <div className="absolute flex h-12 w-48 items-center">
                    <div className="size-6">{link.icon}</div>
                    <div className="absolute left-12 text-sm">{link.name}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
}
