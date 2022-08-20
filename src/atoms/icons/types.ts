import { MouseEventHandler } from 'react';

export interface IconWrapperProps {
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
}
