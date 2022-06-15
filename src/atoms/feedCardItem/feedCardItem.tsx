import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../theme';
import { LogoUrlBase } from '../../utils/constants';
import {
  ChevronDownIcon,
  LinkIcon, Meatball, TwitterColor,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
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
  SecondaryActionContainer,
  ChainIcon,
  DexIcon,
} from './feedCardItem.styles';
import { chainIcons, dexIcons } from './icons';
import { FeedCardItemProps } from './types';

export const FeedCardItem = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: FeedCardItemProps,
) => {
  const theme = useTheme() as typeof Theme;
  const [hover, setHover] = useState<boolean>(false);
  const token0Usd = `($${txData.token0_amount_usd.toFixed(2)})`;
  const token1Usd = `($${txData.token1_amount_usd.toFixed(2)})`;
  // TODO: Add all tx types here
  const txTypePreposition = txData.tx_type === 'swap' ? 'to' : 'text';
  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={txData.hash}
      isMulti={isMulti}
    >
      {console.log('hello')}
      <TxTypeWrapper>
        <IconContainer>
          <ChainIcon><IconWrapper icon={(chainIcons as any)[txData.chain]} height="14px" width="14px" /></ChainIcon>
          <DexIcon><IconWrapper icon={(dexIcons as any)[txData.dex]} height="28px" width="28px" /></DexIcon>
        </IconContainer>
        <TxTypeContainer>
          <Text size="S-Regular">{txData.tx_type}</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{txData.dex}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContentContainer>
        <XPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>{Number(txData.token0_amount).toFixed(4)}</Text>
          <div
            style={{
              height: 32,
              width: 32,
              backgroundImage: `url(${LogoUrlBase}${txData.token0_address.toLowerCase()}.jpg)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
            }}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token0Usd}</Text>
        </XPartyContent>
        <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        <YPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>{Number(txData.token1_amount).toFixed(4)}</Text>
          <div
            style={{
              height: 32,
              width: 32,
              backgroundImage: `url(${LogoUrlBase}${txData.token1_address.toLowerCase()}.jpg)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
            }}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token1Usd}</Text>
        </YPartyContent>

      </CenterContentContainer>
      <a
        href={`https://etherscan.io/tx/${txData.hash}`}
        rel="noreferrer"
        target="_blank"
      >
        <IconWrapper cursor="pointer" height="16px" width="16px" fill={theme.contrastColor.LOW_CONTRAST} icon={<LinkIcon />} />
      </a>
      <SecondaryActionContainer>
        {hover && !isMulti && (
          <HoverItemsContainer>
            <IconWrapper cursor="pointer" icon={<Meatball />} />
            <IconWrapper cursor="pointer" icon={<TwitterColor />} />
          </HoverItemsContainer>
        )}
        {hover && isMulti && !isFirst && (
          <HoverItemsContainer>
            <IconWrapper cursor="pointer" icon={<Meatball />} />
            <IconWrapper cursor="pointer" icon={<TwitterColor />} />
          </HoverItemsContainer>
        )}
        {isMulti && isFirst && (
          <ChevronButton isOpen={isOpen}>
            <IconWrapper onClick={handleToggle} cursor="pointer" icon={<ChevronDownIcon />} />
          </ChevronButton>
        )}
      </SecondaryActionContainer>
    </MasterContainer>
  );
};
