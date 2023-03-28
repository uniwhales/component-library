import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../texts/text';
import { TagProps } from './types';
import {
  CustomTag,
} from './tag.styles';

export const Tag = ({
  children, isOn, onClick, tabIndex, width, fontSize,
}: TagProps) => {
  const theme: any = useTheme();
  const textColour = isOn ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3;

  return (
    <CustomTag
      width={width}
      onClick={onClick}
      key={tabIndex}
      isOn={isOn}
      tabIndex={tabIndex}
    >
      <Text size={fontSize ?? '14-Bold'} color={textColour}>{children}</Text>
    </CustomTag>
  );
};
