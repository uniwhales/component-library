export interface IconWrapperProps {
  icon?: JSX.Element;
  onClick?: () => void;
  height?: string;
  width?: string;
  fill?: string;
  stroke?: string;
  cursor?: string;
  name?: string;
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
