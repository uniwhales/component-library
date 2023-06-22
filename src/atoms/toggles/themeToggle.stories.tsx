import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ThemeToggle, ThemeToggleProps } from './themeToggle';

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

const Template = (args: React.JSX.IntrinsicAttributes & ThemeToggleProps) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <ThemeToggle
        {...args}
        expanded={expanded}
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

export const ThemeToggleStandard: Story = {
  render: (args) => <Template {...args} />,
};
