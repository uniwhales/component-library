import React from 'react';
import { Styled } from '../../theme';
import { Text } from '../texts/text';

export interface ToggleProps {
  isOn?: boolean;
  onClick?: () => void;
  label?:string
  size?: 'standard' | 'small'
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
const Toggle = Styled.span<{ size: string }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  border-radius: 34px;
  :before {
    position: absolute;
    content: '';
    height: ${(props) => (props.size === 'small' ? 12 : 18)}px;
    width: ${(props) => (props.size === 'small' ? 12 : 18)}px;
    left: ${(props) => (props.size === 'small' ? 2 : 4)}px;
    bottom: ${(props) => (props.size === 'small' ? 2 : 3)}px;
    background: ${(props) => props.theme.colors.primary.UWL_BLUE};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const FakeInput = Styled.input<{ size:any }>`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + ${Toggle} {
    background: ${(props) => props.theme.gradients.primary.BLURPLE};
  }
  :hover + ${Toggle} {
    background: ${(props) => (props.defaultChecked
    ? props.theme.gradients.primary.BLURPLE_HIGHLIGHTED
    : 'rgba(41, 121, 254, 0.5);')};
  }
  :checked + ${Toggle}:before {
    transform: translateX(${(props) => (props.size === 'small' ? '16px' : '22px')});
    background: ${(props) => props.theme.colors.system.WHITE};
  }
`;
export const ToggleAtom = ({
  isOn, onClick, label, size = 'standard',
}:ToggleProps) => (
  <Wrapper>
    <Switcher size={size}>
      <FakeInput size={size} type="checkbox" defaultChecked={isOn} onChange={onClick} />
      <Toggle size={size} />
    </Switcher>
    {label && <Text size="M-Regular">{label}</Text>}
  </Wrapper>

);
