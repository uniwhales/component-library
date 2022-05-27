import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Slider } from './slider';

export default {
  title: 'Atoms/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (props) => {
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <Slider
      {...props}
      onMax={() => setSliderValue(100)}
      onInput={(e) => setSliderValue(e.target.value)}
      value={sliderValue}
    />
  );
};

export const SliderComponent = Template.bind({});
