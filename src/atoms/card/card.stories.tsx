import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './card';
import { Theme } from '../../theme';

const meta: Meta<typeof Card
> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => <Card {...args}>test</Card>,
};
export const Custom: Story = {
  render: (args) => <Card {...args}>test</Card>,
};

Primary.args = {};
Custom.args = {
  background: [Theme.colors.CANARY, Theme.colors.LIGHT_BLUE],
  padding: ['40px', '90px'],
  noHover: true,
};
