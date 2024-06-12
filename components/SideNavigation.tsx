'use client';

import Link from 'next/link';

import { HomeIcon, CakeIcon, LifebuoyIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: '首頁',
    href: '/',
    icon: <HomeIcon className="size-5 text-primary-600" />
  },
  {
    name: '食品',
    href: '/food',
    icon: <CakeIcon className="size-5 text-primary-600" />
  },
  {
    name: '運動',
    href: '/sport',
    icon: <LifebuoyIcon className="size-5 text-primary-600" />
  }
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-b-primary-200">
      <ul className="flex h-full w-64 flex-col gap-2 px-3 py-8 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`flex min-h-12 items-center gap-6 rounded-sm px-2 py-1 font-semibold leading-none text-primary-600 transition-colors hover:bg-primary-100 ${pathname === link.href ? 'bg-primary-200' : ''}`}
              href="/"
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
