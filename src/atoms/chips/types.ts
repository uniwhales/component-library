import { MouseEvent, ReactChild } from 'react';
import { CSSProperties } from 'styled-components';

export type ChipProps = {
  children: ReactChild;
  secondaryTypeBgColor?: 'orange' | 'green' | 'red',
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'editable'
} & Pick<CSSProperties, 'width'>;


export enum FilterChipVariant {
  Basic = 'Basic',
  Primary = 'Primary',
  Secondary = 'Secondary'
}
export type FilterChipProps = {
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
  icon?: JSX.Element;
  isOn: boolean;
  onClick: (id: number, e: MouseEvent<HTMLElement>) => void;
  id: number;
  variation: FilterChipVariant 
} & Pick<CSSProperties, 'width'>;