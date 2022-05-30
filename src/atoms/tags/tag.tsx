import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../texts/text';
import { TagProps } from './types';
import {
  CustomTag,
} from './tag.styles';

export const Tag = ({
  name, isOn, type, id, onClick, tabIndex, borderColor, backgroundColor,
}: TagProps) => {
  const theme: any = useTheme();
  const textColour = isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3;

  const backgroundAndBorderColors = [
    { background: isOn ? theme.colors.primary.UWL_BLUE : 'none', border: `1px solid ${theme.colors.primary.UWL_BLUE}` },

    { background: isOn ? theme.colors.secondary.PURPLE : 'none', border: `1px solid ${theme.colors.secondary.PURPLE}` },

    { background: isOn ? theme.colors.secondary.TANGY : 'none', border: `1px solid ${theme.colors.secondary.TANGY}` },

    { background: isOn ? theme.colors.secondary.FUSCHIA : 'none', border: `1px solid ${theme.colors.secondary.FUSCHIA}` },

    { background: isOn ? theme.colors.primary.WATER_BLUE : 'none', border: `1px solid ${theme.colors.primary.WATER_BLUE}` },

    { background: isOn ? theme.colors.primary.DARK_BLUE : 'none', border: `1px solid ${theme.colors.primary.DARK_BLUE}` },
  ];

  return (
    <CustomTag
      onClick={onClick}
      key={id}
      isOn={isOn}
      type={type}
      tabIndex={tabIndex}
      borderColor={backgroundAndBorderColors[tabIndex % 6].border}
      backgroundColor={backgroundAndBorderColors[tabIndex % 6].background}
    >
      <Text size="S-Bold" color={textColour}>{name}</Text>
    </CustomTag>
  );

  // switch (type) {
  //   case 'tag2':
  //     return (
  //       <TagTwo onClick={onClick} key={id} isOn={isOn} type={type}>
  //         <Text size="S-Bold" color={textColour}>{name}</Text>
  //       </TagTwo>
  //     );
  //   case 'tag3':
  //     return (
  //       <TagThree onClick={onClick} key={id} isOn={isOn} type={type}>
  //         <Text size="S-Bold" color={textColour}>{name}</Text>
  //       </TagThree>
  //     );
  //   case 'tag4':
  //     return (
  //       <TagFour onClick={onClick} key={id} isOn={isOn} type={type}>
  //         <Text size="S-Bold" color={textColour}>{name}</Text>
  //       </TagFour>
  //     );
  //   case 'tag5':
  //     return (
  //       <TagFive onClick={onClick} key={id} isOn={isOn} type={type}>
  //         <Text size="S-Bold" color={textColour}>{name}</Text>
  //       </TagFive>
  //     );
  //   case 'tag6':
  //     return (
  //       <TagSix onClick={onClick} key={id} isOn={isOn} type={type}>
  //         <Text size="S-Bold" color={textColour}>{name}</Text>
  //       </TagSix>
  //     );

  //   default:
  //     return (
  //       <CustomTag onClick={onClick} key={id} isOn={isOn} type={type}>
  //         <Text size="S-Bold" color={isOn ? theme.colors.system.WHITE :
  // theme.textShades.SHADE_MINUS_3}>{name}</Text>
  //       </CustomTag>
  //     );
  // }
};
