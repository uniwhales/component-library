import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { HintsAndHovers } from '../../organisms/hintsAndHovers/hintsAndHovers';
import { Theme } from '../../theme';
import { LogoUrlBase } from '../../utils/constants';
import {
  ChevronDownIcon,
  LinkIcon,
  TwitterColor,
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
  TokenIcon,
  StyledLink,
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
  const {
    hash,
    chain,
    dex,
    tx_type: txType,
    token0_amount: token0Amount,
    token0_address: token0Address,
    token1_amount: token1Amount,
    token1_address: token1Address,
    token0_symbol: token0Symbol,
    token1_symbol: token1Symbol,
  } = txData;
  const token0Usd = `($${token0Amount.toFixed(2)})`;
  const token1Usd = `($${token1Amount.toFixed(2)})`;
  // TODO: Add all tx types here
  const txTypePreposition = txType === 'swap' ? 'to' : 'text';
  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={hash}
      isMulti={isMulti}
    >
      <TxTypeWrapper>
        <IconContainer>
          <ChainIcon><IconWrapper icon={chainIcons[chain]} height="14px" width="14px" /></ChainIcon>
          <DexIcon><IconWrapper icon={dexIcons[dex]} height="28px" width="28px" /></DexIcon>
        </IconContainer>
        <TxTypeContainer>
          <Text size="S-Regular">{txType}</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{dex}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContentContainer>
        <XPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>{Number(token0Amount).toFixed(4)}</Text>
          <HintsAndHovers
            id={`${token0Address}${hash}`}
            place="top"
            hint={token0Symbol}
            icon={(
              <TokenIcon
                baseUrl={LogoUrlBase}
                tokenAddress={token0Address.toLowerCase()}
              />
            )}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token0Usd}</Text>
        </XPartyContent>
        <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        <YPartyContent>
          <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>{Number(token1Amount).toFixed(4)}</Text>
          <HintsAndHovers
            id={`${token1Address}${hash}`}
            place="top"
            hint={token1Symbol}
            icon={(
              <TokenIcon
                baseUrl={LogoUrlBase}
                tokenAddress={token1Address.toLowerCase()}
              />
            )}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token1Usd}</Text>
        </YPartyContent>
      </CenterContentContainer>
      <StyledLink
        href={`https://etherscan.io/tx/${hash}`}
        rel="noreferrer"
        target="_blank"
      >
        <LinkIcon />
      </StyledLink>
      <SecondaryActionContainer>
        {hover && !isMulti && (
          <HoverItemsContainer>
            <FeedPageMeatballMenu
              goToItem={() => console.log('go to item')}
              share={() => navigator.clipboard.writeText(`https://etherscan.io/tx/${hash}`)}
              openSeaLink={`https://etherscan.io/tx/${hash}`}
            />
            <IconWrapper cursor="pointer" icon={<TwitterColor />} />
          </HoverItemsContainer>
        )}
        {hover && isMulti && !isFirst && (
          <HoverItemsContainer>
            <FeedPageMeatballMenu
              goToItem={() => console.log('go to item')}
              share={() => navigator.clipboard.writeText(`https://etherscan.io/tx/${hash}`)}
              openSeaLink={`https://etherscan.io/tx/${hash}`}
            />
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
