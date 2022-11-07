import React from 'react';
import { Styled } from '../../theme';
import { Text } from '../texts/text';
import { IconWrapperProps } from './types';

const IconComponent = Styled.div<IconWrapperProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  transition: width 0.3s;
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    fill: ${(props) => (props.gradient ? `url(#${props.gradient})` : props.fill || props.theme.contrastColor.HIGH_CONTRAST)};
    stroke: ${(props) => props.stroke};
    cursor:  ${(props) => (props.cursor ? props.cursor : 'auto')};
  }
`;

const AnchorIconComponent = Styled.div<IconWrapperProps>`
  height: ${(props) => `calc(${props.height} + 2px)`};
  width: ${(props) => `calc(${props.width} + 2px)`};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s;
  border-radius: 100px;

  :hover {
    background: linear-gradient(0deg, #1DD1A1 0%, #CEFF41 100%);
  }
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    fill: ${(props) => (props.gradient ? `url(#${props.gradient})` : props.fill || props.theme.contrastColor.HIGH_CONTRAST)};
    stroke: ${(props) => props.stroke};
    cursor: pointer;
  };

`;

const Border = Styled.div<Pick<IconWrapperProps, 'href' | 'height' | 'width'>>`
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_1};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 100px;
`;

const Outer = Styled.a<Pick<IconWrapperProps, 'disabled'>>`
  ${({ disabled }) => disabled && 'pointer-events: none'};
  ${({ disabled }) => disabled && 'cursor: default'};
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
  gradient,
  onMouseEnter,
  onMouseLeave,
  href,
  disabled,
}) => (href ? (
  <Outer disabled={disabled} target="_blank" href={href}>
    <AnchorIconComponent
      href={href}
      cursor={cursor}
      onClick={(e) => {
        if (!disabled && onClick) onClick(e);
      }}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      name={name}
      gradient={gradient}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      <Border href={href} height={height} width={width}>
        {icon && icon}
      </Border>
    </AnchorIconComponent>
    {name && <Text size="S-Regular">{name}</Text>}
  </Outer>
) : (
  <>
    <IconComponent
      onClick={(e) => {
        if (!disabled && onClick) onClick(e);
      }}
      cursor={cursor}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      name={name}
      gradient={gradient}
      disabled={disabled}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      {icon && icon}
    </IconComponent>
    {name && <Text size="S-Regular">{name}</Text>}
  </>
));
