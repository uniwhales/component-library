import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { FilterChip } from './filterChip';
import {
  AllIcon, CoinStandard, ImageIcon, StarIcon,
} from '../icons';
import { Styled } from '../../theme';

interface Filter {
  id: number;
  value: string;
  label:string;
  icon:JSX.Element
}
const filtersArray = [
  {
    id: 0, value: 'all', label: 'All', icon: <AllIcon />,
  },
  {
    id: 1, value: 'highlights', label: 'Highlights', icon: <StarIcon />,
  },
  {
    id: 2, value: 'deFi', label: 'DeFi', icon: <CoinStandard />,
  },
  {
    id: 3, value: 'nFTs', label: 'NFTs', icon: <ImageIcon />,
  },
];
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  gap: 24px;
`;
export default {
  title: 'Atoms/FilterChips',
  component: FilterChip,

} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = () => {
  const [selectFilter, setSelectFilter] = useState<number>();
  return (
    <Wrapper>
      {filtersArray
        .map((chip: Filter) => (
          <FilterChip
            onClick={setSelectFilter}
            isOn={selectFilter === chip.id}
            {...chip}
          >
            {chip.label}
          </FilterChip>
        ))}
    </Wrapper>
  );
};
export const Primary = Template.bind({});
