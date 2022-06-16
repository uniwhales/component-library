import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Identicon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { FeedCardItem } from '../../atoms/feedCardItem/feedCardItem';
import { Text } from '../../atoms/texts/text';
import { Theme } from '../../theme';
import { getDate } from '../../utils/getDate';
import {
  FeedCardHeader, TransactionsWrapper, MainCardContent, Wrapper, DateTime, SeeMoreContainer,
} from './feedCard.styles';
import { FeedCardProps, Transaction } from './types';
import { FeedPageKebabMenu } from '../../molecules/feedPageKebabMenu/feedPageKebabMenu';

export const FeedCard = (
  {
    transactions,
    datetime,
    moreThanFiveTxs,
    onPause,
    onRemove,
    onConfigure,
  }: FeedCardProps,
) => {
  const theme = useTheme() as typeof Theme;
  const firstItem = transactions[0];
  const firstFiveItems = transactions.slice(0, 5);
  const [transactionsToDisplay, setTransactionsToDisplay] = useState<Transaction[]>([firstItem]);
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
      <IconWrapper icon={<Identicon />} />
      <MainCardContent>
        <FeedCardHeader>
          <Text size="M-Regular">Label Name</Text>
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
              transaction: any,
              index: number,
            ) => (
              <FeedCardItem
                key={transaction.hash}
                isMulti={transactions.length > 1}
                txData={transaction}
                handleToggle={handleToggle}
                isOpen={isOpen}
                isFirst={index === 0}
              />
            ),
          )}
        </TransactionsWrapper>
        {moreThanFiveTxs && isOpen && transactionsToDisplay.length < 6 && <SeeMoreContainer onClick={showAllTransactions}><Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>See More</Text></SeeMoreContainer>}
      </MainCardContent>
      <FeedPageKebabMenu
        onPause={onPause}
        onRemove={onRemove}
        onConfigure={onConfigure}
      />
    </Wrapper>
  );
};
