import React from 'react';
import { Styled } from '../../theme';

const IconComponent = Styled.div<IconWrapperProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    fill: ${(props) => props.fill || props.theme.contrastColor.HIGH_CONTRAST};
    stroke: ${(props) => props.stroke};
}
`;

export interface IconWrapperProps {
  icon?: JSX.Element;
  onClick?: () => void;
  height?: string;
  width?: string;
  fill?: string;
  stroke?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  onClick,
  height,
  width,
  fill,
  icon,
  stroke,
}) => (
  <IconComponent
    onClick={onClick}
    height={height}
    width={width}
    fill={fill}
    stroke={stroke}
  >
    {icon && icon}
  </IconComponent>
);
