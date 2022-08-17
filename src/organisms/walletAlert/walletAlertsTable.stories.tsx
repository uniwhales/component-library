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
  setIsActive: (e, status) => console.log(e, status),
  chains: [
    { id: 0, value: 'one', label: 'one' },
    { id: 1, value: 'two', label: 'two' },
    { id: 2, value: 'three', label: 'three' },
  ],
  filters: [
    { id: 0, value: 'one', label: 'one' },
    { id: 1, value: 'two', label: 'two' },
  ],
  bot_id: { value: '1', label: '1', id: 1 },
  editWallet: (id) => console.log(`Edit wallet with id ${id}`),
  removeWallet: (id) => console.log(`Remove wallet with id ${id}`),
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
