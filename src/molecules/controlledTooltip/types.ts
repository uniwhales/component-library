import { PopoverProps } from '@mantine/core';
import { ReactNode } from 'react';

export type ControlledTooltipProps = {
  target: ReactNode;
  content: ReactNode;
  padding?: number;
} & Pick<PopoverProps, 'withinPortal' | 'disabled' | 'zIndex' | 'withArrow' | 'arrowSize' | 'position' | 'opened'>;
