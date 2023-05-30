import { Styled } from '../../theme';

export const StyledSubscript = Styled.sub<{ color?:string, size:number }>`
  color: ${({ color, theme }) => (color || theme.textShades.SHADE_MINUS_3)};
  size: ${({ size }) => `${size}px`};
`;
