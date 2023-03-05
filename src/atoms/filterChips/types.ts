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
  onClick: (id: string, e: MouseEvent<HTMLElement>) => void;
  iconSize?: string;
  id: string;
} & Pick<CSSProperties, 'width' | 'height'>;
