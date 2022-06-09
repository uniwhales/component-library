import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  ChevronDownIcon,
  LinkIcon, Meatball, OverlappedIcon, TwitterColor,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { StarIcon } from '../icons/placeholder/StarIcon';
import { Text } from '../texts/text';
import {
  CenterContentContainer,
  HoverItemsContainer,
  MasterContainer,
  Spacer,
  TxIconContainer,
  TxTypeContainer,
  TxTypeWrapper,
  XPartyContent,
  YPartyContent,
  ChevronButton,
} from './masterFeedItemTx.styles';
import { MasterFeedItemTxProps } from './types';

export const MasterFeedItemTx = ({ isOpen, isMulti }: MasterFeedItemTxProps) => {
  const theme: any = useTheme();
  const [hover, setHover] = useState<boolean>(false);
  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TxTypeWrapper>
        <TxIconContainer>
          <IconWrapper icon={<OverlappedIcon />} />
        </TxIconContainer>
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
        <IconWrapper cursor="pointer" height="16px" width="16px" fill={theme.contrastColor.LOW_CONTRAST} icon={<LinkIcon />} />
      </CenterContentContainer>

      <HoverItemsContainer>
        {hover && !isMulti && (
          <>
            <IconWrapper cursor="pointer" icon={<Meatball />} />
            <Spacer />
            <IconWrapper cursor="pointer" icon={<TwitterColor />} />
          </>
        )}
      </HoverItemsContainer>
      {isMulti && (
        <ChevronButton isOpen={isOpen}>
          <IconWrapper cursor="pointer" icon={<ChevronDownIcon />} />
        </ChevronButton>
      )}
    </MasterContainer>
  );
};
