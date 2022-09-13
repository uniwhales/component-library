import { HoverCard } from '@mantine/core';
import React from 'react';
import { Styled } from '../../theme';
import { HoverCardProps } from './types';

const CieloHoverCardDropdown = Styled(HoverCard.Dropdown)`
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  border: none;
`;

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
    <CieloHoverCardDropdown>
      {content}
    </CieloHoverCardDropdown>
  </HoverCard>
);
