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

export const WalletBalanceList = Template.bind({});

WalletBalanceList.parameters = {
  backgrounds: { default: 'dark' },
};
