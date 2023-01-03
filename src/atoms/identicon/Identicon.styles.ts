import { css } from 'styled-components';
import { DeviceWidth } from '../../hooks/useBreakpoint';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';
import { IdenticonProps, MarkedIdenticonProps } from './types';

export const Container = Styled.div<Pick<IdenticonProps, 'hasInteraction' | 'size' | 'gradientBorder'>>`
  height: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  width: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: ${({ hasInteraction }) => hasInteraction && 'pointer'};
  background: ${({ theme, gradientBorder }) => (gradientBorder ? `linear-gradient(${theme.containerAndCardShades.SHADE_PLUS_1}, ${theme.containerAndCardShades.SHADE_PLUS_1}) padding-box,${theme.gradients.primary.MAIN_BLUE_GRADIENT_FLIPPED} border-box` : `linear-gradient(${theme.containerAndCardShades.SHADE_PLUS_3}, ${theme.containerAndCardShades.SHADE_PLUS_3}) padding-box,${theme.gradients.secondary.SHADE_HORIZONTAL} border-box`)};
  border: 1px solid transparent;
  &:hover {
    border: ${({ hasInteraction }) => hasInteraction && '2px solid transparent'};
    background: ${({ theme, gradientBorder }) => !gradientBorder && `linear-gradient(${theme.containerAndCardShades.BG_SHADE_PLUS_4}, ${theme.containerAndCardShades.BG_SHADE_PLUS_4}) padding-box,${theme.gradients.secondary.RADIAL_LIGHT} border-box`};
  };
   /* On mobile we do not have hover effects   */
  @media (min-width: ${DeviceWidth.tablet}) {
    :hover {
      border: ${({ hasInteraction }) => hasInteraction && '2px solid transparent'};
      background: ${({ theme, gradientBorder }) => !gradientBorder && `linear-gradient(${theme.containerAndCardShades.BG_SHADE_PLUS_4}, ${theme.containerAndCardShades.BG_SHADE_PLUS_4}) padding-box,${theme.gradients.secondary.RADIAL_LIGHT} border-box`};
    };
  }

  ${({ hasInteraction, gradientBorder }) => hasInteraction && tablet(css`
      :active {
        background: ${({ theme }) => !gradientBorder && `linear-gradient(${theme.containerAndCardShades.BG_SHADE_PLUS_4}, ${theme.containerAndCardShades.BG_SHADE_PLUS_4}) padding-box,${theme.gradients.secondary.RADIAL_LIGHT} border-box`};
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
