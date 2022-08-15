import { css } from 'styled-components';
import { DeviceWidth } from '../../hooks/useBreakpoint';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';

const FlexBase = Styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarContainer = Styled(FlexBase)<{ isMenuOpen?: boolean }>`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  padding: 16px 24px;
  z-index: 9999997;
  gap: 24px;
  max-height: 42px;

  ${tablet(css<{ isMenuOpen?: boolean }>`
    max-height: ${({ isMenuOpen }) => (isMenuOpen ? '160px' : '42px')};
    transition: max-height 0.15s ease-in;
    border-radius: ${({ isMenuOpen }) => (isMenuOpen ? '0px 0px 12px 12px' : 'none')};
    z-index: 9999998;
  `)}
`;

export const NavbarMainContent = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 42px;
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
  /* On mobile we do not have hover effects   */
  @media (min-width: ${DeviceWidth.tablet}) {
    :hover {
      height: 38px;
      width: 38px;
      border: 2px solid #F8F9FF;
      background: ${({ theme }) => theme.gradients.primary.BLURPLE_HIGHLIGHTED};
    }
  }
  
  ${tablet(css`
    :active {
      height: 38px;
      width: 38px;
      border: 2px solid #F8F9FF;
      background: ${({ theme }) => theme.gradients.primary.BLURPLE_HIGHLIGHTED};
    }
  `)};
`;

export const NavbarDesktopMenu = Styled.div`
  ${tablet(css`
    display: none;
  `)}


`;
