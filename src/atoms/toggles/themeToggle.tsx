import React, { ChangeEventHandler } from 'react';
import { localTheme, Styled } from '../../theme';
import { Text } from '../texts/text';

export interface ThemeToggleProps {
  isOn: boolean;
  onClick: ChangeEventHandler<HTMLInputElement>;
  expanded: boolean;
}
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Switcher = Styled.label<{ expanded: boolean }>`
  position: relative;
  display: inline-block;
  width: ${({ expanded }) => (expanded ? '60px' : '38px')};
  height: 22px;
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
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 4px;
    background: ${({ theme }) => theme.colors.system.WHITE};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const FakeInput = Styled.input<{ isOn: boolean, expanded: boolean }>`
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
    transform: ${({ expanded }) => `translateX(${expanded ? '36px' : '16px'})`};
    background: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
    box-shadow:  ${({ theme }) => `inset -6px -4px 0px 0px ${theme.colors.system.WHITE}`};
  }
`;
export const ThemeToggle = ({
  onClick, isOn, expanded,
}:ThemeToggleProps) => {
  const theme = localTheme();
  return (
    <Wrapper>
      {expanded && <Text size="Caption-Regular" color={theme.textShades.SHADE_MINUS_2}>{isOn ? 'Dark' : 'Light'}</Text>}
      <Switcher expanded={expanded}>
        <FakeInput expanded={expanded} isOn={isOn} type="checkbox" defaultChecked={isOn} onChange={onClick} />
        <Toggle isOn={isOn} />
      </Switcher>
    </Wrapper>
  );
};
