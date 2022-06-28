import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { mockData } from './data';
import { Wrapper } from './walletBalance.styles';
import { WalletBalanceListItem } from './walletBalanceList';

export default {
  title: 'Molecules/WalletBalanceList',
  component: WalletBalanceListItem,
  argTypes: {},
} as ComponentMeta<typeof WalletBalanceListItem>;

const Template: ComponentStory<typeof WalletBalanceListItem> = () => {
  const [selectedRow, setSelectedRow] = useState<string>('');

  return (
    <Wrapper>
      <WalletBalanceListItem selectedRow={selectedRow} setSelectedRow={setSelectedRow} type="checkout" wbData={mockData as any} />
    </Wrapper>
  );
};

const Template2: ComponentStory<typeof WalletBalanceListItem> = () => {
  const [selectedRow, setSelectedRow] = useState<string>('');

  return (
    <Wrapper>
      <WalletBalanceListItem selectedRow={selectedRow} setSelectedRow={setSelectedRow} type="dashboard" wbData={mockData as any} />
    </Wrapper>
  );
};

export const CheckoutWalletBalanceList = Template.bind({});
export const DashboardWalletBalanceList = Template2.bind({});

CheckoutWalletBalanceList.parameters = {
  backgrounds: { default: 'dark' },
};

DashboardWalletBalanceList.parameters = {
  backgrounds: { default: 'dark' },
};
