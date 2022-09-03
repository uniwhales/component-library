import { MouseEventHandler } from 'react';

export type LogoProps = {
  night: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  noText?: boolean;
};
