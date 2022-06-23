import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { HintsAndHovers } from '../../organisms/hintsAndHovers/hintsAndHovers';
import { Theme } from '../../theme';
import { LogoUrlBase } from '../../utils/constants';
import { ButtonAtom } from '../buttons/button';
import {
  ChevronDownIcon,
  DownloadStandard,
  Identicon,
  LinkIcon,
  TwitterColor,
  UploadStandard,
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
  TokenIcon,
  StyledLink,
  ValueContainer,
  CenterContent,
  PrepositionContainer,
  IdenticonContainer,
} from './feedCardItem.styles';
import { chainIcons } from './icons';
import { TransferTransactionProps } from './types';

export const TransferTransactionCard = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: TransferTransactionProps,
) => {
  const theme = useTheme() as typeof Theme;
  const [hover, setHover] = useState<boolean>(false);
  const {
    hash,
    chain,
    tx_type: txType,
    amount,
    amount_usd: amountUsd,
    to,
    from,
    symbol,
    wallet,
  } = txData;
  const isSend = wallet === to;
  const formatUsdAmount = `($${amountUsd.toFixed(2)})`;

  // TODO: Add all tx types here
  const txTypePreposition = txType === 'transfer' ? 'to' : 'text';
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
          largeIcon={isSend ? <UploadStandard /> : <DownloadStandard />}
          largeSize="20px"
          bgColor={theme.gradients.primary.BLURPLE}
        />
        <TxTypeContainer>
          <Text size="S-Regular">{isSend ? 'Send' : 'Receive'}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent>
        <XYPartyContent>
          <ValueContainer>
            <HintsAndHovers
              id={amount.toString()}
              hint={amount.toString()}
              icon={(<Text size="S-Bold" color={theme.textShades.SHADE_MINUS_3}>{Number(amount).toFixed(4)}</Text>)}
            />
            <HintsAndHovers
              id={amountUsd.toString()}
              hint={amountUsd.toString()}
              icon={(<Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{formatUsdAmount}</Text>)}
            />
          </ValueContainer>
          <TokenIcon
            baseUrl={LogoUrlBase}
            tokenAddress={from.toLowerCase()}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{symbol}</Text>
        </XYPartyContent>
        <PrepositionContainer>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </PrepositionContainer>
        <XYPartyContent>
          <IdenticonContainer>
            <IconWrapper height="20px" width="20px" icon={<Identicon />} />
          </IdenticonContainer>

          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{`${to.slice(0, 4)}...${to.slice(to.length - 4)}`}</Text>
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
