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
  bgColor,
  noIcon,
}: OverlappedIconProps) => (
  (
    <IconContainer>
      <SmallIcon $smallSize={smallSize} $bgColor={bgColor}>
        {!noIcon && <IconWrapper icon={smallIcon} />}
      </SmallIcon>
      <LargeIcon $largeSize={largeSize} $bgColor={bgColor}>
        {!noIcon && <IconWrapper icon={largeIcon} />}
      </LargeIcon>
    </IconContainer>
  )
);
