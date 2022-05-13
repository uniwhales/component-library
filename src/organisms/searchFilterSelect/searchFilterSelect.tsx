import React, { } from 'react';
import ReactSelect, {
  StylesConfig,
  components,
  InputActionMeta,
} from 'react-select';
import { useTheme } from 'styled-components';
import { Text } from '../../atoms/texts/text';
import { Styled } from '../../theme';
import { Option } from './searchFilterSelectComponents/option';
import { Control } from './searchFilterSelectComponents/control';
import { LoadingMessage } from './searchFilterSelectComponents/loadingMessage';
import { IndicatorsContainer } from './searchFilterSelectComponents/indicatorsContainer';

const StyledSelect = Styled(ReactSelect)<{
  label?: string
  isContractSearch?: boolean,
  onSwitch: () => void
  onSubmit: (e: any) => void
}>`
  width: 450px;
  outline: none;
  input{
    width: fit-content;
  };
`;

interface StyledProps {
  isFocused?: boolean
  isSelected?: boolean
  hasOptions?: boolean
  theme?: any;
  isLoading?: boolean
  selectProps: any
  menuIsOpen?: boolean
  inputValue?: string
  placeholder?: string
  hasValue?: boolean
}

const colourStyles:StylesConfig<StyledProps, false> = {
  placeholder: (defaultStyles, props: StyledProps) => {
    const { isFocused, theme } = props;
    return ({
      ...defaultStyles,
      color: isFocused ? theme.contrastColor.HIGH_CONTRAST : theme.textShades.SHADE_MINUS_1,
    });
  },
  dropdownIndicator: (defaultStyles, { isFocused, theme, selectProps }: StyledProps) => ({
    ...defaultStyles,
    fontSize: '1rem',
    svg: {
      transition: 'all 0.4s',
      fill: isFocused || selectProps.menuIsOpen
        ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
      transform: selectProps.menuIsOpen ? 'rotateZ(-180deg)' : undefined,
      fontsize: 10,
    },
  }),
  control: (defaultStyles, {
    isFocused, selectProps, theme, hasValue,
  }: StyledProps) => ({
    ...defaultStyles,
    boxSizing: 'border-box',
    background: selectProps.menuIsOpen || isFocused
      ? theme.gradients.primary.BLURPLE : theme.containerAndCardShades.BG_SHADE_PLUS_4,
    border: '1px solid transparent',
    outline: 'none',
    boxShadow: 'none',
    paddingLeft: 8,
    borderRadius: selectProps.menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px',
    color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2,
    '.react-select__placeholder': {
      color: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2,
    },
    fontWeight: isFocused || hasValue ? 'bold' : 'normal',
    height: '50px',
    '&:hover': {
      color: !isFocused && theme.contrastColor.HIGH_CONTRAST,
      border: isFocused ? '' : `1px solid ${theme.colors.primary.UWL_BLUE}`,
      svg: {
        fill: !isFocused ? theme.contrastColor.HIGH_CONTRAST : undefined,
      },
      // Required to target the placeholder
      '.react-select__placeholder': {
        color: !isFocused && theme.contrastColor.HIGH_CONTRAST,
      },
    },
  }),
  option: (defaultStyles, {
    isFocused, isSelected, theme,
  }: StyledProps) => ({
    ...defaultStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: isSelected ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3,
    svg: {
      fill: isSelected && theme.colors.system.WHITE,
    },
    paddingLeft: 8,
    background: isSelected ? `${theme.colors.primary.WATER_BLUE}!important`
      : isFocused ? theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
    '&:hover': {
      background: !isSelected ? theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
      cursor: 'pointer',
    },
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    marginTop: 0,
    borderRadius: '0px 0px 12px 12px',
    paddingBottom: 0,
  }),
  menuList: (defaultStyles, props: StyledProps) => ({
    ...defaultStyles,
    background: props.theme.containerAndCardShades.SHADE_PLUS_2,
    color: props.theme.textShades.SHADE_MINUS_3,
    paddingBottom: 0,
    paddingTop: 0,
    borderRadius: '0px 0px 12px 12px',
    zIndex: 10,
    '> :nth-child(2n)': {
      background: props.theme.containerAndCardShades.SHADE_PLUS_1,
      '&:hover': {
        background: !props.isSelected
          ? props.theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
        cursor: 'pointer',
      },
    },
  }),
  input: (defaultStyles, props: StyledProps) => {
    const {
      theme, menuIsOpen, selectProps,
    } = props;
    return ({
      ...defaultStyles,
      color: theme.colors.system.WHITE,
      fontWeight: menuIsOpen || selectProps.inputValue.length > 0 ? 'bold' : 'normal',
    });
  },
  noOptionsMessage: (defaultStyles) => ({
    ...defaultStyles,
    textAlign: 'left',
  }),
};

const NoOptionsMessageStyled = Styled(components.NoOptionsMessage)`
  text-align: left;
  margin-left: 8px;
`;

const NoOptionsMessage = (props: any) => (
  <NoOptionsMessageStyled {...props}>
    <Text size="M-Regular">No Results</Text>
  </NoOptionsMessageStyled>
);

type OptionBase = {
  value: string,
  symbol: string
};

type Props<T extends OptionBase> = {
  options: T[]
  onChange: (e: T) => void
  onInputChange: (v: string, actionMeta: InputActionMeta) => void
  value: T
  placeholder: string
  menuIsOpen: boolean
  inputValue: string
  isLoading: boolean
  label?: string
  isContractSearch?: boolean,
  onSwitch: () => void
  onSubmit: (e: T) => void
};

type SelectFn = <T extends OptionBase>(props: Props<T>) => JSX.Element;

export const SearchFilterSelect: SelectFn = ({
  options,
  onChange,
  value,
  placeholder,
  onInputChange,
  inputValue,
  isLoading,
  label,
  isContractSearch,
  onSwitch,
  onSubmit,
}) => {
  const theme = useTheme();
  return (
    <StyledSelect
      options={options}
      theme={theme as any}
      isSearchable
      styles={colourStyles as StylesConfig}
      controlShouldRenderValue
      placeholder={<div className="react-select__placeholder">{placeholder}</div>}
      closeMenuOnSelect
      components={{
        IndicatorSeparator: () => null,
        IndicatorsContainer,
        Control,
        LoadingIndicator: () => null,
        Option,
        NoOptionsMessage,
        LoadingMessage,
      }}
      label={label}
      onChange={(e: any) => {
        onChange(e === value ? '' : e);
      }}
      value={value}
      inputValue={inputValue}
      onInputChange={(v, actionMeta) => {
        if (actionMeta.action === 'input-change' || actionMeta.action === 'set-value') {
          onInputChange(v, actionMeta);
        }
      }}
      isLoading={isLoading}
      isContractSearch={isContractSearch}
      onSwitch={onSwitch}
      blurInputOnSelect
      onSubmit={(e: any) => onSubmit(e)}
    />
  );
};
