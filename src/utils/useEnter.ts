import { useEffect } from 'react';
import { isWindowAvailable } from './isWindowAvailable';

const useEnter = (callback: () => void) => {
  useEffect(() => {
    if (!isWindowAvailable()) return () => {};
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === 'Enter') { callback(); }
    };
    window.addEventListener('keydown', handleEnter);

    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  }, [isWindowAvailable()]);
};

export default useEnter;
