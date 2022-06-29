import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { HintsAndHovers } from '../../../organisms/hintsAndHovers/hintsAndHovers';
import { Theme } from '../../../theme';
import { LogoUrlBase } from '../../../utils/constants';
import { ButtonAtom } from '../../buttons/button';
import {
  ChevronDownIcon,
  ImageIcon,
  LinkIcon,
  TwitterColor,
} from '../../icons';
import { IconWrapper } from '../../icons/iconWrapper';
import { OverlappedIcon } from '../../overlappedIcon/overlappedIcon';
import { Text } from '../../texts/text';
import { dollarPopover } from '../dollarPopover';
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
  NftImage,
  NftValues,
  TokenIcon,
  LinkWrapper,
} from '../feedCardItem.styles';
import { getFormattedText } from '../helpers/formattedText';
import { chainIcons } from '../helpers/icons';
import { NftTradeProps } from '../types';

export const NftTradeCard = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: NftTradeProps,
) => {
  const theme = useTheme() as typeof Theme;
  const [hover, setHover] = useState<boolean>(false);
  const {
    tx_hash: txHash,
    chain,
    action,
    marketplace,
    nft_symbol: nftSymbol,
    nft_token_id: nftTokenId,
    from,
    symbol,
    price,
  } = txData;
  const isBuy = action === 'buy';
  // TODO: Add all tx types here
  const txTypePreposition = 'for';
  // calculate hover states
  const showSecondaryActionArea = (hover && !isMulti) || (hover && isMulti && !isFirst);
  const showChevron = isMulti && isFirst;
  // Meatball menu items
  const goToItem = `https://etherscan.io/tx/${txHash}`;
  const shareTransaction = () => navigator.clipboard.writeText(`https://etherscan.io/tx/${txHash}`);
  const goToOpensea = `https://etherscan.io/tx/${txHash}`;
  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={txHash}
      isMulti={isMulti}
    >
      <TxTypeWrapper>
        <OverlappedIcon
          bgColor={theme.containerAndCardShades.SHADE_PLUS_2}
          smallIcon={chainIcons[chain]}
          largeIcon={<img alt="platform logo" src={`https://dttz74tuoangs.cloudfront.net/${marketplace}.jpg`} />}
        />
        <TxTypeContainer>
          <Text size="S-Regular">{isBuy ? 'Buy' : 'Sell'}</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{marketplace}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent>
        <XYPartyContent>
          <ValueContainer />
          <NftImage>
            <IconWrapper icon={<ImageIcon />} height="26px" width="26px" />
          </NftImage>
          <NftValues>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{nftSymbol}</Text>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{nftTokenId}</Text>
          </NftValues>

        </XYPartyContent>
        <div>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </div>
        <XYPartyContent>
          <ValueContainer>
            <Text size="S-Bold" color={isBuy ? theme.textShades.SHADE_MINUS_3 : theme.colors.primary.UWL_BLUE}>
              <>
                {isBuy ? '+' : '-'}
                {price}
              </>
            </Text>
            <HintsAndHovers
              id="amount"
              hint={dollarPopover}
              icon={getFormattedText(9955999, 'S-Regular')}
            />
          </ValueContainer>
          <TokenIcon
            baseUrl={LogoUrlBase}
            tokenAddress={from.toLowerCase()}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
            {symbol}
          </Text>
        </XYPartyContent>

        <LinkWrapper>
          {hover && (
            <StyledLink
              href={goToItem}
              rel="noreferrer"
              target="_blank"
            >
              <LinkIcon />
            </StyledLink>
          )}
        </LinkWrapper>
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
