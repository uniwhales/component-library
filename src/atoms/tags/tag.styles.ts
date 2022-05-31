import { TagProps } from './types';
import { Styled } from '../../theme';

export const CustomTag = Styled.div<TagProps>`
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
  width: fit-content;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
`;
