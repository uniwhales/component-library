import { styled } from 'styled-components';

export const FooterComponent = styled.div`
  display: flex;
  padding: 24px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  align-items: center;
  gap: 8px;
`;
