import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ThemeToggle } from './themeToggle';

export default {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  argTypes: {},
} as ComponentMeta<typeof ThemeToggle>;

const Template: ComponentStory<typeof ThemeToggle> = (args) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return <ThemeToggle {...args} isOn={isOn} onClick={() => setIsOn(!isOn)} />;
};
export const ThemeToggleStandard = Template.bind({});
