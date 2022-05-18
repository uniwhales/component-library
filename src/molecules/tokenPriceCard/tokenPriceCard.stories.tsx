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
  address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  name: 'Shiba Inu',
  price: 0.00001206,
  price_change_percentage_1h: -1.547955670514793,
  price_change_percentage_7d: -25.58472054970993,
  price_change_percentage_24h: -5.017057173892765,
  symbol: 'SHIB',
};

const Template: ComponentStory<typeof TokenPriceCard> = () => (
  <Wrapper>
    <TokenPriceCard onClick={() => {}} index={0} data={fake} key={10} />
    <TokenPriceCard onClick={() => {}} index={2} data={fake} key={30} />
    <TokenPriceCard onClick={() => {}} index={4} data={fake} key={50} />
  </Wrapper>

);

export const PrimaryTabsGroups = Template.bind({});
