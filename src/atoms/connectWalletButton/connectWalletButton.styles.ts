import { Styled } from '../../theme';
import { ConnectButtonProps } from './types';

export const ConnectButton = Styled.button<ConnectButtonProps>`
  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  };
  padding: 12px;
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 12px;
  font-family: inherit;
  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.colors.primary.UWL_BLUE}`};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  .button__group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  };

  &:hover {
    p {
      color: ${(props) => props.theme.colors.system.WHITE};
    };
    background: ${(props) => (props.account ? props.theme.colors.system.RED : props.theme.colors.primary.UWL_BLUE)};
      border: ${(props) => (props.account ? `1px solid ${props.theme.colors.system.RED}` : `1px solid ${props.theme.colors.primary.UWL_BLUE}`)};
    svg {
      fill: ${(props) => props.theme.colors.system.WHITE};
    };
};
`;
