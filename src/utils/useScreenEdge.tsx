import {
  MutableRefObject,
  useLayoutEffect, useState,
} from 'react';

type UseScreenEdgeProps = {
  ref: MutableRefObject<HTMLDivElement | undefined | null>,
  rect: keyof Pick<DOMRect, 'bottom' | 'top'>,
  rootMargin?: number
};

export const useScreenEdge = ({ rect, ref, rootMargin = 0 }: UseScreenEdgeProps) => {
  const [isReached, setIsReached] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rects = ref.current?.getBoundingClientRect();
      setIsReached(rects[rect] <= (0 + rootMargin));
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isReached;
};
