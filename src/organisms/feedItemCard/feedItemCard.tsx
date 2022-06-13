import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Identicon, Kebab } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { MasterFeedItemTx } from '../../atoms/masterFeedItemTx/masterFeedItemTx';
import { Text } from '../../atoms/texts/text';
import { getDate } from '../../utils/getDate';
import {
  FeedCardHeader, TransactionsWrapper, MainCardContent, Wrapper, DateTime, SeeMoreContainer,
} from './feedItemCard.styles';
import { FeedItemCardProps } from './types';

export const FeedItemCard = (
  {
    transactions,
    datetime,
    moreThanFiveTxs,
  }: FeedItemCardProps,
) => {
  const theme: any = useTheme();
  const firstItem = transactions[0];
  const firstFiveItems = transactions.slice(0, 5);
  const [transactionsToDisplay, setTransactionsToDisplay] = useState([firstItem]);
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
          {transactionsToDisplay.map((transaction, index) => (
            <MasterFeedItemTx
              key={transaction.hash}
              isMulti={transactions.length > 1}
              txData={transaction}
              handleToggle={handleToggle}
              isOpen={isOpen}
              isFirst={index === 0}
            />
          ))}
        </TransactionsWrapper>
        {moreThanFiveTxs && isOpen && transactionsToDisplay.length < 6 && <SeeMoreContainer onClick={showAllTransactions}><Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>See More</Text></SeeMoreContainer>}
      </MainCardContent>
      <IconWrapper cursor="pointer" icon={<Kebab />} />
    </Wrapper>
  );
};
