import { css } from 'styled-components';
import { DeviceWidth } from '../../hooks/useBreakpoint';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';

export const Container = Styled.div<{ containerSize: string, hasInteraction: boolean }>`
  height: ${({ containerSize }) => containerSize};
  width: ${({ containerSize }) => containerSize};
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
      border: ${({ theme }) => `2px solid ${theme.contrastColor.HIGH_CONTRAST}`};
    }
  `)}
`;
