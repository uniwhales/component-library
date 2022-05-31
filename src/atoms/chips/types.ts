import { ReactChild } from 'react';

export interface ChipProps {
  children: ReactChild;
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'editable'
}
