import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';
import { SliderProps } from './types';

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

const Template = (args: React.JSX.IntrinsicAttributes & SliderProps) => {
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

export const SliderComponent: Story = {
  render: (args) => <Template {...args} />,
};
export const SliderWithoutUnit: Story = {
  render: (args) => <Template {...args} />,
};
export const SliderWithLargeCharLimit: Story = {
  render: (args) => <Template {...args} />,
};

SliderComponent.args = {
  min: 0,
  max: 50000,
  unit: 'USD',
};

SliderWithLargeCharLimit.args = {
  min: 0,
  max: 10000000,
  unit: 'USD',
  charLimit: 32,
  useLogarithmic: true,
};

SliderWithoutUnit.args = {
  min: 0,
  max: 100,
};
