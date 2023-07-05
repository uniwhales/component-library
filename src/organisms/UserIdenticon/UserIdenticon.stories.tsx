import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserIdenticon } from './UserIdenticon';

const meta: Meta<typeof UserIdenticon> = {
  component: UserIdenticon,
};

export default meta;
type Story = StoryObj<typeof UserIdenticon>;

export const Primary: Story = {
  render: (args) => <UserIdenticon {...args} />,
};
Primary.args = {
  account: '0x71Ee45CA1345EA11FAb81F5385DAe144E325s2e',
  plan: 'Pro',
  onWalletConnectClick: () => {},
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
