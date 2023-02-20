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
    max={1000000}
    onApply={(value) => console.debug('apply clicked', value)}
  />
);

export const MinUsdSliderComponent = Template.bind({});
