'use client';

import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

export default function GoTop() {
  const router = usePathname();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const checkScrollPosition = () => {
    const scrollPosition = document.documentElement.scrollTop;
    setShowScrollToTop(scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (router !== '/calendar')
    return (
      <div
        className={clsx(
          'fixed bottom-2 right-0 z-20 m-4 flex size-12 cursor-pointer items-center justify-center rounded-full bg-blue-600 transition-all duration-300',
          showScrollToTop ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={scrollToTop}
      >
        <ChevronUpIcon className="size-7 text-white" />
      </div>
    );
}
