import React from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';

export interface Props {
  title?: string;
  isHighlighted: boolean
  tabIndex: number
  icon?: 'ethereum' | 'bsc' | 'polygon' | 'avalanche' | 'fantom' | 'arbitrum' | 'boba' | 'metis' | 'aurora' | 'optimism';
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
  background: ${(props) => props.theme.colors.neutral.SHADE_3};
  border: 1px solid ${(props) => props.theme.colors.neutral.SHADE_4};
  color: ${(props) => props.theme.colors.neutral.SHADE_4};
  max-width: 200px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${(props) => props.theme.colors.system.WHITE};
    border: 1px solid ${(props) => props.theme.colors.primary.UWL_BLUE};
    background: ${(props) => props.theme.colors.primary.UWL_BLUE};
    font-weight: bold;
  }
  ${({ isHighlighted }) => isHighlighted && css`
    color: ${(props) => props.theme.colors.system.WHITE};
    border: 1px solid ${(props) => props.theme.colors.primary.UWL_BLUE};
    background: ${(props) => props.theme.colors.primary.UWL_BLUE};
    :hover {
      font-weight: bold;
    }
  `}
`;

export const SelectorTabAtom = ({
  title, isHighlighted, tabIndex, icon,
}:Props) => (
  <SelectorTab role="tab" tabIndex={tabIndex} isHighlighted={isHighlighted}>
    {icon ? (
      <div className="tabs__group">
        {icon && <IconWrapper width="17px" height="17px" icon={icon} />}
        {title}
      </div>
    ) : title}
  </SelectorTab>
);
