import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { PlusStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { FeedCardItem } from '../../atoms/feedCardItem/feedCardItem';
import { Text } from '../../atoms/texts/text';
import { Theme } from '../../theme';
import { getDate } from '../../utils/getDate';
import {
  FeedCardHeader,
  TransactionsWrapper,
  MainCardContent,
  Wrapper,
  DateTime,
  SeeMoreContainer,
  IdenticonWrapper,
} from './feedCard.styles';
import { FeedCardProps } from './types';
import { FeedPageKebabMenu } from '../../molecules/feedPageKebabMenu/feedPageKebabMenu';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
import { TransactionData } from '../../atoms/feedCardItem/types';

export const FeedCard = (
  {
    transactions,
    datetime,
    moreThanFiveTxs,
    onPause,
    onRemove,
    onConfigure,
    wallet,
    label,
  }: FeedCardProps,
) => {
  const theme = useTheme() as typeof Theme;
  const firstItem = transactions[0];
  const firstFiveItems = transactions.slice(0, 5);
  const [
    transactionsToDisplay,
    setTransactionsToDisplay] = useState<TransactionData[]>([firstItem]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (transactionsToDisplay.length === 1) {
      setTransactionsToDisplay(firstFiveItems);
    } else {
      setTransactionsToDisplay([firstItem]);
    }
  };

  const showAllTransactions = () => {
    setTransactionsToDisplay(transactions);
  };

  return (
    <Wrapper>
      <IdenticonWrapper>
        <IdenticonComponent
          id={wallet}
          containerSize="48px"
          iconSize={32}
        />
      </IdenticonWrapper>

      <MainCardContent>
        <FeedCardHeader>
          <Text size="M-Regular">{label}</Text>
          <DateTime>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
              {getDate(datetime).date}
            </Text>

            /

            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_2} textDecoration="underline">{getDate(datetime).time}</Text>
          </DateTime>
        </FeedCardHeader>
        <TransactionsWrapper>
          {transactionsToDisplay.map(
            (
              txs: TransactionData,
              index: number,
            ) => (

              <FeedCardItem
                key={uuidv4()}
                isMulti={transactions.length > 1}
                txData={txs}
                handleToggle={handleToggle}
                isOpen={isOpen}
                isFirst={index === 0}
              />

            ),
          )}
        </TransactionsWrapper>
        {moreThanFiveTxs && isOpen && transactionsToDisplay.length < 6 && (
          <SeeMoreContainer onClick={showAllTransactions}>
            <IconWrapper
              cursor="pointer"
              fill={theme.textShades.SHADE_MINUS_2}
              height="16px"
              width="16px"
              icon={<PlusStandard />}
            />
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>Load More</Text>
          </SeeMoreContainer>
        )}
      </MainCardContent>
      <FeedPageKebabMenu
        onPause={onPause}
        onRemove={onRemove}
        onConfigure={onConfigure}
      />
    </Wrapper>
  );
};
