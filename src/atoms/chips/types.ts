import { ReactChild } from 'react';

export interface ChipProps {
  children: ReactChild;
  secondaryTypeBgColor?: 'orange' | 'green' | 'red',
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'editable'
}
