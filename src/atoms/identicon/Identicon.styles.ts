import { css } from 'styled-components';
import { DeviceWidth } from '../../hooks/useBreakpoint';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';
import { IdenticonProps } from './types';

export const Container = Styled.div<Pick<IdenticonProps, 'hasInteraction' | 'size' | 'gradientBorder'>>`
  height: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  width: ${({ size }) => (size === 'big' ? '36px' : '24px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: ${({ hasInteraction }) => hasInteraction && 'pointer'};
  background: ${({ theme, gradientBorder, size }) => (size === 'small' ? null : gradientBorder ? `linear-gradient(${theme.containerAndCardShades.SHADE_PLUS_1}, ${theme.containerAndCardShades.SHADE_PLUS_1}) padding-box,${theme.gradients.primary.MAIN_BLUE_GRADIENT_FLIPPED} border-box` : `linear-gradient(${theme.containerAndCardShades.SHADE_PLUS_3}, ${theme.containerAndCardShades.SHADE_PLUS_3}) padding-box,${theme.gradients.secondary.SHADE_VERTICAL} border-box`)};
  border: 1px solid transparent;
  &:hover {
    border: ${({ hasInteraction, gradientBorder }) => hasInteraction && gradientBorder && '2px solid transparent'};
    background: ${({ theme, gradientBorder, hasInteraction }) => hasInteraction && !gradientBorder && `linear-gradient(${theme.containerAndCardShades.BG_SHADE_PLUS_4}, ${theme.containerAndCardShades.BG_SHADE_PLUS_4}) padding-box,${theme.gradients.secondary.ORANGE_VERTICAL_GRADIENT} border-box`};
  };
   /* On mobile we do not have hover effects   */
  @media (min-width: ${DeviceWidth.tablet}) {
    :hover {
      border: ${({ hasInteraction, gradientBorder }) => hasInteraction && gradientBorder && '2px solid transparent'};
      background: ${({ theme, gradientBorder, hasInteraction }) => hasInteraction && !gradientBorder && `linear-gradient(${theme.containerAndCardShades.BG_SHADE_PLUS_4}, ${theme.containerAndCardShades.BG_SHADE_PLUS_4}) padding-box,${theme.gradients.secondary.ORANGE_VERTICAL_GRADIENT} border-box`};
    };
  }

  ${({ hasInteraction, gradientBorder }) => hasInteraction && tablet(css`
      :active {
        background: ${({ theme }) => !gradientBorder && `linear-gradient(${theme.containerAndCardShades.BG_SHADE_PLUS_4}, ${theme.containerAndCardShades.BG_SHADE_PLUS_4}) padding-box,${theme.gradients.secondary.ORANGE_VERTICAL_GRADIENT} border-box`};
    }
  `)}
`;

export const SelectableIdenticonWrapper = Styled.div`
  gap: 8px;
  align-items: center;
  display: contents;
`;
