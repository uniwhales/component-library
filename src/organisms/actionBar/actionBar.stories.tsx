import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionBar } from './actionBar';
import { CoinStandard } from '../../atoms/icons';
import { TypesInterface } from './types';
import { groupExample } from '../../atoms/inputs/select';

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
  const { filters } = args;
  const [chipValue, setChip] = useState<number>();
  const [selectValue, setSelectedValue] = useState<TypesInterface>();
  console.log('hellooo', selectValue);
  return (
    <ActionBar
      chipValue={chipValue as number}
      setChip={setChip}
      filters={filters}
      selectValue={selectValue as TypesInterface}
      selectHandler={setSelectedValue}
      selectOptions={groupExample}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  filters: filtersArray,
};
