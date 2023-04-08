import { ReactNode } from 'react';

export interface HoverCardProps {
  target: ReactNode;
  content: ReactNode;
  position?: 'bottom' | 'left' | 'right' | 'top';
  arrowSize?: number;
  initiallyOpened?: boolean;
}
