import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchFilterSelect } from './searchFilterSelect';
import {
  Avalanche, Near, Terra, Uniswap,
} from '../../atoms/icons';

export default {
  title: 'Organisms/SearchFilterSelect',
  component: SearchFilterSelect,
  argTypes: {
  },
} as ComponentMeta<typeof SearchFilterSelect>;

const MockData = [{
  icon: <Uniswap />,
  symbol: 'UNI',
  name: 'Uniswap',
  address: '0x71Ee45BE594E82Ad1FAb81F5385DAe144E325a8E',
  value: 'Uniswap',
  label: 'Uniswap',
}, {
  icon: <Avalanche />,
  symbol: 'AVA',
  name: 'Avalanche',
  address: '0x71Ee45BE594E82Ad1FAb81F5385DAe144E325a8E',
  value: 'Avalanche',
  label: 'Avalanche',
}, {
  icon: <Terra />,
  symbol: 'SHIB',
  name: 'Shiba Inu',
  address: '0x71Ee45BE594E82Ad1FAb81F5385DAe144E325a8E',
  value: 'Shiba Inu',
  label: 'Shiba Inu',
}, {
  icon: <Near />,
  symbol: 'NEAR',
  name: 'NEAR',
  address: '0x71Ee45BE594E82Ad1FAb81F5385DAe144E325a8E',
  value: 'NEAR',
  label: 'NEAR',
}];

const Template: ComponentStory<typeof SearchFilterSelect> = (args) => {
  const { menuIsOpen: argMenuIsOpen, isLoading: argIsLoading, options: argOptions } = args;
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
            setMenuIsOpen(argMenuIsOpen || true);
          }, 2000);
        }
      }}
      onSubmit={(e) => {
        setValue(e);
      }}
      label="Explorer"
      value={value}
      menuIsOpen={argMenuIsOpen || menuIsOpen}
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
