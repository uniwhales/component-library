import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../theme';
import { LogoUrlBase } from '../../utils/constants';
import {
  ChevronDownIcon,
  LinkIcon, Meatball, OverlappedIcon, TwitterColor,
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
} from './feedCardItem.styles';
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
  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={Math.random()}
      isMulti={isMulti}
    >
      <TxTypeWrapper>
        <IconContainer>
          <IconWrapper icon={<OverlappedIcon />} />
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
            className="token-image"
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
        <Text size="S-Regular" color={theme.colors.system.WHITE}>text</Text>
        <YPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>{Number(txData.token1_amount).toFixed(4)}</Text>
          <div
            className="token-image"
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
