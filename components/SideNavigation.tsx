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
    <nav className="fixed top-0 z-10 min-h-screen w-16 border border-r-blue-200 bg-primary-50 transition-all hover:w-64">
      <ul className="flex w-full flex-col gap-2 px-3 py-8 text-lg text-primary-700">
        {navLinks.map((link) => (
          <li key={link.name} className="relative flex w-full flex-row">
            <Link
              className={`flex min-h-12 w-full items-center gap-6 rounded px-3 font-semibold leading-none transition-colors hover:bg-primary-100 ${pathname === link.href ? 'bg-primary-200 text-primary-900' : ''}`}
              href={link.href}
            >
              <span className="size-6">{link.icon}</span>
              <span className="hidden text-sm hover:block">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
