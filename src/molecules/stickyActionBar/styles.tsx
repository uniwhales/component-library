import { css } from 'styled-components';
import { Card } from '../../atoms/card/card';
import { Styled } from '../../theme';
import { StickyActionBarProps, StickyActionBarWrapperProps } from './types';

export const StickyActionBarWrapper = Styled(Card)<StickyActionBarWrapperProps>`
    display: flex;
    flex-direction: row;
    ${
  ({
    isOnEdge, withTransform, height, theme,
  }) => css<StickyActionBarWrapperProps>`
    background: ${isOnEdge && withTransform && 'transparent'};
    justify-content: ${isOnEdge && withTransform ? 'flex-end' : 'space-between'};
    position: ${isOnEdge && withTransform && 'sticky'};
    z-index: ${isOnEdge && withTransform ? theme.zIndex.POPICON : theme.zIndex.SAFE_LAYER};
    height: ${height ?? '42px'};
    top: 0;
  `}
`;

export const ButtonWrapper = Styled.div<Pick<StickyActionBarProps, 'index'>>`
  position: sticky;
  margin-right: ${({ index }) => (index && index > 1) ? (index * 48) : 0}px;
`;
