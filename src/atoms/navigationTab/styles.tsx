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
  width: ${({ isExpanded }) => (isExpanded ? '13px' : '90%')};
  margin: ${({ isExpanded }) => isExpanded ? '0px 7px 0px 17px' : '0px 0px 0px 28px'};
  svg {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
    fill: ${({ isHighlighted, theme }) => isHighlighted ? theme.textShades.SHADE_MINUS_3 : theme.textShades.SHADE_MINUS_1 }
  }

  :hover {
    svg {
      fill: ${({ isHighlighted, theme }) => isHighlighted ? theme.colors.primary.WATER_BLUE : theme.textShades.SHADE_MINUS_3 }
    }
  }
`;

export const HighlightMark = Styled.div<{ isActive: boolean, lvl: number }>`
  height: 100%;
  width: 4px;
  border: none;
  background-color: ${({ isActive, theme, lvl }) => isActive && (lvl >= 2 ? theme.contrastColor.HIGH_CONTRAST : lvl === 1 ? theme.colors.primary.DARK_BLUE : theme.colors.primary.UWL_BLUE)};
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
