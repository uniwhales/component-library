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

const Template: ComponentStory<typeof Slider> = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <Slider
      onClick={() => setSliderValue(100)}
      onInput={(e) => setSliderValue(parseInt(e.target.value, 10))}
      value={sliderValue}
      min={0}
      max={100}
    />
  );
};

export const SliderComponent = Template.bind({});
