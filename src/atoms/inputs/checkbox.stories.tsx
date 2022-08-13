import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './checkbox';
import { CheckboxSize } from '../../utils/getSize';

export default {
  title: 'Atoms/Checkboxes',
  component: Checkbox,
  argTypes: {
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);
  return <Checkbox {...props} selected={selected} onClick={() => { setSelected(!selected); }} />;
};

export const Primary = Template.bind({});
export const Rounded = Template.bind({});

Primary.args = {
  disabled: false,
  size: CheckboxSize.Big,
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Rounded.args = {
  disabled: false,
  size: CheckboxSize.Big,
  rounded: true,
};

Rounded.parameters = {
  backgrounds: { default: 'dark' },
};
