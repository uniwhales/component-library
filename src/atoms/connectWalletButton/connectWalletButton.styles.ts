import { css } from 'styled-components';
import { tablet } from '../../layouts/breakpoints';
import { Styled } from '../../theme';
import { ConnectButtonProps } from './types';

export const ConnectButton = Styled.button<ConnectButtonProps & { isConnected: boolean }>`
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  };
  padding: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 12px;
  font-family: inherit;
  height: ${({ previewButton }) => (previewButton ? '30px' : '40px')};
  background-color: ${({ theme, previewButton }) => (previewButton ? theme.colors.primary.MAIN_BLUE : 'transparent')};
  border: ${({ theme, isConnected, previewButton }) => (isConnected
    ? 'none'
    : previewButton
      ? `2px solid ${theme.colors.primary.MAIN_BLUE}`
      : `2px solid ${theme.colors.primary.MAIN_BLUE}`)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: color 300ms, fill 300ms, background 300ms ease-in-out;

  .button__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  };

  ${({ isConnected, theme }) => css`
    &:hover {
      p {
        color: ${isConnected ? theme.colors.system.RED : theme.colors.system.WHITE};
      };
      svg {
        fill: ${theme.colors.system.WHITE};
      };
      background: ${isConnected ? 'transparent' : theme.colors.system.GREEN};
      border: ${isConnected ? 'none' : `2px solid ${theme.colors.system.GREEN}`};
    }
  `}

  ${tablet(css<{ isConnected: boolean }>`
    &:active {
      p {
        color: ${({ theme }) => theme.colors.system.WHITE};
      };
      border: ${({ theme, isConnected }) => (isConnected ? 'none' : `2px solid ${theme.colors.system.GREEN}`)};
      background: ${({ theme, isConnected }) => (isConnected ? theme.colors.system.RED : theme.colors.system.GREEN)};
    }
  `)};
`;
