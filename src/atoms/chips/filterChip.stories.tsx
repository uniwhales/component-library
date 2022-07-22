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
  max-width: 900px;
  gap: 24px;
`;
export default {
  title: 'Atoms/FilterChips',
  component: FilterChip,

} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = (props) => {
  const [selectFilter, setSelectFilter] = useState<number>();
  return (
    <Wrapper>
      {filtersArray
        .map((chip: Filter) => (
          <FilterChip
            {...chip}
            {...props}
            onClick={(v: any) => setSelectFilter(v)}
            isOn={selectFilter === chip.id}
          >
            {chip.label}
          </FilterChip>
        ))}
    </Wrapper>
  );
};
export const Primary = Template.bind({});
export const PrimaryCustomWidth = Template.bind({});

PrimaryCustomWidth.args = {
  width: '25%',
};
