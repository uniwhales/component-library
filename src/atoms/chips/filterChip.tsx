import React, { MouseEvent } from 'react';
import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';
import { ColourFilterChipContent, ColourFilterChipWrapper, FilterChipContent, FilterChipWrapper } from './filterChip.styles';
import { FilterChipProps, FilterChipVariant } from './types';




export const FilterChip = ({
  children, icon, isOn, onClick, id, width, variation
}: FilterChipProps) => {
  if (variation !== FilterChipVariant.Basic) {
    return <ColourFilterChipWrapper isOn={isOn} variation={variation} >
      <ColourFilterChipContent isOn={isOn} variation={variation} >
        {icon && <IconWrapper cursor="pointer" icon={icon} />}
        {children}   
      </ColourFilterChipContent>
    </ColourFilterChipWrapper>
  }

  return (
    <FilterChipWrapper isOn={isOn} onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)} width={width}>
      <FilterChipContent>
        {icon && <IconWrapper cursor="pointer" icon={icon} />}
        {children}
      </FilterChipContent>
    </FilterChipWrapper>
  )
};