import { ReactNode } from 'react';

export type TooltipButtonProps = {
  content: ReactNode
  position?: 'bottom' | 'left' | 'right' | 'top';
  arrowSize?: number;
};
