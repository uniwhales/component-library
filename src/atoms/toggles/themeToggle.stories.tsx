import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ThemeToggle } from './themeToggle';

export default {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  argTypes: {},
} as ComponentMeta<typeof ThemeToggle>;

const Template: ComponentStory<typeof ThemeToggle> = (args, { globals }) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [expanded, setExpanded] = useState(false);
  const isDark = globals.backgrounds?.value === '#191B20';
  return (
    <div>
      <ThemeToggle
        {...args}
        expanded={expanded}
        night={isDark}
        isOn={isOn}
        onClick={() => setIsOn(!isOn)}
      />
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
      >
        show expanded
      </button>
    </div>
  );
};

export const ThemeToggleStandard = Template.bind({});
