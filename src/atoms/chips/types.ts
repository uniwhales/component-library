import { MouseEvent, ReactChild } from 'react';
import { CSSProperties } from 'styled-components';

export type ChipProps = {
  children: ReactChild;
  secondaryTypeBgColor?: 'orange' | 'green' | 'red',
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'editable'
} & Pick<CSSProperties, 'width' | 'cursor'>;

export enum FilterChipVariation {
  Basic = 'Basic',
  Primary = 'Primary',
  Secondary = 'Secondary',
}
export type FilterChipProps = {
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
  disabled?: boolean;
  icon?: JSX.Element;
  isOn: boolean;
  onClick: (id: number, e: MouseEvent<HTMLElement>) => void;
  id: number;
  variant?: FilterChipVariation
} & Pick<CSSProperties, 'width'>;
