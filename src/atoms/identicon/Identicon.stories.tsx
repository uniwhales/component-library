import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IdenticonProps } from './types';
import { Identicon } from './Identicon';

const meta: Meta<typeof Identicon> = {
  component: Identicon,
};

export default meta;
type Story = StoryObj<typeof Identicon>;

const Template = (args: React.JSX.IntrinsicAttributes & IdenticonProps) => (
  <Identicon {...args} />
);

export const Primary: Story = {
  render: (args) => <Template {...args} />,
};
export const NoInteraction: Story = {
  render: (args) => <Template {...args} />,
};

Primary.args = {
  id: 'someRandomString',
  size: 'big',
  hasInteraction: true,
  onClick: () => console.log('Clicked'),
};

NoInteraction.args = {
  id: 'someRandomString',
  hasInteraction: false,
  size: 'small',
  isLink: false,
};
