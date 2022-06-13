import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedItemCard } from './feedItemCard';
import { mockData } from './mockData';

export default {
  title: 'Organisms/FeedCard',
  component: FeedItemCard,
  argTypes: {},
} as ComponentMeta<typeof FeedItemCard>;

const Template: ComponentStory<typeof FeedItemCard> = () => (
  <>
    {mockData.data.map((transactions, index: number) => {
      const txKeys = Object.keys(transactions);
      const firstTxKey = txKeys[0];
      const firstTransactionTime = transactions[firstTxKey][0].timestamp;
      console.log('Hello', transactions[txKeys]);
      return (
        <FeedItemCard
          datetime={firstTransactionTime}
          key={txKeys[index]}
          transactions={transactions[txKeys[0]]}
          moreThanFiveTxs={transactions[txKeys[0]].length > 1}
        />
      );
    })}
  </>
);

export const FeedCard = Template.bind({});

FeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
