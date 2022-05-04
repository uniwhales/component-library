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
    WalletAlertsTable> = (args) => <WalletAlertsTable {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  id: 123,
  isActive: false,
  isLoading: true,
  setIsActive: (e, status) => console.log(e, status),
  chains: [{ value: 'one', label: 'one' }, { value: 'two', label: 'two' }, { value: 'three', label: 'three' }],
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
