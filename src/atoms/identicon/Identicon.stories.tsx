import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IdenticonComponent } from './Identicon';
import { IdenticonProps } from './types';

const meta: Meta<typeof IdenticonComponent> = {
  component: IdenticonComponent,
};

export default meta;
type Story = StoryObj<typeof IdenticonComponent>;

const Template = (args: React.JSX.IntrinsicAttributes & IdenticonProps) => (
  <IdenticonComponent {...args} />
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
  size: 'big',
  isLink: false,
};
