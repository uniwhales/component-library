import { ReactChild } from 'react';
import { CSSProperties } from 'styled-components';

export type ChipProps = {
  children: ReactChild;
  secondaryTypeBgColor?: 'orange' | 'green' | 'red' | 'yellow',
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'editable'
  | 'tertiaryLined'
  | 'subtle'
} & Pick<CSSProperties, 'width' | 'cursor'>;
