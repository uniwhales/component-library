import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchFilterSelect } from './searchFilterSelect';

export default {
  title: 'Organisms/SearchFilterSelect',
  component: SearchFilterSelect,
  argTypes: {
  },
} as ComponentMeta<typeof SearchFilterSelect>;

const MockData = [{
  symbol: 'APE',
  name: 'Uniswap',
  address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
  value: 'APE',
  label: 'APE',
},
{
  symbol: 'SOL',
  name: 'Wrapped SOL (Wormhole)',
  address: '0xd31a59c85ae9d8edefec411d448f90841571b89c',
  value: 'SOL',
  label: 'SOL',
}, {
  symbol: 'APED',
  name: 'APED',
  address: '0xfa898efdb91e35bd311c45b9b955f742b6719aa2',
  value: 'APED',
  label: 'APED',
},
{
  symbol: 'UNI',
  name: 'Uniswap',
  address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  value: 'Uniswap',
  label: 'Uniswap',
}, {
  symbol: 'AVA',
  name: 'Avalanche',
  address: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
  value: 'Avalanche',
  label: 'Avalanche',
}, {
  symbol: 'SHIB',
  name: 'Shiba Inu',
  address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
  value: 'Shiba Inu',
  label: 'Shiba Inu',
}, {
  symbol: 'NEAR',
  name: 'NEAR',
  address: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
  value: 'NEAR',
  label: 'NEAR',
}];

const Template: ComponentStory<typeof SearchFilterSelect> = (args) => {
  const {
    isLoading: argIsLoading, options: argOptions,
  } = args;
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [isContractSearch, setIsContractSearch] = useState(true);

  return (
    <SearchFilterSelect
      {...args}
      options={options}
      onChange={(e) => {
        setValue(e);
      }}
      onInputChange={(e) => {
        setInputValue(e);
        if (e.length > 2) {
          setIsLoading(argIsLoading || true);
          setTimeout(() => {
            setOptions(argOptions || MockData);
            setIsLoading(argIsLoading || false);
          }, 1000);
        }
      }}
      onSubmit={(e) => {
        setValue(e);
      }}
      leftSwitchText="Token"
      rightSwitchText="Wallet Address"
      label="Explorer"
      value={value}
      inputValue={inputValue}
      isLoading={argIsLoading || isLoading}
      isContractSearch={isContractSearch}
      onSwitch={() => setIsContractSearch(!isContractSearch)}
      placeholder="Search Token"
    />
  );
};
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Primary.args = {
};
