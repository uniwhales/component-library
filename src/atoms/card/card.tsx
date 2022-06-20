import { Styled } from '../../theme';

export const Card = Styled.div`
  padding: 32px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
`;
