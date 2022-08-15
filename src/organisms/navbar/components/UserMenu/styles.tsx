import { css } from 'styled-components';
import { tablet } from '../../../../layouts/breakpoints';
import { Styled } from '../../../../theme';

export const NavbarUserMenu = Styled.div<{ isMenuOpen: boolean }>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 8px;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  drop-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  width: 160px;
  right: 0;
  top: 84px;
  padding: 14px;
  border-radius: 12px;
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  transition: visibility 0s, opacity 0.4s ease-in-out;
  position: absolute;

  ${tablet(css<{ isMenuOpen: boolean }>`
    ${({ isMenuOpen }) => isMenuOpen && 'position: inherit'};
    background-color: transparent;
    padding: 0 24px 24px 24px;
    border-radius: none;
    width: 100%;
    box-shadow: none;
  `)}
`;
