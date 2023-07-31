import { Styled } from '../../theme';

export const StyledSubscript = Styled.sub<{ color?:string, size:number, isMobile?:boolean }>`
  color: ${({ color, theme, isMobile }) => (isMobile ? theme.colors.primary.MAIN_BLUE : color || theme.textShades.SHADE_MINUS_3)};
  font-size: ${({ size }) => `${size}px`};
  padding: 0px 2px;
  text-decoration: ${({ isMobile }) => (isMobile ? 'underline' : 'none')};
  cursor: ${({ isMobile }) => (isMobile ? 'pointer' : 'default')};
`;

export const SubscriptWrapper = Styled.div``;
