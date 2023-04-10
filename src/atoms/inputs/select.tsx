import React, {
  ReactNode, Ref, useState,
} from 'react';
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
  ref?: Ref<HTMLDivElement>
  error?: boolean
  errorMessage?: string
  showOnTop?: boolean
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
  showOnTop?: boolean;
}

const SelectWrapper = Styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width ?? '100%'};
`;

const StyledSelect = Styled(ReactSelect) <{ isXL: boolean, width?: string, isDisabled: boolean, error: boolean }>`
  max-width: ${({ width, isXL }) => (width || (isXL ? '100%' : '172px'))};
  width: ${({ width }) => width ?? '100%'};
  outline: none;
  margin-bottom: ${({ error }) => error && '4px'};
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
  zIndex: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_1};
  };
`;

const OptionLabelContainer = Styled.label<{ addPadding: boolean }>`
  padding-left: ${({ addPadding }) => addPadding && '24px'};
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

export const Required = Styled.span`
  color: ${({ theme }) => theme.colors.system.RED};
`;

const ControlComponent = Styled.div<{ menuIsOpen: boolean, isFocused: boolean, isDisabled: boolean, error: boolean, showOnTop?: boolean }>`
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  padding: 0 10px 0 10px;
  box-shadow: none;
  border-radius: ${({ menuIsOpen, isFocused, showOnTop }) => (menuIsOpen && isFocused && showOnTop ? '0 0 12px 12px' : menuIsOpen && isFocused && !showOnTop ? '12px 12px 0 0 ' : '12px')};
  height: 40px;
  background: ${({ theme, isFocused, isDisabled }) => (isFocused
    ? theme.colors.primary.MAIN_BLUE : isDisabled
      ? theme.containerAndCardShades.SHADE_PLUS_3
      : theme.containerAndCardShades.BG_SHADE_PLUS_4)};
  border: ${({ theme, error, isDisabled }) => (isDisabled ? `1px solid ${theme.containerAndCardShades.BG_SHADE_PLUS_4}` : error ? `1px solid ${theme.colors.system.RED}` : `1px solid ${theme.textShades.SHADE_MINUS_1}`)};
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

const MenuListComponent = Styled.div<{ showOnTop?: boolean }>`
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  padding-top: 0;
  border-radius: ${({ showOnTop }) => (showOnTop ? '10px 10px 0px 0px' : '0px 0px 10px 10px')};
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
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
    margin: 0,
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

const OptionComponent = (props: any) => {
  const {
    label, isSelected, readOnly, isCheckBox, data, options,
  } = props;
  // check if any options have icons
  const optionsHaveIcon = options.filter((o: { icon: JSX.Element }) => o.icon);
  // check if groups have icons
  const groups = options.filter((o: SelectGroupOption) => o.options);
  const groupOptions = groups
  && groups.map((g: { options: Option[]; }) => g.options.filter((o: Option) => o.icon));
  const groupHasIcons = groupOptions.some((group: string | any[]) => group.length > 0);

  // check if individual option has an icon
  const hasIcon = !!data.icon;
  // show padding if any options have
  // icons and current option does not
  const addPadding = (optionsHaveIcon.length > 0 || groupHasIcons) && !hasIcon;
  return (
    <OptionWrapper>
      <components.Option {...props} label={data.label}>
        {!readOnly && isCheckBox ? (
          <>
            <OptionLabelContainer addPadding={addPadding}>
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
          <OptionLabelContainer addPadding={addPadding}>
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
          size="14-Regular"
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

const MenuList = (props:any) => {
  const Comp = components.MenuList;
  const { selectProps } = props;
  const { menuPlacement } = selectProps;
  return (
    <MenuListComponent showOnTop={menuPlacement === 'top'}>
      <Comp {...props} />
    </MenuListComponent>
  );
};

const Control = (props: any) => {
  const Comp = components.Control;
  const { isFocused, selectProps } = props;
  const {
    menuIsOpen, error, isDisabled, menuPlacement,
  } = selectProps;
  return (
    <ControlComponent
      menuIsOpen={menuIsOpen}
      isDisabled={isDisabled}
      error={error}
      isFocused={isFocused}
      showOnTop={menuPlacement === 'top'}
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
  error,
  errorMessage,
  ref,
  showOnTop,
}: SelectProps<T>) => {
  const theme = localTheme();
  return (
    <SelectWrapper width={width} ref={ref}>
      <StyledSelect
        menuPlacement={showOnTop ? 'top' : 'bottom'}
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
          Option: (props) => OptionComponent({
            ...props, readOnly, isCheckBox,
          }),
          IndicatorSeparator: () => null,
          ClearIndicator: (props) => ClearIndicator(
            { ...props, clearButtonText, handleClearValue },
          ),
          DropdownIndicator,
          Control,
          MenuList,
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
        error={!!error}
      />
      {error && errorMessage && (
      <ErrorMessageContainer>
        <Text size="12-Regular" color={theme.colors.system.RED}>{errorMessage}</Text>
      </ErrorMessageContainer>
      )}
    </SelectWrapper>
  );
};
