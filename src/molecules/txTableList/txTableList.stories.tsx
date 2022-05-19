import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TxTableItem } from './txTableList';
import { Styled } from '../../theme';
import { mockData } from './data';
import { TokenPriceCard } from '../tokenPriceCard/tokenbPriceCard';

const Wrapper = Styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: flex-start;
`;
const CardWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const fake = {
  address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  name: 'Shiba Inu',
  price: 0.00001206,
  price_change_percentage_1h: -1.547955670514793,
  price_change_percentage_7d: -25.58472054970993,
  price_change_percentage_24h: -5.017057173892765,
  symbol: 'SHIB',
};
const fake1 = {
  address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  name: 'Shiba Inu',
  price: 0.01,
  price_change_percentage_1h: -1.547955670514793,
  price_change_percentage_7d: -25.58472054970993,
  price_change_percentage_24h: -5.017057173892765,
  symbol: 'SHIB',
};
const fake2 = {
  address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  name: 'Shiba Inu',
  price: 100000,
  price_change_percentage_1h: -1.547955670514793,
  price_change_percentage_7d: -25.58472054970993,
  price_change_percentage_24h: -5.017057173892765,
  symbol: 'SHIB',
};
export default {
  title: 'Molecules/TxListItem',
  component: TxTableItem,
  argTypes: {},
} as ComponentMeta<typeof TxTableItem>;

const Template: ComponentStory<typeof TxTableItem> = () => (
  <Wrapper>
    <TxTableItem
      wsData={mockData as any}
    />
    <CardWrapper>
      <TokenPriceCard onClick={() => {}} index={0} data={fake} key={10} />
      <TokenPriceCard onClick={() => {}} index={2} data={fake1} key={30} />
      <TokenPriceCard onClick={() => {}} index={4} data={fake2} key={50} />
    </CardWrapper>

  </Wrapper>

);

export const PrimaryTabsGroups = Template.bind({});
