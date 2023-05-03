import { ReactNode } from 'react';
import { ZIndex } from '../../utils/constants';

export interface TooltipProps {
  children: ReactNode;
  label: ReactNode;
  position?: 'bottom' | 'left' | 'right' | 'top';
  arrowSize?: number;
  opened?: boolean;
  allowPointerEvents?: boolean;
  zIndex?: ZIndex;
}
