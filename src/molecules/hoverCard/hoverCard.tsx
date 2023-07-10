import { HoverCard } from '@mantine/core';
import React from 'react';
import { styled } from 'styled-components';

import { HoverCardProps } from './types';

const CieloHoverCardDropdown = styled(HoverCard.Dropdown)`
  background-color: ${({ theme }) => theme.colors.BG_SHADE_PLUS_4};
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  border: 2px solid ${({ theme }) => theme.colors.SHADE_MINUS_1};
  border-radius: 9px;
  padding: 9px;
`;

export const HoverCardComponent = ({
  position = 'bottom', arrowSize = 10, target, content,
  initiallyOpened, zIndex,
}: HoverCardProps) => (
  <HoverCard
    radius={9}
    position={position}
    withArrow
    closeDelay={50}
    arrowSize={arrowSize}
    openDelay={50}
    initiallyOpened={initiallyOpened}
    zIndex={zIndex}
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
