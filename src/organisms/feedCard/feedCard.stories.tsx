import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedCard } from './feedCard';
import { mockData } from './mockData';

export default {
  title: 'Organisms/FeedCard',
  component: FeedCard,
  argTypes: {},
} as ComponentMeta<typeof FeedCard>;

const Template: ComponentStory<typeof FeedCard> = () => (
  <>
    {mockData.data.map((transactions) => {
      const txKeys: string[] = Object.keys(transactions);
      const firstTxKey: string = txKeys[0];
      const firstTransactionTime: number = Object.values(transactions)[0].timestamp;
      return (
        <FeedCard
          datetime={firstTransactionTime}
          key={firstTxKey}
          transactions={transactions[txKeys[0]]}
          moreThanFiveTxs={transactions[txKeys[0]].length > 1}
          onPause={() => console.log('onPause')}
          onRemove={() => console.log('onRemove')}
          onConfigure={() => console.log('onConfigure')}
        />
      );
    })}
  </>
);

export const AlertFeedCard = Template.bind({});

AlertFeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
