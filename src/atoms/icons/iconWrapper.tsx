import React from 'react';
import { Styled } from '../../theme';
import { Text } from '../texts/text';
import { IconWrapperProps } from './types';

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
    cursor:  ${(props) => (props.cursor ? props.cursor : 'auto')}
}
`;

export const IconWrapper: React.FC<IconWrapperProps> = ({
  onClick,
  height,
  width,
  fill,
  icon,
  stroke,
  cursor,
  name,
}) => (
  <>
    <IconComponent
      cursor={cursor}
      onClick={onClick}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      name={name}
    >
      {icon && icon}

    </IconComponent>
    {name && <Text size="S-Regular">{name}</Text>}
  </>

);
