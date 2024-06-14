'use client';

import Link from 'next/link';

import {
  HeartIcon,
  ArchiveBoxIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

const navList = [
  {
    navItem: '動態',
    navLinks: [
      {
        name: '每日摘要',
        href: '/',
        icon: <ArchiveBoxIcon />
      },
      {
        name: '健康日誌',
        href: '/health-log',
        icon: <CalendarDaysIcon />
      },
      {
        name: '寫日記',
        href: '/diary',
        icon: <BookOpenIcon />
      }
    ]
  },
  {
    navItem: '發現',
    navLinks: [
      {
        name: '搜尋資料庫',
        href: '/search',
        icon: <MagnifyingGlassIcon />
      },
      {
        name: '博客',
        href: '/blog',
        icon: <HeartIcon />
      }
    ]
  },
  {
    navItem: '管理',
    navLinks: [
      {
        name: '書籤',
        href: '/bookmarks',
        icon: <BookmarkIcon />
      },
      {
        name: '進階版',
        href: '/premium',
        icon: <ShoppingBagIcon />
      }
    ]
  }
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-10 min-h-screen overflow-hidden border border-r-blue-200 bg-primary-50">
      <div className="w-16 transition-all duration-300 hover:w-64">
        <div className="flex flex-col gap-6 px-2 pb-2 pt-16">
          {navList.map((item) => (
            <ul
              key={item.navItem}
              className="flex w-full flex-col gap-1 text-lg text-primary-700"
            >
              <li className="mb-1 text-sm">{item.navItem}</li>
              {item.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className={`flex min-h-12 w-full items-center gap-6 rounded px-2.5 font-semibold transition-colors hover:bg-primary-100 ${pathname === link.href ? 'bg-primary-200 text-primary-900' : ''}`}
                    href={link.href}
                  >
                    <div className="absolute flex h-12 w-48 items-center">
                      <div className="size-6">{link.icon}</div>
                      <div className="absolute left-12 text-sm">
                        {link.name}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}
