import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageMeatballMenu } from './feedPageMeatballMenu';
import { Wrapper } from './feedPageMeatballMenu.styles';

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
  <Wrapper>
    <FeedPageMeatballMenu
      share={() => console.log('share')}
    />
  </Wrapper>
);

export const FeedPageMeatball = Template.bind({});

FeedPageMeatball.parameters = {
  backgrounds: { default: 'dark' },
};
