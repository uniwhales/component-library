import { styled } from 'styled-components';

import { Column } from '../common/flex';
import { RadioProps } from './types';

export const Wrapper = styled(Column)`
  gap: 6px;
`;

export const RadioAndLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const RadioButtonLabel = styled.label<Pick<RadioProps, '$isLarge' | 'disabled'>>`
  position: absolute;
  width: ${({ $isLarge }) => ($isLarge ? '16px' : '12px')};
  height: ${({ $isLarge }) => ($isLarge ? '16px' : '12px')};
  border-radius: 50%;
  background: transparent;
  border: ${({ disabled, theme }) => (disabled ? `2px solid ${theme.colors.SHADE_PLUS_1}` : `2px solid ${theme.colors.SHADE_MINUS_2}`)};
`;
export const RadioButton = styled.input<{ $isLarge: boolean }>`
  opacity: 0;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  border-radius: 50%;
  width: ${({ $isLarge }) => ($isLarge ? '16px' : '12px')};
  height: ${({ $isLarge }) => ($isLarge ? '16px' : '12px')};
  margin-right: 10px;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: transparent;
    border: ${({ disabled, theme }) => (!disabled && `2px solid ${theme.colors.YELLOW}`)};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${({ $isLarge }) => ($isLarge ? '12px' : ' 10px')};
      position: absolute;
      height:${({ $isLarge }) => ($isLarge ? '12px' : ' 10px')};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ disabled, theme }) => (!disabled && theme.colors.SHADE_MINUS_1)};
    }
  }
  ${({
    disabled, theme, $isLarge,
  }) => `
    &:checked + ${RadioButtonLabel} {
      background: transparent;
      border: 2px solid ${disabled ? theme.colors.SHADE_PLUS_1 : theme.colors.YELLOW};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: ${$isLarge ? '12px' : ' 10px'};
        position: absolute;
        height: ${$isLarge ? '12px' : ' 10px'};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${disabled ? theme.colors.SHADE_PLUS_1 : theme.colors.YELLOW};
      }
    }
  `}
`;
