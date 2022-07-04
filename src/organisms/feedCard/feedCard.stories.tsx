import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
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
    {mockData.data.map((item) => (
      Object.values(item.transactions).map((transactions) => {
        console.log('hello', transactions);
        return (
          <FeedCard
            label={item.label}
            datetime={transactions[0].timestamp}
            wallet={item.wallet}
            key={uuidv4()}
            transactions={transactions}
            moreThanFiveTxs={transactions.length > 5}
            onPause={() => console.log('onPause')}
            onRemove={() => console.log('onRemove')}
            onConfigure={() => console.log('onConfigure')}
          />
        );
      })
    ))}
    {/* {mockData.data.map((item) => {
      const txs = Object.values(item.transactions);
      const firstTransactionTime: number = txs[0][0].timestamp;
      txs.map((card) => {
        console.log('hello', card);
        return (
          <FeedCard
            label={item.label}
            datetime={firstTransactionTime}
            wallet={item.wallet}
            key={uuidv4()}
            transactions={txs}
            moreThanFiveTxs={txs.length > 5}
            onPause={() => console.log('onPause')}
            onRemove={() => console.log('onRemove')}
            onConfigure={() => console.log('onConfigure')}
          />
        );
      });
    })} */}
  </Container>
);

export const AlertFeedCard = Template.bind({});

AlertFeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
