import { css, styled } from 'styled-components';
import { tablet } from '../../../../layouts/breakpoints';

export const NavbarUserMenu = styled.div<{ $isMenuOpen: boolean }>`
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  padding: 24px;
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  width: 160px;
  right: 34px;
  top: 94px;
  padding: 14px;
  border-radius: 12px;
  position: fixed;
  max-width: 160px;
  transition: all 800ms ease-in-out;
  z-index: ${({ theme }) => theme.zIndex.STICKY};

  ${tablet(css<{ $isMenuOpen: boolean }>`
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
