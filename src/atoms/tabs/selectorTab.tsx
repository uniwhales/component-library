import React from 'react';
import { css, styled } from 'styled-components';


export interface SelectorTabProps {
  children: React.ReactChild;
  isHighlighted?: boolean
  tabIndex: number
  setActiveTab?: () => void;
}
const SelectorTab = styled.div<SelectorTabProps>`
  .tabs__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  cursor: pointer;
  font-size: 14px;
  transition: 0.4s;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  border: 1px solid ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  color: ${(props) => props.theme.contrastColor.LOW_CONTRAST};
  max-width: 200px;
  height: 32px;
  flex:1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  &:not(:last-child) {
    border-right: transparent
  }
  &:first-child {
    border-radius: 12px 0 0 12px;
  }
  &:last-child {
    border-radius: 0 12px 12px 0;
  }
  :hover {
    transition: all 0.4s;
    color: ${(props) => props.theme.colors.system.WHITE};
    background: ${(props) => props.theme.colors.primary.MAIN_BLUE};
    border: 1px solid ${(props) => props.theme.colors.primary.MAIN_BLUE};
    font-weight: bold;
    svg {
      transition: all 0.4s;
      fill: white;
    }
  }
  ${({ isHighlighted }) => isHighlighted && css`
    color: ${(props) => props.theme.colors.system.WHITE};
    background: ${(props) => props.theme.colors.primary.MAIN_BLUE};
    border: 1px solid ${(props) => props.theme.colors.primary.MAIN_BLUE};
    font-weight: bold;
    svg {
      transition: all 0.4s;
      fill: white;
    }
  `}
`;

export const SelectorTabAtom = ({
  children, isHighlighted, tabIndex, setActiveTab,
}:SelectorTabProps) => (
  <SelectorTab onClick={setActiveTab} role="tab" tabIndex={tabIndex} isHighlighted={isHighlighted}>
    {children}
  </SelectorTab>
);
