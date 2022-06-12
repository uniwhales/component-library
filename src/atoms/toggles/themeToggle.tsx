import React from 'react';
import { Styled } from '../../theme';

export interface ThemeToggleProps {
  isOn: boolean;
  onClick: () => void;
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
const Toggle = Styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.containerAndCardShades.NEUTRAL_SHADE_0};
  border-radius: 34px;
  :before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background: ${({ theme }) => theme.colors.system.WHITE};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const FakeInput = Styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :hover + ${Toggle} {
    background: ${({ theme }) => theme.gradients.primary.BLURPLE_HIGHLIGHTED};
  }
  
  :hover:checked + ${Toggle}:before {
    background: ${({ theme }) => theme.gradients.primary.BLURPLE_HIGHLIGHTED};
  }
  
  :checked + ${Toggle}:before {
    transform: translateX(22px);
    background: ${({ theme }) => theme.containerAndCardShades.NEUTRAL_SHADE_0};
    box-shadow:  ${({ theme }) => `inset 8px -4px 0px 0px ${theme.colors.system.WHITE}`};
  }
`;
export const ThemeToggle = ({
  onClick, isOn,
}:ThemeToggleProps) => (
  <Wrapper>
    <Switcher>
      <FakeInput type="checkbox" defaultChecked={isOn} onChange={onClick} />
      <Toggle />
    </Switcher>
  </Wrapper>
);
