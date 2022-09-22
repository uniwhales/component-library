import { css } from 'styled-components';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';
import { NavbarContainerProps } from './types';

const FlexBase = Styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarContainer = Styled(FlexBase)<NavbarContainerProps>`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  z-index: ${({ theme }) => theme.zIndex.NAVBAR};
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  box-shadow: ${({ theme, bottomSpacing }) => bottomSpacing && theme.dropShadow.REGULAR};
  margin-bottom: ${({ bottomSpacing }) => bottomSpacing && '24px'};
  width: 100vw;
  ${tablet(css<Pick<NavbarContainerProps, 'account' | 'isMenuOpen' | 'direction'>>`
    top: ${({ direction }) => (direction === 'up' ? 0 : '-400px')};
    transform: ${({ direction }) => (direction === 'up' ? 'scale(1)' : 'scale(0.8)')};
    gap: 0;
    justify-content: flex-start;
    border-radius: ${({ isMenuOpen }) => (isMenuOpen ? '0px 0px 12px 12px' : 'none')};
    transition: top 0.3s ease-in-out, transform 0.3s cubic-bezier(1,.12,1,.04);
  `)}
`;

export const NavbarMainContent = Styled.div`
  display: flex;
  justify-content: space-between;
  height: 42px;
  width: calc(100vw - 120px);
  padding: 8px;
  padding-left: 88px;
  
  ${tablet(css<{ isMenuOpen?: boolean }>`
    height: 56px;
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
