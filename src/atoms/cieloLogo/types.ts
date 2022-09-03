import { MouseEventHandler } from 'react';

export type LogoProps = {
  onClick?: MouseEventHandler<HTMLDivElement>
  night?: boolean
  noText?: boolean;
};
