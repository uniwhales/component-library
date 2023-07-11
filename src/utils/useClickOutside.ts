import { useEffect } from 'react';
import { isWindowAvailable } from './isWindowAvailable';

export const useClickOutside = (ref: React.MutableRefObject<any>, callback: () => void) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    if (!isWindowAvailable()) return () => {};
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
