import { ReactChild } from 'react';

export interface TagProps {
  children: ReactChild
  isOn: boolean;
  tabIndex: number;
  onClick: () => void;
}
