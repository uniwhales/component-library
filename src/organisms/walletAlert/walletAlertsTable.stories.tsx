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
    { value: 'one', label: 'one' },
    { value: 'two', label: 'two' },
    { value: 'three', label: 'three' },
  ],
  botIdArray: [
    { value: '1', label: '1', id: 1 },
    { value: '2', label: '2', id: 2 },
    { value: '3', label: '3', id: 3 },
  ],
  bot_id: { value: '1', label: '1', id: 1 },
  editWallet: (id) => console.log(`Edit wallet with id ${id}`),
  removeWallet: (id) => console.log(`Remove wallet with id ${id}`),
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
