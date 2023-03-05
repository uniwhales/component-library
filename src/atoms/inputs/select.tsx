import React, { ReactNode, useState } from 'react';
import ReactSelect, {
  components, StylesConfig,
} from 'react-select';
import { Checkbox } from './checkbox';
import { localTheme, Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { ChevronDownIcon, ChevronUpIcon } from '../icons';

export interface Option {
  value: string,
  label: string,
  id: number;
  icon?: JSX.Element,
  isSelected?: boolean;
  order?: number;
}
export interface SelectGroupOption {
  label: string;
  options: Option[]
}

export interface SelectOption extends Option { }

export type SelectVariation = 'single' | 'multi' | 'group' | 'multi-group';
export type SelectVal<T extends SelectVariation> = T extends 'single' ? SelectOption : T extends 'multi' ? SelectOption[] : T extends 'group' ? SelectOption
  : SelectOption[];
export type SelectOptions<T extends SelectVariation> = T extends 'single' ? SelectOption[] : T extends 'multi' ? SelectOption[] : T extends 'group' ? SelectGroupOption[]
  : SelectGroupOption[];

export interface SelectProps<T extends SelectVariation> {
  width?: string,
  onSelectChange?: (o: SelectVal<T>) => void,
  selectOptions: SelectOptions<T>,
  selectValue?: SelectVal<T>,
  readOnly?: boolean,
  isMulti?: boolean,
  isCheckBox?: boolean,
  placeholder: string | ReactNode,
  isXL?: boolean,
  isClearable?: boolean,
  isSearchable?: boolean,
  showValue?: boolean,
  clearButtonText?: string,
  handleClearValue?: () => void;
  maxMenuHeight?: number;
  isDisabled?: boolean;
  onInputChange?: (e: string) => void;
}

interface StyledProps {
  isFocused?: boolean
  isSelected?: boolean
  menuIsOpen?: boolean
  theme: any;
  readOnly?: boolean;
  isMulti?: boolean;
  isCheckBox?: boolean;
  label?: string;
  isDisabled?: boolean;
}

const StyledSelect = Styled(ReactSelect) <{ isXL: boolean, width?: string }>`
  max-width: ${(props) => (props.width ? props.width : props.isXL ? '100%' : '172px')};
  width: ${(props) => props.width ?? '100%'};
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
  gap: 8px;
  cursor: pointer;
`;

const ClearButtonContainer = Styled.div`
  cursor: pointer;
  padding: 0 5px;
`;

const ClearWrapper = Styled.div``;

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
  control: (defaultStyles, {
    isFocused, menuIsOpen, theme, isDisabled,
  }: StyledProps) => ({
    ...defaultStyles,
    boxSizing: 'border-box',
    cursor: 'pointer',
    background: isFocused
      ? theme.colors.primary.MAIN_BLUE : isDisabled
        ? theme.containerAndCardShades.SHADE_PLUS_1
        : theme.containerAndCardShades.BG_SHADE_PLUS_4,
    border: isDisabled ? '1px solid transparent' : `1px solid ${theme.textShades.SHADE_MINUS_1}`,
    outline: 'none',
    padding: '0 10px 0 10px',
    boxShadow: 'none',
    borderRadius: menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px',
    height: '40px',
    'div:nth-of-type(2)': {
      svg: {
        cursor: 'pointer',
      },
    },
    color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2,
    fontWeight: isFocused ? 'bold' : 'normal',
    svg: {
      fill: isFocused && theme.colors.system.WHITE,
    },
    '&:hover': {
      border: isDisabled ? '1px solid transparent' : `1px solid ${theme.textShades.SHADE_MINUS_2}`,
      svg: {
        fill: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2,
      },
    },
  }),
  option: (defaultStyles, {
    isFocused, isSelected, theme, readOnly, label,
  }: StyledProps) => ({
    ...defaultStyles,
    overflowWrap: label && label.includes(' ') ? 'break-word' : 'anywhere',
    display: 'flex',
    transition: 'background 0.1s ease',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    color: theme.textShades.SHADE_MINUS_1,
    background: isSelected ? theme.colors.primary.MAIN_BLUE
      : isFocused ? readOnly ? 'none' : 'theme.containerAndCardShades.NEUTRAL_SHADE_0' : undefined,
    '&:hover': {
      background: !isSelected ? theme.colors.primary.MAIN_BLUE : undefined,
      color: theme.colors.system.WHITE,
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
    zIndex: theme.zIndex.SAFE_LAYER,
  }),
  multiValue: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    backgroundColor: theme.containerAndCardShades.SHADE_PLUS_2,
    color: theme.textShades.SHADE_MINUS_2,
    borderRadius: '12px',
    border: '2px solid transparent',
    display: 'flex',
    gap: '6px',
    padding: '0 6px',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 400,
    cursor: 'pointer',
    '&:hover': {
      background: theme.textShades.SHADE_MINUS_1,
      color: theme.textShades.SHADE_MINUS_3,
    },
    '&:active': {
      background: theme.textShades.SHADE_MINUS_1,
      color: theme.textShades.SHADE_MINUS_3,
      border: `2px solid ${theme.colors.primary.YELLOW}`,
    },
    svg: {
      transform: 'unset',
      height: '12px',
      width: '12px',
    },
  }),
  multiValueRemove: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    borderRadius: '50%',
    padding: '2px',
    svg: {
      fill: theme.textShades.SHADE_MINUS_2,
    },
    '&:hover': {
      svg: {
        fill: theme.textShades.SHADE_MINUS_3,
      },
    },
  }),
  valueContainer: (defaultStyles) => ({
    ...defaultStyles,
    display: '-webkit-box',
    flexWrap: 'nowrap',
    overflow: 'scroll',
    scrollbarWidth: 'none',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      display: ' none',
      scrollbarWidth: 'none',
    },
  }),
};

const CheckBoxOption = (props: any) => {
  const {
    label, isSelected, readOnly, isCheckBox, data,
  } = props;

  return (
    <OptionWrapper>
      <components.Option {...props} label={data.label}>
        {!readOnly && isCheckBox ? (
          <>
            <label>
              {label}
            </label>
            <Checkbox
              selected={isSelected}
              onClick={() => { }}
              disabled={false}
              size="small"
              selectCheck
            />
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

const getOptionLabel = ({ label, icon }: Option) => (
  <OptionContainer>
    {icon && <IconWrapper height="14px" width="14px" icon={icon} />}
    <span>{label}</span>
  </OptionContainer>
);

const ClearIndicator = (props: any) => {
  const {
    innerProps: { ref },
    selectProps,
    clearButtonText,
    handleClearValue,
    isFocused,
  } = props;
  const theme = localTheme();
  const [hover, setHover] = useState(false);

  return (
    <ClearWrapper
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClearValue}
    >
      <ClearButtonContainer>
        <Text
          size="S-Regular"
          color={
            hover || isFocused || selectProps.isMenuOpen
              ? theme.colors.system.WHITE
              : theme.textShades.SHADE_MINUS_2
          }
        >
          {clearButtonText}
        </Text>
      </ClearButtonContainer>
    </ClearWrapper>
  );
};

const DropdownIndicator = ({ selectProps, isFocused }: any) => {
  const theme = localTheme();
  if (selectProps.menuIsOpen) {
    return (
      <IconWrapper
        fill={theme.colors.system.WHITE}
        icon={<ChevronDownIcon />}
      />
    );
  }
  return (
    <IconWrapper
      fill={isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1}
      icon={<ChevronUpIcon />}
    />
  );
};

export const Select = <T extends SelectVariation>({
  selectOptions,
  readOnly,
  onSelectChange,
  selectValue, isMulti = true,
  isCheckBox, placeholder,
  isXL = false,
  isClearable = false,
  isSearchable = false,
  showValue = false,
  clearButtonText = 'Clear',
  handleClearValue,
  maxMenuHeight,
  isDisabled = false,
  onInputChange,
  width,
}: SelectProps<T>) => {
  const theme = localTheme();
  return (
    <StyledSelect
      width={width}
      isDisabled={isDisabled}
      options={selectOptions}
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
      onInputChange={(e) => onInputChange && onInputChange(e)}
      components={{
        Option: (props) => CheckBoxOption({
          ...props, readOnly, isCheckBox,
        }),
        IndicatorSeparator: () => null,
        ClearIndicator: (props) => ClearIndicator({ ...props, clearButtonText, handleClearValue }),
        DropdownIndicator: (props) => DropdownIndicator({ ...props }),
      }}
      onChange={(option) => {
        if (!onSelectChange) return;
        /*
            When providing variation of select
            we restrict the option to be either single or group option type
            therefor we can safely assume type here is right
          */
        onSelectChange(option as SelectVal<T>);
      }}
      value={selectValue}
      isXL={isXL}
      getOptionLabel={getOptionLabel as any}
      maxMenuHeight={maxMenuHeight}
    />
  );
};
