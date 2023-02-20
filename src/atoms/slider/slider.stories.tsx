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
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <Slider
      {...args}
      onInput={(e) => setSliderValue(parseInt(e.target.value, 10))}
      value={sliderValue}
      setValue={setSliderValue}
    />
  );
};

export const SliderComponent = Template.bind({});
export const SliderWithoutUnit = Template.bind({});

SliderComponent.args = {
  min: 0,
  max: 50000,
  unit: 'USD',
};

SliderWithoutUnit.args = {
  min: 0,
  max: 100,
};
