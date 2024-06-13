'use client';

import Link from 'next/link';

import { HomeIcon, CakeIcon, LifebuoyIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: '首頁',
    href: '/',
    icon: <HomeIcon />
  },
  {
    name: '食品',
    href: '/food',
    icon: <CakeIcon />
  },
  {
    name: '運動',
    href: '/sport',
    icon: <LifebuoyIcon />
  }
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border border-r-blue-200">
      <ul className="flex h-full w-64 flex-col gap-2 px-3 py-8 text-lg text-primary-700">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`flex min-h-12 items-center gap-6 rounded px-2 py-1 font-semibold leading-none transition-colors hover:bg-blue-50 ${pathname === link.href ? 'bg-blue-200 text-primary-900' : ''}`}
              href={link.href}
            >
              <span className="size-5">{link.icon}</span>
              <span className="text-sm">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
