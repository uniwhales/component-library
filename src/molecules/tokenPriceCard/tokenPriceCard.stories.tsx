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

  symbol: 'SHIB',
  name: 'Shiba Inu',
  address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  price: 0.00001176,
  price_change_percentage_1h: -0.38620990993425053,
  price_change_percentage_24h: 0.9689926628542215,
  price_change_percentage_7d: -8.048321568361459,

};

const Template: ComponentStory<typeof TokenPriceCard> = () => (
  <Wrapper>
    <TokenPriceCard onClick={() => {}} index={0} data={fake} key={10} />
    <TokenPriceCard onClick={() => {}} index={2} data={fake} key={30} />
    <TokenPriceCard onClick={() => {}} index={4} data={fake} key={50} />
    <TokenPriceCard onClick={() => {}} index={5} data={{ ...fake, price: 8.04 }} key={50} />
  </Wrapper>

);

export const PrimaryTabsGroups = Template.bind({});
