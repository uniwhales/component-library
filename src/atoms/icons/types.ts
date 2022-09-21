import { MouseEventHandler } from 'react';
import { SvgGradients } from '../../theme';

export interface IconWrapperProps {
  icon?: JSX.Element;
  gradient?: SvgGradients
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
