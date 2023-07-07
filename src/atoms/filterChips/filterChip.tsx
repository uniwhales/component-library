import React, { MouseEvent } from 'react';
import { FloatingClose } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import {
  FilterChipContent,
  FilterChipOnboarding,
  FilterChipSecondary,
  FilterChipWrapper,
  FloatingCloseWrapper,
} from './filterChip.styles';
import { FilterChipProps } from './types';

export const FilterChip = ({
  children, icon, $isOn = false, onClick, id, width,
  disabled, variant, $iconSize, height, padding,
}: FilterChipProps) => {
  switch (variant) {
    case 'secondary':
      return (
        <FilterChipSecondary
          padding={padding}
          height={height}
          width={width}
          disabled={disabled}
        >
          {icon && (
            <IconWrapper
              width={$iconSize}
              height={$iconSize}
              icon={icon}
              cursor={disabled ? 'not-allowed' : 'pointer'}
            />
          )}
          {children}
          <FloatingCloseWrapper
            disabled={disabled}
            onClick={(e: MouseEvent<HTMLElement>) => !disabled && onClick(id, e)}
          >
            <FloatingClose />
          </FloatingCloseWrapper>
        </FilterChipSecondary>
      );
    case 'onboarding':
      return (
        <FilterChipOnboarding
          disabled={disabled}
          $isOn={$isOn}
          padding={padding}
          onClick={(e: MouseEvent<HTMLElement>) => !disabled && onClick(id, e)}
        >
          {children}
        </FilterChipOnboarding>
      );
    default:
      return (
        (
          <FilterChipWrapper
            disabled={disabled}
            $isOn={$isOn}
            onClick={(e: MouseEvent<HTMLElement>) => !disabled && onClick(id, e)}
            width={width}
            padding={padding}
          >
            <FilterChipContent disabled={!!disabled}>
              {icon && <IconWrapper width={$iconSize ?? '16px'} height={$iconSize ?? '16px'} icon={icon} cursor={disabled ? 'not-allowed' : 'pointer'} />}
              {children}
            </FilterChipContent>
          </FilterChipWrapper>
        )
      );
  }
};
