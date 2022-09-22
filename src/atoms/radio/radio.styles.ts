import { Styled } from '../../theme';
import { Column } from '../common/flex';
import { RadioProps } from './types';

export const Wrapper = Styled(Column)`
  gap: 6px;
`;

export const RadioAndLabel = Styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Container = Styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const RadioButtonLabel = Styled.label<Pick<RadioProps, 'isLarge' | 'disabled'>>`
  position: absolute;
  width: ${({ isLarge }) => (isLarge ? '16px' : '12px')};
  height: ${({ isLarge }) => (isLarge ? '16px' : '12px')};
  border-radius: 50%;
  background: transparent;
  border: ${({ disabled, theme }) => (disabled ? `2px solid ${theme.textShades.SHADE_MINUS_1}` : `2px solid ${theme.textShades.SHADE_MINUS_3}`)};
`;
export const RadioButton = Styled.input<Pick<RadioProps, 'isLarge' | 'disabled' | 'selected'>>`
  opacity: 0;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  border-radius: 50%;
  width: ${({ isLarge }) => (isLarge ? '16px' : '12px')};
  height: ${({ isLarge }) => (isLarge ? '16px' : '12px')};
  margin-right: 10px;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: transparent;
    border: ${({ disabled, theme }) => (disabled ? `2px solid ${theme.textShades.SHADE_MINUS_1}` : `2px solid ${theme.colors.primary.MAIN_BLUE}`)};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${({ isLarge }) => (isLarge ? '12px' : ' 10px')};
      position: absolute;
      height:${({ isLarge }) => (isLarge ? '12px' : ' 10px')};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ disabled, theme }) => (disabled ? theme.textShades.SHADE_MINUS_1 : theme.gradients.primary.MAIN_BLUE_GRADIENT)}
    }
  }
  ${({
    selected, disabled, theme, isLarge,
  }) => selected
    && `
    &:checked + ${RadioButtonLabel} {
      background: transparent;
      border: 2px solid ${theme.colors.primary.MANGO};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: ${isLarge ? '12px' : ' 10px'};
        position: absolute;
        height: ${isLarge ? '12px' : ' 10px'};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${disabled ? theme.textShades.SHADE_MINUS_1 : theme.gradients.primary.MAIN_BLUE_GRADIENT};
      }
    }
  `}
`;
