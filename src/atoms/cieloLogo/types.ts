import { MouseEventHandler } from 'react';

export type LogoProps = {
  night: boolean;
  variant?: 'default' | 'noText' | 'square'
  onClick?: MouseEventHandler<HTMLDivElement>;
};
