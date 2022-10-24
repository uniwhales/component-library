import { css } from 'styled-components';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';

const FlexBase = Styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarContainer = Styled(FlexBase)<{ isMenuOpen?: boolean, account?: string | null, bottomSpacing: boolean, bgColor: boolean }>`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: ${({ theme, bgColor }) => (bgColor && theme.containerAndCardShades.SHADE_PLUS_3)};
  box-shadow: ${({ theme, bottomSpacing }) => bottomSpacing && theme.dropShadow.REGULAR};
  padding: 16px 24px;
  z-index: ${({ theme }) => theme.zIndex.NAVBAR};
  gap: 24px;
  margin-bottom: ${({ bottomSpacing }) => bottomSpacing && '24px'};
  
  ${tablet(css<{ isMenuOpen?: boolean, account?: string | null }>`
    gap: 0;
    justify-content: flex-start;
    max-height: ${({ isMenuOpen, account }) => (!isMenuOpen ? '104px' : account ? '239px' : '164px')};
    transition: max-height 200ms ease-in-out;
    border-radius: ${({ isMenuOpen }) => (isMenuOpen ? '0px 0px 12px 12px' : 'none')};
  `)}
`;

export const NavbarMainContent = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  
  ${tablet(css<{ isMenuOpen?: boolean }>`
    height: 104px;
    min-height: 104px;
  `)}
`;

export const NavbarLeftSide = Styled(FlexBase)`
  gap: 6px;
  cursor: pointer;
`;

export const NavbarRightSide = Styled(FlexBase)`
  gap: 16px;
`;

export const IdenticonContainer = Styled.div``;

export const NavbarDesktopMenu = Styled.div`
  ${tablet(css`
    display: none;
  `)}
`;

export const NavigateBackContainer = Styled(FlexBase)``;
