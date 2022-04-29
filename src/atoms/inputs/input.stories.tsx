import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Atoms/Inputs',
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
};
