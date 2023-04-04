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
  children, icon, isOn = false, onClick, id, width,
  disabled, variant, iconSize, height,
}: FilterChipProps) => {
  switch (variant) {
    case 'secondary':
      return (
        <FilterChipSecondary
          height={height}
          width={width}
          disabled={disabled}
        >
          {icon && (
            <IconWrapper
              width={iconSize}
              height={iconSize}
              icon={icon}
            />
          )}
          {children}
          <FloatingCloseWrapper
            disabled={disabled}
            onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)}
          >
            <FloatingClose />
          </FloatingCloseWrapper>
        </FilterChipSecondary>
      );
    case 'onboarding':
      return (
        <FilterChipOnboarding
          disabled={disabled}
          isOn={isOn}
          onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)}
        >
          {children}
        </FilterChipOnboarding>
      );
    default:
      return (
        (
          <FilterChipWrapper
            disabled={disabled}
            isOn={isOn}
            onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)}
            width={width}
          >
            <FilterChipContent disabled={!!disabled}>
              {icon && <IconWrapper width={iconSize} height={iconSize} icon={icon} cursor={disabled ? 'auto' : 'pointer'} />}
              {children}
            </FilterChipContent>
          </FilterChipWrapper>
        )
      );
  }
};
