import React from 'react';
import { useTheme } from 'styled-components';
import {
  AllIcon, CopyStandard, ImageIcon, LinkIcon, TelegramStandard,
} from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { MeatballContainer, MeatballRow } from './feedPageMeatballMenu.styles';
import { MeatballMenuProps } from './types';

export const FeedPageMeatballMenu = ({
  goToItem, share, openSeaLink,
}: MeatballMenuProps) => {
  const theme: any = useTheme();
  return (
    <MeatballContainer>
      <MeatballRow>
        <IconWrapper
          fill={theme.textShades.SHADE_MINUS_2}
          icon={<ImageIcon />}
        />
        <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Go to Item Page</Text>
        <IconWrapper
          height="18px"
          width="18px"
          fill={theme.textShades.SHADE_MINUS_2}
          onClick={goToItem}
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
      <MeatballRow>
        <IconWrapper
          fill={theme.textShades.SHADE_MINUS_2}
          icon={<TelegramStandard />}
        />
        <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Go to Item Page</Text>
        <IconWrapper
          height="18px"
          width="18px"
          fill={theme.textShades.SHADE_MINUS_2}
          onClick={share}
          icon={<CopyStandard />}
          cursor="pointer"
        />
      </MeatballRow>
    </MeatballContainer>
  );
};
