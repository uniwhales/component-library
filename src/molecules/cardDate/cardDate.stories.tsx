import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CardDate } from './cardDate';

export default {
  title: 'Molecules/CardDate',
  component: CardDate,
  argTypes: {},
} as ComponentMeta<typeof CardDate>;

const Template: ComponentStory<typeof CardDate> = ({ date, state }) => (
  <CardDate date={date || 'Nov 31st, 2021'} state={state || 'Upcoming'} />
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
