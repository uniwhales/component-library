import { Styled } from '../../theme';

export const SidebarContainer = Styled.div<{ width: string, isExpanded: boolean }>`
  overflow: auto;
  scrollbar-width: none;
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
  cursor: ${({ isExpanded }) => isExpanded ? "auto" : "pointer"};
`;

export const SidebarItems = Styled.ul`
  width: 100%;
  margin: auto;
  grid-area: sidebar;
  height: 100%;
  padding: 0;
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
`;

export const SidebarThemeAndShareButtons = Styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`;
