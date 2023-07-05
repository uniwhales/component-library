import { styled } from 'styled-components';

export const StyledSubscript = styled.sub<{ color?:string, size:number }>`
  color: ${({ color, theme }) => (color || theme.textShades.SHADE_MINUS_3)};
  font-size: ${({ size }) => `${size}px`};
  padding: 0px 2px;
`;
