import React from 'react';
import { Styled } from '../../theme';
import { Select } from '../../atoms/inputs/select';
import { FilterChip } from '../../atoms/chips/filterChip';

export interface ChainsInterface {
  id: number;
  value: string;
  label: string;
  isSelected?: boolean;
}
export interface FilterInterface {
  id: number;
  value: string;
  label: string;
  icon: JSX.Element;
}
export interface ActionBarProps {
  filters:FilterInterface[]
  chains:ChainsInterface[];
  chainHandler: (e:ChainsInterface) => void;
  setChip: (e:number) => void;
  chipValue: number;
  chainValue:ChainsInterface
}
const ActionBarTexts = {
  Select: {
    placeholder: 'All Chains',
  },
};
const Wrapper = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ActionTags = Styled.div`
  display: flex;
  gap: 24px;
`;
const ActionChains = Styled.div``;

export const ActionBar = ({
  filters, chains, chainHandler, setChip, chipValue, chainValue,
}:ActionBarProps) => {
  console.log('ActionBar');
  return (
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
          onChange={chainHandler}
          placeholder={ActionBarTexts.Select.placeholder}
        />
      </ActionChains>
    </Wrapper>
  );
};
