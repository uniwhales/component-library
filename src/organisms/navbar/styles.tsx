import { Styled } from '../../theme';

const FlexBase = Styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarContainer = Styled(FlexBase)`
  height: 36px;
  
  justify-content: space-between;
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  padding: 16px 24px;
`;

export const NavbarLeftSide = Styled(FlexBase)`
  gap: 6px;
  cursor: pointer;
`;

export const NavbarRightSide = Styled(FlexBase)`
  gap: 16px;
`;

export const NavbarAvatar = Styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary.BLURPLE};
  height: 42px;
  width: 42px;
  display: flex;
  justify-content:center;
  align-items: center;
  cursor: pointer;
  :hover {
    height: 38px;
    width: 38px;
    border: 2px solid #F8F9FF;
    background: ${({ theme }) => theme.gradients.primary.BLURPLE_HIGHLIGHTED};
  }
`;