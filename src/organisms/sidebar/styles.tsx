import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  border: 1px solid red;
`;
export const SidebarContainer = Styled.div<{ width: string, isExpanded: boolean, isMobileMenuOpen: boolean }>`
  overflow: auto;
  scrollbar-width: none;
  border: 1px solid red;
  height: 100vh;
  display: grid;
  width: ${({ width }) => width};
  z-index: 9999999;
  grid-template-areas:
  "header"
  "sidebar"
  "bottom";
  grid-template-rows: auto 1fr auto;
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  position: fixed;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  transition: all linear 0.1s;
  cursor: ${({ isExpanded }) => (isExpanded ? 'auto' : 'pointer')};
  @media (max-width: 1024px) {
    display: ${(props) => (props.isMobileMenuOpen ? 'grid' : 'none')};
    width: 100%;
    left: 0;
    top: 0;
    grid-template-rows: auto auto 1fr;
    height: calc(100vh - 72px);
  }
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
`;

export const SidebarItems = Styled.ul`
  width: 100%;
  margin: auto;
  grid-area: sidebar;
  height: 100%;
  padding: 0;
  overflow: auto;
`;

export const SidebarBottom = Styled.div`
  grid-area: bottom;
  width: inherit;
  margin-top: 15px;
`;

export const SidebarBottomButtons = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 14px;
  }
`;

export const SidebarThemeAndShareButtons = Styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  @media (max-width: 1024px) {
    margin-top: 36px;
    justify-content: flex-start
  }
`;
