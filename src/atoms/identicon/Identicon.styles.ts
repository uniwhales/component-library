import { css } from 'styled-components';
import { DeviceWidth } from '../../hooks/useBreakpoint';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';
import { IdenticonProps, MarkedIdenticonProps } from './types';

export const Container = Styled.div<Pick<IdenticonProps, 'hasInteraction' | 'size'>>`
  height: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  width: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: ${({ hasInteraction }) => hasInteraction && 'pointer'};
  border: ${({ theme }) => `2px solid ${theme.containerAndCardShades.SHADE_PLUS_2}`};
  &:hover {
    border: ${({ theme, hasInteraction }) => hasInteraction && `2px solid ${theme.contrastColor.HIGH_CONTRAST}`};
  };
   /* On mobile we do not have hover effects   */
  @media (min-width: ${DeviceWidth.tablet}) {
    :hover {
      border: ${({ theme, hasInteraction }) => hasInteraction && `2px solid ${theme.contrastColor.HIGH_CONTRAST}`};
    };
  }

  ${({ hasInteraction }) => hasInteraction && tablet(css`
      :active {
      border: ${({ theme }) => `2px solid ${theme.textShades.SHADE_MINUS_3}`};
    }
  `)}
`;

export const IdenticonMarkWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const WalletAvatar = Styled.div`
`;

export const Mark = Styled.div<Pick<MarkedIdenticonProps, 'size'>>`
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  position: absolute;
  border-radius: 36px;
  width: ${({ size }) => (size === 'big' ? '13px' : '8px')};
  height: ${({ size }) => (size === 'big' ? '13px' : '8px')};
  border: ${({ theme }) => `2px solid  ${theme.containerAndCardShades.BG_SHADE_PLUS_4}`};
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectableMarkedIdenticonWrapper = Styled.div`
  gap: 8px;
  align-items: center;
  display: contents;
`;
