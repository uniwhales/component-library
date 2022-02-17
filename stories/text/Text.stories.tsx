import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';
import { THEME } from '../Theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    textColor: {
      options: Object.keys(THEME.colors),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Lorem ipsum dolor</Text>;

export const Primary = Template.bind({});

Template.parameters = {
  variant: [THEME.textVariants.large.largeTitle],
};
