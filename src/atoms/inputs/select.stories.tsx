import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { colourOptions, Select } from './select';

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState();

  return <Select {...args} onChange={() => setValue(value)} value={value} />;
};
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
Primary.args = {
  options: colourOptions,
  isMulti: false,
  readOnly: false,
  placeholder: 'DEX filters',
  closeMenuOnSelect: true,
};
