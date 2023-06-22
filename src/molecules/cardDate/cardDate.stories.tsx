import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { CardDate } from './cardDate';

export default {
  title: 'Molecules/CardDate',
  component: CardDate,
  argTypes: {},
} as Meta<typeof CardDate>;

const defaultParams = {
  date: 'Nov 31st, 2021',
  state: 'Upcoming',
};

const Template: StoryFn<typeof CardDate> = (args) => (
  <CardDate {...defaultParams} {...args} />
);

export const CardDateUpcoming = Template.bind({});
export const CardDateNew = Template.bind({});
CardDateNew.args = {
  state: 'New',
};
export const CardDateBreaking = Template.bind({});
CardDateBreaking.args = {
  state: 'Breaking',
};
