import React from 'react';
import { StarIcon } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { IconContainer, LargeIcon, SmallIcon } from './overlappedIcon.styles';
import { OverlappedIconProps } from './types';

export const OverlappedIcon = ({
  smallIcon = <StarIcon />,
  smallSize = '14px',
  largeIcon = <StarIcon />,
  largeSize = '28px',
}: OverlappedIconProps) => (
  <IconContainer>
    <SmallIcon>
      <IconWrapper height={smallSize} width={smallSize} icon={smallIcon} />
    </SmallIcon>
    <LargeIcon>
      <IconWrapper height={largeSize} width={largeSize} icon={largeIcon} />
    </LargeIcon>
  </IconContainer>
);
