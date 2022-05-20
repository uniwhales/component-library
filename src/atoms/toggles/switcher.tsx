import React from 'react';
import { Styled } from '../../theme';

export interface SwitcherProps {
  isOn?: boolean;
  onClick?: () => void;
  disabled: boolean;
  size?: 'big' | 'small'
}
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Switcher = Styled.label<Pick<SwitcherProps, 'size'>>`
  position: relative;
  display: inline-block;
  width: ${(props) => (props.size === 'small' ? '32px' : '48px')};
  height: ${(props) => (props.size === 'small' ? '16px' : '24px')};
`;
const Toggle = Styled.span<SwitcherProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  border-radius: 4px;
  :hover {
    background: ${(props) => !props.disabled && props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
    :before {
      box-shadow: ${(props) => !props.disabled && props.theme.dropShadow.REGULAR};
      background: ${(props) => !props.disabled && props.theme.gradients.primary.BLURPLE_HIGHLIGHTED};
    }
  }

  :before {
    position: absolute;
    content: '';
    height: 100%;
    width: 50%;
    bottom: 0;
    background: ${(props) => (props.disabled ? props.theme.textShades.SHADE_MINUS_1 : props.theme.gradients.primary.BLURPLE)};
    transition: 0.4s;
    border-radius: 4px;
    transform: ${(props) => {
    if (props.disabled) return 'translateX(50%)';
    if (props.isOn) return 'translateX(101%)';
    return 'translateX(-1%)';
  }};
  }
`;
const FakeInput = Styled.input`
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
