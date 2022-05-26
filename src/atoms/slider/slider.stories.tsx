import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Slider } from './slider';

export default {
  title: 'Atoms/Slider',
  component: Slider,
  argTypes: {
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (props) => {
  const [value, setValue] = useState(50);
  return (
    <Slider
      {...props}
      onMax={() => setValue(100)}
      onInput={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  min: 0,
  max: 100,
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
