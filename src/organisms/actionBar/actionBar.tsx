import React from 'react';
import { Placeholder, Select } from '../../atoms/inputs/select';
import { FilterChip } from '../../atoms/chips/filterChip';
import {
  ActionTags, Wrapper,
} from './actionBar.styles';
import { ActionBarProps, SelectedInterface } from './types';
import { Text } from '../../atoms/texts/text';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { SettingsBars } from '../../atoms/icons';

export const ActionBar = ({
  filters, setChip, chipValue, selectValue, selectHandler, selectOptions,
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
          <Text size="S-Regular">{chip.label}</Text>
        </FilterChip>
      ))}
    </ActionTags>

    <Select
      value={selectValue}
      onChange={(e: SelectedInterface) => selectHandler(e)}
      options={selectOptions}
      isMulti
      isSearchable
      isXL
      showValue
      isClearable
      placeholder={(
        <Placeholder>
          <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
          <Text size="S-Regular">Filter Tx types and Chains</Text>
        </Placeholder>
)}
    />

  </Wrapper>
);
