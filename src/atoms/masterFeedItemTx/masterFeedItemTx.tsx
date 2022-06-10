import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  ChevronDownIcon,
  LinkIcon, Meatball, TwitterColor,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { StarIcon } from '../icons/placeholder/StarIcon';
import { Text } from '../texts/text';
import {
  CenterContentContainer,
  HoverItemsContainer,
  MasterContainer,
  TxTypeContainer,
  TxTypeWrapper,
  XPartyContent,
  YPartyContent,
  ChevronButton,
  IconContainer,
  ChainIcon,
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
        <IconContainer>
          <IconWrapper height="28px" width="28px" icon={<StarIcon />} />
          <ChainIcon height="14px" width="14px" icon={<StarIcon />} />
        </IconContainer>
        <TxTypeContainer>
          <Text size="S-Regular">Tx Type</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>Platform</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContentContainer>
        <XPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>0000</Text>
          <IconWrapper height="32px" width="32px" icon={<StarIcon />} />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>($00000)</Text>
        </XPartyContent>
        <Text size="S-Regular" color={theme.colors.system.WHITE}>text</Text>
        <YPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>0000</Text>
          <IconWrapper height="32px" width="32px" icon={<StarIcon />} />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>($00000)</Text>
        </YPartyContent>
        <IconWrapper cursor="pointer" height="16px" width="16px" fill={theme.contrastColor.LOW_CONTRAST} icon={<LinkIcon />} />
      </CenterContentContainer>

      <HoverItemsContainer>
        {hover && !isMulti && (
          <>
            <IconWrapper cursor="pointer" icon={<Meatball />} />
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
