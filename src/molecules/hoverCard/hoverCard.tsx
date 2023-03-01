import { HoverCard } from '@mantine/core';
import React from 'react';
import { Styled } from '../../theme';
import { HoverCardProps } from './types';

const CieloHoverCardDropdown = Styled(HoverCard.Dropdown)`
  background-color: ${({ theme }) => theme.containerAndCardShades.BG_SHADE_PLUS_4};
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  border: 2px solid ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  border-radius: 9px;
  padding: 9px;
`;

export const HoverCardComponent = ({
  position = 'bottom', arrowSize = 10, target, content,
}: HoverCardProps) => (
  <HoverCard
    radius={9}
    position={position}
    withArrow
    closeDelay={50}
    arrowSize={arrowSize}
    exitTransitionDuration={0}
    openDelay={50}
    transitionDuration={0}
    withinPortal
  >
    <HoverCard.Target>
      {target}
    </HoverCard.Target>
    <CieloHoverCardDropdown>
      {content}
    </CieloHoverCardDropdown>
  </HoverCard>
);
