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
  selectValue?: SelectVal<T> | null,
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
  noOptionsMessage?:string;
  smallText?: boolean;
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

export const isSelectOptionGuard = (
  o: SelectOption[] | SelectGroupOption[],
  // @ts-ignore
): o is SelectOption[] => Array.isArray(o) && o.every((group: SelectOption | SelectGroupOption): group is SelectOption => !('options' in group));

export enum BulkSelectOption {
  SelectAll = 'Select All',
  DeselectAll = 'Deselect All',
}

const SelectAllOption: SelectOption = {
  value: BulkSelectOption.SelectAll,
  id: 99999,
  label: BulkSelectOption.SelectAll,
};
const DeselectAllOption: SelectOption = {
  value: BulkSelectOption.DeselectAll,
  label: BulkSelectOption.DeselectAll,
  id: 99999,
};

const SelectWrapper = Styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width ?? '100%'};
`;

const StyledSelect = Styled(ReactSelect) <{ isXL: boolean, width?: string, isDisabled: boolean, error: boolean }>`
  outline: none;
  margin-bottom: ${({ error }) => error && '4px'};
  width: ${({ width }) => width ?? '100%'};
  :hover {
    div {
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
  overflow: hidden;
`;

const OptionWrapper = Styled.div<{ isSelected: boolean, hasGroups: boolean, showOnTop?: boolean, isLastGroup?: boolean }>`
  zIndex: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.primary.MAIN_BLUE : theme.containerAndCardShades.SHADE_PLUS_2)};
  :hover {
    background-color: ${({ theme, isSelected }) => !isSelected && theme.textShades.SHADE_MINUS_1};
  }
  &:first-of-type {
    border-radius: ${({ showOnTop, hasGroups }) => (showOnTop && !hasGroups && '12px 12px 0 0')};
  }
  &:last-of-type {
    border-radius: ${({ showOnTop, isLastGroup }) => (!showOnTop && isLastGroup && '0 0 12px 12px')};
  }
`;

const OptionLabelContainer = Styled.label<{ addPadding: boolean, smallText?:boolean }>`
  padding-left: ${({ addPadding }) => addPadding && '24px'};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  word-break: break-all;
  font-size: ${({ smallText }) => smallText && '12px'};
`;

const ClearButtonContainer = Styled.div`
  cursor: pointer;
  padding: 0 5px;
`;

const ClearWrapper = Styled.div``;

export const Required = Styled.span<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_1 : theme.colors.system.RED)};
`;

const CheckboxOptionContainer = Styled.div`
  display: flex;
  justify-content: space-between;
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
  color: ${({ theme, isFocused, isDisabled }) => (isDisabled ? theme.containerAndCardShades.SHADE_PLUS_1 : isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2)};
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
    color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
    fontSize: '12px',
    lineHeight: '16px',
    cursor: 'pointer',
    p: {

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
  menu: (defaultStyles) => ({
    ...defaultStyles,
    margin: 0,
  }),
  menuList: (defaultStyles) => ({
    ...defaultStyles,
    paddingTop: 0,
    paddingBottom: 0,
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
    flexWrap: 'unset',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      display: ' none',
      scrollbarWidth: 'none',
    },
  }),
  group: (defaultStyles) => ({
    ...defaultStyles,
    paddingBottom: 0,
    paddingTop: 0,
  }),
  groupHeading: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    background: theme.containerAndCardShades.SHADE_PLUS_1,
    color: theme.textShades.SHADE_MINUS_3,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    padding: '8px 16px',
    marginBottom: 0,
  }),
  option: (defaultStyles, { theme, isSelected }: StyledProps) => ({
    ...defaultStyles,
    color: isSelected ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2,
    '&:hover': {
      color: theme.colors.system.WHITE,
    },
  }),
};

const MultiValue = (
  props: any,
  selectedOptions: null | undefined | SelectOption | SelectOption[],
) => {
  const { options, index } = props;
  /*
    Because this component gets rendered for each option,
    we need to check if all options are selected and if so,
    only render the first one as "All"

    eslint disable next line is for destructing array component which makes no sense here
  */
  const filteredOptions = options.filter((o: any) => o.value !== BulkSelectOption.DeselectAll
  && o.value !== BulkSelectOption.SelectAll);
  // eslint-disable-next-line
  if (Array.isArray(selectedOptions) && selectedOptions.length === filteredOptions.length) {
    return index === 0 ? <Text size="11-Regular">All</Text> : null;
  }

  return <components.MultiValue {...props} />;
};

const OptionComponent = (props: any) => {
  const {
    label, isSelected, readOnly, isCheckBox, data, options, selectProps, smallText,
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
  const showOnTop = selectProps.menuPlacement === 'top';

  const isLastGroup = React.useMemo(() => {
    const lastGroup = [...options].reverse().find((o: SelectGroupOption) => o.options);
    return lastGroup && lastGroup.options.includes(data);
  }, [options, data]);

  return (
    <OptionWrapper
      showOnTop={showOnTop}
      isSelected={isSelected}
      isLastGroup={isLastGroup}
      hasGroups={groups.length > 0}
    >
      <components.Option {...props} label={data.label}>
        {!readOnly && isCheckBox ? (

          <CheckboxOptionContainer>
            <OptionLabelContainer addPadding={addPadding} smallText={smallText}>
              {data.icon && <IconWrapper height="14px" width="14px" icon={data.icon} />}
              {label}
            </OptionLabelContainer>
            <Checkbox
              selected={isSelected}
              onClick={() => { }}
              disabled={false}
              size="small"
              selectCheck
            />
          </CheckboxOptionContainer>
        ) : (
          <OptionLabelContainer smallText={smallText} addPadding={addPadding}>
            {data.icon && <IconWrapper height="14px" width="14px" icon={data.icon} />}
            {label}
          </OptionLabelContainer>
        )}
      </components.Option>
    </OptionWrapper>
  );
};

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

const DropdownIndicator = ({ selectProps, isFocused, isDisabled }: any) => {
  const theme = localTheme();
  if (selectProps.menuIsOpen) {
    return (
      <IconWrapper
        fill={isDisabled ? theme.containerAndCardShades.SHADE_PLUS_1 : theme.colors.system.WHITE}
        icon={<ChevronUpIcon />}
        cursor="pointer"
      />
    );
  }
  return (
    <IconWrapper
      fill={isDisabled ? theme.containerAndCardShades.SHADE_PLUS_1
        : isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1}
      icon={<ChevronDownIcon />}
      cursor="pointer"
    />
  );
};

const MenuList = (props: any) => {
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
  noOptionsMessage,
  smallText = false,
}: SelectProps<T>) => {
  const theme = localTheme();
  const customNoOptionsMessage = () => noOptionsMessage || 'No options';
  const completeOptions = isSelectOptionGuard(selectOptions)
    ? [
      selectValue
        && Array.isArray(selectValue)
        && selectValue.length === selectOptions.length
        ? DeselectAllOption : SelectAllOption, ...selectOptions]
    : selectOptions;

  return (
    <SelectWrapper width={width} ref={ref}>
      <StyledSelect
        noOptionsMessage={customNoOptionsMessage}
        width={width}
        menuPlacement={showOnTop ? 'top' : 'bottom'}
        isDisabled={isDisabled}
        options={completeOptions}
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
          MultiValue: (props) => MultiValue(props, selectValue),
          Option: (props) => OptionComponent({
            ...props, readOnly, isCheckBox, smallText,
          }),
          IndicatorSeparator: () => null,
          ClearIndicator: (props) => ClearIndicator(
            { ...props, clearButtonText, handleClearValue },
          ),
          DropdownIndicator,
          Control,
          MenuList,
        }}
        onChange={(option: any) => {
          if (!onSelectChange) return;
          if (Array.isArray(option) && option.some((o) => o.value === BulkSelectOption.SelectAll)) {
            onSelectChange(selectOptions as unknown as SelectVal<T>);
            return;
          } if (
            Array.isArray(option) && option.some((o) => o.value === BulkSelectOption.DeselectAll)) {
            onSelectChange([] as unknown as SelectVal<T>);
            return;
          }
          /*
            When providing variation of select
            we restrict the option to be either single or group option type
            therefor we can safely assume type here is right
          */
          onSelectChange(option);
        }}
        value={selectValue}
        isXL={isXL}
        closeMenuOnScroll
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
