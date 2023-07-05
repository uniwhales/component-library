import { ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
  label: ReactNode;
  position?: 'bottom' | 'left' | 'right' | 'top';
  opened?: boolean;
  allowPointerEvents?: boolean;
  zIndex?: number;
  multiline?: boolean;
  offset?: number;
}
