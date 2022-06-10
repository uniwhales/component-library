import React, { useState } from 'react';
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
      {fakeData.map((tx) => (
        <FeedItemCard key={tx.hash} datetime={tx.timestamp}>
          <MasterFeedItemTx isMulti={!!tx.contract_interactions} isOpen={false} />
        </FeedItemCard>
      ))}
    </>
  );
};

export const FeedCard = Template.bind({});

FeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
