import React from 'react';
import { Placeholder, Select, SelectVariation } from '../../atoms/inputs/select';
import { FilterChip } from '../../atoms/chips/filterChip';
import {
  ActionTags, SelectWrapper, Wrapper,
} from './actionBar.styles';
import { ActionBarProps } from './types';
import { Text } from '../../atoms/texts/text';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { SettingsBars } from '../../atoms/icons';

export const ActionBar = <T extends SelectVariation>({
  chipFilters,
  setChipFilter,
  chipFilterValue,
  selectValue,
  onSelectChange,
  selectOptions,
  handleClearValue,
}: ActionBarProps<T>) => (
  <Wrapper>
    <ActionTags>
      {chipFilters.map((chip) => (
        <FilterChip
          key={chip.id}
          onClick={setChipFilter}
          isOn={chipFilterValue === chip.id}
          id={chip.id}
          icon={chip.icon}
        >
          <Text size="S-Regular">{chip.label}</Text>
        </FilterChip>
      ))}
    </ActionTags>
    <SelectWrapper>
      <Select<T>
        selectValue={selectValue}
        onSelectChange={(e) => onSelectChange && onSelectChange(e)}
        selectOptions={selectOptions}
        handleClearValue={handleClearValue}
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
    </SelectWrapper>

  </Wrapper>
  );
