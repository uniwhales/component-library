import React from 'react';
import { styled } from 'styled-components';
import { IconWrapperProps } from './types';

const IconComponent = styled.div<IconWrapperProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s;
  pointer-events: ${({ $pointerEvents }) => $pointerEvents};
  svg {
    fill: ${({ fill, theme }) => (fill || theme.colors.SHADE_MINUS_1)};
    stroke: ${({ stroke }) => stroke};
    cursor:  ${({ cursor, $hasHover }) => ($hasHover ? 'pointer' : cursor || 'auto')};
  }
  &:hover {
    svg {
      fill: ${({
    fill, theme, $hasHover, $hoverColor,
  }) => (($hasHover && !fill) && ($hoverColor ?? theme.colors.SHADE_MINUS_3))};
    }
  }
`;

const AnchorIconComponent = styled.div<IconWrapperProps>`
  height: ${(props) => `calc(${props.height} + 2px)`};
  width: ${(props) => `calc(${props.width} + 2px)`};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s;
  border-radius: 100px;

  &:hover {
    background: ${({ theme }) => theme.colors.YELLOW};
  }
  svg {
    fill: ${(props) => (props.fill || props.theme.contrastColor.HIGH_CONTRAST)};
    stroke: ${(props) => props.stroke};
    cursor: pointer;
  };

`;

const Border = styled.div<Pick<IconWrapperProps, 'href' | 'height' | 'width'>>`
  background-color: ${({ theme }) => theme.colors.SHADE_PLUS_1};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 100px;
`;

const Outer = styled.a<Pick<IconWrapperProps, 'disabled'>>`
  ${({ disabled }) => disabled && 'pointer-events: none'};
  ${({ disabled }) => disabled && 'cursor: default'};
`;

export const IconWrapper: React.FC<IconWrapperProps> = ({
  onClick,
  height = '24px',
  width = '24px',
  fill,
  icon,
  stroke,
  cursor,
  name,
  onMouseEnter,
  onMouseLeave,
  href,
  disabled,
  $pointerEvents,
  $hasHover = false,
  $hoverColor,
}) => (href ? (
  <Outer disabled={disabled} target="_blank" href={href}>
    <AnchorIconComponent
      href={href}
      cursor={cursor}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!disabled && onClick) onClick(e);
      }}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      name={name}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      <Border href={href} height={height} width={width}>
        {icon && icon}
      </Border>
    </AnchorIconComponent>
  </Outer>
) : (
  <IconComponent
    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!disabled && onClick) onClick(e);
    }}
    cursor={cursor}
    height={height}
    width={width}
    fill={fill}
    stroke={stroke}
    name={name}
    disabled={disabled}
    onMouseEnter={() => onMouseEnter && onMouseEnter()}
    onMouseLeave={() => onMouseLeave && onMouseLeave()}
    $pointerEvents={$pointerEvents}
    $hasHover={$hasHover}
    $hoverColor={$hoverColor}
  >
    {icon && icon}
  </IconComponent>
));
