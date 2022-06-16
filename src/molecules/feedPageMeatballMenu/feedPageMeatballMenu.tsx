import React, { useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  AllIcon, CopyStandard, ImageIcon, LinkIcon, Meatball, TelegramStandard,
} from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { Theme } from '../../theme';
import { useClickOutside } from '../../utils/useClickOutside';
import { Container, MeatballContainer, MeatballRow } from './feedPageMeatballMenu.styles';
import { FeedPageMeatballMenuProps } from './types';

export const FeedPageMeatballMenu = ({
  goToItem, share, openSeaLink,
}: FeedPageMeatballMenuProps) => {
  const theme = useTheme() as typeof Theme;
  const [showMenu, setShowMenu] = useState(false);
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setShowMenu(false));
  return (
    <Container ref={clickRef}>
      <IconWrapper
        cursor="pointer"
        onClick={() => setShowMenu(!showMenu)}
        icon={<Meatball />}
      />
      {showMenu && (
        <MeatballContainer>
          <MeatballRow onClick={goToItem}>
            <IconWrapper
              fill={theme.textShades.SHADE_MINUS_2}
              icon={<ImageIcon />}
            />
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Go to Item Page</Text>
            <IconWrapper
              height="18px"
              width="18px"
              fill={theme.textShades.SHADE_MINUS_2}
              icon={<LinkIcon />}
              cursor="pointer"
            />
          </MeatballRow>
          <MeatballRow>
            <IconWrapper
              fill={theme.textShades.SHADE_MINUS_2}
              icon={<AllIcon />}
            />
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">See collection</Text>
            <Text
              color={theme.colors.primary.UWL_BLUE}
              href={openSeaLink}
              size="M-Regular"
              textDecoration="underline"
            >
              open sea
            </Text>
          </MeatballRow>
          <MeatballRow onClick={share}>
            <IconWrapper
              fill={theme.textShades.SHADE_MINUS_2}
              icon={<TelegramStandard />}
            />
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Share</Text>
            <IconWrapper
              height="18px"
              width="18px"
              fill={theme.textShades.SHADE_MINUS_2}
              icon={<CopyStandard />}
              cursor="pointer"
            />
          </MeatballRow>
        </MeatballContainer>
      )}
    </Container>
  );
};
