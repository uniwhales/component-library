import React from 'react';
import { Styled } from '../../theme';
import { Star } from '.';

const iconsArray = {
  star: <Star />,
};
const IconComponent = Styled.div<Props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
    cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
}
`;

export interface Props {
  icon?: 'star'
  onClick?: () => void;
  height?: string;
  width?: string;
  fill?: string;
  stroke?: string;
}

export const IconWrapper: React.FC<Props> = ({
  onClick,
  height,
  width,
  fill,
  icon,
  stroke,
}) => {
  return (
    <IconComponent onClick={onClick} height={height} width={width} fill={fill} stroke={stroke}>
      {icon && iconsArray[icon]}
    </IconComponent>
  );
};
