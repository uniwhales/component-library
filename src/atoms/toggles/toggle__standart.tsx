import React, { useState } from 'react';
import { Styled } from '../../theme';
import { Text } from '../texts/text';

export interface Props {
  isOn?: boolean;
  onClick?: () => void;
  label?:string
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
  width: 60px;
  height: 34px;
`;
const Toggle = Styled.span`
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
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: ${(props) => props.theme.colors.primary.UWL_BLUE};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const FakeInput = Styled.input`
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
    transform: translateX(26px);
    background: ${(props) => props.theme.colors.system.WHITE};
  }
`;
export const ToggleAtom = ({ isOn, onClick, label }:Props) => {
  const [trigger, setTrigger] = useState(false);
  const functionWrapper = () => setTrigger(!trigger);
  return (
    <Wrapper>
      <Switcher>
        <FakeInput type="checkbox" defaultChecked={isOn || trigger} onChange={onClick || functionWrapper} />
        <Toggle />
      </Switcher>
      {label && <Text size="M-Regular">{label}</Text>}
    </Wrapper>

  );
};
