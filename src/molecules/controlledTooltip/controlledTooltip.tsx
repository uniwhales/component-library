import { Popover } from '@mantine/core';
import React from 'react';
import { ControlledTooltipProps } from './types';
import { localTheme } from '../../theme';

export const ControlledTooltipComponent = ({
  target, content, position = 'top', arrowSize = 5, withArrow = true,
  opened, zIndex,
}: ControlledTooltipProps) => {
  const theme = localTheme();
  return (
    <Popover
      zIndex={zIndex}
      opened={opened}
      position={position}
      arrowSize={arrowSize}
      withArrow={withArrow}
      styles={{
        arrow: { backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4 },
        dropdown: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          color: theme.textShades.SHADE_MINUS_2,
        },

      }}
    >
      <Popover.Target>
        {target}
      </Popover.Target>
      <Popover.Dropdown>
        {content}
      </Popover.Dropdown>
    </Popover>
  );
};
