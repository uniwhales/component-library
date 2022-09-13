import { HoverCard } from '@mantine/core';
import React from 'react';
import { HoverCardProps } from './types';

export const HoverCardComponent = ({
  position = 'bottom', arrowSize = 5, target, content,
}: HoverCardProps) => (
  <HoverCard
    radius={8}
    position={position}
    withArrow
    closeDelay={300}
    arrowSize={arrowSize}
  >
    <HoverCard.Target>
      {target}
    </HoverCard.Target>
    <HoverCard.Dropdown>
      {content}
    </HoverCard.Dropdown>
  </HoverCard>
);
