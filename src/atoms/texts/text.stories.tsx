import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Text</Text>;
export const Primary = Template.bind({});

Primary.args = {
  size: 'M-Regular',
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
