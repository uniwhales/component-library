import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MinUsdSlider } from './minUsdSlider';

export default {
  title: 'Organisms/MinUsdSlider',
  component: MinUsdSlider,
  argTypes: {
    value: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof MinUsdSlider>;

const Template: ComponentStory<typeof MinUsdSlider> = () => (
  <MinUsdSlider
    min={0}
    max={100}
    onApply={() => { }}
  />
);

export const MinUsdSliderComponent = Template.bind({});
