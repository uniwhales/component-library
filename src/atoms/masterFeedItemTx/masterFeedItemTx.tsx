import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  LinkIcon, Meatball, OverlappedIcon, TwitterColor,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { StarIcon } from '../icons/placeholder/StarIcon';
import { Text } from '../texts/text';
import {
  CenterContentContainer,
  HoverItemsContainer,
  MasterContainer, Spacer, TxTypeContainer, TxTypeWrapper, XPartyContent, YPartyContent,
} from './masterFeedItemTx.styles';

export const MasterFeedItemTx = () => {
  const theme: any = useTheme();
  const [hover, setHover] = useState<boolean>(false);
  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TxTypeWrapper>
        <IconWrapper icon={<OverlappedIcon />} />
        <TxTypeContainer>
          <Text size="S-Regular">Tx Type</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>Platform</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContentContainer>
        <XPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>0000</Text>
          <Spacer />
          <IconWrapper height="32px" width="32px" icon={<StarIcon />} />
          <Spacer />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>($00000)</Text>
        </XPartyContent>

        <Text size="S-Regular" color={theme.colors.system.WHITE}>text</Text>
        <YPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>0000</Text>
          <Spacer />
          <IconWrapper height="32px" width="32px" icon={<StarIcon />} />
          <Spacer />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>($00000)</Text>
        </YPartyContent>
        <IconWrapper height="16px" width="16px" fill={theme.contrastColor.LOW_CONTRAST} icon={<LinkIcon />} />
      </CenterContentContainer>
      <HoverItemsContainer>
        {hover && (
          <>
            <IconWrapper icon={<Meatball />} />
            <Spacer />
            <IconWrapper icon={<TwitterColor />} />
          </>
        )}
      </HoverItemsContainer>
    </MasterContainer>
  );
};
