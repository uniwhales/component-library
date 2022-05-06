import React from 'react';
import { useTheme } from 'styled-components';
import { Styled } from '../../theme';
import { Text } from '../texts/text';

export interface TagProps {
  name: string;
  isOn: boolean;
  id: number;
  type: 'tag1' | 'tag2' | 'tag3' | 'tag4' | 'tag5' | 'tag6';
  onClick: any;
}

const CustomTag = Styled.div<{ type: string, isOn:boolean }>`
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
  width: fit-content;
  background: ${(props) => (props.isOn ? props.theme.colors.primary.WATER_BLUE : 'none')};
  border: 1px solid ${(props) => (props.isOn ? 'transparent' : props.theme.colors.primary.WATER_BLUE)}
`;

export const Tag = ({
  name, isOn, type, id, onClick,
}:TagProps) => {
  const theme:any = useTheme();
  return (
    <CustomTag onClick={(e) => onClick(e)} key={id} isOn={isOn} type={type}>
      <Text size="S-Regular" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
    </CustomTag>
  );
};
