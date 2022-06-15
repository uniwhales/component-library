import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageKebabMenu } from './feedPageKebabMenu';

export default {
  title: 'Molecules/FeedPageKebab',
  component: FeedPageKebabMenu,
  argTypes: {
    type: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof FeedPageKebabMenu>;

const Template: ComponentStory<typeof FeedPageKebabMenu> = () => (
  <FeedPageKebabMenu
    onPause={() => console.log('onPause')}
    onRemove={() => console.log('onRemove')}
    onConfigure={() => console.log('onConfigure')}
  />
);

export const FeedPageKebab = Template.bind({});

FeedPageKebab.parameters = {
  backgrounds: { default: 'dark' },
};
