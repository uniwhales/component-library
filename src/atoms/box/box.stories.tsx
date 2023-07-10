import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Box from './box';

const meta: Meta<typeof Box
> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  render: (args) => <Box {...args} width={['300px', '600px']} height={['300px', '600px']} background={['red', 'blue']} />,
};
