import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './select';

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => <Select />;
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
