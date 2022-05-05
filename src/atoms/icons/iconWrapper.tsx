import React from 'react';
import { Styled } from '../../theme';
import {
  Aurora, Avalanche, Boba, Bsc, Eth, Fantom, Metis, Optimism, Star, Copy, Edit, Remove,
  AlertBotColor, CopyColor,
} from '.';

const iconsArray = {
  star: <Star />,
  copy: <Copy />,
  edit: <Edit />,
  remove: <Remove />,
  ethereum: <Eth />,
  bsc: <Bsc />,
  polygon: <Star />,
  avalanche: <Avalanche />,
  fantom: <Fantom />,
  arbitrum: <Star />,
  boba: <Boba />,
  metis: <Metis />,
  aurora: <Aurora />,
  optimism: <Optimism />,
  // FullColorStyle
  alertBotColor: <AlertBotColor />,
  copyColor: <CopyColor />,
};
const IconComponent = Styled.div<IconWrapperProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    fill: ${(props) => props.theme.contrastColor.HIGH_CONTRAST};
    stroke: ${(props) => props.stroke};
    cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
}
`;

export interface IconWrapperProps {
  icon?: 'star'
  | 'ethereum'
  | 'bsc'
  | 'polygon'
  | 'avalanche'
  | 'fantom'
  | 'arbitrum'
  | 'boba'
  | 'metis'
  | 'aurora'
  | 'optimism'
  | 'copy'
  | 'edit'
  | 'remove'
  | 'alertBotColor'
  | 'copyColor'
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
    {icon && iconsArray[icon]}
  </IconComponent>
);
