import React, { useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  CopyStandard, Meatball, TelegramStandard,
} from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { Theme } from '../../theme';
import { useClickOutside } from '../../utils/useClickOutside';
import {
  Container, IconWithText, MeatballContainer, MeatballRow,
} from './feedPageMeatballMenu.styles';
import { FeedPageMeatballMenuProps } from './types';

export const FeedPageMeatballMenu = ({
  share,
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
          <MeatballRow onClick={share}>
            <IconWithText>
              {' '}
              <IconWrapper
                fill={theme.textShades.SHADE_MINUS_2}
                icon={<TelegramStandard />}
              />
              <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Share</Text>

            </IconWithText>
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
