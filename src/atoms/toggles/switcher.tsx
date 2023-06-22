import React from 'react';
import { styled } from 'styled-components';

export interface SwitcherProps {
  isOn?: boolean;
  onClick?: () => void;
  disabled: boolean;
  size?: 'big' | 'small'
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Switcher = styled.label<Pick<SwitcherProps, 'size'>>`
  position: relative;
  display: inline-block;
  width: ${(props) => (props.size === 'small' ? '32px' : '48px')};
  height: ${(props) => (props.size === 'small' ? '16px' : '24px')};
`;
const Toggle = styled.span<SwitcherProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ isOn, theme, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_3 : isOn ? theme.colors.secondary.SKY : theme.containerAndCardShades.SHADE_PLUS_1)};
  border-radius: 4px;
  :hover {
    background: ${({ isOn, disabled, theme }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_3 : isOn ? theme.colors.secondary.SKY : theme.containerAndCardShades.SHADE_PLUS_1)};
    :before {
      background: ${({ disabled, theme }) => !disabled && theme.colors.primary.LIGHT_BLUE};
    }
  }

  :before {
    position: absolute;
    content: '';
    height: 100%;
    width: 50%;
    bottom: 0;
    background: ${({ disabled, theme }) => (disabled ? theme.textShades.SHADE_MINUS_1 : theme.colors.primary.MAIN_BLUE)};
    transition: 0.4s;
    border-radius: 4px;
    transform: ${(props) => {
    if (props.disabled) return 'translateX(50%)';
    if (props.isOn) return 'translateX(101%)';
    return 'translateX(-1%)';
  }};
  }
`;
const FakeInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitcherAtom = ({
  isOn, onClick, disabled, size = 'small',
}:SwitcherProps) => (
  <Wrapper>
    <Switcher size={size}>
      <FakeInput type="checkbox" onChange={onClick} disabled={disabled} />
      <Toggle disabled={disabled} isOn={isOn} />
    </Switcher>
  </Wrapper>
);
