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
  right: 24px;
  top: 84px;
  padding: 14px;
  border-radius: 12px;
  position: absolute;
  max-width: 160px;
  transition: all 800ms ease-in-out;
  
  ${tablet(css<{ isMenuOpen: boolean }>`
    position: unset;
    background-color: transparent;
    border-radius: none;
    box-shadow: none;
    top: unset;
    bottom: 14px;
    right: 14px;
    justify-content: flex-end;
    width: 100%;
    max-width: unset;
  `)}
`;
