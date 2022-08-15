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
  height: 40px;
  background-color: ${() => 'transparent'};
  border: ${({ theme, isConnected }) => (isConnected ? 'none' : `2px solid ${theme.colors.primary.UWL_BLUE}`)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  .button__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  };
  &:hover {
    p {
      color: ${({ theme, isConnected }) => (isConnected ? theme.colors.system.RED : theme.colors.system.WHITE)};
    };
    svg {
      fill: ${({ theme }) => theme.colors.system.WHITE};
    };
    background: ${({ theme, isConnected }) => (isConnected ? 'transparent' : theme.colors.system.GREEN)};
    border: ${({ theme, isConnected }) => (isConnected ? 'none' : `2px solid ${theme.colors.system.GREEN}`)};
  }
  
  ${tablet(css<{ isConnected: boolean }>`
    &:active {
      p {
        color: ${({ theme }) => theme.colors.system.WHITE};
      };
      background: ${({ theme, isConnected }) => (isConnected ? theme.colors.system.RED : theme.colors.system.GREEN)};
    }
  `)};
`;
