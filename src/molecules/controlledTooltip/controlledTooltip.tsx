import { Popover } from '@mantine/core';
import React from 'react';
import { ControlledTooltipProps } from './types';
import { localTheme } from '../../theme';

export const ControlledTooltipComponent = ({
  target, content, position = 'top', arrowSize = 12, withArrow = true,
  opened, zIndex, disabled, withinPortal = true, padding,
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
      withinPortal={withinPortal}
      offset={8}
      styles={{
        arrow: {
          backgroundColor: theme.colors.BG_SHADE_PLUS_4,
          borderColor: theme.colors.SHADE_PLUS_1,
          borderWidth: 1,
        },
        dropdown: {
          backgroundColor: theme.colors.BG_SHADE_PLUS_4,
          color: theme.colors.SHADE_MINUS_3,
          borderColor: theme.colors.SHADE_PLUS_1,
          borderRadius: 9,
          borderWidth: 1,
          padding: padding ?? 23,
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
