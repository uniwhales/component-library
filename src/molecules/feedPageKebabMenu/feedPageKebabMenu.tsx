import React from 'react';
import { useTheme } from 'styled-components';
import { CrossIcon, NoticeIcon, SettingsStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { Theme } from '../../theme';
import { KebabContainer, KebabRow } from './feedPageKebabMenu.styles';
import { FeedPageKebabMenuProps } from './types';

export const FeedPageKebabMenu = ({ onPause, onRemove, onConfigure }: FeedPageKebabMenuProps) => {
  const theme = useTheme() as typeof Theme;
  return (
    <KebabContainer>
      <KebabRow onClick={onPause}>
        <IconWrapper
          fill={theme.textShades.SHADE_MINUS_2}
          icon={<NoticeIcon />}
        />
        <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Pause Item</Text>
      </KebabRow>
      <KebabRow onClick={onRemove}>
        <IconWrapper
          fill={theme.textShades.SHADE_MINUS_2}
          icon={<CrossIcon />}
        />
        <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Pause Item</Text>
      </KebabRow>
      <KebabRow onClick={onConfigure}>
        <IconWrapper
          fill={theme.textShades.SHADE_MINUS_2}
          icon={<SettingsStandard />}
        />
        <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Pause Item</Text>
      </KebabRow>
    </KebabContainer>
  );
};
