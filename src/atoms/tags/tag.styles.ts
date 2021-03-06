import { TagProps } from './types';
import { Styled } from '../../theme';

export const CustomTag = Styled.div<Pick<TagProps, 'isOn'> & { background: string, border: string }>`
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
  width: fit-content;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  transition: all .3s;
`;

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
`;
