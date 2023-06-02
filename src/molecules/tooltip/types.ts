import { ReactNode } from 'react';
import { ZIndex } from '../../utils/constants';

export interface TooltipProps {
  children: ReactNode;
  label: ReactNode;
  position?: 'bottom' | 'left' | 'right' | 'top';
  opened?: boolean;
  allowPointerEvents?: boolean;
  zIndex?: ZIndex;
  offset?: number;
}
