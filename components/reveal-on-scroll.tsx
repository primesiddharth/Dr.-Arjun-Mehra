'use client';

import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every element with the `reveal` class
 * once it scrolls into view. Observes all matching elements for the
 * lifetime of the page and disconnects on unmount.
 */
export function RevealOnScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal')
    );

    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
