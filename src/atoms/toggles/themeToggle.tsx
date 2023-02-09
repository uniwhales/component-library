import React, { ChangeEventHandler } from 'react';
import { Styled } from '../../theme';

export interface ThemeToggleProps {
  isOn: boolean;
  onClick: ChangeEventHandler<HTMLInputElement>;
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
const Toggle = Styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme, isOn }) => (!isOn ? theme.colors.primary.MAIN_BLUE : theme.textShades.SHADE_MINUS_1)};
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
const FakeInput = Styled.input<{ isOn: boolean }>`
  opacity: 0;
  width: 0;
  height: 0;

  :hover + ${Toggle} {
    background: ${({ theme, isOn }) => (!isOn ? theme.colors.primary.LIGHT_BLUE : theme.textShades.SHADE_MINUS_2)};
  }

  :hover:checked + ${Toggle}:before {
    background: ${({ theme }) => theme.textShades.SHADE_MINUS_2};
  }

  :checked + ${Toggle}:before {
    transform: translateX(22px);
    background: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
    box-shadow:  ${({ theme }) => `inset 8px -4px 0px 0px ${theme.colors.system.WHITE}`};
  }
`;
export const ThemeToggle = ({
  onClick, isOn,
}:ThemeToggleProps) => (
  <Wrapper>
    <Switcher>
      <FakeInput isOn={isOn} type="checkbox" defaultChecked={isOn} onChange={onClick} />
      <Toggle isOn={isOn} />
    </Switcher>
  </Wrapper>
);
