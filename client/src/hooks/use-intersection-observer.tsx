import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  targetRef: RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
}

export function useIntersectionObserver({
  targetRef,
  options = { threshold: 0.1 }
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, options]);

  return isIntersecting;
}
