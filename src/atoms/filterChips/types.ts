import { CSSProperties, MouseEvent } from 'react';

export type FilterChipProps = {
  variant: 'primary' | 'secondary' | 'onboarding'
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
  disabled?: boolean;
  icon?: JSX.Element;
  $isOn?: boolean;
  onClick: (id: string, e: MouseEvent<HTMLElement>) => void;
  $iconSize?: string;
  id: string;
} & Pick<CSSProperties, 'padding' | 'width' | 'height'>;
