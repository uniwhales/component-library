import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { colourOptions, Select } from './select';

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
  return <Select {...args} onChange={(v) => setValue(v)} value={value} />;
};
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
Primary.args = {
  options: colourOptions,
  isMulti: true,
  readOnly: false,
  placeholder: 'DEX filters',
  isXL: true,
  isSearchable: true,
  isClearable: true,
};
