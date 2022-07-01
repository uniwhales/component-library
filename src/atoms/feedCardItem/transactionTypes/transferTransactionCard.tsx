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
  DownloadStandard,
  LinkIcon,
  TwitterColor,
  UploadStandard,
} from '../../icons';
import { IconWrapper } from '../../icons/iconWrapper';
import { IdenticonComponent } from '../../identicon/Identicon';
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
} from '../feedCardItem.styles';
import { getFormattedText } from '../helpers/formattedText';
import { getTxUrl } from '../helpers/getTxUrl';
import { chainIcons } from '../helpers/icons';
import { timeSince } from '../helpers/timeSince';
import { TransferTransactionProps } from '../types';

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
    tx_hash: txHash,
    chain,
    amount,
    amount_usd: amountUsd,
    to,
    contract_address: contractAddress,
    symbol,
    wallet,
    timestamp,
  } = txData;
  const isSend = wallet === to;

  const txTypePreposition = isSend ? 'to' : 'from';
  const txTypeText = isSend ? 'Send' : 'Receive';
  const showSecondaryActionArea = (hover && !isMulti) || (hover && isMulti && !isFirst);
  const showChevron = isMulti && isFirst;
  const goToItem = getTxUrl(txHash, chain);
  const shareTransaction = () => navigator.clipboard.writeText(getTxUrl(txHash, chain));
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
          largeIcon={isSend ? <UploadStandard /> : <DownloadStandard />}
          largeSize="20px"
          bgColor={theme.gradients.primary.BLURPLE}
        />
        <TxTypeContainer>
          <Text size="S-Regular">{txTypeText}</Text>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent>
        <XYPartyContent>
          <ValueContainer>
            <HintsAndHovers
              id={amount.toString()}
              hint={amount.toString()}
              icon={(<Text size="S-Bold" color={theme.textShades.SHADE_MINUS_3}>{abbreviateNumber(amount)}</Text>)}
            />
            <HintsAndHovers
              id={amountUsd.toString()}
              hint={dollarPopover}
              icon={getFormattedText(amountUsd, 'S-Regular')}
            />
          </ValueContainer>
          <TokenIcon
            baseUrl={LogoUrlBase}
            tokenAddress={contractAddress && contractAddress.toLowerCase()}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{symbol}</Text>
        </XYPartyContent>
        <div>
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_3}>{txTypePreposition}</Text>
        </div>
        <XYPartyContent>
          <IdenticonComponent
            containerSize="32px"
            iconSize={20}
            id={to}
          />
          <HintsAndHovers
            id={to}
            hint={to}
            icon={<Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{`${to.slice(0, 4)}...${to.slice(to.length - 4)}`}</Text>}
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
