import React, { ReactNode } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components, StylesConfig,
} from 'react-select';
import { localTheme, Styled } from '../../theme';
import {
  AvalancheColor, BinanceColor, EthereumColor, FantomColor,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';

export interface Option {
  value: string,
  label: string,
  id: number;
  icon?: JSX.Element,
  isSelected?: boolean;
}
export interface SelectGroupOption {
  label: string;
  options: Option[]
}

export interface SelectOption extends Option {}

export interface SelectProps<T = 'single' | 'multi' | 'group'> {
  onSelectChange?: (o: T extends 'single' ? SelectOption : T extends 'multi' ? SelectOption[] : SelectGroupOption) => void,
  selectOptions: T extends 'group' ? SelectGroupOption[] : SelectOption[],
  selectValue?: T extends 'single' ? SelectOption : T extends 'multi' ? SelectOption[] : SelectGroupOption,
  readOnly?: boolean,
  isMulti?: boolean,
  isCheckBox?: boolean,
  placeholder: string | ReactNode,
  isXL?: boolean,
  isClearable?: boolean,
  isSearchable?: boolean,
  showValue?: boolean,
}

interface StyledProps {
  isFocused?: boolean
  isSelected?: boolean
  menuIsOpen?: boolean
  theme: any;
  readOnly?: boolean;
  isMulti?: boolean;
  isCheckBox?: boolean;
}

const StyledSelect = Styled(ReactSelect) <{ isXL: boolean }>`
  max-width: ${(props) => (props.isXL ? '100%' : '172px')};
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
  div {
    svg {
      transform: unset;
    }
  }
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
  multiValueRemove: (defaultStyles, { theme }: StyledProps) => ({
    ...defaultStyles,
    backgroundColor: theme.colors.primary.DARK_BLUE,
    borderRadius: '50%',
    padding: '2px',
    svg: {
      fill: theme.colors.system.WHITE,
    },
  }),
  valueContainer: (defaultStyles) => ({
    ...defaultStyles,
    display: '-webkit-box',
    flexWrap: 'nowrap',
    overflow: 'scroll',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      '-webkit-appearance': ' none',
      width: 0,
      height: 0,
    },
  }),
};

export const colourOptions = [
  { id: 0, value: 'blue blue', label: 'Blue' },
  { id: 1, value: 'purple', label: 'Purple' },
  { id: 2, value: 'red', label: 'Red' },
  { id: 3, value: 'orange', label: 'Orange' },
  { id: 4, value: 'yellow', label: 'Yellow' },
  { id: 5, value: 'green', label: 'Green' },
  { id: 6, value: 'forest', label: 'Forest' },
  { id: 7, value: 'slate', label: 'Slate' },
  { id: 8, value: 'silver', label: 'Silver' },
];

export const chainOptions = [
  {
    id: 1, value: 'ethereum', label: 'Ethereum', icon: <IconWrapper height="16px" width="16px" icon={<EthereumColor />} />,
  },
  {
    id: 2, value: 'fantom', label: 'Fantom', icon: <IconWrapper height="16px" width="16px" icon={<FantomColor />} />,
  },
  {
    id: 3, value: 'bsc', label: 'Bsc', icon: <IconWrapper height="16px" width="16px" icon={<BinanceColor />} />,
  },
  {
    id: 4, value: 'avalanche', label: 'Avalanche', icon: <IconWrapper height="16px" width="16px" icon={<AvalancheColor />} />,
  },
];

export const txOptions = [
  { id: 1, value: 'swap', label: 'Swaps' },
  { id: 2, value: 'lp', label: 'LPs' },
  { id: 3, value: 'nft_trade', label: 'NFT Trade' },
  { id: 4, value: 'nft_transfer', label: 'NFT Transfer' },
  { id: 5, value: 'nft_mint', label: 'NFT Mint' },
  { id: 6, value: 'reward', label: 'Reward' },
  { id: 7, value: 'option', label: 'Option' },
  { id: 8, value: 'bridge', label: 'Bridge' },
  { id: 9, value: 'flashloan', label: 'Flashloan' },
];

export const groupExample = [
  {
    label: 'Chains',
    options: chainOptions,
  },
  { label: 'Tx Types', options: txOptions },
];

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
      <div style={{ padding: '0px 5px' }}>
        <Text size="S-Regular" color={selectProps.menuIsOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2}>
          Clear Filters
        </Text>
      </div>
    </div>
  );
};

export type SelectVariation = 'single' | 'multi' | 'group';

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
}: SelectProps<T>) => {
  const theme = localTheme();
  return (
    <>
      {' '}
      <StyledSelect
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
        components={{
          Option: (props) => CheckBoxOption({ ...props, readOnly, isCheckBox }),
          IndicatorSeparator: () => null,
          ClearIndicator,
        }}
        onChange={(option) => {
          if (!onSelectChange) return;
          /*
            When providing variation of select
            we restrict the option to be either single or group option type
            therefor we can safely assume type here is right
          */
          onSelectChange(option as T extends 'single' ? SelectOption : T extends 'multi' ? SelectOption[] : SelectGroupOption);
        }}
        value={selectValue}
        isXL={isXL}
        getOptionLabel={getOptionLabel as any}
      />
    </>
  );
};
