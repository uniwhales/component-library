import { MouseEventHandler } from 'react';

export type IconWrapperProps = {
  icon?: JSX.Element;
  onClick?: MouseEventHandler<HTMLDivElement>;
  height?: string;
  width?: string;
  fill?: string;
  stroke?: string;
  cursor?: string;
  name?: string;
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  href?: string;
  disabled?: boolean;
  pointerEvents?: boolean;
};
