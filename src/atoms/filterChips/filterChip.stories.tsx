import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { FilterChip } from './filterChip';
import {
  AllIcon, CoinStandard, ImageIcon, Microscope, Sonar, StarIcon, Suitcase, WebinarStandard,
} from '../icons';
import { Styled } from '../../theme';
import { Text } from '../texts/text';

interface Filter {
  id: number;
  value: string;
  label: string;
  icon: JSX.Element
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

const newsdeskStories: any[] = [
  {
    label: 'All',
    icon: <AllIcon />,
    id: 0,
  },
  {
    label: 'Social Sonar',
    icon: <Sonar />,
    id: 1,
  },
  {
    label: 'VC Deals',
    icon: <Suitcase />,
    id: 2,
  },
  {
    label: 'Latest Research',
    icon: <Microscope />,
    id: 3,
  },
  {
    label: 'Webinars',
    icon: <WebinarStandard />,
    id: 4,
  },
];

type FilterData = {
  id: number
  text: string
  icon?: JSX.Element
};

const filters: FilterData[] = [
  {
    id: 1,
    text: 'swap',
    icon: <StarIcon />,
  },
  {
    id: 2,
    text: 'bridge',
    icon: <StarIcon />,
  },
  {
    id: 3,
    text: 'transfer',
    icon: <StarIcon />,
  },
  {
    id: 4,
    text: 'perp',
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

const DataPresets = [filtersArray, newsdeskStories];

const Template: ComponentStory<typeof FilterChip> = (props) => {
  const [selectFilter, setSelectFilter] = useState<number>();
  const { id } = props;
  return (
    <Wrapper>
      {DataPresets[id]
        .map((chip: Filter) => (
          <FilterChip
            {...props}
            {...chip}
            onClick={() => setSelectFilter(chip.id)}
            isOn={selectFilter === chip.id}
          >
            <Text size="S-Regular">{chip.label}</Text>
          </FilterChip>
        ))}
    </Wrapper>
  );
};
const Template2: ComponentStory<typeof FilterChip> = ({ disabled }) => (
  <Wrapper>
    {filters.map((filter) => (
      <FilterChip
        onClick={() => { }}
        variant="secondary"
        id={filter.id}
        disabled={disabled}
        icon={filter.icon}
      >
        {filter.text}
      </FilterChip>
    ))}
  </Wrapper>
);
export const Basic = Template.bind({});
export const BasicCustomWidth = Template.bind({});
export const BasicNewsdesk = Template.bind({});
export const SecondaryFilterChip = Template2.bind({});

Basic.args = { id: 0 };
BasicCustomWidth.args = {
  width: '25%',
  id: 0,
};
BasicNewsdesk.args = { id: 1 };
