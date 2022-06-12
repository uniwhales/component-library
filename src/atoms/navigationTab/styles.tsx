import { CSSProperties } from 'react';
import { Styled } from '../../theme';
import { SidebarElement } from './types';

export const NavigationLi = Styled.li<{
  width: CSSProperties['width'], isHighlighted: boolean, isDisabled: boolean
  lvl: number
}>`
  display: flex;
  align-items: center;
  list-style-type: none;
  
  height: 48px;
  width: ${({ width }) => width};
  
  background-color: ${({ lvl, theme }) => (lvl === 0 ? theme.containerAndCardShades.SHADE_PLUS_3 : lvl === 1 ? theme.containerAndCardShades.SHADE_PLUS_2 : theme.containerAndCardShades.SHADE_PLUS_1)};
  opacity: ${({ isDisabled, isHighlighted }) => (isHighlighted ? 1 : !isDisabled ? 0.75 : 0.5)};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  :hover {
    opacity: 1;
  }
`;

export const NavigationUl = Styled.ul`
  padding: 0;
`;

export const IconContainer = Styled.div<{ isExpanded: boolean, isDisabled: boolean, isHighlighted: boolean }>`
  width: ${({ isExpanded }) => (isExpanded ? '13px' : '100%')};
  margin: ${({ isExpanded }) => isExpanded ? '0px 7px 0px 17px' : '0px 7px 0px 28px'};
  svg {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }
`;

export const HighlightMark = Styled.div<{ isActive: boolean }>`
  height: 100%;
  width: 4px;
  border: none;
  background-color: ${({ isActive, theme }) => isActive && theme.colors.primary.UWL_BLUE};
  border-radius: ${({ isActive }) => isActive && '0 12px 12px 0'};
`;

export const NavigationTabName = Styled.div<{ tag: SidebarElement<any>['tag'] }>`
  width: ${({ tag }) => (tag ? '92px' : '120px')};
  overflow-x: auto;
  scrollbar-width: thin;

`;

export const ChipWrapper = Styled.div`
  width: 44px;
`;
