import { Styled } from '../../theme';

export const Container = Styled.div<{ breakWord:boolean, width?:string }>`
  word-break: ${({ breakWord }) => breakWord && 'break-word'};
  width ${({ width }) => width && width};
`;
