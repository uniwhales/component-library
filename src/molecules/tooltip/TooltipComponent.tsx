import { Tooltip } from '@mantine/core';
import React from 'react';
import { localTheme } from '../../theme';
import { TooltipProps } from './types';

export const SimpleTooltip = ({
  label, children, position = 'top', arrowSize = 5, opened,
}: TooltipProps) => {
  const theme = localTheme();
  return (
    <Tooltip
      radius={8}
      label={label}
      position={position}
      withArrow
      closeDelay={0}
      arrowSize={arrowSize}
      opened={opened}
      transitionDuration={0}
      styles={{
        arrow: { backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4 },
        tooltip: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          color: theme.textShades.SHADE_MINUS_2,
        },
      }}
    >
      {children}
    </Tooltip>
  );
};
