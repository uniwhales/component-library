import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IdenticonProps } from './types';
import { IdenticonComponent } from './Identicon';

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
  id: 'fbhwebfebhre fbhuerbf gfwrqgrew534645365464536',
  size: 'big',
  hasInteraction: true,
  onClick: () => console.log('Clicked'),
};

NoInteraction.args = {
  id: 'someRandomString fwehrbfuweq fwqref',
  hasInteraction: false,
  size: 'small',
  isLink: false,
};
