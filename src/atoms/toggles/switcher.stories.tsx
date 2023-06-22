import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SwitcherAtom, SwitcherProps } from './switcher';

const meta: Meta<typeof SwitcherAtom> = {
  component: SwitcherAtom,
};

export default meta;
type Story = StoryObj<typeof SwitcherAtom>;

const Template = (args: React.JSX.IntrinsicAttributes & SwitcherProps) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return <SwitcherAtom {...args} isOn={isOn} onClick={() => setIsOn(!isOn)} />;
};
export const Standard: Story = {
  render: (args) => <Template {...args} />,
};
Standard.args = {
  disabled: false,
};
