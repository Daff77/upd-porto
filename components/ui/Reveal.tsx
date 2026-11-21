import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article';
  className?: string;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sharedProps = {
    ref: ref as React.RefObject<never>,
    className: `reveal ${isVisible ? 'is-visible' : ''} ${className}`,
    style: delay ? { transitionDelay: `${delay}ms` } : undefined,
  };

  if (Tag === 'section') return <section {...sharedProps}>{children}</section>;
  if (Tag === 'article') return <article {...sharedProps}>{children}</article>;
  return <div {...sharedProps}>{children}</div>;
};
