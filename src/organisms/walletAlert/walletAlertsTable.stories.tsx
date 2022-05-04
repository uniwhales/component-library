import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WalletAlertsTable } from './walletAlertsTable';

export default {
  title: 'Organisms/WalletAlertsTable',
  component: WalletAlertsTable,
  argTypes: {
  },
} as ComponentMeta<typeof WalletAlertsTable>;

const Template: ComponentStory<typeof
    WalletAlertsTable> = (args) => {
  console.warn(args);
  return <WalletAlertsTable {...args} />;
};
export const Primary = Template.bind({});

Primary.args = {
  chains: [{ value: 'one', label: 'one' }, { value: 'two', label: 'two' }, { value: 'three', label: 'three' }],
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
