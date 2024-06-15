'use client';

import { useState, useEffect } from 'react';

import Header from '@/components/Header';
import SideNavigation from '@/components/SideNavigation';

export default function NavigationLayout() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <>
      <Header onIconClick={() => setIsNavOpen(!isNavOpen)} />
      {isNavOpen && <SideNavigation isNavOpen={isNavOpen} />}
      <div
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`fixed left-0 top-0 z-20 block min-h-screen w-full bg-black opacity-20 md:hidden ${isNavOpen ? '' : 'hidden'}`}
      />
    </>
  );
}
