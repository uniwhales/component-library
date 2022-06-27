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
import { OverlappedIcon } from '../overlappedIcon/overlappedIcon';
import { Text } from '../texts/text';
import {
  HoverItemsContainer,
  MasterContainer,
  TxTypeContainer,
  TxTypeWrapper,
  XYPartyContent,
  ChevronButton,
  SecondaryActionContainer,
  StyledLink,
  ValueContainer,
  CenterContent,
  PrepositionContainer,
  LpOverlappedToken,
  LpTokenIcon,
} from './feedCardItem.styles';
import { chainIcons, dexIcons } from './icons';
import { LpPoolProps } from './types';

export const LiquidityTransactionCard = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: LpPoolProps,
) => {
  const theme = useTheme() as typeof Theme;
  const [hover, setHover] = useState<boolean>(false);
  const {
    hash,
    chain,
    dex,
    token0_address: token0Address,
    token1_address: token1Address,
    token0_amount: token0Amount,
    token1_amount: token1Amount,
    token1_amount_usd: token1AmountUsd,
    type,
  } = txData;
  const isAdd = type === 'add';
  // TODO: Add all tx types here
  const txTypePreposition = 'total';
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
        <OverlappedIcon
          smallIcon={chainIcons[chain]}
          largeIcon={dexIcons[dex]}
          bgColor={theme.containerAndCardShades.SHADE_PLUS_2}
        />
        <TxTypeContainer>
          <Text size={isAdd ? 'S-Regular' : 'XS-Regular'}>{isAdd ? 'Add Liquidity' : 'Remove Liquidity'}</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{dex}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent>
        <XYPartyContent>
          <ValueContainer>
            <Text size="S-Bold" color={isAdd ? theme.colors.system.GREEN : theme.colors.system.RED}>
              {token0Amount.toFixed(2)}
            </Text>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
              {token1Amount.toFixed(2)}
            </Text>
          </ValueContainer>
          <LpOverlappedToken>
            <LpTokenIcon
              baseUrl={LogoUrlBase}
              tokenAddress={token0Address.toLowerCase()}
            />
            <LpTokenIcon
              baseUrl={LogoUrlBase}
              tokenAddress={token1Address.toLowerCase()}
            />
          </LpOverlappedToken>

        </XYPartyContent>
        <PrepositionContainer>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </PrepositionContainer>
        <XYPartyContent>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{`($${token1AmountUsd})`}</Text>

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
