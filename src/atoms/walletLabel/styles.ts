import { styled } from 'styled-components';

export const Container = styled.div<{ breakWord:boolean, width?:string }>`
  word-break: ${({ breakWord }) => breakWord && 'break-word'};
  width ${({ width }) => width && width};
`;
