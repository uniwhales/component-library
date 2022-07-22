import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../texts/text';
import { TagProps } from './types';
import {
  CustomTag,
} from './tag.styles';

export const Tag = ({
  children, isOn, onClick, tabIndex, width,
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
      width={width}
      onClick={onClick}
      key={tabIndex}
      isOn={isOn}
      tabIndex={tabIndex}
      border={backgroundAndBorderColors[tabIndex % 6].border}
      background={backgroundAndBorderColors[tabIndex % 6].background}
    >
      <Text size="S-Bold" color={textColour}>{children}</Text>
    </CustomTag>
  );
};
