import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { SwitcherAtom } from './switcher';

export default {
  title: 'Atoms/Switcher',
  component: SwitcherAtom,
  argTypes: {},
} as ComponentMeta<typeof SwitcherAtom>;

const Template: ComponentStory<typeof SwitcherAtom> = (args) => {
  const [isOn, setIsOn] = useState(false);
  return <SwitcherAtom {...args} isOn={isOn} onClick={() => setIsOn(!isOn)} />;
};
export const Standard = Template.bind({});
Standard.args = {
  disabled: false,
};
