import { Styled } from '../../theme';

export const FooterComponent = Styled.div`
  display: flex;
  padding: 24px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  align-items: center;
  gap: 8px;
`;
