import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WalletAlertsTable } from './walletAlertsTable';

export default {
  title: 'Organisms/WalletAlertsTable',
  component: WalletAlertsTable,
  argTypes: {},
} as ComponentMeta<typeof WalletAlertsTable>;

const Template: ComponentStory<typeof WalletAlertsTable> = (args) => (
  <WalletAlertsTable {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  id: 123,
  isActive: false,
  isLoading: false,
  filters: [
    { value: 'one', label: 'one' },
    { value: 'two', label: 'two' },
    { value: 'three', label: 'three' },
  ],
  setIsActive: (e, status) => console.log(e, status),
  chains: [
    { value: 'one', label: 'one' },
    { value: 'two', label: 'two' },
    { value: 'three', label: 'three' },
    { value: 'four', label: 'four' },
  ],
  editWallet: (id) => console.log(`Edit wallet with id ${id}`),
  removeWallet: (id) => console.log(`Remove wallet with id ${id}`),
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
