import { CSSProperties } from 'styled-components';
import { TagProps } from './types';
import { Styled } from '../../theme';

export type CustomTagProps = Pick<TagProps, 'isOn'> & Pick<CSSProperties, 'width' | 'border' | 'background'>;

export const CustomTag = Styled.div<CustomTagProps>`
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
  width: ${({ width }) => width ?? 'fit-content'};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  transition: all .3s;
  text-align: center;
`;

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
`;
