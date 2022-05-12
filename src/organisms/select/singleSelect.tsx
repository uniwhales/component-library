import React, { } from 'react';
import ReactSelect, {
  StylesConfig,
  components,
} from 'react-select';
import { keyframes, useTheme } from 'styled-components';
import { ButtonAtom } from '../../atoms/buttons/button';
import { RefreshIcon, SearchStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { SwitcherAtom } from '../../atoms/toggles/switcher';
import { Styled } from '../../theme';
import { Option } from './selectComponents/Option';

type Props<T> = {
  options: T[]
  readOnly: boolean
  onChange: (e: any) => void
  onInputChange: (e: any) => void
  value: any
  placeholder: string
  menuIsOpen: boolean
  inputValue: string
  isLoading: boolean
  label?: string
  isContractSearch?: boolean,
  onSwitch?: () => void
};

const StyledSelect = Styled(ReactSelect)<{
  label?: string
  isContractSearch?: boolean,
  onSwitch?: () => void
}>`
  width: 450px;
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
  hasOptions?: boolean
  theme?: any;
  readOnly?:boolean
  isLoading?: boolean
  selectProps: any
  menuIsOpen?: boolean
  inputValue?: string
}

const colourStyles:StylesConfig<StyledProps, false> = {
  placeholder: (defaultStyles, props: StyledProps) => {
    const { isFocused, theme } = props;
    return ({
      ...defaultStyles,
      color: isFocused ? theme.contrastColor.HIGH_CONTRAST : theme.textShades.SHADE_MINUS_1,
    });
  },
  dropdownIndicator: (defaultStyles, { isFocused, theme }: StyledProps) => ({
    ...defaultStyles,
    svg: {
      transition: 'all 0.4s',
      fill: isFocused ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1,
      transform: isFocused ? 'rotateZ(-180deg)' : undefined,
      fontsize: 10,
    },
  }),
  control: (defaultStyles, {
    isFocused, selectProps, theme,
  }: StyledProps) => ({
    ...defaultStyles,
    boxSizing: 'border-box',
    background: selectProps.menuIsOpen
      ? theme.gradients.primary.BLURPLE : theme.containerAndCardShades.BG_SHADE_PLUS_4,
    border: '1px solid transparent',
    outline: 'none',
    boxShadow: 'none',
    paddingLeft: 8,
    borderRadius: selectProps.menuIsOpen && isFocused ? '12px 12px 0 0 ' : '12px',
    color: isFocused ? theme.contrastColor.HIGH_CONTRAST : theme.textShades.SHADE_MINUS_1,
    fontWeight: isFocused ? 'bold' : 'normal',
    height: '48px',
    '&:hover': {
      color: theme.contrastColor.HIGH_CONTRAST,
      border: `1px solid ${theme.colors.primary.UWL_BLUE}`,
      svg: {
        fill: !isFocused ? theme.contrastColor.HIGH_CONTRAST : undefined,
      },
    },
  }),
  option: (defaultStyles, {
    isFocused, isSelected, theme, readOnly,
  }: StyledProps) => ({
    ...defaultStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.textShades.SHADE_MINUS_3,
    paddingLeft: 8,
    background: isSelected ? theme.colors.primary.WATER_BLUE
      : isFocused ? readOnly ? 'none' : theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
    '&:hover': {
      background: !isSelected ? theme.containerAndCardShades.NEUTRAL_SHADE_0 : undefined,
      cursor: 'pointer',
    },
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    marginTop: 0,
    borderRadius: '0px 0px 12px 12px',
  }),
  menuList: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    background: theme.containerAndCardShades.SHADE_PLUS_1,
    color: theme.textShades.SHADE_MINUS_3,
    paddingTop: 0,
    borderRadius: '0px 0px 12px 12px',
    zIndex: 10,
  }),
  input: (defaultStyles, props: StyledProps) => {
    const { theme, menuIsOpen, selectProps } = props;
    return ({
      ...defaultStyles,
      color: theme.textShades.SHADE_MINUS_3,
      fontWeight: menuIsOpen || selectProps.inputValue.length > 0 ? 'bold' : 'normal',
    });
  },
  noOptionsMessage: (defaultStyles) => ({
    ...defaultStyles,
    textAlign: 'left',
  }),
  indicatorsContainer: (defaultStyles) => ({
    ...defaultStyles,
  }),
};

const IndicatorsContainer = (
  props: any,
) => {
  const { selectProps } = props;

  return (
    <components.IndicatorsContainer {...props}>
      <ButtonAtom borderRadius="0px 12px 12px 0px;" buttonVariant="primary" onClick={() => { selectProps.onSubmit(); }}>
        <IconWrapper icon={<SearchStandard />} />
      </ButtonAtom>
    </components.IndicatorsContainer>
  );
};

const ControlHeaderContainer = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 30px;
`;

const Control = (props: any) => {
  const {
    selectProps, isDisabled, theme,
  } = props;
  const { onSwitch, isContractSearch, label } = selectProps;

  return (
    <>
      <ControlHeaderContainer>
        <Text color={theme.textShades.SHADE_MINUS_1} size="S-Bold">
          {`${label}  |`}
        </Text>
        <Text size={!isContractSearch ? 'S-Regular' : 'S-Bold'}>Token</Text>
        <SwitcherAtom
          disabled={isDisabled}
          isOn={!isContractSearch}
          onClick={() => onSwitch && onSwitch()}
        />
        <Text size={isContractSearch ? 'S-Regular' : 'S-Bold'}>Contract Address</Text>
      </ControlHeaderContainer>
      <components.Control {...props} />
    </>
  );
};

const NoOptionsMessageStyled = Styled(components.NoOptionsMessage)`
  text-align: left;
`;

const NoOptionsMessage = (props: any) => (
  <NoOptionsMessageStyled {...props}>
    <Text size="M-Regular">No Results</Text>
  </NoOptionsMessageStyled>
);

const DropdownIndicator = (props: any) => {
  const { options } = props;
  return options.length > 0 ? <components.DropdownIndicator {...props} /> : null;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = Styled.div`
  animation: ${rotate} 2s linear infinite;
`;

const LoadingMessageContainer = Styled(components.LoadingMessage)`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height:48px;
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
`;

const LoadingMessage = (props: any) => {
  const { theme } = props;
  return (
    <LoadingMessageContainer {...props}>
      <Rotate>
        <IconWrapper fill={theme.textShades.SHADE_MINUS_2} icon={<RefreshIcon />} />
      </Rotate>
      <Text size="M-Regular">Loading Data</Text>
    </LoadingMessageContainer>
  );
};

type SelectFn = <T>(props: Props<T>) => JSX.Element;

export const Select: SelectFn = ({
  options,
  readOnly,
  onChange,
  value,
  placeholder,
  onInputChange,
  inputValue,
  isLoading,
  label,
  isContractSearch,
  onSwitch,
}) => {
  const theme = useTheme();

  return (
    <StyledSelect
      options={options}
      theme={theme as any}
      isOptionDisabled={() => readOnly}
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
        DropdownIndicator,
        LoadingMessage,
      }}
      label={label}
      onChange={(e) => onChange(e)}
      value={value}
      inputValue={inputValue}
      onInputChange={(e) => onInputChange(e)}
      isLoading={isLoading}
      isContractSearch={isContractSearch}
      onSwitch={onSwitch}
      openMenuOnClick={false}
    />
  );
};
