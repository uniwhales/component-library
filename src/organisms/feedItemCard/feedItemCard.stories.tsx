import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedItemCard } from './feedItemCard';
import { MasterFeedItemTx } from '../../atoms/masterFeedItemTx/masterFeedItemTx';
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
      return (
        <FeedItemCard
          datetime={firstTransactionTime}
          key={txKeys[index]}
        >
          {Object.values(transactions).map((transaction) => {
            const hasMulti = transaction.length > 1;
            return (
              <MasterFeedItemTx isMulti={hasMulti} data={transaction} />
            );
          })}
        </FeedItemCard>
      );
    })}
  </>
);

export const FeedCard = Template.bind({});

FeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
