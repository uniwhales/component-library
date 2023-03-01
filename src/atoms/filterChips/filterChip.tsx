import React, { MouseEvent } from 'react';
import { FloatingClose } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import {
  FilterChipContent, FilterChipSecondary, FilterChipWrapper, FloatingCloseWrapper,
} from './filterChip.styles';
import { FilterChipProps } from './types';

export const FilterChip = ({
  children, icon, isOn = false, onClick, id, width,
  disabled, variant, iconSize,
}: FilterChipProps) => {
  switch (variant) {
    case 'secondary':
      return (
        <FilterChipSecondary
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
              {icon && <IconWrapper width={iconSize} height={iconSize} icon={icon} />}
              {children}
            </FilterChipContent>
          </FilterChipWrapper>
        )
      );
  }
};