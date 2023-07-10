import React, { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';
import { Text } from '../texts/text';

export interface ThemeToggleProps {
  isOn: boolean;
  onClick: ChangeEventHandler<HTMLInputElement>;
  expanded: boolean;
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Switcher = styled.label<{ expanded: boolean }>`
  position: relative;
  display: inline-block;
  width: ${({ expanded }) => (expanded ? '60px' : '38px')};
  height: 22px;
`;
const Toggle = styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme, isOn }) => (!isOn ? theme.colors.MAIN_BLUE : theme.colors.SHADE_PLUS_1)};
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 4px;
    background: ${({ theme }) => theme.colors.WHITE};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const FakeInput = styled.input<{ isOn: boolean, expanded: boolean }>`
  opacity: 0;
  width: 0;
  height: 0;

  &:hover + ${Toggle} {
    background: ${({ theme, isOn }) => (!isOn ? theme.colors.LIGHT_BLUE : theme.colors.SHADE_MINUS_2)};
  }

  &:hover:checked + ${Toggle}:before {
    background: ${({ theme }) => theme.colors.SHADE_MINUS_2};
  }

  &:checked + ${Toggle}:before {
    transform: ${({ expanded }) => `translateX(${expanded ? '34px' : '16px'})`};
    background: ${({ theme }) => theme.colors.SHADE_PLUS_1};
    box-shadow:  ${({ theme }) => `inset -6px -4px 0px 0px ${theme.colors.WHITE}`};
  }
`;
export const ThemeToggle = ({
  onClick, isOn, expanded,
}:ThemeToggleProps) => (
  <Wrapper>
    <Switcher expanded={expanded}>
      <FakeInput expanded={expanded} isOn={isOn} type="checkbox" defaultChecked={isOn} onChange={onClick} />
      <Toggle isOn={isOn} />
    </Switcher>
    {expanded && <Text size={['12-Regular']} textColor={['SHADE_MINUS_2']}>{isOn ? 'Dark' : 'Light'}</Text>}
  </Wrapper>
);
