import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  colourOptions, groupExample, Placeholder, Select,
} from './select';
import { IconWrapper } from '../icons/iconWrapper';
import { SettingsBars } from '../icons';
import { Text } from '../texts/text';

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

interface SelectProps {
  label: string;
  value: string;
  id?: number;
}
const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<SelectProps>();
  console.debug(value);
  return <Select {...args} onChange={(v) => setValue(v)} value={value} />;
};
export const Primary = Template.bind({});
export const SearchableSelect = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark theme' },
};
Primary.args = {
  options: colourOptions,
  isMulti: false,
  readOnly: false,
  placeholder: 'DEX filters',
  isXL: false,
  showValue: true,
};

SearchableSelect.parameters = {
  backgrounds: { default: 'dark theme' },
};
SearchableSelect.args = {
  options: groupExample,
  isMulti: true,
  readOnly: false,
  showValue: true,
  placeholder:
  <Placeholder>
    <IconWrapper height="20px" width="20px" icon={<SettingsBars />} />
    <Text size="S-Regular">Filter Tx types and Chains</Text>
  </Placeholder>,
  isXL: true,
  isClearable: true,
  isSearchable: true,
};
