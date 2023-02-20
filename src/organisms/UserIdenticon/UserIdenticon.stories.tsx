import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserIdenticon } from './UserIdenticon';

export default {
  title: 'Organisms/UserIdenticon',
  component: UserIdenticon,
  argTypes: {},
} as ComponentMeta<typeof UserIdenticon>;

const Template: ComponentStory<typeof UserIdenticon> = (args) => (
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
