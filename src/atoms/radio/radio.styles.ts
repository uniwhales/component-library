import { Styled } from '../../theme';
import { getRadioSize } from '../../utils/getSize';
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
  border: ${(props) => (props.disabled ? `2px solid ${props.theme.textShades.SHADE_MINUS_1}` : `2px solid ${props.theme.textShades.SHADE_MINUS_3}`)};
`;
export const RadioButton = Styled.input<Pick<RadioProps, 'size' | 'disabled' | 'selected'>>`
  opacity: 0;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  border-radius: 50%;
  width: ${({ size }) => (getRadioSize(size))};
  height: ${({ size }) => (getRadioSize(size))};
  margin-right: 10px;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: transparent;
    border: ${({ disabled, theme }) => (disabled ? `2px solid ${theme.textShades.SHADE_MINUS_1}` : `2px solid ${theme.colors.primary.MAIN_BLUE}`)};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: calc(20px - 4px);
      position: absolute;
      height: calc(20px - 4px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ disabled }) => (disabled ? 'none' : theme.gradients.primary.MAIN_BLUE_GRADIENT)}
    }
  }
  ${({ selected, disabled, theme }) => selected
    && `
    &:checked + ${RadioButtonLabel} {
      background: transparent;
      border: 2px solid ${theme.colors.primary.MANGO};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: calc(20px - 4px);
        position: absolute;
        height: calc(20px - 4px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${disabled ? 'props.theme.textShades.SHADE_MINUS_1' : theme.gradients.primary.MAIN_BLUE_GRADIENT};
      }
    }
  `}
`;
