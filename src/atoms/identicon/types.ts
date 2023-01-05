import { ReactElement } from 'react';
import { IconWrapperProps } from '../icons/types';
import { CheckboxProps } from '../inputs/checkbox';

export type IdenticonProps = {
  size: 'big' | 'small';
  id: string;
  hasInteraction: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  onMouseEnter?: () => void;
  isLink?: boolean;
  gradientBorder?: boolean;
};

export type MarkedIdenticonProps = {
  markIcon?: Omit<IconWrapperProps, 'height' | 'width'>
  onMouseEnter?: () => void;
  identicon: Omit<IdenticonProps, 'size'>
} & Pick<IdenticonProps, 'size'>;

export type SelectableMarkedIdenticonProps = {
  checkbox: Omit<CheckboxProps, 'rounded' | 'size'>
  markedIdenticon: MarkedIdenticonProps
  text?: ReactElement
  showCheckbox?: boolean
};
