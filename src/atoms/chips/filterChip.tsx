import React, { MouseEvent } from 'react';
import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';

export type FilterChipProps = {
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
  icon?: JSX.Element;
  isOn: boolean;
  onClick: (id: number, e: MouseEvent<HTMLElement>) => void;
  id: number;
} & Pick<CSSProperties, 'width'>;
const Wrapper = Styled.div<{ isOn: boolean } & Pick<CSSProperties, 'width'>>`
  max-width: ${({ width }) => width ?? 'fit-content'};
  width: ${({ width }) => width};
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
    background: ${(props) => props.theme.colors.primary.MANGO};
    font-weight: 700;
    svg {
      fill: ${(props) => props.theme.textShades.SHADE_MINUS_3};
    }
    p {
      color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
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
  children, icon, isOn, onClick, id, width,
}:FilterChipProps) => (
  <Wrapper isOn={isOn} onClick={(e: MouseEvent<HTMLElement>) => onClick(id, e)} width={width}>
    <Content>
      {icon && <IconWrapper cursor="pointer" icon={icon} />}
      {children}
    </Content>
  </Wrapper>
);
