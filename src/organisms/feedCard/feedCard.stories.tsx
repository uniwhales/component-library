import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedCard } from './feedCard';
import { mockData } from './mockData';
import { Container } from './feedCard.styles';

export default {
  title: 'Organisms/FeedCard',
  component: FeedCard,
  argTypes: {},
} as ComponentMeta<typeof FeedCard>;

const Template: ComponentStory<typeof FeedCard> = () => (
  <Container>
    {mockData.data.map((transactions) => {
      const txType = Object.values(transactions)[0][0].tx_type;
      const firstTxKey: string = Object.values(transactions)[0][0].tx_hash;
      const firstTransactionTime: number = Object.values(transactions)[0][0].timestamp;

      const getTransactions = (type: string) => {
        switch (type) {
          case 'swap':
            return Object.values(transactions)[0];
          case 'transfer':
            return Object.values(transactions).map((tx) => tx[0]);
          case 'nft_trade':
            return Object.values(transactions).map((tx) => tx[0]);
          case 'lp':
            return Object.values(transactions).map((tx) => tx[0]);
          default:
            return Object.values(transactions)[0];
        }
      };
      return (
        <FeedCard
          datetime={firstTransactionTime}
          key={firstTxKey}
          transactions={getTransactions(txType)}
          moreThanFiveTxs={getTransactions(txType).length > 5}
          onPause={() => console.log('onPause')}
          onRemove={() => console.log('onRemove')}
          onConfigure={() => console.log('onConfigure')}
        />
      );
    })}
  </Container>
);

export const AlertFeedCard = Template.bind({});

AlertFeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
