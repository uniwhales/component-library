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

const Template: ComponentStory<typeof Slider> = (args) => {
  const [sliderValue, setSliderValue] = useState('0');

  return (
    <Slider
      {...args}
      onInput={(e) => setSliderValue(e.target.value)}
      value={sliderValue}
      setValue={setSliderValue}
    />
  );
};

export const SliderComponent = Template.bind({});
export const SliderWithoutUnit = Template.bind({});
export const SliderWithLargeCharLimit = Template.bind({});

SliderComponent.args = {
  min: 0,
  max: 50000,
  unit: 'USD',
};

SliderWithLargeCharLimit.args = {
  min: 0,
  max: 100000,
  unit: 'USD',
  charLimit: 32,
};

SliderWithoutUnit.args = {
  min: 0,
  max: 100,
};
