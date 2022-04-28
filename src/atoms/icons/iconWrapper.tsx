import React from 'react';
import { Styled } from '../../theme';
import { Aurora, Star } from '.';

const iconsArray = {
  star: <Star />,
  ethereum: <Star />,
  bsc: <Star />,
  polygon: <Star />,
  avalanche: <Star />,
  fantom: <Star />,
  arbitrum: <Star />,
  boba: <Star />,
  metis: <Star />,
  aurora: <Aurora />,
  optimism: <Star />,
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
  icon?: 'star' | 'ethereum' | 'bsc' | 'polygon' | 'avalanche' | 'fantom' | 'arbitrum' | 'boba' | 'metis' | 'aurora' | 'optimism';
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
}) => (
  <IconComponent onClick={onClick} height={height} width={width} fill={fill} stroke={stroke}>
    {icon && iconsArray[icon]}
  </IconComponent>
);
