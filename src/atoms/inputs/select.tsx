import React, { useState } from 'react';
import ReactSelect, {
  components, GroupBase, OptionProps, StylesConfig,
} from 'react-select';
import { Styled, Theme } from '../../theme';

const StyledSelect = Styled(ReactSelect)`
  max-width: 172px;
  outline: none;

  :hover .react-select__placeholder {
    color: ${(props) => props.theme.colors.neutral.SHADE_INPUT_3};
  }

  .react-checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
`;

interface Props {
  isSelected: boolean
  label: string;
}

export const colourOptions = [
  { value: 'ocean1', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

interface StyledProps {
  isFocused?: boolean
  isSelected?: boolean
  menuIsOpen?: boolean
}

const colourStyles:StylesConfig<StyledProps, false> = {
  placeholder: (defaultStyles, { isFocused }: StyledProps) => ({
    ...defaultStyles,
    color: isFocused ? 'white' : Theme.colors.neutral.SHADE_4,
  }),
  // @ts-ignore
  dropdownIndicator: (defaultStyles, { isFocused }: StyledProps) => ({
    ...defaultStyles,
    svg: {
      transition: 'all 0.4s',
      fill: isFocused ? 'white' : Theme.colors.neutral.SHADE_4,
      transform: isFocused && 'rotateZ(-180deg)',
    },
  }),
  container: (defaultStyles) => ({
    ...defaultStyles,
  }),
  // @ts-ignore
  option: (defaultStyles, { isFocused, isSelected }: StyledProps) => ({
    ...defaultStyles,
    background:
        isSelected ? Theme.colors.primary.WATER_BLUE : isFocused && Theme.colors.neutral.SHADE_0,
    '&:hover': {
      background: !isSelected && Theme.colors.neutral.SHADE_0,
    },
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    marginTop: 0,
    borderRadius: 0,
  }),
  menuList: (defaultStyles) => ({
    ...defaultStyles,
    background: '#1F232F',
    color: Theme.colors.neutral.SHADE_INPUT_3,
    paddingTop: 0,
  }),
  control: (defaultStyles, {
    isFocused, menuIsOpen,
  }: StyledProps) => ({
    ...defaultStyles,
    background: isFocused ? 'linear-gradient(180deg, #2D75E2 0%, #4A00E0 100%);' : Theme.colors.neutral.SHADE_INPUT,
    border: '1px solid transparent',
    outline: 'none',
    padding: '0 10px 0 10px',
    boxShadow: 'none',
    borderRadius: menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px',
    height: '48px',
    '&:hover': {
      border: `1px solid ${Theme.colors.primary.UWL_BLUE}`,
    },
  }),
};
const CheckBoxOption = (props: JSX.IntrinsicAttributes
& OptionProps<unknown, boolean, GroupBase<unknown>>) => (
  <div>
    <components.Option {...props}>
      <div className="react-checkbox">
        <label>
          {props.label}
        </label>
        <input type="checkbox" checked={props.isSelected} onChange={() => null} />
      </div>
    </components.Option>
  </div>
);

export const Select = ({ options }:any) => {
  const [data, setData] = useState();
  return (
    <StyledSelect
      options={options}
      isMulti
      isSearchable={false}
      styles={colourStyles}
      controlShouldRenderValue={false}
      isClearable={false}
      placeholder={<div className="react-select__placeholder">Alert Filters</div>}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option: CheckBoxOption,
        IndicatorSeparator: () => null,
      }}
      onChange={() => setData}
      value={data}
    />
  );
};
