import { ReactElement } from 'react';
import { CheckboxProps } from '../inputs/checkbox';

export type IdenticonProps = {
  size: 'big' | 'small' | 'tiny';
  id: string;
  hasInteraction: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  onMouseEnter?: () => void;
  isLink?: boolean;
};

export type SelectableIdenticonProps = {
  checkbox: Omit<CheckboxProps, 'rounded' | 'size'>
  text?: ReactElement
  showCheckbox?: boolean
  identicon: IdenticonProps
};
