import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { HintsAndHovers } from '../../../organisms/hintsAndHovers/hintsAndHovers';
import { Theme } from '../../../theme';
import { LogoUrlBase } from '../../../utils/constants';
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
  StyledLink,
  ValueContainer,
  CenterContent,
  LpOverlappedToken,
  LpTokenIcon,
  LinkWrapper,
  Image,
} from '../feedCardItem.styles';
import { getFormattedText } from '../helpers/formattedText';
import { getTxUrl } from '../helpers/getTxUrl';
import { chainIcons } from '../helpers/icons';
import { timeSince } from '../helpers/timeSince';
import { LpPoolProps } from '../types';

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
    tx_hash: txHash,
    chain,
    dex,
    token0_address: token0Address,
    token1_address: token1Address,
    token0_amount: token0Amount,
    token1_amount: token1Amount,
    token1_amount_usd: token1AmountUsd,
    type,
    timestamp,
  } = txData;
  const isAdd = type === 'add';
  const txTypePreposition = 'total';
  const txTypeText = isAdd ? 'Add Liquidity' : 'Remove Liquidity';
  const showSecondaryActionArea = (hover && !isMulti) || (hover && isMulti && !isFirst);
  const showChevron = isMulti && isFirst;
  const goToItem = getTxUrl(txHash, chain);
  const shareTransaction = () => navigator.clipboard.writeText(getTxUrl(txHash, chain));

  const token0Val = isAdd ? `+ ${token0Amount.toFixed(2)}` : `- ${token0Amount.toFixed(2)}`;
  const token1Val = isAdd ? `+ ${token0Amount.toFixed(2)}` : `+ ${token1Amount.toFixed(2)}`;

  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={txHash}
      isMulti={isMulti}
    >

      <TxTypeWrapper>
        <OverlappedIcon
          smallIcon={chainIcons[chain]}
          largeIcon={<Image alt="dex logo" src={`https://dttz74tuoangs.cloudfront.net/${dex}.jpg`} />}
          bgColor={theme.containerAndCardShades.SHADE_PLUS_2}
        />
        <TxTypeContainer>
          <Text size={isAdd ? 'S-Regular' : 'XS-Regular'}>{txTypeText}</Text>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{dex}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent>
        <XYPartyContent>
          <ValueContainer>
            <Text size="S-Bold" color={isAdd ? theme.colors.system.GREEN : theme.colors.system.RED}>
              {token0Val}
            </Text>
            <Text size="S-Bold" color={isAdd ? theme.colors.system.GREEN : theme.colors.system.RED}>
              {token1Val}
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
        <div>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </div>
        <XYPartyContent>
          <HintsAndHovers
            id={token1AmountUsd.toString()}
            hint={dollarPopover}
            icon={getFormattedText(token1AmountUsd, 'S-Regular')}
          />

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
          <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_1}>{timeSince(timestamp)}</Text>
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
