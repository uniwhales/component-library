import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedItemCard } from './feedItemCard';

export default {
  title: 'Organisms/FeedCard',
  component: FeedItemCard,
  argTypes: {},
} as ComponentMeta<typeof FeedItemCard>;

const Template: ComponentStory<typeof FeedItemCard> = () => (
  <FeedItemCard />
);

export const FeedCard = Template.bind({});

FeedCard.parameters = {
  backgrounds: { default: 'dark' },
};
