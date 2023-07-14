import { styled } from 'styled-components';

export const FooterComponent = styled.div<{ isMobile:boolean }>`
  display: flex;
  padding: ${({ isMobile }) => (isMobile ? '2px 4px' : '24px')};
  background: ${(props) => props.theme.colors.SHADE_PLUS_3};
  align-items: center;
  gap: 8px;
`;
