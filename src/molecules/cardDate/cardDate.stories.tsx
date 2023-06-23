import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardDate } from './cardDate';
import { CardDateProps } from './types';

const meta: Meta<typeof CardDate> = {
  component: CardDate,
};

export default meta;
type Story = StoryObj<typeof CardDate>;

const defaultParams = {
  date: 'Nov 31st, 2021',
  state: 'Upcoming',
};

const Template = (args: CardDateProps) => (
  <CardDate {...defaultParams} {...args} />
);

export const CardDateUpcoming: Story = {
  render: (args) => <Template {...args} />,
};

export const CardDateNew: Story = {
  render: (args) => <Template {...args} />,
};

export const CardDateBreaking: Story = {
  render: (args) => <Template {...args} />,
};

CardDateNew.args = {
  state: 'New',
};
CardDateBreaking.args = {
  state: 'Breaking',
};
