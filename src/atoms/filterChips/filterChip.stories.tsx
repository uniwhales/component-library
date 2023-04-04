import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { FilterChip } from './filterChip';
import {
  AllIcon, CoinStandard, ImageIcon, Microscope, Sonar, StarIcon, Suitcase, WebinarStandard,
} from '../icons';
import { Styled } from '../../theme';
import { Text } from '../texts/text';

interface Filter {
  id: string;
  value: string;
  label: string;
  icon: JSX.Element
}
const filtersArray = [
  {
    id: '0', value: 'all', label: 'All', icon: <AllIcon />,
  },
  {
    id: '1', value: 'highlights', label: 'Highlights', icon: <StarIcon />,
  },
  {
    id: '2', value: 'deFi', label: 'DeFi', icon: <CoinStandard />,
  },
  {
    id: '3', value: 'nFTs', label: 'NFTs', icon: <ImageIcon />,
  },
];

const newsdeskStories: any[] = [
  {
    label: 'All',
    icon: <AllIcon />,
    id: '0',
  },
  {
    label: 'Social Sonar',
    icon: <Sonar />,
    id: '1',
  },
  {
    label: 'VC Deals',
    icon: <Suitcase />,
    id: '2',
  },
  {
    label: 'Latest Research',
    icon: <Microscope />,
    id: '3',
  },
  {
    label: 'Webinars',
    icon: <WebinarStandard />,
    id: '4',
  },
];

type FilterData = {
  id: string
  text: string
  isSelected?: boolean
  icon?: JSX.Element
};

const filters: FilterData[] = [
  {
    id: '1',
    text: 'swap',
    icon: <StarIcon />,
  },
  {
    id: '2',
    text: 'bridge',
    icon: <StarIcon />,
  },
  {
    id: '3',
    text: 'transfer',
    icon: <StarIcon />,
  },
  {
    id: '4',
    text: 'perp',
  },
];

type InterestsData = {
  id: string
  text: string
  isSelected?: boolean
};

const interests: InterestsData[] = [
  { id: '1', text: 'Blockchains' },
  { id: '2', text: 'DeFi' },
  { id: '3', text: 'NFTs' },
  { id: '4', text: 'Privacy' },
  { id: '5', text: 'Whale Watching' },
  { id: '6', text: 'Staking' },
  { id: '7', text: 'DEX' },
  { id: '8', text: 'DAO' },
];
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  gap: 24px;
`;
const OnboardingWrapper = Styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 300px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary.DARK_BLUE};
`;
export default {
  title: 'Atoms/FilterChips',
  component: FilterChip,

} as ComponentMeta<typeof FilterChip>;

const DataPresets = [filtersArray, newsdeskStories];

const Template: ComponentStory<typeof FilterChip> = (props) => {
  const [selectFilter, setSelectFilter] = useState<string>();
  const { id } = props;

  return (
    <Wrapper>
      {DataPresets[Number(id)]
        .map((chip: Filter) => (
          <FilterChip
            {...props}
            {...chip}
            variant="primary"
            onClick={() => setSelectFilter(chip.id)}
            isOn={selectFilter === chip.id}
          >
            <Text size="14-Regular">{chip.label}</Text>
          </FilterChip>
        ))}
    </Wrapper>
  );
};
const Template2: ComponentStory<typeof FilterChip> = ({ disabled }) => {
  const [filter, setFilter] = useState<string | undefined>();

  return (
    <Wrapper>
      {filters.filter((f) => f.id !== filter).map((f) => (
        <FilterChip
          onClick={() => {
            setFilter(f.id);
          }}
          variant="secondary"
          id={f.id}
          disabled={disabled}
          icon={f.icon}
        >
          <Text size="14-Regular" color="SHADE_MINUS_1">{f.text}</Text>
        </FilterChip>
      ))}
    </Wrapper>
  );
};

const Template3: ComponentStory<typeof FilterChip> = ({ disabled }) => {
  const [selected, setSelected] = useState<string[] | undefined>();

  const handleClick = (id: string) => {
    if (selected?.includes(id)) {
      setSelected(selected.filter((currentId) => currentId !== id));
    } else {
      setSelected([...(selected || []), id]);
    }
  };

  return (
    <OnboardingWrapper>
      {interests.map((i) => (
        <FilterChip
          onClick={() => handleClick(i.id)}
          variant="onboarding"
          id={i.id}
          disabled={disabled}
          isOn={selected?.includes(i.id)}
        >
          <Text size="14-Regular" color="SHADE_MINUS_1">{i.text}</Text>
        </FilterChip>
      ))}
    </OnboardingWrapper>
  );
};
export const Basic = Template.bind({});
export const BasicCustomWidth = Template.bind({});
export const BasicNewsdesk = Template.bind({});
export const SecondaryFilterChip = Template2.bind({});
export const OnboardingFilterChip = Template3.bind({});

Basic.args = { id: '0' };
BasicCustomWidth.args = {
  width: '25%',
  id: '0',
};
BasicNewsdesk.args = { id: '1' };
