import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../texts/text';
import { TagProps } from './types';
import {
  CustomTag, TagTwo, TagThree, TagFour, TagFive, TagSix,
} from './tag.styles';

export const Tag = ({
  name, isOn, type, id, onClick,
}: TagProps) => {
  const theme: any = useTheme();
  const textColour = isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3;
  switch (type) {
    case 'tag2':
      return (
        <TagTwo onClick={onClick} key={id} isOn={isOn} type={type}>
          <Text size="S-Bold" color={textColour}>{name}</Text>
        </TagTwo>
      );
    case 'tag3':
      return (
        <TagThree onClick={onClick} key={id} isOn={isOn} type={type}>
          <Text size="S-Bold" color={textColour}>{name}</Text>
        </TagThree>
      );
    case 'tag4':
      return (
        <TagFour onClick={onClick} key={id} isOn={isOn} type={type}>
          <Text size="S-Bold" color={textColour}>{name}</Text>
        </TagFour>
      );
    case 'tag5':
      return (
        <TagFive onClick={onClick} key={id} isOn={isOn} type={type}>
          <Text size="S-Bold" color={textColour}>{name}</Text>
        </TagFive>
      );
    case 'tag6':
      return (
        <TagSix onClick={onClick} key={id} isOn={isOn} type={type}>
          <Text size="S-Bold" color={textColour}>{name}</Text>
        </TagSix>
      );

    default:
      return (
        <CustomTag onClick={onClick} key={id} isOn={isOn} type={type}>
          <Text size="S-Bold" color={isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}>{name}</Text>
        </CustomTag>
      );
  }
};
