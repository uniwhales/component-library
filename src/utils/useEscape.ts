import { useEffect } from 'react';
import { isWindowAvailable } from './isWindowAvailable';

const useEscape = (callback: () => void) => {
  useEffect(() => {
    if (!isWindowAvailable()) return () => {};
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { callback(); }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isWindowAvailable()]);
};

export default useEscape;
