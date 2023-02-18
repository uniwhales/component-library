import { MouseEvent } from 'react';
import { CSSProperties } from 'styled-components';

export type FilterChipProps = {
  variant: 'primary' | 'secondary'
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
  disabled?: boolean;
  icon?: JSX.Element;
  isOn?: boolean;
  onClick: (id: number, e: MouseEvent<HTMLElement>) => void;
  iconSize?: string;
  id: number;
} & Pick<CSSProperties, 'width'>;
