import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HintsAndHovers } from './hintsAndHovers';

export default {
  title: 'Organisms/HintsAndHovers',
  component: HintsAndHovers,
  argTypes: {
  },
} as ComponentMeta<typeof HintsAndHovers>;

const Template: ComponentStory<typeof HintsAndHovers> = (args) => <div><HintsAndHovers {...args} /></div>;
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
