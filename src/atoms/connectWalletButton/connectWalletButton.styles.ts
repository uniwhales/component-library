import { css, styled } from 'styled-components';
import { tablet } from '../../layouts/breakpoints';
import { ConnectButtonProps } from './types';

export const ConnectButton = styled.button<ConnectButtonProps & { $isConnected: boolean }>`
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  };
  padding: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 12px;
  font-family: inherit;
  height: 40px;
  background-color: ${() => 'transparent'};
  border: ${({ theme, $isConnected }) => ($isConnected ? 'none' : `2px solid ${theme.colors.MAIN_BLUE}`)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: color 300ms, fill 300ms, background 300ms ease-in-out;

  .button__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  };

  ${({ $isConnected, theme }) => css`
    &:hover {
      p {
        color: ${$isConnected ? theme.colors.RED : theme.colors.WHITE};
      };
      svg {
        fill: ${theme.colors.WHITE};
      };
      background: ${$isConnected ? 'transparent' : theme.colors.CARRIBEAN_GREEN};
      border: ${$isConnected ? 'none' : `2px solid ${theme.colors.CARRIBEAN_GREEN}`};
    }
  `}

  ${tablet(css<{ $isConnected: boolean }>`
    &:active {
      p {
        color: ${({ theme }) => theme.colors.WHITE};
      };
      border: ${({ theme, $isConnected }) => ($isConnected ? 'none' : `2px solid ${theme.colors.CARRIBEAN_GREEN}`)};
      background: ${({ theme, $isConnected }) => ($isConnected ? theme.colors.RED : theme.colors.CARRIBEAN_GREEN)};
    }
  `)};
`;
