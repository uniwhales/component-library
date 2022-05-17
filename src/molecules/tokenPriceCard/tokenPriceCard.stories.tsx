import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TokenPriceCard } from './tokenbPriceCard';
import { Styled } from '../../theme';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default {
  title: 'Molecules/TokenPriceCard',
  component: TokenPriceCard,
  argTypes: {},
} as ComponentMeta<typeof TokenPriceCard>;

const fake = {
  token_symbol: 'ENS',
  token: 'Ethereum Name Service',
  current_price: 9.37,
  price_change_percentage_1h: 33,
  price_change_percentage_24h: -33,
  price_change_percentage_7d: 33,
  isLoading: false,
  token_address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
};
const fake1 = {
  token_symbol: 'APE',
  token: 'ApeCoin',
  current_price: 8.39,
  price_change_percentage_1h: -33,
  price_change_percentage_24h: 33,
  price_change_percentage_7d: -33,
  isLoading: false,
  token_address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
};
const Template: ComponentStory<typeof TokenPriceCard> = () => (
  <Wrapper>
    <TokenPriceCard data={fake} key={10} />
    <TokenPriceCard data={fake1} key={20} />
    <TokenPriceCard data={fake} key={30} />
    <TokenPriceCard data={fake1} key={40} />
    <TokenPriceCard data={fake} key={50} />
  </Wrapper>

);

export const PrimaryTabsGroups = Template.bind({});
