import { Popover } from '@mantine/core';
import React from 'react';
import { localTheme } from '../../theme';
import { PopoverProps } from './types';

export const PopoverComponent = ({
  position = 'bottom', arrowSize = 5, opened, target, content,
}: PopoverProps) => {
  const theme = localTheme();
  return (
    <Popover
      withArrow
      position={position}
      arrowSize={arrowSize}
      opened={opened}
      radius={8}
      shadow="md"
      closeOnClickOutside
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
