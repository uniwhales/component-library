import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { TokenPriceCard } from './tokenPriceCard';
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

const Shiba = {
  symbol: 'SHIB',
  name: 'Shiba Inu',
  address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  price: 0.00001176,
  price_change_percentage_1h: -0.38620990993425053,
  price_change_percentage_24h: 0.9689926628542215,
  price_change_percentage_7d: -8.048321568361459,
};
const Aave = {
  address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  name: 'Aave',
  price: 107.46,
  price_change_percentage_1h: 0.9238831209040754,
  price_change_percentage_24h: 13.37456887006637,
  price_change_percentage_7d: 13.595532079435065,
  symbol: 'AAVE',
  volume: 5754319.423428095,
};
const BNT = {
  address: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
  name: 'Bancor Network Token',
  price: 1.32,
  price_change_percentage_1h: 0.17872563794434781,
  price_change_percentage_24h: 4.303682288785698,
  price_change_percentage_7d: -6.688145953717091,
  symbol: 'BNT',
  volume: 3782796.439920916,
};
const Snipe = {
  symbol: 'SNIPE',
  name: 'Snipe',
  address: '0xb8fb35e3406e597e5f86d4f3c0e3063a6fab71a5',
  price: 0.00001176,
  price_change_percentage_1h: -0.38620990993425053,
  price_change_percentage_24h: 0.9689926628542215,
  price_change_percentage_7d: -8.048321568361459,
};

const Template: ComponentStory<typeof TokenPriceCard> = () => {
  const [favorites, setFavorites] = useState([Shiba.address]);
  const isFav = (address: string) => favorites.some((id) => id === address);
  const filterFavs = (address: string) => (favorites.some((id) => id === address)
    ? favorites.filter((id) => id !== address) : [...favorites, address]);
  return (
    <Wrapper>
      <TokenPriceCard
        isFavorite={isFav(Shiba.address)}
        onHeartClick={(data) => setFavorites(filterFavs(data.address))}
        onClick={() => {}}
        index={0}
        data={Shiba}
        key={10}
      />
      <TokenPriceCard
        isFavorite={isFav(Aave.address)}
        onClick={() => {}}
        onHeartClick={(data) => setFavorites(filterFavs(data.address))}
        index={2}
        data={Aave}
        key={30}
      />
      <TokenPriceCard
        isFavorite={isFav(BNT.address)}
        onHeartClick={(data) => setFavorites(filterFavs(data.address))}
        onClick={() => {}}
        index={4}
        data={BNT}
        key={50}
      />
      <TokenPriceCard
        isFavorite={isFav(Snipe.address)}
        onHeartClick={(data) => setFavorites(filterFavs(data.address))}
        onClick={() => {}}
        index={5}
        data={Snipe}
        key={60}
      />
    </Wrapper>

  );
};

export const PrimaryTabsGroups = Template.bind({});
