import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageMeatballMenu } from './feedPageMeatballMenu';

export default {
  title: 'Molecules/FeedPageMeatball',
  component: FeedPageMeatballMenu,
  argTypes: {
    type: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof FeedPageMeatballMenu>;

const Template: ComponentStory<typeof FeedPageMeatballMenu> = () => (
  <FeedPageMeatballMenu
    goToItem={() => console.log('go to item')}
    share={() => console.log('share')}
    openSeaLink="https://opensea.io"
  />
);

export const FeedPageMeatball = Template.bind({});

FeedPageMeatball.parameters = {
  backgrounds: { default: 'dark' },
};
