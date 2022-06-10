import { Styled } from '../../theme';

export const NavBar = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 8px 24px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};

`;

export const NavContainer = Styled.div`
  display: flex;
  align-items: center;
  p:first-child {
    margin-right: 24px;
  }
`;
