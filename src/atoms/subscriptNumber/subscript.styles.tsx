import { Styled } from '../../theme';

export const StyledSubscript = Styled.sub<{ color?:string, size:number }>`
  color: ${({ color, theme }) => (color || theme.textShades.SHADE_MINUS_3)};
  font-size: ${({ size }) => `${size}px`};
  padding: 0px 2px;
`;