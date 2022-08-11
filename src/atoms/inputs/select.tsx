import React from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components, StylesConfig,
} from 'react-select';
import { localTheme, Styled } from '../../theme';
import { ChainsInterface } from '../../organisms/actionBar/types';
import { StarIcon } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';

const StyledSelect = Styled(ReactSelect) <{ isXL: boolean }>`
  max-width: ${(props) => (props.isXL ? 'unset' : '172px')};
  width: 100%;
  outline: none;
  input{
    width: fit-content;
  }
`;

export const Placeholder = Styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const OptionWrapper = Styled.div`
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_1};
  };
`;

const OptionContainer = Styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const colourOptions = [
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

export const optionWithIcon = [{ value: 'blue blue', label: 'Blue Blue', icon: <StarIcon /> },
  { value: 'purple', label: 'Purple', icon: <StarIcon /> },
  { value: 'yellow', label: 'Yellow', icon: <StarIcon /> },
];

export const groupExample = [
  {
    label: 'With Icons',
    options: optionWithIcon,
  },
  { label: 'Without Icon', options: colourOptions },
];

interface StyledProps {
  isFocused?: boolean
  isSelected?: boolean
  menuIsOpen?: boolean
  theme: any;
  readOnly?: boolean;
  isMulti?: boolean;
  isCheckBox?: boolean;
}

const colourStyles: StylesConfig<StyledProps, false> = {
  placeholder: (defaultStyles, { theme, isFocused }: StyledProps) => ({
    ...defaultStyles,
    color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    p: {
      color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    },
    svg: {
      fill: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    },
  }),
  dropdownIndicator: (defaultStyles, { isFocused, theme }: StyledProps) => ({
    ...defaultStyles,
    svg: {
      transition: 'all 0.4s',
      fill: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    },
  }),
  control: (defaultStyles, {
    isFocused, menuIsOpen, theme,
  }: StyledProps) => ({
    ...defaultStyles,
    boxSizing: 'border-box',
    background: isFocused
      ? theme.gradients.primary.BLURPLE : theme.containerAndCardShades.BG_SHADE_PLUS_4,
    border: `1px solid ${theme.containerAndCardShades.BG_SHADE_PLUS_4}`,
    outline: 'none',
    padding: '0 10px 0 10px',
    boxShadow: 'none',
    borderRadius: menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px',
    height: '40px',
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
  multiValue: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    backgroundColor: theme.containerAndCardShades.SHADE_PLUS_1,
    color: theme.textShades.SHADE_MINUS_3,
    borderRadius: '12px',
    border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: '4px 8px',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    svg: {
      transform: 'unset',
    },
  }),
  multiValueLabel: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    color: theme.colors.primary.GREEN,
  }),
  multiValueRemove: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    backgroundColor: theme.colors.primary.DARK_BLUE,
    borderRadius: '50%',
    padding: '2px',
    svg: {
      transform: 'unset',
      fill: theme.colors.system.WHITE,
    },
  }),

};

const CheckBoxOption = (props:any) => {
  const {
    label, isSelected, readOnly, isCheckBox,
  } = props;
  return (
    <OptionWrapper>
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
        )}
      </components.Option>
    </OptionWrapper>
  );
};

interface Option {
  value: string,
  label: string,
  icon?: JSX.Element,
  id?: number;
}

interface GroupOptionInterface {
  label: string;
  options: Option[]
}

const getOptionLabel = ({ label, icon }: Option) => (
  <OptionContainer>
    {icon && <IconWrapper icon={icon} />}
    <span>{label}</span>
  </OptionContainer>
);

const ClearIndicator = (props: ClearIndicatorProps) => {
  const {
    innerProps: { ref, ...restInnerProps },
    selectProps,
  } = props;
  const theme = localTheme();
  return (
    <div
      {...restInnerProps}
      ref={ref}
    >
      <div style={{ padding: '0px 5px' }}><Text size="S-Regular" color={selectProps.menuIsOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2}>Clear Filters</Text></div>
    </div>
  );
};

export interface SelectOption extends Option {}

export interface SelectProps {
  readOnly?: boolean,
  value?: string | SelectOption,
  isMulti?: boolean,
  isCheckBox?: boolean,
  placeholder: string | JSX.Element,
  isXL?: boolean,
  options: Option[] | GroupOptionInterface[],
  onChange?: (o: ChainsInterface) => void,
  isClearable?: boolean,
  isSearchable?: boolean,
  showValue?: boolean,
}

export const Select = ({
  options,
  readOnly,
  onChange,
  value, isMulti = true,
  isCheckBox, placeholder,
  isXL = false,
  isClearable = false,
  isSearchable = false,
  showValue = false,
}: SelectProps) => {
  const theme = localTheme();
  return (
    <>
      {' '}
      <StyledSelect
        options={options}
        isMulti={isMulti}
        theme={theme}
        isOptionDisabled={() => !!readOnly}
        isSearchable={isSearchable}
        styles={colourStyles as StylesConfig}
        controlShouldRenderValue={showValue}
        isClearable={isClearable}
        placeholder={<div className="react-select__placeholder">{placeholder}</div>}
        closeMenuOnSelect={!isMulti}
        hideSelectedOptions={false}
        components={{
          Option: (props) => CheckBoxOption({ ...props, readOnly, isCheckBox }),
          IndicatorSeparator: () => null,
          ClearIndicator,
        }}
        onChange={(option) => {
          if (onChange) { // @ts-ignore
            onChange(option);
          }
        }}
        value={value}
        isXL={isXL}
        getOptionLabel={getOptionLabel as any}
      />
    </>
  );
};
