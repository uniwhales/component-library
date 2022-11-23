import { IconWrapperProps } from '../icons/types';

export type IdenticonProps = {
  size: 'big' | 'small';
  id: string;
  hasInteraction: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
};

export type MarkedIdenticonProps = {
  markIcon: Omit<IconWrapperProps, 'height' | 'width'>
  preload?: () => void;
  identicon: Omit<IdenticonProps, 'size'>
} & Pick<IdenticonProps, 'size'>;
