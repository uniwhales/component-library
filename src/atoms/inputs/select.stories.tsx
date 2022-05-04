import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { colourOptions, Select } from './select';

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
Primary.args = {
  options: colourOptions,
  readOnly: false,
};
