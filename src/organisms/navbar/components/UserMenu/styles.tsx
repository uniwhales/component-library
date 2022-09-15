import { css } from 'styled-components';
import { tablet } from '../../../../layouts/breakpoints';
import { Styled } from '../../../../theme';

export const NavbarUserMenu = Styled.div<{ isMenuOpen: boolean }>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  padding: 24px;
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  width: 160px;
  right: 16px;
  top: 62px;
  padding: 14px;
  border-radius: 12px;
  position: fixed;
  max-width: 160px;
  transition: all 800ms ease-in-out;
  z-index: ${({ theme }) => theme.zIndex.USER_MENU};

  ${tablet(css<{ isMenuOpen: boolean }>`
    padding: 8px;
    position: unset;
    background-color: transparent;
    border-radius: none;
    box-shadow: none;
    justify-content: flex-end;
    width: calc(100vw - 32px);
    max-width: unset;
  `)}
`;
