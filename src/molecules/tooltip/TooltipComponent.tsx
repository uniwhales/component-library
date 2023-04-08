import { Tooltip } from '@mantine/core';
import React from 'react';
import { localTheme } from '../../theme';
import { TooltipProps } from './types';

export const SimpleTooltip = ({
  label, children, position = 'top', arrowSize = 5, opened,
}: TooltipProps) => {
  const theme = localTheme();

  const arrowMargin = {
    top: '0px 0px -4px 0px',
    bottom: '-4px 0px 0px 0px',
    left: '0px -4px 0px 0px',
    right: '0px 0px 0px -4px',
  };
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
        arrow: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          border: `2px solid ${theme.textShades.SHADE_MINUS_2}`,
          padding: 2,
          margin: arrowMargin[position],
        },
        tooltip: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          color: theme.textShades.SHADE_MINUS_3,
          border: `2px solid ${theme.textShades.SHADE_MINUS_2}`,
          borderRadius: 9,
          padding: 9,
        },
      }}
    >
      {children}
    </Tooltip>
  );
};
