import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { mockData } from './data';
import { Wrapper } from './walletBalance.styles';
import { WalletBalanceListItem } from './walletBalanceList';

export default {
  title: 'Molecules/WalletBalanceList',
  component: WalletBalanceListItem,
  argTypes: {},
} as ComponentMeta<typeof WalletBalanceListItem>;

const Template: ComponentStory<typeof WalletBalanceListItem> = () => (
  <Wrapper>
    <WalletBalanceListItem wbData={mockData as any} />
  </Wrapper>
);

export const WalletBalanceList = Template.bind({});

WalletBalanceList.parameters = {
  backgrounds: { default: 'dark' },
};
