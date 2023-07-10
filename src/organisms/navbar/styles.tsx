import { css, styled } from 'styled-components';
import { tablet } from '../../layouts/breakpoints';

const FlexBase = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled(FlexBase)<{ $isMenuOpen?: boolean, account?: string | null, $bottomSpacing: boolean, $bgColor: boolean | string }>`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme, $bgColor }) => (
    typeof $bgColor === 'string' ? $bgColor : $bgColor ? theme.colors.SHADE_PLUS_3 : 'transparent'
  )};
  box-shadow: ${({ theme, $bottomSpacing, $bgColor }) => $bgColor && $bottomSpacing && theme.dropShadow.REGULAR};
  padding: 16px 24px;
  z-index: ${({ theme }) => theme.zIndex.STICKY};
  gap: 24px;
  margin-bottom: ${({ $bottomSpacing }) => $bottomSpacing && '24px'};

  ${tablet(css<{ $isMenuOpen?: boolean, account?: string | null }>`
    gap: 0;
    justify-content: flex-start;
    max-height: ${({ $isMenuOpen, account }) => (!$isMenuOpen ? '104px' : account ? '239px' : '164px')};
    transition: max-height 200ms ease-in-out;
    border-radius: ${({ $isMenuOpen }) => ($isMenuOpen ? '0px 0px 12px 12px' : 'none')};
  `)}
`;

export const NavbarMainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 42px;

  ${tablet(css<{ $isMenuOpen?: boolean }>`
    height: 104px;
    min-height: 104px;
  `)}
`;

export const NavbarLeftSide = styled(FlexBase)`
  gap: 6px;
`;

export const NavbarRightSide = styled(FlexBase)`
  gap: 16px;
`;

export const IdenticonContainer = styled.div``;

export const NavbarDesktopMenu = styled.div`
  ${tablet(css`
    display: none;
  `)}
`;
