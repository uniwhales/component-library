import React from 'react';
import ReactSelect, {
  components, StylesConfig,
} from 'react-select';
import { useTheme } from 'styled-components';
import { Styled } from '../../theme';

const StyledSelect = Styled(ReactSelect)`
  max-width: 172px;
  outline: none;
  input{
    width: fit-content;
  }
`;

export const colourOptions = [
  { value: 'Oceanrwerewrwerwerwerwerwe  rewrw', label: '423 rewrw' },
  { value: 'blue blue', label: 'Blue Blue' },
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
  theme?: any;
  readOnly?:boolean;
  isMulti?:boolean;
  isCheckBox?: boolean;
}

const colourStyles:StylesConfig<StyledProps, false> = {
  placeholder: (defaultStyles, { theme, isFocused }: StyledProps) => ({
    ...defaultStyles,
    color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2,
  }),
  dropdownIndicator: (defaultStyles, { isFocused, theme }: StyledProps) => ({
    ...defaultStyles,
    svg: {
      transition: 'all 0.4s',
      fill: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    },
  }),
  control: (defaultStyles, { isFocused, menuIsOpen, theme }: StyledProps) => ({
    ...defaultStyles,
    boxSizing: 'border-box',
    background: isFocused
      ? theme.gradients.primary.BLURPLE : theme.containerAndCardShades.BG_SHADE_PLUS_4,
    border: `1px solid ${theme.containerAndCardShades.BG_SHADE_PLUS_4}`,
    outline: 'none',
    padding: '0 10px 0 10px',
    boxShadow: 'none',
    borderRadius: menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px',
    height: '48px',
    svg: {
      transform: menuIsOpen ? 'rotateZ(-180deg)' : undefined,
    },
    '&:hover': {
      border: `1px solid ${theme.colors.primary.UWL_BLUE}`,
      svg: {
        fill: !isFocused ? theme.contrastColor.HIGH_CONTRAST : undefined,
      },
    },
    color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2,
    fontWeight: isFocused ? 'bold' : 'normal',
  }),
  option: (defaultStyles, {
    isFocused, isSelected, theme, readOnly,
  }: StyledProps) => ({
    ...defaultStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: isSelected ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3,
    background: isSelected ? theme.colors.primary.WATER_BLUE
      : isFocused ? readOnly ? 'none' : theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
    '&:hover': {
      background: !isSelected ? theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
    },
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    marginTop: 0,
    borderRadius: 0,
  }),
  menuList: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    background: theme.containerAndCardShades.SHADE_PLUS_2,
    color: theme.textShades.SHADE_MINUS_3,
    paddingTop: 0,
    borderRadius: '0px 0px 10px 10px',
    zIndex: 10,
  }),

};
const CheckBoxOption = (props:any) => {
  const {
    label, isSelected, readOnly, isCheckBox,
  } = props;
  return (
    <div>
      <components.Option {...props}>
        {!readOnly && isCheckBox ? (
          <>
            <label>
              {label}
            </label>
            <input type="checkbox" checked={isSelected} onChange={() => null} />
          </>
        ) : (
          <label>
            {label}
          </label>
        ) }
      </components.Option>
    </div>
  );
};

export const Select = ({
  options, readOnly, onChange, value, isMulti = true, isCheckBox, placeholder,
}:any) => {
  const theme = useTheme();
  return (
    <StyledSelect
      options={options}
      isMulti={isMulti}
      theme={theme as any}
      isOptionDisabled={() => readOnly}
      isSearchable={false}
      styles={colourStyles as StylesConfig}
      controlShouldRenderValue={!isMulti}
      isClearable={false}
      placeholder={<div className="react-select__placeholder">{placeholder}</div>}
      closeMenuOnSelect={!isMulti}
      hideSelectedOptions={false}
      components={{
        Option: (props) => CheckBoxOption({ ...props, readOnly, isCheckBox }),
        IndicatorSeparator: () => null,
      }}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};
