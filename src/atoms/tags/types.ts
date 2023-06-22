import { CSSProperties, MouseEvent, ReactChild } from 'react';
import { TextProps } from '../texts/types';

export type TagProps = {
  children: ReactChild
  isOn: boolean;
  tabIndex: number;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  fontSize?: TextProps['size'];
} & Pick<CSSProperties, 'width'>;
