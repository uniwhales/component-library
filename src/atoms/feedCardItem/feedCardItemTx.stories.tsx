import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedCardItem } from './feedCardItem';

export default {
  title: 'Atoms/FeedCardItem',
  component: FeedCardItem,
  argTypes: {},
} as ComponentMeta<typeof FeedCardItem>;

const fakeData = {
  '0xa54ee1791a7d0ef94e3567a95c9ffb19fb07e32e6503b0586dfc75621b0e3420': [
    {
      hash: '0xa54ee1791a7d0ef94e3567a95c9ffb19fb07e32e6503b0586dfc75621b0e3420',
      timestamp: 1654701292,
      block: 14927386,
      wallet: '0x0f4ee9631f4be0a63756515141281a3e2b293bbe',
      from: '0xe592427a0aece92de3edee1f18e0157c05861564',
      to: '0x0f4ee9631f4be0a63756515141281a3e2b293bbe',
      tx_hash: '0xa54ee1791a7d0ef94e3567a95c9ffb19fb07e32e6503b0586dfc75621b0e3420',
      tx_type: 'swap',
      dex: 'UniswapV3',
      token0_address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      token0_name: 'Tether USD',
      token0_symbol: 'USDT',
      token0_amount: 30496.052917,
      token0_amount_usd: 30496.052917,
      token0_price_usd: 1,
      token1_address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      token1_name: 'Wrapped Ether',
      token1_symbol: 'WETH',
      token1_amount: 16.846784879623126,
      token1_amount_usd: 30496.052917,
      token1_price_usd: 1810.200173796142,
      index: 12,
      chain: 'ethereum',
    },
  ],
};

const Template: ComponentStory<typeof FeedCardItem> = () => {
  const key = '0xa54ee1791a7d0ef94e3567a95c9ffb19fb07e32e6503b0586dfc75621b0e3420';
  return (
    <>
      {
        fakeData[key].map((tx) => (
          <FeedCardItem
            handleToggle={() => { }}
            txData={tx}
            isOpen={false}
            isMulti={false}
            isFirst={false}
          />
        ))
      }
    </>
  );
};

export const MasterFeedItem = Template.bind({});

MasterFeedItem.parameters = {
  backgrounds: { default: 'dark' },
};
