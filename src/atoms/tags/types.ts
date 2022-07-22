import { ReactChild } from 'react';
import { CSSProperties } from 'styled-components';

export type TagProps = {
  children: ReactChild
  isOn: boolean;
  tabIndex: number;
  onClick: () => void;
} & Pick<CSSProperties, 'width'>;
