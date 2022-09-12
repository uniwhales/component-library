import { ReactNode } from 'react';

export interface PopoverProps {
  target: ReactNode;
  content: ReactNode;
  styles?: { arrow?: {}, dropdown?: {} }
  position?: 'bottom' | 'left' | 'right' | 'top';
  arrowSize?: number;
  opened?: boolean;
}
