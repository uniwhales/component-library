import React from 'react';
import { Select } from '../../atoms/inputs/select';
import { FilterChip } from '../../atoms/chips/filterChip';
import { ActionChains, ActionTags, Wrapper } from './actionBar.styles';
import { ActionBarProps } from './types';

const ActionBarTexts = {
  Select: {
    placeholder: 'All Chains',
  },
};

export const ActionBar = ({
  filters, chains, chainHandler, setChip, chipValue, chainValue,
}:ActionBarProps) => (
  <Wrapper>
    <ActionTags>
      { filters.map((chip:any) => (
        <FilterChip
          key={chip.id}
          onClick={setChip}
          isOn={chipValue === chip.id}
          {...chip}
        >
          {chip.label}
        </FilterChip>
      )) }
    </ActionTags>
    <ActionChains>
      <Select
        options={chains}
        isMulti={false}
        value={chainValue}
        onChange={(e) => chainHandler(e as any)}
        placeholder={ActionBarTexts.Select.placeholder}
      />
    </ActionChains>
  </Wrapper>
);
