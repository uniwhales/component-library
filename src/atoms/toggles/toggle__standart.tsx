import React from 'react';
import { Styled, localTheme } from '../../theme';
import { Text } from '../texts/text';

export interface ToggleProps {
  isOn?: boolean;
  onClick?: () => void;
  label?:string
  size?: 'standard' | 'small'
  disabled?: boolean;
  labelColor?: string;
}
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Switcher = Styled.label<{ size: string }>`
  position: relative;
  display: inline-block;
  width: ${(props) => (props.size === 'small' ? 32 : 48)}px;
  height: ${(props) => (props.size === 'small' ? 16 : 24)}px;
`;
const Toggle = Styled.span<{ size: string, disabled: boolean }>`
  position: absolute;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => (props.disabled ? props.theme.containerAndCardShades.SHADE_PLUS_3 : props.theme.containerAndCardShades.SHADE_PLUS_1)};
  border-radius: 34px;
  :before {
    position: absolute;
    content: '';
    height: ${(props) => (props.size === 'small' ? 12 : 18)}px;
    width: ${(props) => (props.size === 'small' ? 12 : 18)}px;
    left: ${(props) => (props.size === 'small' ? 2 : 4)}px;
    bottom: ${(props) => (props.size === 'small' ? 2 : 3)}px;
    background: ${(props) => (props.disabled ? props.theme.containerAndCardShades.SHADE_PLUS_2 : props.theme.textShades.SHADE_MINUS_3)};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const FakeInput = Styled.input<{ size:any }>`
  opacity: 0;
  width: 0;
  height: 0;
  :hover + ${Toggle} {
    background: ${(props) => !props.disabled && props.theme.textShades.SHADE_MINUS_1};
  }
  :checked + ${Toggle} {
    background: ${(props) => (props.disabled ? props.theme.containerAndCardShades.SHADE_PLUS_1 : props.theme.colors.primary.MAIN_BLUE)};
    &:hover {
      background: ${({ theme, disabled }) => !disabled && theme.colors.primary.LIGHT_BLUE};
    }
  }
  :checked + ${Toggle}:before {
    transform: translateX(${(props) => (props.size === 'small' ? '16px' : '22px')});
    background: ${({ disabled, theme }) => !disabled && theme.textShades.SHADE_MINUS_3};
  }
`;
export const ToggleAtom = ({
  isOn, onClick, label, size = 'standard', disabled, labelColor,
}:ToggleProps) => {
  const theme = localTheme();
  return (
    <Wrapper>
      <Switcher size={size}>
        <FakeInput disabled={disabled} size={size} type="checkbox" checked={isOn} onChange={onClick} />
        <Toggle disabled={!!disabled} size={size} />
      </Switcher>
      {label && <Text color={disabled ? theme.textShades.SHADE_MINUS_1 : labelColor ?? theme.textShades.SHADE_MINUS_3} size="14-Regular">{label}</Text>}
    </Wrapper>
  );
};
