import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { UserIdenticon } from './UserIdenticon';

export default {
  title: 'Organisms/UserIdenticon',
  component: UserIdenticon,
  argTypes: {},
} as Meta<typeof UserIdenticon>;

const Template: StoryFn<typeof UserIdenticon> = (args) => (
  <UserIdenticon {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  account: '0x71Ee45CA1345EA11FAb81F5385DAe144E325s2e',
  plan: 'Pro',
  onWalletConnectClick: () => {},
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
