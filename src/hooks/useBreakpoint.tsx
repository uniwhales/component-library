import { throttle } from 'lodash-es';
import { useState, useEffect } from 'react';

export enum Breakpoints {
  Phone,
  Tablet,
  SmallDesktop,
  Desktop,
  BigDesktop,
}

const getDeviceConfig = (width: number) => {
  if (width < 656) return Breakpoints.Phone;
  if (width >= 656 && width < 1024) return Breakpoints.Tablet;
  if (width >= 1024 && width < 1280) return Breakpoints.SmallDesktop;
  if (width >= 1280 && width < 1440) return Breakpoints.Desktop;

  return Breakpoints.BigDesktop;
};

const useBreakpoint = (): ReturnType<typeof getDeviceConfig> => {
  const [brkPnt, setBrkPnt] = useState<
  ReturnType<typeof getDeviceConfig>
  >(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};

export default useBreakpoint;
