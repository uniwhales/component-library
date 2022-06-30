import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { HintsAndHovers } from '../../../organisms/hintsAndHovers/hintsAndHovers';
import { Theme } from '../../../theme';
import { LogoUrlBase } from '../../../utils/constants';
import { abbreviateNumber } from '../../../utils/format';
import { ButtonAtom } from '../../buttons/button';
import {
  ChevronDownIcon,
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
  TokenIcon,
  StyledLink,
  ValueContainer,
  CenterContent,
  LinkWrapper,
  Image,
} from '../feedCardItem.styles';
import { getFormattedText } from '../helpers/formattedText';
import { chainIcons } from '../helpers/icons';
import { SwapTransactionProps } from '../types';

export const SwapTransactionCard = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: SwapTransactionProps,
) => {
  const theme = useTheme() as typeof Theme;
  const [hover, setHover] = useState<boolean>(false);
  const {
    hash,
    chain,
    dex,
    tx_type: txType,
    token0_amount: token0Amount,
    token0_amount_usd: token0AmountUsd,
    token0_address: token0Address,
    token1_amount: token1Amount,
    token1_amount_usd: token1AmountUsd,
    token1_address: token1Address,
    token0_symbol: token0Symbol,
    token1_symbol: token1Symbol,
  } = txData;

  // TODO: Add all tx types here
  const txTypePreposition = 'to';
  // calculate hover states
  const showSecondaryActionArea = (hover && !isMulti) || (hover && isMulti && !isFirst);
  const showChevron = isMulti && isFirst;
  // Meatball menu items
  const goToItem = `https://etherscan.io/tx/${hash}`;
  const shareTransaction = () => navigator.clipboard.writeText(`https://etherscan.io/tx/${hash}`);
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
          largeIcon={<Image alt="dex logo" src={`https://dttz74tuoangs.cloudfront.net/${dex}.jpg`} />}
          bgColor={theme.containerAndCardShades.SHADE_PLUS_2}
        />

        <TxTypeContainer>
          <Text size="S-Regular">{txType}</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{dex}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent>
        <XYPartyContent>
          <ValueContainer>
            <HintsAndHovers
              id={token0Amount.toString()}
              hint={token0Amount.toString()}
              icon={(<Text size="S-Bold" color={theme.textShades.SHADE_MINUS_3}>{abbreviateNumber(token0Amount)}</Text>)}
            />
            <HintsAndHovers
              id={token0AmountUsd.toString()}
              hint={dollarPopover}
              icon={getFormattedText(token0AmountUsd, 'S-Regular')}
            />
          </ValueContainer>
          <TokenIcon
            baseUrl={LogoUrlBase}
            tokenAddress={token0Address.toLowerCase()}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token0Symbol}</Text>
        </XYPartyContent>
        <div>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </div>
        <XYPartyContent>
          <ValueContainer>
            <HintsAndHovers
              id={token1Amount.toString()}
              hint={token1Amount.toString()}
              icon={(<Text size="S-Bold" color={theme.textShades.SHADE_MINUS_3}>{abbreviateNumber(token1Amount)}</Text>)}
            />
            <HintsAndHovers
              id={token1AmountUsd.toString()}
              hint={dollarPopover}
              icon={getFormattedText(token1AmountUsd, 'S-Regular')}
            />
          </ValueContainer>
          <TokenIcon
            baseUrl={LogoUrlBase}
            tokenAddress={token1Address.toLowerCase()}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{token1Symbol}</Text>
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
              share={shareTransaction}
            />
            <ButtonAtom buttonVariant="tiny_action" onClick={() => { }}>
              <IconWrapper height="14px" width="14px" cursor="pointer" icon={<TwitterColor />} />
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
