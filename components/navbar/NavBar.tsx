'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Heading from './Heading';
import Navigation from './Navigation';
import Overlay from '../Overlay';

export default function NavBar() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  return (
    <>
      <Heading onIconClick={() => setIsNavOpen(!isNavOpen)} />
      <Navigation isNavOpen={isNavOpen} />
      <div className="md:hidden">
        <Overlay open={isNavOpen} onClose={() => setIsNavOpen(false)} />
      </div>
    </>
  );
}
