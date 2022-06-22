import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { Theme } from '../../theme';
import { LogoUrlBase } from '../../utils/constants';
import { ButtonAtom } from '../buttons/button';
import {
  ChevronDownIcon,
  LinkIcon,
  TwitterColor,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import {
  HoverItemsContainer,
  MasterContainer,
  TxTypeContainer,
  TxTypeWrapper,
  XYPartyContent,
  ChevronButton,
  IconContainer,
  SecondaryActionContainer,
  ChainIcon,
  DexIcon,
  TokenIcon,
  StyledLink,
  ValueContainer,
  CenterContent,
  PrepositionContainer,
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
  // calculate hover states
  const showSecondaryActionArea = (hover && !isMulti) || (hover && isMulti && !isFirst);
  const showChevron = isMulti && isFirst;
  // Meatball menu items
  const goToItem = `https://etherscan.io/tx/${hash}`;
  const shareTransaction = () => navigator.clipboard.writeText(`https://etherscan.io/tx/${hash}`);
  const goToOpensea = `https://etherscan.io/tx/${hash}`;
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
      <CenterContent>
        <XYPartyContent>
          <ValueContainer>
            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_3}>{Number(token0Amount).toFixed(4)}</Text>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token0Usd}</Text>
          </ValueContainer>
          <TokenIcon
            baseUrl={LogoUrlBase}
            tokenAddress={token0Address.toLowerCase()}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token0Symbol}</Text>
        </XYPartyContent>
        <PrepositionContainer>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </PrepositionContainer>
        <XYPartyContent>
          <ValueContainer>
            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_3}>{Number(token1Amount).toFixed(4)}</Text>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token1Usd}</Text>
          </ValueContainer>
          <TokenIcon
            baseUrl={LogoUrlBase}
            tokenAddress={token1Address.toLowerCase()}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token1Symbol}</Text>
        </XYPartyContent>
        {hover && (
          <StyledLink
            href={goToItem}
            rel="noreferrer"
            target="_blank"
          >
            <LinkIcon />
          </StyledLink>
        )}
      </CenterContent>

      <SecondaryActionContainer>
        {!hover && (
          <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_1}>00 min ago</Text>
        )}
        {showSecondaryActionArea && (
          <HoverItemsContainer>
            <FeedPageMeatballMenu
              itemLink={goToItem}
              share={shareTransaction}
              openSeaLink={goToOpensea}
            />
            <ButtonAtom buttonVariant="special_tiny_round" onClick={() => { }}>
              <IconWrapper cursor="pointer" icon={<TwitterColor />} />
            </ButtonAtom>

          </HoverItemsContainer>
        )}
        {showChevron && (
          <ChevronButton isOpen={isOpen}>
            <IconWrapper height="13px" width="13px" onClick={handleToggle} cursor="pointer" icon={<ChevronDownIcon />} />
          </ChevronButton>
        )}
      </SecondaryActionContainer>
    </MasterContainer>
  );
};
