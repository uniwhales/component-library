import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './singleSelect';
import { Uniswap } from '../../atoms/icons';

export default {
  title: 'Organisms/SingleSelect',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

const MockData = [{
  icon: <Uniswap />,
  symbol: 'UNI',
  name: 'Uniswap',
  address: '0x71Ee45BE594E82Ad1FAb81F5385DAe144E325a8E',
  value: 'PancakeSwap',
  label: 'PancakeSwap',
}, {
  icon: <Uniswap />,
  symbol: 'UNI',
  name: 'Uniswap',
  address: '0x71Ee45BE594E82Ad1FAb81F5385DAe144E325a8E',
  value: 'UNI',
  label: 'Uniwswap',
}, {
  icon: <Uniswap />,
  symbol: 'UNI',
  name: 'Uniswap',
  address: '0x71Ee45BE594E82Ad1FAb81F5385DAe144E325a8E',
  value: 'SushiSwap',
  label: 'SushiSwap',
}];

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [isContractSearch, setIsContractSearch] = useState(true);

  return (
    <Select
      {...args}
      options={options}
      onChange={(e) => {
        setValue(e);
      }}
      onInputChange={(e) => {
        setInputValue(e);
        if (e.length > 2) {
          setIsLoading(true);
          setTimeout(() => {
            if (!isLoading) {
              setOptions(MockData);
              setIsLoading(false);
              setMenuIsOpen(true);
            }
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
    />
  );
};
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Primary.args = {
  placeholder: 'Search Token',
  readOnly: false,
};
