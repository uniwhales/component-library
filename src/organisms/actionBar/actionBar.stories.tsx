import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionBar, ChainsInterface, FilterInterface } from './actionBar';
import { CoinStandard } from '../../atoms/icons';

const chainsArray:any = [
  { id: 0, value: 'one', label: 'one' },
  { id: 1, value: 'two', label: 'two' },
  { id: 2, value: 'three', label: 'three' },
];
const filtersArray:any = [
  {
    id: 0, value: 'all', label: 'All', icon: <CoinStandard />,
  },
  {
    id: 1, value: 'highlights', label: 'Highlights', icon: <CoinStandard />,
  },
  {
    id: 2, value: 'deFi', label: 'DeFi', icon: <CoinStandard />,
  },
  {
    id: 3, value: 'nFTs', label: 'NFTs', icon: <CoinStandard />,
  },
];
export default {
  title: 'Organisms/ActionBar',
  component: ActionBar,
  argTypes: {},
} as ComponentMeta<typeof ActionBar>;

const Template: ComponentStory<typeof ActionBar> = (args) => {
  const { chains, filters } = args;
  const [chainValue, setSelectedChain] = useState<ChainsInterface>();
  const [chipValue, setChip] = useState<number>();

  return (
    <ActionBar
      chipValue={chipValue as number}
      setChip={setChip}
      chainHandler={setSelectedChain}
      chainValue={chainValue as ChainsInterface}
      chains={chains}
      filters={filters}

    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  chains: chainsArray,
  filters: filtersArray,
};