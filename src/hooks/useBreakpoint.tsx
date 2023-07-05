import { throttle } from 'lodash-es';
import { useState, useEffect } from 'react';
import { isWindowAvailable } from '../utils/isWindowAvailable';

export enum Breakpoints {
  Phone,
  Tablet,
  SmallDesktop,
  Desktop,
  BigDesktop,
}
// Using 1281 instead of 1280 so that we can target smaller
// screens easily with <= Breakpoints.SmallDesktop
const getDeviceConfig = (width: number, version: number = 1) => {
  if (version === 1) {
    if (width < 656) return Breakpoints.Phone;
    if (width >= 656 && width < 1024) return Breakpoints.Tablet;
    if (width >= 1024 && width < 1281) return Breakpoints.SmallDesktop;
    if (width >= 1281 && width < 1440) return Breakpoints.Desktop;

    return Breakpoints.BigDesktop;
  }

  // TODO: Marcin
  if (width < 1130) return Breakpoints.Phone;
  return Breakpoints.SmallDesktop;
};

const useBreakpoint = (version?: number): ReturnType<typeof getDeviceConfig> => {
  const [brkPnt, setBrkPnt] = useState<
  ReturnType<typeof getDeviceConfig>
  >(() => getDeviceConfig(window.innerWidth, version));

  useEffect(() => {
    if (!isWindowAvailable()) return () => {};
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getDeviceConfig(window.innerWidth, version));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, [isWindowAvailable()]);

  return brkPnt;
};

export default useBreakpoint;
