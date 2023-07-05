import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './card';
import { ButtonAtom } from '../buttons/button';

const meta: Meta<typeof Card
> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => <Card {...args}><ButtonAtom onClick={() => {}} buttonVariant="primary">test</ButtonAtom></Card>,
};
