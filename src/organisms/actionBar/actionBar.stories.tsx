import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionBar } from './actionBar';
import { CoinStandard } from '../../atoms/icons';
import { SelectOption } from '../../atoms/inputs/select';
import { GroupExample } from '../../atoms/inputs/select.stories';

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
  const { chipFilters: filters } = args;
  const [chipValue, setChip] = useState<number>();
  const [selectValue, setSelectedValue] = useState<SelectOption[]>([]);
  return (
    <ActionBar<'multi-group'>
      chipFilterValue={chipValue as number}
      setChipFilter={setChip}
      chipFilters={filters}
      selectValue={selectValue}
      onSelectChange={setSelectedValue}
      selectOptions={GroupExample}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  chipFilters: filtersArray,
};
