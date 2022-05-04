import React, { useState } from 'react';
import ReactSelect, {
  components, GroupBase, OptionProps, StylesConfig,
} from 'react-select';
import { Styled, Theme } from '../../theme';

const StyledSelect = Styled(ReactSelect)`
  max-width: 172px;
  outline: none;
  .react-checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
`;

export const colourOptions = [
  { value: 'ocean1', label: 'Ocean', isSelected: true },
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
    color: isFocused ? Theme.colors.system.WHITE : Theme.textShades.SHADE_2,
  }),
  dropdownIndicator: (defaultStyles, { isFocused }: StyledProps) => ({
    ...defaultStyles,
    svg: {
      transition: 'all 0.4s',
      fill: isFocused ? Theme.colors.system.WHITE : Theme.textShades.SHADE_1,
      transform: isFocused ? 'rotateZ(-180deg)' : undefined,
    },
  }),
  control: (defaultStyles, { isFocused, menuIsOpen }: StyledProps) => ({
    ...defaultStyles,
    boxSizing: 'border-box',
    background: isFocused
      ? Theme.gradients.primary.BLURPLE : Theme.containerAndCardShades.BG_SHADE_4,
    border: '1px solid transparent',
    outline: 'none',
    padding: '0 10px 0 10px',
    boxShadow: 'none',
    borderRadius: menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px',
    height: '48px',
    '&:hover': {
      color: 'blue',
      border: `1px solid ${Theme.colors.primary.UWL_BLUE}`,
      svg: {
        fill: !isFocused ? Theme.contrastColor.HIGH_CONTRAST : undefined,
      },
    },
  }),
  option: (defaultStyles, { isFocused, isSelected }: StyledProps) => ({
    ...defaultStyles,
    background: isSelected ? Theme.colors.primary.WATER_BLUE
      : isFocused ? Theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
    '&:hover': {
      background: !isSelected ? Theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
    },
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    marginTop: 0,
    borderRadius: 0,
  }),
  menuList: (defaultStyles) => ({
    ...defaultStyles,
    background: Theme.containerAndCardShades.SHADE_2,
    color: Theme.textShades.SHADE_3,
    paddingTop: 0,
  }),

};
const CheckBoxOption = (props:any) => {
  const { label, isSelected, readOnly } = props;
  return (
    <div>
      <components.Option {...props}>
        <div className="react-checkbox">
          <label>
            {label}
          </label>
          {!readOnly && <input type="checkbox" checked={isSelected} onChange={() => null} />}
        </div>
      </components.Option>
    </div>
  );
};

export const Select = ({
  options, readOnly, onChange, value,
}:any) => (
  <StyledSelect
    options={options}
    isMulti
    isOptionDisabled={() => readOnly}
    isSearchable={false}
    styles={colourStyles as StylesConfig}
    controlShouldRenderValue={false}
    isClearable={false}
    placeholder={<div className="react-select__placeholder">Alert Filters</div>}
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
    components={{
      Option: (props) => CheckBoxOption({ ...props, readOnly }),
      IndicatorSeparator: () => null,
    }}
    onChange={() => onChange}
    value={value}
  />
);
