import React, {
  ReactNode, Ref, useState,
} from 'react';
import ReactSelect, {
  components, GroupBase, SelectInstance, StylesConfig,
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
  required?: boolean;
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
  required?: boolean
  tabIndex?: number
  ref?: Ref<SelectInstance<unknown, boolean, GroupBase<unknown>>> | undefined
  error?: boolean
  errorMessage?: string
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
  error?: boolean;
}

const SelectWrapper = Styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width ?? '100%'};
`;

const StyledSelect = Styled(ReactSelect) <{ isXL: boolean, width?: string, isDisabled: boolean, error: boolean }>`
  max-width: ${({ width, isXL }) => (width || (isXL ? '100%' : '172px'))};
  width: ${({ width }) => width ?? '100%'};
  outline: none;
  margin-bottom: 4px;
  input{
    width: fit-content;
  }
  :hover {
    div {
      color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
      // target placeholder when we have a custom component with icon
      // have not been able to find another way of targeting this than
      // overriding like this.
      p {
        color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
      }
    }
    input {
      ::placeholder {
        color: ${({ theme, isDisabled }) => !isDisabled && theme.textShades.SHADE_MINUS_3};
      }
      color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
      }
  }
`;

const ErrorMessageContainer = Styled.div`
  position: absolute;
  right: 0;
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

const OptionLabelContainer = Styled.label<{ hasIcon: boolean }>`
  padding-left: ${({ hasIcon }) => !hasIcon && '24px'};
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

const ControlComponent = Styled.div<{ menuIsOpen: boolean, isFocused: boolean, isDisabled: boolean, error: boolean }>`
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  padding: 0 10px 0 10px;
  box-shadow: none;
  border-radius: ${({ menuIsOpen, isFocused }) => (menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px')};
  height: 40px;
  background: ${({ theme, isFocused, isDisabled }) => (isFocused
    ? theme.colors.primary.MAIN_BLUE : isDisabled
      ? theme.containerAndCardShades.SHADE_PLUS_1
      : theme.containerAndCardShades.BG_SHADE_PLUS_4)};
  border: ${({ theme, error, isDisabled }) => (isDisabled ? '1px solid transparent' : error ? `1px solid ${theme.colors.system.RED}` : `1px solid ${theme.textShades.SHADE_MINUS_1}`)};
  color: ${({ theme, isFocused }) => (isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2)};
  font-weight: ${({ isFocused }) => (isFocused ? 'bold' : 'normal')};
  svg {
    fill: ${({ theme, isFocused }) => isFocused && theme.colors.system.WHITE};
  }
  :hover {
    border: ${({ theme, error, isDisabled }) => (isDisabled ? '1px solid transparent' : error ? `1px solid ${theme.colors.system.RED}` : `1px solid ${theme.textShades.SHADE_MINUS_2}`)};
    svg {
    fill: ${({ theme, isFocused }) => (isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3)};
  }
  }
`;

const colourStyles: StylesConfig<StyledProps, false> = {
  placeholder: (defaultStyles, { theme, isFocused }: StyledProps) => ({
    ...defaultStyles,
    width: '100%',
    color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    fontSize: '12px',
    lineHeight: '16px',
    cursor: 'pointer',
    p: {
      width: '100%',
      fontSize: '12px',
      lineHeight: '16px',
      color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    },
    svg: {
      fill: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    },
  }),
  control: (defaultStyles) => ({
    ...defaultStyles,
    border: 'none',
    cursor: 'pointer',
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
    color: theme.textShades.SHADE_MINUS_3,
    background: isSelected ? theme.colors.primary.MAIN_BLUE
      : isFocused ? readOnly ? 'none' : 'theme.containerAndCardShades.NEUTRAL_SHADE_0' : undefined,
    '&:hover': {
      background: !isSelected ? theme.textShades.SHADE_MINUS_1 : undefined,
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
    fontSize: '12px',
    lineHeight: '16px',
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

export const Required = Styled.span`
  color: ${({ theme }) => theme.colors.system.RED};
`;

const CheckBoxOption = (props: any) => {
  const {
    label, isSelected, readOnly, isCheckBox, data,
  } = props;
  const hasIcon = !!data.icon;
  return (
    <OptionWrapper>
      <components.Option {...props} label={data.label}>
        {!readOnly && isCheckBox ? (
          <>
            <OptionLabelContainer hasIcon={hasIcon}>
              <label>
                {label}
              </label>
            </OptionLabelContainer>
            <Checkbox
              selected={isSelected}
              onClick={() => { }}
              disabled={false}
              size="small"
              selectCheck
            />
          </>
        ) : (
          <OptionLabelContainer hasIcon={hasIcon}>
            <label>
              {label}
            </label>
          </OptionLabelContainer>

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
        icon={<ChevronUpIcon />}
        cursor="pointer"
      />
    );
  }
  return (
    <IconWrapper
      fill={isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1}
      icon={<ChevronDownIcon />}
      cursor="pointer"
    />
  );
};

const Control = (props: any) => {
  const Comp = components.Control;
  const { isFocused, selectProps } = props;
  const { menuIsOpen, error, isDisabled } = selectProps;
  return (
    <ControlComponent
      menuIsOpen={menuIsOpen}
      isDisabled={isDisabled}
      error={error}
      isFocused={isFocused}
    >
      <Comp {...props} />
    </ControlComponent>
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
  required,
  tabIndex,
  ref,
  error,
  errorMessage,
}: SelectProps<T>) => {
  const theme = localTheme();
  return (
    <SelectWrapper width={width}>
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
          ClearIndicator: (props) => ClearIndicator(
            { ...props, clearButtonText, handleClearValue },
          ),
          DropdownIndicator: (props) => DropdownIndicator({ ...props }),
          Control: (props) => Control({ ...props }),
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
        closeMenuOnScroll
        getOptionLabel={getOptionLabel as any}
        maxMenuHeight={maxMenuHeight}
        tabIndex={tabIndex}
        required={required}
        ref={ref}
        error={!!error}
      />
      {error && errorMessage && (
        <ErrorMessageContainer>
          <Text size="Caption-Regular" color={theme.colors.system.RED}>{errorMessage}</Text>
        </ErrorMessageContainer>
      )}
    </SelectWrapper>
  );
};
