import { useEffect } from 'react';

const useEnter = (callback: () => void) => {
  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === 'Enter') { callback(); }
    };
    window.addEventListener('keydown', handleEnter);

    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  });
};

export default useEnter;
