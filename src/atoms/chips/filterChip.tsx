import React, { MouseEvent } from 'react';
import { IconWrapper } from '../icons/iconWrapper';
import {
  FilterChipContent, FilterChipWrapper,
} from './filterChip.styles';
import { FilterChipProps } from './types';

export const FilterChip = ({
  children, icon, isOn, onClick, id, width,
  disabled,
}: FilterChipProps) => (
  <FilterChipWrapper
    disabled={disabled}
    isOn={isOn}
    onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)}
    width={width}
  >
    <FilterChipContent disabled={!!disabled}>
      {icon && <IconWrapper cursor={disabled ? 'default' : 'pointer'} icon={icon} />}
      {children}
    </FilterChipContent>
  </FilterChipWrapper>
);
