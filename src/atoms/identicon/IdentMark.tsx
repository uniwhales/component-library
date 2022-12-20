import React from 'react';
import { IconWrapper } from '../icons/iconWrapper';
import { IconWrapperProps } from '../icons/types';
import { Mark } from './Identicon.styles';
import { MarkedIdenticonProps } from './types';

export type IdentMarkProps = {
  icon: IconWrapperProps
} & Pick<MarkedIdenticonProps, 'size'>;

export const IdentMark = ({ size, icon }: IdentMarkProps) => (
  <Mark size={size}>
    <IconWrapper {...icon} />
  </Mark>
);
