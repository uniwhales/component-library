import React, { useState } from 'react';
import { Styled } from '../../theme';

export interface Props {
  isOn?: boolean;
  onClick?: () => void;
}
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
  background-color: ${(props) => props.theme.colors.neutral.SHADE_0};
  transition: 0.4s;
  border-radius: 34px;
  :before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.theme.colors.primary.UWL_BLUE};
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
    background-color: ${(props) => props.theme.colors.system.WHITE};
  }
`;
export const ToggleAtom = ({ isOn, onClick }:Props) => {
  const [trigger, setTrigger] = useState(false);
  const functionWrapper = () => setTrigger(!trigger);
  return (
    <Switcher>
      <FakeInput type="checkbox" defaultChecked={isOn || trigger} onChange={onClick || functionWrapper} />
      <Toggle />
    </Switcher>
  );
};
