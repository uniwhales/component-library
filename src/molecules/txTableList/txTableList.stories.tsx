import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TxTableItem } from './txTableList';
import { Styled } from '../../theme';

const data = {
  hash: '0xd0288dd5a3bee18801a1f0f1d3f6bba052dd1c6a77ebad00f62308e5f74a4bc2',
  block: 14774781,
  timestamp: '2022-14-05 16:59:19',
  timestamp_int: 1652547559,
  swap_num: 1,
  address: '0xac844b604d6c600fbe55c4383a6d87920b46a160',
  maker: '0xac844b604d6c600fbe55c4383a6d87920b46a160',
  pair: '0x795065dcc9f64b5614c407a6efdc400da6221fb0',
  contract: '0x795065dcc9f64b5614c407a6efdc400da6221fb0',
  transaction: {
    from: {
      amount: 6.475606354627268,
      token: 'ETH',
      total_usd: 13045.340842633306,
      token_price: 2014.5358022436785,
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    for: {
      amount: 10471.612,
      token: 'SUSHI',
      total_usd: 13025.645302453013,
      token_price: 1.243900681428324,
      address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
  },
  total_usd: 13045.340842633308,
  slippage: 0.15109163934717884,
  version: 'v2',
  source: 'sushiswap',
  dex: 'sushiswap',
};
const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default {
  title: 'Molecules/TxListItem',
  component: TxTableItem,
  argTypes: {},
} as ComponentMeta<typeof TxTableItem>;

const Template: ComponentStory<typeof TxTableItem> = () => (
  <Wrapper>
    <TxTableItem
      wsData={[data]}
    />
  </Wrapper>

);

export const PrimaryTabsGroups = Template.bind({});
