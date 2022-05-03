import React from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';

export interface Props {
  title?: string;
  isHighlighted?: boolean
  tabIndex: number
  icon?: 'ethereum' | 'bsc' | 'polygon' | 'avalanche' | 'fantom' | 'arbitrum' | 'boba' | 'metis' | 'aurora' | 'optimism';
  setActiveTab?: () => void;
}
const SelectorTab = Styled.div<Props>`
  .tabs__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  cursor: pointer;
  transition: 0.4s;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_3};
  border: 1px solid ${(props) => props.theme.contrastColor.LOW_CONTRAST};
  color: ${(props) => props.theme.contrastColor.LOW_CONTRAST};
  width: 200px;
  height: 32px;
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
    background: ${(props) => props.theme.colors.primary.UWL_BLUE};
    font-weight: bold;
    svg {
      transition: all 0.4s;
      fill: white;
    }
  }
  ${({ isHighlighted }) => isHighlighted && css`
    color: ${(props) => props.theme.colors.system.WHITE};
    background: ${(props) => props.theme.colors.primary.UWL_BLUE};
    font-weight: bold;
    svg {
      transition: all 0.4s;
      fill: white;
    }
  `}
`;

export const SelectorTabAtom = ({
  title, isHighlighted, tabIndex, icon, setActiveTab,
}:Props) => (
  <SelectorTab onClick={setActiveTab} role="tab" tabIndex={tabIndex} isHighlighted={isHighlighted}>
    {icon ? (
      <div className="tabs__group">
        {icon && <IconWrapper fill={isHighlighted ? 'white' : 'grey'} width="17px" height="17px" icon={icon} />}
        {title}
      </div>
    ) : title}
  </SelectorTab>
);
