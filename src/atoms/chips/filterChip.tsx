import React from 'react';
import { Styled } from '../../theme';
import { Text } from '../texts/text';
import { IconWrapper } from '../icons/iconWrapper';

export interface FilterChipProps {
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
  icon: JSX.Element;
  isOn: boolean;
  onClick: (e:unknown) => void;
  id: number;
}
const Wrapper = Styled.div<{ isOn: boolean }>`
  max-width: fit-content;
  min-width: 79px;
  box-sizing: border-box;
  background: ${({ isOn, theme }) => (isOn
    ? theme.containerAndCardShades.NEUTRAL_SHADE_0 : theme.containerAndCardShades.SHADE_PLUS_2)};
  padding: 4px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.primary.WATER_BLUE};
    font-weight: 700;
    svg {
      fill: white;
    }
    p {
      color: ${(props) => props.theme.colors.system.WHITE};
    }
  }
`;
const Content = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  svg {
    height: 20px;
    width: 20px;
  }
  p{
    color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  }
`;

export const FilterChip = ({
  children, icon, isOn, onClick, id,
}:FilterChipProps) => (
  <Wrapper isOn={isOn} onClick={() => onClick(id)}>
    <Content>
      <IconWrapper icon={icon} />
      <Text size="S-Regular">{children}</Text>
    </Content>
  </Wrapper>
);
