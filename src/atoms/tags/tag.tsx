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
  background: ${(props) => (props.isOn ? props.theme.colors.primary.UWL_BLUE : 'none')};
  border: 1px solid ${(props) => (props.isOn ? 'transparent' : props.theme.colors.primary.UWL_BLUE)}
`;
const TagTwo = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.secondary.PURPLE : 'none')};
    border: 1px solid ${(props) => (props.isOn ? 'transparent' : props.theme.colors.secondary.PURPLE)}
`;
const TagThree = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.secondary.TANGY : 'none')};
    border: 1px solid ${(props) => (props.isOn ? 'transparent' : props.theme.colors.secondary.TANGY)}
`;
const TagFour = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.secondary.FUSCHIA : 'none')};
    border: 1px solid ${(props) => (props.isOn ? 'transparent' : props.theme.colors.secondary.TANGY)}
`;
const TagFive = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.primary.WATER_BLUE : 'none')};
  border: 1px solid ${(props) => (props.isOn ? 'transparent' : props.theme.colors.primary.WATER_BLUE)}
`;
const TagSix = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.primary.DARK_BLUE : 'none')};
  border: 1px solid ${(props) => (props.isOn ? 'transparent' : props.theme.colors.primary.DARK_BLUE)}
`;

export const Tag = ({
  name, isOn, type, id, onClick,
}:TagProps) => {
  const theme:any = useTheme();
  switch (type) {
    case 'tag2':
      return (
        <TagTwo onClick={() => onClick(id)} key={id} isOn={isOn} type={type}>
          <Text size="S-Regular" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
        </TagTwo>
      );
    case 'tag3':
      return (
        <TagThree onClick={() => onClick(id)} key={id} isOn={isOn} type={type}>
          <Text size="S-Regular" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
        </TagThree>
      );
    case 'tag4':
      return (
        <TagFour onClick={() => onClick(id)} key={id} isOn={isOn} type={type}>
          <Text size="S-Regular" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
        </TagFour>
      );
    case 'tag5':
      return (
        <TagFive onClick={() => onClick(id)} key={id} isOn={isOn} type={type}>
          <Text size="S-Regular" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
        </TagFive>
      );
    case 'tag6':
      return (
        <TagSix onClick={() => onClick(id)} key={id} isOn={isOn} type={type}>
          <Text size="S-Regular" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
        </TagSix>
      );

    default:
      return (
        <CustomTag onClick={() => onClick(id)} key={id} isOn={isOn} type={type}>
          <Text size="S-Regular" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
        </CustomTag>
      );
  }
};
