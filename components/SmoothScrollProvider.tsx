import React, { useLayoutEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import type { LenisOptions } from 'lenis';
import 'lenis/dist/lenis.css';

const lenisOptions: LenisOptions = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 2,
  smoothWheel: true,
};

/** Scroll to top on route change using Lenis when available */
export const SmoothScrollToTop: React.FC<{ pathname: string; scrollY?: number }> = ({ pathname, scrollY = 0 }) => {
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(scrollY, { immediate: true });
    } else {
      window.scrollTo(0, scrollY);
    }
  }, [pathname, scrollY, lenis]);

  return null;
};

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};
