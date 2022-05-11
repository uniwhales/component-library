import React from 'react';
import { Styled } from '../../theme';

export interface SwitcherProps {
  isOn?: boolean;
  onClick?: () => void;
  disabled: boolean;
}
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Switcher = Styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
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
      box-shadow: ${(props) => !props.disabled && '0px 6px 18px #101013'};
      background: ${(props) => !props.disabled && props.theme.gradients.primary.BLURPLE_HIGHLIGHTED};
    }
  }

  :before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
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
  isOn, onClick, disabled,
}:SwitcherProps) => (
  <Wrapper>
    <Switcher>
      <FakeInput type="checkbox" onChange={onClick} disabled={disabled} />
      <Toggle disabled={disabled} isOn={isOn} />
    </Switcher>
  </Wrapper>
);
