import { Tooltip } from '@mantine/core';
import React from 'react';
import { localTheme } from '../../theme';
import { TooltipProps } from './types';

export const SimpleTooltip = ({
  label, children, position = 'top', opened, multiline = false,
  zIndex, offset = 4,
}: TooltipProps) => {
  const theme = localTheme();

  return (
    <Tooltip
      refProp="innerRef"
      radius={8}
      label={label}
      position={position}
      withArrow
      offset={offset}
      closeDelay={0}
      arrowSize={5}
      opened={opened}
      zIndex={zIndex}
      multiline={multiline}
      width={multiline ? 300 : undefined}
      styles={{
        arrow: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          border: `2px solid ${theme.containerAndCardShades.SHADE_PLUS_1}`,
          bottom: position === 'top' ? '-5px !important' : undefined,
          top: position === 'bottom' ? '-5px !important' : undefined,
          left: position === 'right' ? '-5px !important' : undefined,
          right: position === 'left' ? '-5px !important' : undefined,
        },
        tooltip: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          color: theme.textShades.SHADE_MINUS_3,
          border: `2px solid ${theme.containerAndCardShades.SHADE_PLUS_1}`,
          borderRadius: 9,
          padding: 9,
        },
      }}
    >
      {children}
    </Tooltip>
  );
};
