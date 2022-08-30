import { Styled } from '../../theme';
import { RadioProps } from './types';

export const Item = Styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  cursor: pointer;
`;

export const RadioButtonLabel = Styled.label<Pick<RadioProps, 'disabled'>>`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
  border: ${(props) => (props.disabled ? `2px solid ${props.theme.colors.primary.DARK_BLUE}` : `2px solid ${props.theme.textShades.SHADE_MINUS_3}`)};
`;
export const RadioButton = Styled.input<Pick<RadioProps, 'disabled' | 'selected'>>`
  opacity: 0;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: transparent;
    border: ${(props) => (props.disabled ? `2px solid ${props.theme.colors.primary.DARK_BLUE}` : `2px solid ${props.theme.colors.primary.UWL_BLUE}`)};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: ${(props) => (props.disabled ? 'none' : props.theme.gradients.primary.MAIN_BLUE_GRADIENT)}
    }
  }
  ${(props) => props.selected
    && `
    &:checked + ${RadioButtonLabel} {
      background: transparent;
      border: 2px solid ${props.theme.textShades.SHADE_MINUS_3};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: ${props.theme.colors.primary.UWL_BLUE}
      }
    }
  `}
`;
