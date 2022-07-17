import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionBar } from './actionBar';
import { CoinStandard } from '../../atoms/icons';
import { ChainsInterface, TypesInterface } from './types';

const chainsArray: any = [
  { id: 0, value: 'one', label: 'one' },
  { id: 1, value: 'two', label: 'two' },
  { id: 2, value: 'three', label: 'three' },
];
const typesArray: any = [
  { id: 0, value: 'transfer', label: 'Transfer' },
  { id: 1, value: 'swap', label: 'Swap' },
  { id: 2, value: 'lp', label: 'LPs' },
];
const filtersArray: any = [
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
  const { chains, filters, types } = args;
  const [chainValue, setSelectedChain] = useState<ChainsInterface>();
  const [typeValue, setSelectedType] = useState<TypesInterface>();
  const [chipValue, setChip] = useState<number>();
  return (
    <ActionBar
      chipValue={chipValue as number}
      setChip={setChip}
      chainHandler={setSelectedChain}
      chainValue={chainValue as ChainsInterface}
      chains={chains}
      filters={filters}
      types={types}
      typeHandler={setSelectedType}
      typeValue={typeValue as TypesInterface}

    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  chains: chainsArray,
  filters: filtersArray,
  types: typesArray,
};
