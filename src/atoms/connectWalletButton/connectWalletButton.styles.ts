import { Styled } from '../../theme';
import { ConnectButtonProps } from './types';

export const ConnectButton = Styled.button<ConnectButtonProps>`
  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  };
  font-size: 14px;
  line-height: 24px;
  padding: 12px;
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 700;
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  border-radius: 12px;
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
  color: ${(props) => props.theme.colors.system.WHITE};
  background: ${(props) => (props.account ? props.theme.colors.system.RED : props.theme.colors.primary.UWL_BLUE)};
    border: ${(props) => (props.account ? `1px solid ${props.theme.colors.system.RED}` : `1px solid ${props.theme.colors.primary.UWL_BLUE}`)};
  svg {
    fill: ${(props) => props.theme.colors.system.WHITE};
  };
};
`;
