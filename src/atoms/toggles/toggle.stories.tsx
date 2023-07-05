import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToggleAtom } from './toggle__standart';

const meta: Meta<typeof ToggleAtom> = {
  component: ToggleAtom,
};

export default meta;
type Story = StoryObj<typeof ToggleAtom>;

export const Standard: Story = {
  render: (args) => <ToggleAtom {...args} />,
};
