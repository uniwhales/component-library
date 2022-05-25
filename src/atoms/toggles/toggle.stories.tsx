import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ToggleAtom } from './toggle__standart';

export default {
  title: 'Atoms/Toggles',
  component: ToggleAtom,
  argTypes: {},
} as ComponentMeta<typeof ToggleAtom>;

const Template: ComponentStory<typeof ToggleAtom> = (args) => <ToggleAtom {...args} />;
export const Standart = Template.bind({});
