import { HoverCardProps as LibProps } from '@mantine/core';
import { ReactNode } from 'react';

export type HoverCardProps = {
  target: ReactNode;
  content: ReactNode;
} & Pick<LibProps, 'initiallyOpened' | 'arrowSize' | 'position' | 'zIndex'>;
