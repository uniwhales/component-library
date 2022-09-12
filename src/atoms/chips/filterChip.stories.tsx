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

const newsdeskStories: any[] = [
  {
    label: 'All',
    icon: <AllIcon />,
    id: 'all',
  },
  {
    label: 'Social Sonar',
    icon: <Sonar />,
    id: 'sonar',
  },
  {
    label: 'VC Deals',
    icon: <Suitcase />,
    id: 'vcdeals',
  },
  {
    label: 'Latest Research',
    icon: <Microscope />,
    id: 'research',
  },
  {
    label: 'Webinars',
    icon: <WebinarStandard />,
    id: 'webinars',
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
            {...chip}
            {...props}
            onClick={(_id) => setSelectFilter(_id)}
            isOn={selectFilter === chip.id}
          >
            <Text size="XS-Bold">{chip.label}</Text>
          </FilterChip>
        ))}
    </Wrapper>
  );
};
export const Primary = Template.bind({});
export const PrimaryCustomWidth = Template.bind({});
export const PrimaryNewsdesk = Template.bind({});

Primary.args = { id: 0 };
PrimaryCustomWidth.args = {
  width: '25%',
  id: 0,
};
PrimaryNewsdesk.args = { id: 1 };
