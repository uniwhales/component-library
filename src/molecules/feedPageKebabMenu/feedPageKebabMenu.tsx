import React, { useState, useRef } from 'react';
import { useTheme } from 'styled-components';
import {
  CrossIcon, Kebab, NoticeIcon, SettingsStandard,
} from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { Theme } from '../../theme';
import { useClickOutside } from '../../utils/useClickOutside';
import { KebabContainer, KebabRow, Container } from './feedPageKebabMenu.styles';
import { FeedPageKebabMenuProps } from './types';

export const FeedPageKebabMenu = ({ onPause, onRemove, onConfigure }: FeedPageKebabMenuProps) => {
  const theme = useTheme() as typeof Theme;
  const [showMenu, setShowMenu] = useState(false);
  const clickRef = useRef(null);

  useClickOutside(clickRef, () => setShowMenu(false));
  return (
    <Container ref={clickRef}>
      <IconWrapper onClick={() => setShowMenu(!showMenu)} cursor="pointer" icon={<Kebab />} />
      {showMenu && (
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
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Remove Item</Text>
          </KebabRow>
          <KebabRow onClick={onConfigure}>
            <IconWrapper
              fill={theme.textShades.SHADE_MINUS_2}
              icon={<SettingsStandard />}
            />
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Configure Item</Text>
          </KebabRow>
        </KebabContainer>
      )}
    </Container>
  );
};
