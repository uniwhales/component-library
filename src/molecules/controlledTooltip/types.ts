import { ReactNode } from 'react';

export interface ControlledTooltipProps {
  target: ReactNode;
  content: ReactNode;
  position?: 'bottom' | 'left' | 'right' | 'top';
  arrowSize?: number;
  withArrow?: boolean;
}
