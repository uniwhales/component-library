import React, { MouseEvent, useState } from 'react';
import { localTheme } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';
import {
  ColourFilterChipContent,
  ColourFilterChipWrapper, DisabledChip, FilterChipContent, FilterChipWrapper,
} from './filterChip.styles';
import { FilterChipProps, FilterChipVariation } from './types';

export const FilterChip = ({
  children, icon, isOn, onClick, id, width, variant = FilterChipVariation.Basic,
  disabled,
}: FilterChipProps) => {
  const { gradients, containerAndCardShades, textShades } = localTheme();
  const [hover, setHover] = useState(false);
  if (disabled) {
    return (
      <DisabledChip>
        {icon && (
        <IconWrapper
          fill={textShades.SHADE_MINUS_1}
          cursor="default"
          icon={icon}
        />
        )}
        {children}
      </DisabledChip>
    );
  }
  if (variant !== FilterChipVariation.Basic) {
    const gradient = hover || isOn
      ? undefined
      : variant === FilterChipVariation.Primary
        ? gradients.svg.TEAL
        : gradients.svg.CANARY;
    const fill = !hover && isOn ? containerAndCardShades.BG_SHADE_PLUS_4 : undefined;
    return (
      <ColourFilterChipWrapper
        disabled={disabled}
        variant={variant}
        isOn={isOn}
        onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)}
        width={width}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ColourFilterChipContent variant={variant} isOn={isOn}>
          {icon && (
          <IconWrapper
            fill={fill}
            gradient={gradient}
            cursor={disabled ? 'default' : 'pointer'}
            icon={icon}
          />
          )}
          {children}
        </ColourFilterChipContent>
      </ColourFilterChipWrapper>
    );
  }

  return (
    <FilterChipWrapper
      disabled={disabled}
      isOn={isOn}
      onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)}
      width={width}
    >
      <FilterChipContent>
        {icon && <IconWrapper cursor={disabled ? 'default' : 'pointer'} icon={icon} />}
        {children}
      </FilterChipContent>
    </FilterChipWrapper>
  );
};
