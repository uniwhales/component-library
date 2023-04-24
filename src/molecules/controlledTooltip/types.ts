import { PopoverProps } from '@mantine/core';
import { ReactNode } from 'react';

export type ControlledTooltipProps = {
  target: ReactNode;
  content: ReactNode;
} & Pick<PopoverProps, 'withinPortal' | 'disabled' | 'zIndex' | 'withArrow' | 'arrowSize' | 'position' | 'opened'>;
