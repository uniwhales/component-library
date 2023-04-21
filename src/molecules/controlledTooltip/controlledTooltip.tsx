import { Popover } from '@mantine/core';
import React from 'react';
import { ControlledTooltipProps } from './types';
import { localTheme } from '../../theme';

export const ControlledTooltipComponent = ({
  target, content, position = 'top', arrowSize = 5, withArrow = true,
  opened, zIndex, disabled,
}: ControlledTooltipProps) => {
  const theme = localTheme();

  return (
    <Popover
      zIndex={zIndex}
      opened={opened}
      disabled={disabled}
      position={position}
      arrowSize={arrowSize}
      withArrow={withArrow}
      withinPortal
      offset={8}
      styles={{
        arrow: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          borderColor: theme.containerAndCardShades.SHADE_PLUS_1,
          borderWidth: 1,
        },
        dropdown: {
          backgroundColor: theme.containerAndCardShades.BG_SHADE_PLUS_4,
          color: theme.textShades.SHADE_MINUS_3,
          borderColor: theme.containerAndCardShades.SHADE_PLUS_1,
          borderRadius: 9,
          borderWidth: 1,
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
