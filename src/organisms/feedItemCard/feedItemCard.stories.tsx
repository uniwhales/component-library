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

const Template: ComponentStory<typeof FeedItemCard> = () => {
  const fakeData = mockData;
  return (
    <>
      {fakeData.data.map((transactions) => (
        <FeedItemCard datetime={1654701778}>
          {Object.values(transactions).map((transaction) => {
            console.log('transaction', transactions);
            const hasMulti = transaction.length > 1;
            return (
              <MasterFeedItemTx isMulti={hasMulti} data={transaction} />
            );
          })}
        </FeedItemCard>
      ))}
    </>
  );
};

export const FeedCard = Template.bind({});

FeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
