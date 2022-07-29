import React from 'react';
import { Select } from '../../atoms/inputs/select';
import { FilterChip } from '../../atoms/chips/filterChip';
import {
  ActionChains, ActionTags, ActionTypes, SelectWrapper, Wrapper,
} from './actionBar.styles';
import { ActionBarProps, TypesInterface } from './types';
import { Text } from '../../atoms/texts/text';

const ActionBarTexts = {
  Select: {
    placeholder: 'All Chains',
    typePlaceholder: 'Alert Filters',
  },
};

export const ActionBar = ({
  filters, chains, chainHandler, setChip, chipValue, chainValue, types, typeHandler, typeValue,
}: ActionBarProps) => (
  <Wrapper>
    <ActionTags>
      {filters.map((chip: any) => (
        <FilterChip
          key={chip.id}
          onClick={setChip}
          isOn={chipValue === chip.id}
          {...chip}
        >
          <Text size="S-Bold">{chip.label}</Text>
        </FilterChip>
      ))}
    </ActionTags>
    <SelectWrapper>
      <ActionTypes>
        <Select
          options={types}
          isMulti
          value={typeValue}
          onChange={(e: TypesInterface) => typeHandler(e)}
          placeholder={ActionBarTexts.Select.typePlaceholder}
          isCheckBox
        />
      </ActionTypes>
      <ActionChains>
        <Select
          options={chains}
          isMulti={false}
          value={chainValue}
          onChange={(e) => chainHandler(e as any)}
          placeholder={ActionBarTexts.Select.placeholder}
        />
      </ActionChains>
    </SelectWrapper>
  </Wrapper>
);
