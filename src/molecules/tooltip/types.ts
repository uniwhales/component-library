import { ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
  label: ReactNode;
  position?: 'bottom' | 'left' | 'right' | 'top';
  arrowSize?: number;
  opened?: boolean;
  allowPointerEvents?: boolean;
}
