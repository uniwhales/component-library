import React from 'react';
import { Styled } from '../../theme';
import { Text } from '../texts/text';
import { IconWrapperProps } from './types';

const IconComponent = Styled.div<IconWrapperProps>`
  height: ${(props) => `calc(${props.height} + 2px)`};
  width: ${(props) => `calc(${props.width} + 2px)`};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s;
  border-radius:  ${({ background }) => background && '100px'};
  :hover {
    background: linear-gradient(0deg, #1DD1A1 0%, #CEFF41 100%);
  }
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    fill: ${(props) => (props.gradient ? `url(#${props.gradient})` : props.fill || props.theme.contrastColor.HIGH_CONTRAST)};
    stroke: ${(props) => props.stroke};
    cursor:  ${(props) => (props.href ? 'pointer' : props.cursor ? props.cursor : 'auto')};
  }
`;

const Border = Styled.div<Pick<IconWrapperProps, 'background' | 'height' | 'width'>>`
  background-color: ${({ background }) => background};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius:  ${({ background }) => background && '100px'};
`;

const Outer = Styled.a``;

export const IconWrapper: React.FC<IconWrapperProps> = ({
  onClick,
  height,
  width,
  fill,
  icon,
  stroke,
  cursor,
  name,
  gradient,
  onMouseEnter,
  onMouseLeave,
  href,
  background,
}) => (
  <Outer href={href}>
    <IconComponent
      href={href}
      background={background}
      cursor={cursor}
      onClick={onClick}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      name={name}
      gradient={gradient}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      <Border background={background} height={height} width={width}>
        {icon && icon}
      </Border>
    </IconComponent>
    {name && <Text size="S-Regular">{name}</Text>}
  </Outer>
);
