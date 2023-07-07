import useBreakpoint, { Breakpoints } from './useBreakpoint';

export const useIsMobile = () => useBreakpoint(2) === Breakpoints.Phone;
