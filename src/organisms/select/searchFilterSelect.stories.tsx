import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './searchFilterSelect';
import { Avalanche, Terra, Uniswap } from '../../atoms/icons';

export default {
  title: 'Organisms/SearchFilterSelect',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

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
}];

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [isContractSearch, setIsContractSearch] = useState(true);
  const { options: storyOptions } = args;
  return (
    <Select
      {...args}
      options={options}
      onChange={(e) => {
        setValue(e);
      }}
      onInputChange={(e) => {
        console.log(e);
        setInputValue(e);
        if (e.length > 2) {
          setIsLoading(true);
          setTimeout(() => {
            setOptions(storyOptions || MockData);
            setIsLoading(false);
            setMenuIsOpen(true);
          }, 2000);
        }
      }}
      label="Explorer"
      value={value}
      menuIsOpen={menuIsOpen}
      inputValue={inputValue}
      isLoading={isLoading}
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
