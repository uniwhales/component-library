import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { Theme } from '../../theme';
import { ButtonAtom } from '../buttons/button';
import {
  ChevronDownIcon,
  ImageIcon,
  LinkIcon,
  StarIcon,
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
  IconContainer,
  SecondaryActionContainer,
  ChainIcon,
  DexIcon,
  StyledLink,
  ValueContainer,
  CenterContent,
  PrepositionContainer,
  NftImage,
  NftValues,
} from './feedCardItem.styles';
import { chainIcons } from './icons';
import { NftTransferTransactionProps } from './types';

export const NftTransferCard = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: NftTransferTransactionProps,
) => {
  const theme = useTheme() as typeof Theme;
  const [hover, setHover] = useState<boolean>(false);
  const {
    hash,
    chain,
    wallet,
    to,
    tx_type: txType,
    token_id: tokenId,
    contract_type: contractType,
    fee,
    symbol,
  } = txData;
  const isBuy = wallet === to;
  // TODO: Add all tx types here
  const txTypePreposition = txType === 'nft_transfer' ? 'for' : 'text';
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
        <OverlappedIcon smallIcon={chainIcons[chain]} largeIcon={<StarIcon />} />
        <TxTypeContainer>
          <Text size="S-Regular">{txType}</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>Platform</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent>
        <XYPartyContent>
          <ValueContainer />
          <NftImage>
            <IconWrapper icon={<ImageIcon />} height="32px" width="32px" />
          </NftImage>
          <NftValues>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{contractType.toUpperCase()}</Text>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{tokenId}</Text>
          </NftValues>

        </XYPartyContent>
        <PrepositionContainer>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </PrepositionContainer>
        <XYPartyContent>
          <ValueContainer>
            <Text size="S-Regular" color={isBuy ? theme.textShades.SHADE_MINUS_3 : theme.colors.primary.UWL_BLUE}>
              <>
                {isBuy ? '+' : '-'}
                {fee}
              </>
            </Text>
            <Text size="S-Regular" color={isBuy ? theme.textShades.SHADE_MINUS_2 : theme.colors.primary.UWL_BLUE}>
              <>
                {' '}
                {fee}
              </>
            </Text>
          </ValueContainer>
          <IconWrapper height="32px" width="32px" icon={<StarIcon />} />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
            {symbol}
          </Text>
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
