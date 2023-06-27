import React, { useState } from 'react';
import {
  components, StylesConfig,
} from 'react-select';
import { Checkbox } from '../checkbox';
import { localTheme } from '../../../theme';
import { IconWrapper } from '../../icons/iconWrapper';
import { Text } from '../../texts/text';
import { ChevronDownIcon, ChevronUpIcon } from '../../icons';
import {
  CheckboxOptionContainer, ClearButtonContainer, ClearWrapper,
  ControlComponent, ErrorMessageContainer, GroupHeadingComponent,
  MenuListComponent, MultiValueComponent, MultiValueRemoveComponent,
  OptionLabelContainer, OptionWrapper, SelectWrapper,
  SingleValueComponent, StyledSelect,
} from './components';
import {
  BulkSelectOption, isSelectOptionGuard, Option, SelectGroupOption,
  SelectOption, SelectProps, SelectVal, SelectVariation, StyledProps,
} from './types';

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

const colourStyles: StylesConfig<StyledProps, false> = {
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
  multiValue: (defaultStyles) => ({
    ...defaultStyles,
  }),
  multiValueRemove: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'transparent',
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
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
  groupHeading: (defaultStyles) => ({
    ...defaultStyles,
  }),
  option: (defaultStyles) => ({
    ...defaultStyles,
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
  if (Array.isArray(selectedOptions) && isSelectOptionGuard(options)) {
    // eslint-disable-next-line
    const text = filteredOptions.length === selectedOptions.length
      // eslint-disable-next-line
      ? 'All' : `${selectedOptions.length} selected`;
    return index === 0 ? <span>{text}</span> : null;
  }

  return (
    <MultiValueComponent>
      <components.MultiValue {...props} />
    </MultiValueComponent>
  );
};

const MultiValueRemove = (props: any) => {
  const Comp = components.MultiValueRemove;
  return (
    <MultiValueRemoveComponent>
      <Comp {...props} />
    </MultiValueRemoveComponent>
  );
};

const GroupHeading = (props: any) => {
  const Comp = components.GroupHeading;
  return (
    <GroupHeadingComponent>
      <Comp {...props} />
    </GroupHeadingComponent>
  );
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
            <OptionLabelContainer
              isSelected={isSelected}
              addPadding={addPadding}
              smallText={smallText}
            >
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
          <OptionLabelContainer
            isSelected={isSelected}
            smallText={smallText}
            addPadding={addPadding}
          >
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
  console.debug('control', props);
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

const SingleValue = (props: any) => {
  const Comp = components.SingleValue;
  const { isFocused, selectProps } = props;
  const { isDisabled } = selectProps;
  console.debug('hello', props);
  return (
    <SingleValueComponent
      isDisabled={isDisabled}
      isFocused={isFocused}
    >
      <Comp {...props} />
    </SingleValueComponent>
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
  const completeOptions = isMulti && isSelectOptionGuard(selectOptions)
    ? [
      selectValue
        && Array.isArray(selectValue)
        && selectValue.length === selectOptions.length
        ? DeselectAllOption : SelectAllOption, ...selectOptions]
    : selectOptions;

  const multiPlaceholder = (!selectValue || (isSelectOptionGuard(selectOptions)
    && Array.isArray(selectValue) && selectValue.length === 0))
    && <span>All disabled</span>;

  return (
    <SelectWrapper isDisabled={isDisabled} width={width} ref={ref}>
      <StyledSelect
        unstyled
        noOptionsMessage={customNoOptionsMessage}
        width={width}
        menuPlacement={showOnTop ? 'top' : 'bottom'}
        isDisabled={isDisabled}
        options={completeOptions}
        isMulti={isMulti}
        theme={theme}
        isOptionDisabled={() => !!readOnly}
        isSearchable={isSearchable}
        styles={{
          ...colourStyles,
          /* We are defining it here because showValue isn't passed to the placeholder
            through the props
          */
          placeholder: (defaultStyles, { isFocused }: StyledProps) => ({
            ...defaultStyles,
            /* Multi select that is not a group never shows placeholder
            but all disabled / all so we adjust the color */
            color: isFocused
              ? theme.colors.system.WHITE
              : isMulti && showValue && isSelectOptionGuard(selectOptions)
                ? theme.textShades.SHADE_MINUS_2
                : theme.textShades.SHADE_MINUS_1,
            fontSize: isMulti ? '16px' : '12px',
            lineHeight: '16px',
            cursor: 'pointer',
            p: {
              fontSize: '12px',
              lineHeight: '16px',
              color: isFocused
                ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
            },
            svg: {
              fill: isFocused
                ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
            },
          }),
        } as StylesConfig}
        controlShouldRenderValue={showValue}
        isClearable={isClearable}
        placeholder={isMulti && isSelectOptionGuard(selectOptions) ? multiPlaceholder : <div className="react-select__placeholder">{placeholder}</div>}
        closeMenuOnSelect={!isMulti}
        hideSelectedOptions={false}
        onInputChange={(e: any) => onInputChange && onInputChange(e)}
        components={{
          MultiValue: (props: any) => MultiValue(props, selectValue),
          Option: (props: any) => OptionComponent({
            ...props, readOnly, isCheckBox, smallText,
          }),
          IndicatorSeparator: () => null,
          ClearIndicator: (props: any) => ClearIndicator(
            { ...props, clearButtonText, handleClearValue },
          ),
          DropdownIndicator,
          Control,
          MenuList,
          MultiValueRemove,
          GroupHeading,
          SingleValue,
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