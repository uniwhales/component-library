import { ReactChild } from 'react';
import { CSSProperties } from 'styled-components';

export type ChipProps = {
  children: ReactChild;
  secondaryTypeBgColor?: 'orange' | 'green' | 'red',
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'editable'
} & Pick<CSSProperties, 'width'>;
