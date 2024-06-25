'use client';

import { useState, useEffect } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Overlay from '../Overlay';

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      <Navigation isNavOpen={isNavOpen} />
      <div className="md:hidden">
        <Overlay open={isNavOpen} onClose={() => setIsNavOpen(false)} />
      </div>
    </>
  );
}
